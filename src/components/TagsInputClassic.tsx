/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import "./TagsInputClassic.scss";

/**
 * TagsInputClassic コンポーネントの属性定義
 */
export type TagsInputClassicAttrs = {
	/** 現在のタグ配列（制御コンポーネント） */
	value?: string[];
	/** タグ配列が変更された時のコールバック */
	oninput?: (tags: string[]) => void;
	/** プレースホルダー */
	placeholder?: string;
	/** 無効化フラグ */
	disabled?: boolean;
	/** 追加の CSS クラス */
	class?: string;
	/** 入力欄に付与する CSS クラス */
	inputClass?: string;
	/** タグ要素に付与する CSS クラス */
	tagClass?: string;
	/** クリアボタンを表示するか */
	allowClear?: boolean;
	/** セパレータ文字（入力中に区切ってタグ化） */
	separators?: string[];
	/** 最大タグ数 */
	maxTags?: number;
	/** 重複タグを許可するか */
	allowDuplicates?: boolean;
	/** blur 時に入力値をタグ化するか */
	addOnBlur?: boolean;
	/** 大文字/小文字を区別するか（重複判定に使用） */
	caseSensitive?: boolean;
	/** タグ表示をカスタマイズ */
	tagRender?: (tag: string, index: number, remove: () => void) => m.Children;
	/** タグ追加時のコールバック */
	onTagAdd?: (tag: string) => void;
	/** タグ削除時のコールバック */
	onTagRemove?: (tag: string, index: number) => void;
	/** タグのバリデーション関数（false で追加を拒否） */
	validateTag?: (tag: string) => boolean;
};

/**
 * TagsInputClassic コンポーネント（レガシー）
 * - Enter / セパレータ入力でタグ化
 * - Backspace で最後のタグを削除
 * - クリックで入力欄にフォーカス
 */
export class TagsInputClassic implements m.Component<TagsInputClassicAttrs> {
	private inputValue = "";
	private inputRef?: HTMLInputElement;
	private containerRef?: HTMLElement;
	private focused = false;

	private getTags(attrs: TagsInputClassicAttrs): string[] {
		return Array.isArray(attrs.value) ? attrs.value : [];
	}

	private normalizeTag(raw: string): string | null {
		const t = raw.trim();
		return t === "" ? null : t;
	}

	private isDuplicate(tags: string[], tag: string, attrs: TagsInputClassicAttrs): boolean {
		if (attrs.allowDuplicates) return false;
		const norm = (s: string) => (attrs.caseSensitive ? s : s.toLowerCase());
		const target = norm(tag);
		return tags.some((t) => norm(t) === target);
	}

	private addTags(vnode: m.Vnode<TagsInputClassicAttrs>, rawTags: string[], clearInput = true) {
		const attrs = vnode.attrs;
		if (attrs.disabled) return;
		const current = this.getTags(attrs);
		let next = [...current];
		let added = false;
		for (const raw of rawTags) {
			const tag = this.normalizeTag(raw);
			if (!tag) continue;
			if (attrs.maxTags != null && next.length >= attrs.maxTags) break;
			if (this.isDuplicate(next, tag, attrs)) continue;
			if (attrs.validateTag && !attrs.validateTag(tag)) continue;
			next.push(tag);
			added = true;
			attrs.onTagAdd?.(tag);
		}
		if (added) {
			attrs.oninput?.(next);
			if (clearInput) this.inputValue = "";
		}
		m.redraw();
	}

	private removeTag(vnode: m.Vnode<TagsInputClassicAttrs>, index: number) {
		const attrs = vnode.attrs;
		if (attrs.disabled) return;
		const current = this.getTags(attrs);
		if (index < 0 || index >= current.length) return;
		const removed = current[index];
		const next = current.slice(0, index).concat(current.slice(index + 1));
		attrs.oninput?.(next);
		attrs.onTagRemove?.(removed, index);
		m.redraw();
	}

	private splitBySeparators(text: string, separators: string[]): string[] {
		if (!separators || separators.length === 0) return [text];
		const escaped = separators.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
		const reg = new RegExp(`(?:${escaped})+`);
		return text.split(reg);
	}

