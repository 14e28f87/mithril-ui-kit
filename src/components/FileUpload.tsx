/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./FileUpload.module.scss";

/* ─── Role Types ─── */
type FileUploadRole = "hiddenInput" | "label" | "dropzone" | "dropzoneContent" | "trigger"
	| "itemGroup" | "item" | "itemPreview" | "itemName" | "itemSizeText" | "itemDeleteTrigger";

/* ─── Attrs ─── */
export interface FileUploadRootAttrs {
	/** 複数ファイル許可 */
	multiple?: boolean;
	/** 許可するファイルタイプ (accept属性) */
	accept?: string;
	/** 最大ファイルサイズ (bytes) */
	maxFileSize?: number;
	/** 最大ファイル数 */
	maxFiles?: number;
	/** 選択済ファイル */
	files?: File[];
	/** ファイル変更コールバック */
	onFilesChange?: (files: File[]) => void;
	/** 無効状態 */
	disabled?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

/* ─── マーカークラス ─── */
class FUHiddenInputMarker { static __fuRole: FileUploadRole = "hiddenInput"; view() { return null; } }
class FULabelMarker { static __fuRole: FileUploadRole = "label"; view() { return null; } }
class FUDropzoneMarker { static __fuRole: FileUploadRole = "dropzone"; view() { return null; } }
class FUDropzoneContentMarker { static __fuRole: FileUploadRole = "dropzoneContent"; view() { return null; } }
class FUTriggerMarker { static __fuRole: FileUploadRole = "trigger"; view() { return null; } }
class FUItemGroupMarker { static __fuRole: FileUploadRole = "itemGroup"; view() { return null; } }
class FUItemMarker { static __fuRole: FileUploadRole = "item"; view() { return null; } }
class FUItemPreviewMarker { static __fuRole: FileUploadRole = "itemPreview"; view() { return null; } }
class FUItemNameMarker { static __fuRole: FileUploadRole = "itemName"; view() { return null; } }
class FUItemSizeTextMarker { static __fuRole: FileUploadRole = "itemSizeText"; view() { return null; } }
class FUItemDeleteTriggerMarker { static __fuRole: FileUploadRole = "itemDeleteTrigger"; view() { return null; } }

/**
 * ファイルサイズをフォーマット
 */
function formatFileSize(bytes: number): string {
	if (bytes === 0) return "0 B";
	const units = ["B", "KB", "MB", "GB"];
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	const size = (bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0);
	return `${size} ${units[i]}`;
}

/**
 * FileUpload Root コンポーネント — ファイルアップロード
 *
 * @example
 * ```tsx
 * <FileUpload.Root multiple accept="image/*" onFilesChange={files => console.log(files)}>
 *   <FileUpload.Label>画像をアップロード</FileUpload.Label>
 *   <FileUpload.Dropzone>
 *     <FileUpload.DropzoneContent>ドラッグ＆ドロップ</FileUpload.DropzoneContent>
 *   </FileUpload.Dropzone>
 *   <FileUpload.ItemGroup>
 *     <FileUpload.Item>
 *       <FileUpload.ItemName />
 *       <FileUpload.ItemSizeText />
 *       <FileUpload.ItemDeleteTrigger />
 *     </FileUpload.Item>
 *   </FileUpload.ItemGroup>
 * </FileUpload.Root>
 * ```
 */
class FileUploadRoot implements m.ClassComponent<FileUploadRootAttrs> {
	private internalFiles: File[] = [];
	private dragOver = false;
	private inputEl: HTMLInputElement | null = null;

