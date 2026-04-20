/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./FileUpload.module.scss";
/* ─── マーカークラス ─── */
class FUHiddenInputMarker {
    view() { return null; }
}
FUHiddenInputMarker.__fuRole = "hiddenInput";
class FULabelMarker {
    view() { return null; }
}
FULabelMarker.__fuRole = "label";
class FUDropzoneMarker {
    view() { return null; }
}
FUDropzoneMarker.__fuRole = "dropzone";
class FUDropzoneContentMarker {
    view() { return null; }
}
FUDropzoneContentMarker.__fuRole = "dropzoneContent";
class FUTriggerMarker {
    view() { return null; }
}
FUTriggerMarker.__fuRole = "trigger";
class FUItemGroupMarker {
    view() { return null; }
}
FUItemGroupMarker.__fuRole = "itemGroup";
class FUItemMarker {
    view() { return null; }
}
FUItemMarker.__fuRole = "item";
class FUItemPreviewMarker {
    view() { return null; }
}
FUItemPreviewMarker.__fuRole = "itemPreview";
class FUItemNameMarker {
    view() { return null; }
}
FUItemNameMarker.__fuRole = "itemName";
class FUItemSizeTextMarker {
    view() { return null; }
}
FUItemSizeTextMarker.__fuRole = "itemSizeText";
class FUItemDeleteTriggerMarker {
    view() { return null; }
}
FUItemDeleteTriggerMarker.__fuRole = "itemDeleteTrigger";
/**
 * ファイルサイズをフォーマット
 */
function formatFileSize(bytes) {
    if (bytes === 0)
        return "0 B";
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
class FileUploadRoot {
    constructor() {
        this.internalFiles = [];
        this.dragOver = false;
        this.inputEl = null;
    }
    view(vnode) {
        const { multiple, accept, maxFileSize, maxFiles, files, onFilesChange, disabled, class: className, ...rest } = vnode.attrs;
        const currentFiles = files ?? this.internalFiles;
        return (m("div", { ...rest, class: classNames(styles.root, { [styles.disabled]: disabled }, className) },
            m("input", { type: "file", multiple: multiple, accept: accept, disabled: disabled, class: styles.hiddenInput, oncreate: (vn) => { this.inputEl = vn.dom; }, onchange: (e) => this.handleFiles(e, currentFiles, { multiple, maxFileSize, maxFiles, onFilesChange }) }),
            this.renderChildren(vnode.children, currentFiles, { multiple, accept, maxFileSize, maxFiles, onFilesChange, disabled })));
    }
    handleFiles(e, currentFiles, opts) {
        const input = e.target;
        const selected = Array.from(input.files || []);
        let newFiles = opts.multiple ? [...currentFiles, ...selected] : selected.slice(0, 1);
        if (opts.maxFileSize) {
            newFiles = newFiles.filter(f => f.size <= opts.maxFileSize);
        }
        if (opts.maxFiles) {
            newFiles = newFiles.slice(0, opts.maxFiles);
        }
        this.internalFiles = newFiles;
        opts.onFilesChange?.(newFiles);
        input.value = "";
    }
    handleDrop(e, currentFiles, opts) {
        e.preventDefault();
        this.dragOver = false;
        const dropped = Array.from(e.dataTransfer?.files || []);
        let newFiles = opts.multiple ? [...currentFiles, ...dropped] : dropped.slice(0, 1);
        if (opts.maxFileSize) {
            newFiles = newFiles.filter(f => f.size <= opts.maxFileSize);
        }
        if (opts.maxFiles) {
            newFiles = newFiles.slice(0, opts.maxFiles);
        }
        this.internalFiles = newFiles;
        opts.onFilesChange?.(newFiles);
    }
    renderChildren(children, currentFiles, opts) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__fuRole === "hiddenInput")
                    continue;
                if (tag?.__fuRole === "label") {
                    rendered.push(m("div", { class: classNames(styles.label, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__fuRole === "trigger") {
                    rendered.push(m("button", { type: "button", class: classNames(styles.trigger, cv.attrs?.class), disabled: opts.disabled, onclick: () => this.inputEl?.click() }, cv.children || "ファイルを選択"));
                    continue;
                }
                if (tag?.__fuRole === "dropzone") {
                    rendered.push(m("div", { class: classNames(styles.dropzone, { [styles.dragOver]: this.dragOver }, cv.attrs?.class), ondragover: (e) => { e.preventDefault(); this.dragOver = true; m.redraw(); }, ondragleave: () => { this.dragOver = false; m.redraw(); }, ondrop: (e) => this.handleDrop(e, currentFiles, opts), onclick: () => this.inputEl?.click() }, this.renderChildren(cv.children, currentFiles, opts)));
                    continue;
                }
                if (tag?.__fuRole === "dropzoneContent") {
                    rendered.push(m("div", { class: classNames(styles.dropzoneContent, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__fuRole === "itemGroup") {
                    if (currentFiles.length > 0) {
                        rendered.push(m("div", { class: classNames(styles.itemGroup, cv.attrs?.class) }, currentFiles.map((file, i) => this.renderFileItem(cv.children, file, i, currentFiles, opts))));
                    }
                    continue;
                }
            }
            rendered.push(child);
        }
        return rendered;
    }
    renderFileItem(template, file, index, currentFiles, opts) {
        return (m("div", { class: styles.item, key: file.name + index },
            m("span", { class: styles.itemName }, file.name),
            m("span", { class: styles.itemSizeText }, formatFileSize(file.size)),
            m("button", { type: "button", class: styles.itemDeleteTrigger, onclick: (e) => {
                    e.stopPropagation();
                    const newFiles = currentFiles.filter((_, j) => j !== index);
                    this.internalFiles = newFiles;
                    opts.onFilesChange?.(newFiles);
                }, "aria-label": "\u524A\u9664" }, "\u2715")));
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
};
export { FileUploadRoot };
