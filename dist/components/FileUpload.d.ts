/** @jsx m */
import m from "mithril";
type FileUploadRole = "hiddenInput" | "label" | "dropzone" | "dropzoneContent" | "trigger" | "itemGroup" | "item" | "itemPreview" | "itemName" | "itemSizeText" | "itemDeleteTrigger";
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
declare class FUHiddenInputMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FULabelMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUDropzoneMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUDropzoneContentMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUTriggerMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUItemGroupMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUItemMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUItemPreviewMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUItemNameMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUItemSizeTextMarker {
    static __fuRole: FileUploadRole;
    view(): null;
}
declare class FUItemDeleteTriggerMarker {
    static __fuRole: FileUploadRole;
    view(): null;
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
declare class FileUploadRoot implements m.ClassComponent<FileUploadRootAttrs> {
    private internalFiles;
    private dragOver;
    private inputEl;
    view(vnode: m.Vnode<FileUploadRootAttrs>): JSX.Element;
    private handleFiles;
    private handleDrop;
    private renderChildren;
    private renderFileItem;
}
/**
 * FileUpload コンポーネント名前空間
 */
export declare const FileUpload: {
    readonly Root: typeof FileUploadRoot;
    readonly HiddenInput: typeof FUHiddenInputMarker;
    readonly Label: typeof FULabelMarker;
    readonly Dropzone: typeof FUDropzoneMarker;
    readonly DropzoneContent: typeof FUDropzoneContentMarker;
    readonly Trigger: typeof FUTriggerMarker;
    readonly ItemGroup: typeof FUItemGroupMarker;
    readonly Item: typeof FUItemMarker;
    readonly ItemPreview: typeof FUItemPreviewMarker;
    readonly ItemName: typeof FUItemNameMarker;
    readonly ItemSizeText: typeof FUItemSizeTextMarker;
    readonly ItemDeleteTrigger: typeof FUItemDeleteTriggerMarker;
};
export { FileUploadRoot };
//# sourceMappingURL=FileUpload.d.ts.map