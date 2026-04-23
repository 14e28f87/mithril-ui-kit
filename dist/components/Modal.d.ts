/** @jsx m */
import m from "mithril";
/** Modal のサイズ */
export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "cover" | "full";
/** Modal の配置 */
export type ModalPlacement = "top" | "center" | "bottom";
/** Modal のスクロール動作 */
export type ModalScrollBehavior = "inside" | "outside";
/** Modal のアニメーション */
export type ModalMotionPreset = "scale" | "none";
/** open 状態変更時の詳細 */
export type ModalOpenChangeDetails = {
    open: boolean;
};
/**
 * Modal.Root に渡せる属性
 */
export type ModalRootAttrs = {
    /** 開閉状態（制御モード） */
    open?: boolean;
    /** 初期表示状態（非制御モード） */
    defaultOpen?: boolean;
    /** 開閉状態が変わったときのコールバック */
    onOpenChange?: (details: ModalOpenChangeDetails) => void;
    /** サイズ（デフォルト: "md"） */
    size?: ModalSize;
    /** 配置（デフォルト: "top"） */
    placement?: ModalPlacement;
    /** スクロール動作（デフォルト: "outside"） */
    scrollBehavior?: ModalScrollBehavior;
    /** アニメーション（デフォルト: "scale"） */
    motionPreset?: ModalMotionPreset;
    /** Escape キーで閉じるか（デフォルト: true） */
    closeOnEscape?: boolean;
    /** 外側クリックで閉じるか（デフォルト: true） */
    closeOnInteractOutside?: boolean;
    /** ARIA role（デフォルト: "dialog"） */
    role?: "dialog" | "alertdialog";
    /** 背後のスクロールを防止するか（デフォルト: true） */
    preventScroll?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Trigger に渡せる属性 */
export type ModalTriggerAttrs = {
    /** 子要素をそのまま使用するか */
    asChild?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Backdrop に渡せる属性 */
export type ModalBackdropAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Positioner に渡せる属性 */
export type ModalPositionerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Content に渡せる属性 */
export type ModalContentAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Header に渡せる属性 */
export type ModalHeaderAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Title に渡せる属性 */
export type ModalTitleAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Description に渡せる属性 */
export type ModalDescriptionAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Body に渡せる属性 */
export type ModalBodyAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Modal.Footer に渡せる属性 */
export type ModalFooterAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Modal.CloseTrigger に渡せる属性 */
export type ModalCloseTriggerAttrs = {
    /** 子要素をそのまま使用するか */
    asChild?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Modal.ActionTrigger に渡せる属性 */
export type ModalActionTriggerAttrs = {
    /** 子要素をそのまま使用するか */
    asChild?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Modal.show() に渡すオプション */
export type ModalShowOptions<T = any> = {
    /** モーダル内に表示するコンポーネント（resolve/hide が attrs に注入される） */
    content: m.ComponentTypes<any>;
    /** content に渡す追加の attrs */
    attrs?: Record<string, any>;
    /** サイズ */
    size?: ModalSize;
    /** 配置 */
    placement?: ModalPlacement;
    /** スクロール動作 */
    scrollBehavior?: ModalScrollBehavior;
    /** アニメーション */
    motionPreset?: ModalMotionPreset;
    /** Escape キーで閉じるか */
    closeOnEscape?: boolean;
    /** 外側クリックで閉じるか */
    closeOnInteractOutside?: boolean;
    /** ARIA role */
    role?: "dialog" | "alertdialog";
};
/** show() で content コンポーネントに注入される attrs */
export type ModalContentInjectedAttrs<T = any> = {
    /** 値を返してモーダルを閉じる */
    resolve: (value: T) => void;
    /** モーダルを閉じる（false を返す） */
    hide: () => void;
    [key: string]: any;
};
type ModalRole = "trigger" | "backdrop" | "positioner" | "content" | "header" | "title" | "description" | "body" | "footer" | "closeTrigger" | "actionTrigger";
/**
 * Modal.Trigger — モーダルを開くトリガー（Root 内で使用）
 */
export declare class ModalTriggerMarker implements m.Component<ModalTriggerAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalTriggerAttrs>): JSX.Element;
}
/**
 * Modal.Backdrop — 半透明バックドロップ。コンテキストからアニメーション状態を取得。
 */
export declare class ModalBackdropMarker implements m.Component<ModalBackdropAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalBackdropAttrs>): JSX.Element;
}
/**
 * Modal.Positioner — ポジショニングコンテナ。
 * コンテキストからサイズ・配置・スクロール動作を読み取り、外側クリックで閉じる。
 */
export declare class ModalPositionerMarker implements m.Component<ModalPositionerAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalPositionerAttrs>): JSX.Element;
}
/**
 * Modal.Content — モーダル本体のカード枠。コンテキストからアニメーション状態を取得。
 * onclick stopPropagation によりポジショナーの閉じる動作を阻止する。
 */
export declare class ModalContentMarker implements m.Component<ModalContentAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalContentAttrs>): JSX.Element;
}
/**
 * Modal.Header — ヘッダー領域
 */
export declare class ModalHeaderMarker implements m.Component<ModalHeaderAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalHeaderAttrs>): JSX.Element;
}
/**
 * Modal.Title — タイトル（h2）
 */
export declare class ModalTitleMarker implements m.Component<ModalTitleAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalTitleAttrs>): JSX.Element;
}
/**
 * Modal.Description — 説明文（p）
 */
export declare class ModalDescriptionMarker implements m.Component<ModalDescriptionAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalDescriptionAttrs>): JSX.Element;
}
/**
 * Modal.Body — ボディ領域
 */
