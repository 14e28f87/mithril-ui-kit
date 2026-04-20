/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Status.module.scss";

/**
 * Status の状態値
 */
export type StatusValue = "info" | "warning" | "success" | "error";

/**
 * Status サイズ
 */
export type StatusSize = "sm" | "md" | "lg";

/* ─── Role Types ─── */
type StatusRole = "indicator";

/* ─── Attrs ─── */
export interface StatusRootAttrs {
	/** 状態値 */
	value?: StatusValue;
	/** サイズ */
	size?: StatusSize;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

export interface StatusIndicatorAttrs {
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class StatusIndicatorMarker {
	static __statusRole: StatusRole = "indicator";
	view() { return null; }
}

/** マーカー検出 */
function findMarkers(children: m.Children): { hasIndicator: boolean } {
	let hasIndicator = false;
	if (Array.isArray(children)) {
		for (const child of children) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = child.tag as any;
				if (tag?.__statusRole === "indicator") hasIndicator = true;
			}
		}
	}
	return { hasIndicator };
}

/**
 * Status Root コンポーネント — プロセスやステートの状態表示
 *
 * @example
 * ```tsx
 * <Status.Root value="success">
 *   <Status.Indicator />
 *   完了
 * </Status.Root>
 * ```
 */
class StatusRoot implements m.ClassComponent<StatusRootAttrs> {
	view(vnode: m.Vnode<StatusRootAttrs>) {
		const {
			value = "info",
			size = "md",
			class: className,
			...rest
		} = vnode.attrs;

		const children = (Array.isArray(vnode.children) ? (vnode.children as any[]) : [vnode.children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of children) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				if (tag?.__statusRole === "indicator") {
					rendered.push(
						<span
							class={classNames(
								styles.indicator,
								(styles as any)[`value${capitalize(value)}`]
							)}
						/>
					);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}

		return (
			<span
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`size${capitalize(size)}`],
					className
				)}
				data-status={value}
			>
				{rendered}
			</span>
		);
	}
}

/**
 * Status コンポーネント名前空間
 */
export const Status = {
	Root: StatusRoot,
	Indicator: StatusIndicatorMarker,
} as const;

export { StatusRoot };
