/** @jsx m */
import m from "mithril";
/** Offcanvas のサイズ */
export type OffcanvasSize = "sm" | "md" | "lg" | "xl" | "full";
/** Offcanvas の配置 */
export type OffcanvasPlacement = "start" | "end" | "top" | "bottom";
/** open 状態変更時の詳細 */
export type OffcanvasOpenChangeDetails = {
    open: boolean;
};
/**
 * Offcanvas.Root に渡せる属性
 */
export type OffcanvasRootAttrs = {
    /** 開閉状態（制御モード） */
    open?: boolean;
    /** 初期表示状態（非制御モード） */
    defaultOpen?: boolean;
    /** 開閉状態が変わったときのコールバック */
    onOpenChange?: (details: OffcanvasOpenChangeDetails) => void;
    /** サイズ（デフォルト: "md"） */
    size?: OffcanvasSize;
    /** 配置（デフォルト: "end"） */
    placement?: OffcanvasPlacement;
    /** Escape キーで閉じるか（デフォルト: true） */
    closeOnEscape?: boolean;
    /** 外側クリックで閉じるか（デフォルト: true） */
    closeOnInteractOutside?: boolean;
    /** 背後のスクロールを防止するか（デフォルト: true） */
    preventScroll?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.Trigger に渡せる属性 */
export type OffcanvasTriggerAttrs = {
    /** 子要素をそのまま使用するか */
    asChild?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.Backdrop に渡せる属性 */
export type OffcanvasBackdropAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.Positioner に渡せる属性 */
export type OffcanvasPositionerAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.Content に渡せる属性 */
export type OffcanvasContentAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.Header に渡せる属性 */
export type OffcanvasHeaderAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.Title に渡せる属性 */
export type OffcanvasTitleAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.Body に渡せる属性 */
export type OffcanvasBodyAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.Footer に渡せる属性 */
export type OffcanvasFooterAttrs = {
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.CloseTrigger に渡せる属性 */
export type OffcanvasCloseTriggerAttrs = {
    /** 子要素をそのまま使用するか */
    asChild?: boolean;
    class?: string;
    style?: Record<string, string>;
};
/** Offcanvas.show() に渡すオプション */
export type OffcanvasShowOptions<T = any> = {
    /** Offcanvas 内に表示するコンポーネント（resolve/hide が attrs に注入される） */
    content: m.ComponentTypes<any>;
    /** content に渡す追加の attrs */
    attrs?: Record<string, any>;
    /** サイズ */
    size?: OffcanvasSize;
    /** 配置 */
    placement?: OffcanvasPlacement;
    /** Escape キーで閉じるか */
    closeOnEscape?: boolean;
    /** 外側クリックで閉じるか */
    closeOnInteractOutside?: boolean;
};
/** show() で content コンポーネントに注入される attrs */
export type OffcanvasContentInjectedAttrs<T = any> = {
    /** 値を返して Offcanvas を閉じる */
    resolve: (value: T) => void;
    /** Offcanvas を閉じる（false を返す） */
    hide: () => void;
    [key: string]: any;
};
type OffcanvasRole = "trigger" | "backdrop" | "positioner" | "content" | "header" | "title" | "body" | "footer" | "closeTrigger";
/**
 * Offcanvas.Trigger — Offcanvas を開くトリガー（Root 内で使用）
 */
export declare class OffcanvasTriggerMarker implements m.Component<OffcanvasTriggerAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasTriggerAttrs>): JSX.Element;
}
/**
 * Offcanvas.Backdrop — 半透明バックドロップ。コンテキストからアニメーション状態を取得。
 */
export declare class OffcanvasBackdropMarker implements m.Component<OffcanvasBackdropAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasBackdropAttrs>): JSX.Element;
}
/**
 * Offcanvas.Positioner — ポジショニングコンテナ。
 * コンテキストからサイズ・配置を読み取り、外側クリックで閉じる。
 */
export declare class OffcanvasPositionerMarker implements m.Component<OffcanvasPositionerAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasPositionerAttrs>): JSX.Element;
}
/**
 * Offcanvas.Content — Offcanvas 本体のカード枠。
 * コンテキストからアニメーション状態と配置を取得。
 */
export declare class OffcanvasContentMarker implements m.Component<OffcanvasContentAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasContentAttrs>): JSX.Element;
}
/**
 * Offcanvas.Header — ヘッダー領域
 */
export declare class OffcanvasHeaderMarker implements m.Component<OffcanvasHeaderAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasHeaderAttrs>): JSX.Element;
}
/**
 * Offcanvas.Title — タイトル（h5）
 */
export declare class OffcanvasTitleMarker implements m.Component<OffcanvasTitleAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasTitleAttrs>): JSX.Element;
}
/**
 * Offcanvas.Body — ボディ領域
 */
export declare class OffcanvasBodyMarker implements m.Component<OffcanvasBodyAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasBodyAttrs>): JSX.Element;
}
/**
 * Offcanvas.Footer — フッター領域
 */
export declare class OffcanvasFooterMarker implements m.Component<OffcanvasFooterAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasFooterAttrs>): JSX.Element;
}
/**
 * Offcanvas.CloseTrigger — 閉じる×ボタン。コンテキストから close ハンドラを自動取得。
 */