export declare class ModalBodyMarker implements m.Component<ModalBodyAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalBodyAttrs>): JSX.Element;
}
/**
 * Modal.Footer — フッター領域
 */
export declare class ModalFooterMarker implements m.Component<ModalFooterAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalFooterAttrs>): JSX.Element;
}
/**
 * Modal.CloseTrigger — 閉じる×ボタン。コンテキストから close ハンドラを自動取得。
 */
export declare class ModalCloseTriggerMarker implements m.Component<ModalCloseTriggerAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalCloseTriggerAttrs>): m.Children | JSX.Element;
}
/**
 * Modal.ActionTrigger — アクション実行＋閉じるトリガー
 */
export declare class ModalActionTriggerMarker implements m.Component<ModalActionTriggerAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalActionTriggerAttrs>): m.Children | JSX.Element;
}
/**
 * Portal — 子要素を document.body に転送するコンポーネント。
 */
export declare class Portal implements m.Component {
    private portalRoot;
    oncreate(vnode: m.VnodeDOM): void;
    onupdate(vnode: m.VnodeDOM): void;
    private renderPortal;
    onremove(): void;
    view(): JSX.Element;
}
/**
 * Modal.Root — モーダルのルートコンポーネント（宣言的 API）
 *
 * @description
 * Chakra UI Dialog 風の compound component。
 * 制御モード（open）と非制御モード（Trigger でトグル）の両方をサポート。
 *
 * Trigger 以外の子要素（Backdrop, Positioner, Content 等）は open 時のみ
 * document.body 直下の Portal にレンダリングされる。
 *
 * 使い方:
 * ```tsx
 * <Modal.Root open={open} onOpenChange={(d) => { open = d.open; }}>
 *   <Modal.Trigger asChild><button>開く</button></Modal.Trigger>
 *   <Modal.Backdrop />
 *   <Modal.Positioner>
 *     <Modal.Content>
 *       <Modal.Header>
 *         <Modal.Title>タイトル</Modal.Title>
 *         <Modal.CloseTrigger />
 *       </Modal.Header>
 *       <Modal.Body>コンテンツ</Modal.Body>
 *     </Modal.Content>
 *   </Modal.Positioner>
 * </Modal.Root>
 * ```
 */
export declare class ModalRoot implements m.Component<ModalRootAttrs> {
    private internalOpen;
    private entering;
    private exiting;
    private escHandler;
    private scrollLocked;
    private prevOverflow;
    private portalEl;
    private portalContent;
    private portalOpen;
    oninit(vnode: m.Vnode<ModalRootAttrs>): void;
    oncreate(): void;
    private isControlled;
    private getOpen;
    private setOpen;
    private doOpen;
    private doClose;
    private lockScroll;
    private unlockScroll;
    private bindEscape;
    private unbindEscape;
    onremove(): void;
    view(vnode: m.Vnode<ModalRootAttrs>): JSX.Element;
}
/**
 * Modal — Chakra UI Dialog 風のモーダルコンポーネント
 *
 * @description
 * 2つの使い方をサポート:
 *
 * **方式1: 命令的 API（Modal.show）**
 * ```tsx
 * const result = await Modal.show({
 *   content: {
 *     view(vnode) {
 *       return (
 *         <Modal.Content>
 *           <Modal.Header><Modal.Title>タイトル</Modal.Title></Modal.Header>
 *           <Modal.Body>本文</Modal.Body>
 *           <Modal.Footer>
 *             <button onclick={() => vnode.attrs.resolve(true)}>OK</button>
 *           </Modal.Footer>
 *         </Modal.Content>
 *       );
 *     }
 *   }
 * });
 * ```
 *
 * **方式2: 宣言的 API（JSX component）**
 * ```tsx
 * <Modal.Root open={open} onOpenChange={(d) => { open = d.open; }}>
 *   <Modal.Trigger asChild><button>開く</button></Modal.Trigger>
 *   <Modal.Backdrop />
 *   <Modal.Positioner>
 *     <Modal.Content>
 *       <Modal.Header>
 *         <Modal.Title>タイトル</Modal.Title>
 *         <Modal.CloseTrigger />
 *       </Modal.Header>
 *       <Modal.Body>コンテンツ</Modal.Body>
 *     </Modal.Content>
 *   </Modal.Positioner>
 * </Modal.Root>
 * ```
 */
export declare const Modal: {
    Root: typeof ModalRoot;
    Trigger: typeof ModalTriggerMarker;
    Backdrop: typeof ModalBackdropMarker;
    Positioner: typeof ModalPositionerMarker;
    Content: typeof ModalContentMarker;
    Header: typeof ModalHeaderMarker;
    Title: typeof ModalTitleMarker;
    Description: typeof ModalDescriptionMarker;
    Body: typeof ModalBodyMarker;
    Footer: typeof ModalFooterMarker;
    CloseTrigger: typeof ModalCloseTriggerMarker;
    ActionTrigger: typeof ModalActionTriggerMarker;
    /**
     * 命令的にモーダルを表示し、結果を Promise で返す
     *
     * @description
     * content コンポーネントには以下の attrs が自動注入される:
     * - resolve(value) — 値を返してモーダルを閉じる
     * - hide() — モーダルを閉じる（false を返す）
     *
     * content 内では `<Modal.Content>` で囲み、その中に Header, Body, Footer 等を配置する。
     * バックドロップとポジショナーは show() が自動生成する。
     */
    show<T = boolean>(opts: ModalShowOptions<T>): Promise<T>;
};
export {};
//# sourceMappingURL=Modal.d.ts.map