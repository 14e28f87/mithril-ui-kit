/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./PinInput.module.scss";

/**
 * PinInput サイズ
 */
export type PinInputSize = "xs" | "sm" | "md" | "lg" | "xl";

/* ─── Attrs ─── */
export interface PinInputRootAttrs {
	/** サイズ */
	size?: PinInputSize;
	/** 入力桁数 */
	count?: number;
	/** 値の配列 */
	value?: string[];
	/** 値変更コールバック */
	onValueChange?: (values: string[]) => void;
	/** 全入力完了コールバック */
	onComplete?: (valueString: string) => void;
	/** マスク表示（パスワード用） */
	mask?: boolean;
	/** OTP自動補完ヒント */
	otp?: boolean;
	/** プレースホルダー */
	placeholder?: string;
	/** 入力タイプ */
	type?: "alphanumeric" | "numeric" | "alphabetic";
	/** 無効状態 */
	disabled?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * PinInput Root コンポーネント — PIN / OTP 入力フィールド
 *
 * @example
 * ```tsx
 * <PinInput.Root count={4} onComplete={v => console.log("完了:", v)} />
 * <PinInput.Root count={6} otp mask />
 * ```
 */
class PinInputRoot implements m.ClassComponent<PinInputRootAttrs> {
	private values: string[] = [];
	private inputRefs: (HTMLInputElement | null)[] = [];

	oninit(vnode: m.Vnode<PinInputRootAttrs>) {
		const count = vnode.attrs.count ?? 4;
		this.values = vnode.attrs.value ?? new Array(count).fill("");
		this.inputRefs = new Array(count).fill(null);
	}

	view(vnode: m.Vnode<PinInputRootAttrs>) {
		const {
			size = "md",
			count = 4,
			value,
			onValueChange,
			onComplete,
			mask,
			otp,
			placeholder = "○",
			type = "numeric",
			disabled,
			class: className,
			...rest
		} = vnode.attrs;

		const currentValues = value ?? this.values;
		if (currentValues.length !== count) {
			this.values = new Array(count).fill("");
		}

		const inputs: m.Children[] = [];
		for (let i = 0; i < count; i++) {
			inputs.push(
				<input
					key={i}
					type={mask ? "password" : "text"}
					inputmode={type === "numeric" ? "numeric" : "text"}
					autocomplete={otp ? "one-time-code" : undefined}
					disabled={disabled}
					placeholder={placeholder}
					value={currentValues[i] || ""}
					maxlength={1}
					class={styles.input}
					oncreate={(vn: m.VnodeDOM) => { this.inputRefs[i] = vn.dom as HTMLInputElement; }}
					oninput={(e: Event) => this.handleInput(e, i, count, currentValues, onValueChange, onComplete, type)}
					onkeydown={(e: KeyboardEvent) => this.handleKeydown(e, i, count, currentValues, onValueChange, onComplete)}
					onpaste={(e: ClipboardEvent) => this.handlePaste(e, i, count, currentValues, onValueChange, onComplete, type)}
				/>
			);
		}

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					{ [styles.disabled]: disabled },
					className
				)}
			>
				{inputs}
			</div>
		);
	}

	private isValid(char: string, type: string): boolean {
		if (type === "numeric") return /\d/.test(char);
		if (type === "alphabetic") return /[a-zA-Z]/.test(char);
		return /[a-zA-Z0-9]/.test(char);
	}

	private handleInput(
		e: Event, index: number, count: number,
		values: string[], onValueChange?: (v: string[]) => void,
		onComplete?: (v: string) => void, type?: string
	) {
		const input = e.target as HTMLInputElement;
		const char = input.value.slice(-1);
		if (char && !this.isValid(char, type || "numeric")) {
			input.value = values[index] || "";
			return;
		}
		const newValues = [...values];
		newValues[index] = char;
		this.values = newValues;
		onValueChange?.(newValues);

		if (char && index < count - 1) {
			this.inputRefs[index + 1]?.focus();
		}
		if (newValues.every(v => v)) {
			onComplete?.(newValues.join(""));
		}
	}

	private handleKeydown(
		e: KeyboardEvent, index: number, count: number,
		values: string[], onValueChange?: (v: string[]) => void,
		onComplete?: (v: string) => void
	) {
		if (e.key === "Backspace") {
			if (!values[index] && index > 0) {
				const newValues = [...values];
				newValues[index - 1] = "";
				this.values = newValues;
				onValueChange?.(newValues);
				this.inputRefs[index - 1]?.focus();
				e.preventDefault();
			}
		} else if (e.key === "ArrowLeft" && index > 0) {
			this.inputRefs[index - 1]?.focus();
		} else if (e.key === "ArrowRight" && index < count - 1) {
			this.inputRefs[index + 1]?.focus();
		}
	}

	private handlePaste(
		e: ClipboardEvent, index: number, count: number,
		values: string[], onValueChange?: (v: string[]) => void,
		onComplete?: (v: string) => void, type?: string
	) {
		e.preventDefault();
		const paste = e.clipboardData?.getData("text") || "";
		const chars = paste.split("").filter(c => this.isValid(c, type || "numeric"));
		const newValues = [...values];
		for (let i = 0; i < chars.length && index + i < count; i++) {
			newValues[index + i] = chars[i];
		}
		this.values = newValues;
		onValueChange?.(newValues);

		const nextIndex = Math.min(index + chars.length, count - 1);
		this.inputRefs[nextIndex]?.focus();

		if (newValues.every(v => v)) {
			onComplete?.(newValues.join(""));
		}
	}
}

/**
 * PinInput コンポーネント名前空間
 */
export const PinInput = {
	Root: PinInputRoot,
} as const;

export { PinInputRoot };