export declare class OffcanvasCloseTriggerMarker implements m.Component<OffcanvasCloseTriggerAttrs> {
    static __offcanvasRole: OffcanvasRole;
    view(vnode: m.Vnode<OffcanvasCloseTriggerAttrs>): m.Children | JSX.Element;
}
/**
 * Offcanvas.Root — Offcanvas のルートコンポーネント（宣言的 API）
 *
 * @description
 * Chakra UI Drawer 風の compound component。
 * 制御モード（open）と非制御モード（Trigger でトグル）の両方をサポート。
 *
 * Trigger 以外の子要素（Backdrop, Positioner, Content 等）は open 時のみ
 * document.body 直下のポータルにレンダリングされる。
 *
 * 使い方:
 * ```tsx
 * <Offcanvas.Root open={open} onOpenChange={(d) => { open = d.open; }} size="md" placement="end">
 *   <Offcanvas.Trigger asChild><button>開く</button></Offcanvas.Trigger>
 *   <Offcanvas.Backdrop />
 *   <Offcanvas.Positioner>
 *     <Offcanvas.Content>
 *       <Offcanvas.Header>
 *         <Offcanvas.Title>タイトル</Offcanvas.Title>
 *         <Offcanvas.CloseTrigger />
 *       </Offcanvas.Header>
 *       <Offcanvas.Body>コンテンツ</Offcanvas.Body>
 *     </Offcanvas.Content>
 *   </Offcanvas.Positioner>
 * </Offcanvas.Root>
 * ```
 */
export declare class OffcanvasRoot implements m.Component<OffcanvasRootAttrs> {
    private internalOpen;
    private entering;
    private exiting;
    private escHandler;
    private scrollLocked;
    private prevOverflow;
    private portalEl;
    private portalContent;
    private portalOpen;
    oninit(vnode: m.Vnode<OffcanvasRootAttrs>): void;
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
    view(vnode: m.Vnode<OffcanvasRootAttrs>): JSX.Element;
}
/**
 * Offcanvas — Chakra UI Drawer 風のオフキャンバスコンポーネント
 *
 * @description
 * 2つの使い方をサポート:
 *
 * **方式1: 命令的 API（Offcanvas.show）**
 * ```tsx
 * const result = await Offcanvas.show({
 *   size: "md",
 *   placement: "end",
 *   content: {
 *     view(vnode) {
 *       return (
 *         <Offcanvas.Content>
 *           <Offcanvas.Header>
 *             <Offcanvas.Title>タイトル</Offcanvas.Title>
 *             <Offcanvas.CloseTrigger />
 *           </Offcanvas.Header>
 *           <Offcanvas.Body>本文</Offcanvas.Body>
 *           <Offcanvas.Footer>
 *             <button onclick={() => vnode.attrs.resolve(true)}>OK</button>
 *           </Offcanvas.Footer>
 *         </Offcanvas.Content>
 *       );
 *     }
 *   }
 * });
 * ```
 *
 * **方式2: 宣言的 API（JSX compound component）**
 * ```tsx
 * <Offcanvas.Root open={open} onOpenChange={(d) => { open = d.open; }} size="md" placement="end">
 *   <Offcanvas.Trigger asChild><button>開く</button></Offcanvas.Trigger>
 *   <Offcanvas.Backdrop />
 *   <Offcanvas.Positioner>
 *     <Offcanvas.Content>
 *       <Offcanvas.Header>
 *         <Offcanvas.Title>タイトル</Offcanvas.Title>
 *         <Offcanvas.CloseTrigger />
 *       </Offcanvas.Header>
 *       <Offcanvas.Body>コンテンツ</Offcanvas.Body>
 *     </Offcanvas.Content>
 *   </Offcanvas.Positioner>
 * </Offcanvas.Root>
 * ```
 */
export declare const Offcanvas2: {
    Root: typeof OffcanvasRoot;
    Trigger: typeof OffcanvasTriggerMarker;
    Backdrop: typeof OffcanvasBackdropMarker;
    Positioner: typeof OffcanvasPositionerMarker;
    Content: typeof OffcanvasContentMarker;
    Header: typeof OffcanvasHeaderMarker;
    Title: typeof OffcanvasTitleMarker;
    Body: typeof OffcanvasBodyMarker;
    Footer: typeof OffcanvasFooterMarker;
    CloseTrigger: typeof OffcanvasCloseTriggerMarker;
    /**
     * 命令的に Offcanvas を表示し、結果を Promise で返す
     *
     * @description
     * content コンポーネントには以下の attrs が自動注入される:
     * - resolve(value) — 値を返して Offcanvas を閉じる
     * - hide() — Offcanvas を閉じる（false を返す）
     *
     * content 内では `<Offcanvas.Content>` で囲み、その中に Header, Body, Footer 等を配置する。
     * バックドロップとポジショナーは show() が自動生成する。
     */
    show<T = boolean>(opts: OffcanvasShowOptions<T>): Promise<T>;
};
export {};
//# sourceMappingURL=Offcanvas.d.ts.map