	private handleInput(vnode: m.Vnode<TagsInputClassicAttrs>, text: string) {
		const attrs = vnode.attrs;
		const seps = attrs.separators ?? [","];
		this.inputValue = text;
		if (seps.length === 0) return;

		if (!seps.some((s) => text.includes(s))) return;

		const parts = this.splitBySeparators(text, seps);
		const endsWithSep = seps.some((s) => text.endsWith(s));
		if (endsWithSep) {
			this.addTags(vnode, parts, true);
		} else if (parts.length > 1) {
			this.addTags(vnode, parts.slice(0, -1), false);
			this.inputValue = parts[parts.length - 1] ?? "";
		}
	}

	private handleKeyDown(vnode: m.Vnode<TagsInputClassicAttrs>, e: KeyboardEvent) {
		const attrs = vnode.attrs;
		if (attrs.disabled) return;
		const seps = attrs.separators ?? [","];

		if (e.key === "Enter" || seps.includes(e.key)) {
			e.preventDefault();
			this.addTags(vnode, [this.inputValue], true);
			return;
		}
		if (e.key === "Backspace" && this.inputValue === "") {
			const tags = this.getTags(attrs);
			if (tags.length > 0) {
				e.preventDefault();
				this.removeTag(vnode, tags.length - 1);
			}
		}
	}

	view(vnode: m.Vnode<TagsInputClassicAttrs>) {
		const attrs = vnode.attrs;
		const tags = this.getTags(attrs);
		const isInvalid = !!(attrs.class && String(attrs.class).split(/\s+/).includes("is-invalid"));

		const containerClass = classNames(
			"tags-input-classic",
			"form-control",
			"d-flex",
			"flex-wrap",
			"gap-1",
			"align-items-center",
			attrs.class,
			{ "is-invalid": isInvalid, disabled: attrs.disabled }
		);

		return (
			<div
				class={containerClass}
				onclick={() => {
					if (attrs.disabled) return;
					this.inputRef?.focus();
				}}
				oncreate={(v) => {
					this.containerRef = v.dom as HTMLElement;
				}}
				onremove={() => {
					this.containerRef = undefined;
				}}
			>
				{tags.map((tag, idx) => {
					const remove = () => this.removeTag(vnode, idx);
					if (attrs.tagRender) return attrs.tagRender(tag, idx, remove);
					return (
						<span class={classNames("badge", "bg-secondary", "tag-badge", attrs.tagClass)} key={`${tag}-${idx}`}>
							<span class="tag-label">{tag}</span>
							<button
								type="button"
								class="tag-remove"
								onclick={(e: Event) => {
									e.preventDefault();
									e.stopPropagation();
									remove();
								}}
								aria-label="remove"
								title="remove"
							>
								×
							</button>
						</span>
					);
				})}

				<input
					class={classNames("tags-input-classic-field", attrs.inputClass)}
					placeholder={tags.length === 0 ? attrs.placeholder : ""}
					value={this.inputValue}
					disabled={attrs.disabled}
					oninput={(e: Event) => {
						const t = e.target as HTMLInputElement;
						this.handleInput(vnode, t.value);
					}}
					onkeydown={(e: KeyboardEvent) => this.handleKeyDown(vnode, e)}
					onfocus={() => (this.focused = true)}
					onblur={() => {
						this.focused = false;
						if (attrs.addOnBlur !== false) {
							this.addTags(vnode, [this.inputValue], true);
						}
					}}
					oncreate={(v) => {
						this.inputRef = v.dom as HTMLInputElement;
					}}
				/>

				{attrs.allowClear && tags.length > 0 && !attrs.disabled && (
					<button
						type="button"
						class="tags-input-classic-clear"
						onclick={(e: Event) => {
							e.preventDefault();
							e.stopPropagation();
							attrs.oninput?.([]);
							this.inputValue = "";
							m.redraw();
						}}
						aria-label="clear"
						title="Clear"
					>
						×
					</button>
				)}
			</div>
		);
	}
}

export default TagsInputClassic;