	view(vnode: m.Vnode<FileUploadRootAttrs>) {
		const {
			multiple,
			accept,
			maxFileSize,
			maxFiles,
			files,
			onFilesChange,
			disabled,
			class: className,
			...rest
		} = vnode.attrs;

		const currentFiles = files ?? this.internalFiles;

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					{ [styles.disabled]: disabled },
					className
				)}
			>
				<input
					type="file"
					multiple={multiple}
					accept={accept}
					disabled={disabled}
					class={styles.hiddenInput}
					oncreate={(vn: m.VnodeDOM) => { this.inputEl = vn.dom as HTMLInputElement; }}
					onchange={(e: Event) => this.handleFiles(e, currentFiles, { multiple, maxFileSize, maxFiles, onFilesChange })}
				/>
				{this.renderChildren(vnode.children, currentFiles, { multiple, accept, maxFileSize, maxFiles, onFilesChange, disabled })}
			</div>
		);
	}

	private handleFiles(
		e: Event,
		currentFiles: File[],
		opts: { multiple?: boolean; maxFileSize?: number; maxFiles?: number; onFilesChange?: (f: File[]) => void }
	) {
		const input = e.target as HTMLInputElement;
		const selected = Array.from(input.files || []);
		let newFiles = opts.multiple ? [...currentFiles, ...selected] : selected.slice(0, 1);

		if (opts.maxFileSize) {
			newFiles = newFiles.filter(f => f.size <= opts.maxFileSize!);
		}
		if (opts.maxFiles) {
			newFiles = newFiles.slice(0, opts.maxFiles);
		}

		this.internalFiles = newFiles;
		opts.onFilesChange?.(newFiles);
		input.value = "";
	}

	private handleDrop(
		e: DragEvent,
		currentFiles: File[],
		opts: { multiple?: boolean; maxFileSize?: number; maxFiles?: number; onFilesChange?: (f: File[]) => void; accept?: string }
	) {
		e.preventDefault();
		this.dragOver = false;
		const dropped = Array.from(e.dataTransfer?.files || []);
		let newFiles = opts.multiple ? [...currentFiles, ...dropped] : dropped.slice(0, 1);

		if (opts.maxFileSize) {
			newFiles = newFiles.filter(f => f.size <= opts.maxFileSize!);
		}
		if (opts.maxFiles) {
			newFiles = newFiles.slice(0, opts.maxFiles);
		}

		this.internalFiles = newFiles;
		opts.onFilesChange?.(newFiles);
	}

	private renderChildren(
		children: m.Children,
		currentFiles: File[],
		opts: any
	): m.Children[] {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;

				if (tag?.__fuRole === "hiddenInput") continue;
				if (tag?.__fuRole === "label") {
					rendered.push(<div class={classNames(styles.label, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__fuRole === "trigger") {
					rendered.push(
						<button
							type="button"
							class={classNames(styles.trigger, cv.attrs?.class)}
							disabled={opts.disabled}
							onclick={() => this.inputEl?.click()}
						>
							{cv.children || "ファイルを選択"}
						</button>
					);
					continue;
				}
				if (tag?.__fuRole === "dropzone") {
					rendered.push(
						<div
							class={classNames(
								styles.dropzone,
								{ [styles.dragOver]: this.dragOver },
								cv.attrs?.class
							)}
							ondragover={(e: DragEvent) => { e.preventDefault(); this.dragOver = true; m.redraw(); }}
							ondragleave={() => { this.dragOver = false; m.redraw(); }}
							ondrop={(e: DragEvent) => this.handleDrop(e, currentFiles, opts)}
							onclick={() => this.inputEl?.click()}
						>
							{this.renderChildren(cv.children, currentFiles, opts)}
						</div>
					);
					continue;
				}
				if (tag?.__fuRole === "dropzoneContent") {
					rendered.push(<div class={classNames(styles.dropzoneContent, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__fuRole === "itemGroup") {
					if (currentFiles.length > 0) {
						rendered.push(
							<div class={classNames(styles.itemGroup, cv.attrs?.class)}>
								{currentFiles.map((file, i) => this.renderFileItem(cv.children, file, i, currentFiles, opts))}
							</div>
						);
					}
					continue;
				}
			}
			rendered.push(child as m.Children);
		}
		return rendered;
	}

	private renderFileItem(
		template: m.Children, file: File, index: number,
		currentFiles: File[], opts: any
	): m.Children {
		return (
			<div class={styles.item} key={file.name + index}>
				<span class={styles.itemName}>{file.name}</span>
				<span class={styles.itemSizeText}>{formatFileSize(file.size)}</span>
				<button
					type="button"
					class={styles.itemDeleteTrigger}
					onclick={(e: Event) => {
						e.stopPropagation();
						const newFiles = currentFiles.filter((_, j) => j !== index);
						this.internalFiles = newFiles;
						opts.onFilesChange?.(newFiles);
					}}
					aria-label="削除"
				>✕</button>
			</div>
		);
	}
}

/**
 * FileUpload コンポーネント名前空間
 */
export const FileUpload = {
	Root: FileUploadRoot,
	HiddenInput: FUHiddenInputMarker,
	Label: FULabelMarker,
	Dropzone: FUDropzoneMarker,
	DropzoneContent: FUDropzoneContentMarker,
	Trigger: FUTriggerMarker,
	ItemGroup: FUItemGroupMarker,
	Item: FUItemMarker,
	ItemPreview: FUItemPreviewMarker,
	ItemName: FUItemNameMarker,
	ItemSizeText: FUItemSizeTextMarker,
	ItemDeleteTrigger: FUItemDeleteTriggerMarker,
} as const;

export { FileUploadRoot };
