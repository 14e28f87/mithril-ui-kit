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
 * @class ModalTriggerMarker
 * @description
 * `Modal.Trigger` — モーダルを開くトリガーコンポーネント。`Modal.Root` の直下に配置して使う。
 *
 * `asChild` を指定すると子要素をそのままトリガーとして扱い、`onclick` にモーダルを開く処理を
 * ラップする。省略した場合は `<button>` で自動ラップされる。
 *
 * @example
 * // asChild なし（デフォルト: `<button>` でラップされる）
 * <Modal.Trigger>開く</Modal.Trigger>
 *
 * // asChild あり（子要素そのままをトリガーに）
 * <Modal.Trigger asChild><a href="#">開く</a></Modal.Trigger>
 */
export declare class ModalTriggerMarker implements m.Component<ModalTriggerAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalTriggerAttrs>): JSX.Element;
}
/**
 * @class ModalBackdropMarker
 * @description
 * `Modal.Backdrop` — モーダルの背後に表示される半透明のオーバーレイ。
 *
 * モジュールレベルの `_modalCtx` からアニメーション状態（`entering` / `exiting`）を読み取り、
 * CSS クラスを切り替えることでフェードイン・フェードアウトを実現する。
 * `motionPreset === "none"` の場合はアニメーションクラスを付与しない。
 *
 * @example
 * <Modal.Root open={open}>
 *   <Modal.Backdrop />
 *   <Modal.Positioner>...</Modal.Positioner>
 * </Modal.Root>
 */
export declare class ModalBackdropMarker implements m.Component<ModalBackdropAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalBackdropAttrs>): JSX.Element;
}
/**
 * @class ModalPositionerMarker
 * @description
 * `Modal.Positioner` — モーダルコンテンツを画面内に配置するコンテナ。
 *
 * `_modalCtx` からサイズ（`size`）・配置（`placement`）・スクロール動作（`scrollBehavior`）を読み取り、
 * 対応する CSS クラスを付与する。`closeOnInteractOutside` が有効な場合、
 * 自身（背景部分）のクリックで `ctx.close()` を呼びモーダルを閉じる。
 * `Modal.Content` 内で `e.stopPropagation()` を設定しているため、コンテンツ内のクリックでは閃じない。
 *
 * @example
 * <Modal.Positioner>
 *   <Modal.Content>...</Modal.Content>
 * </Modal.Positioner>
 */
export declare class ModalPositionerMarker implements m.Component<ModalPositionerAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalPositionerAttrs>): JSX.Element;
}
/**
 * @class ModalContentMarker
 * @description
 * `Modal.Content` — モーダル本体を描画するカード框コンポーネント。
 *
 * `_modalCtx` から `entering` / `exiting` を読み取り、スケールアニメーションの CSS クラスを付与する。
 * `onclick` に `e.stopPropagation()` を設定し、コンテンツ内クリックが `Modal.Positioner` の
 * 「外側クリックで閃じる」処理に伝播するのを防ぐ。
 * `role="dialog"` と `aria-modal="true"` を付与してアクセシビリティに対応する。
 *
 * @example
 * <Modal.Content>
 *   <Modal.Header><Modal.Title>タイトル</Modal.Title></Modal.Header>
 *   <Modal.Body>本文</Modal.Body>
 *   <Modal.Footer>...</Modal.Footer>
 * </Modal.Content>
 */
export declare class ModalContentMarker implements m.Component<ModalContentAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalContentAttrs>): JSX.Element;
}
/**
 * @class ModalHeaderMarker
 * @description
 * `Modal.Header` — モーダルのヘッダー領域。タイトル（`Modal.Title`）や
 * 閃じるボタン（`Modal.CloseTrigger`）を配置するエリア。
 */
export declare class ModalHeaderMarker implements m.Component<ModalHeaderAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalHeaderAttrs>): JSX.Element;
}
/**
 * @class ModalTitleMarker
 * @description
 * `Modal.Title` — モーダルのタイトル。セマンティクに `<h2>` としてレンダリングされる。
 */
export declare class ModalTitleMarker implements m.Component<ModalTitleAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalTitleAttrs>): JSX.Element;
}
/**
 * @class ModalDescriptionMarker
 * @description
 * `Modal.Description` — モーダルの補足説明文。`<p>` タグでレンダリングされる。
 * モーダルの目的や操作の概要をウーザーに传える際に使用する。
 */
export declare class ModalDescriptionMarker implements m.Component<ModalDescriptionAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalDescriptionAttrs>): JSX.Element;
}
/**
 * @class ModalBodyMarker
 * @description
 * `Modal.Body` — モーダルのメインコンテンツ領域。
 * `scrollBehavior === "inside"` の場合、この領域のみスクロールする。
 */
export declare class ModalBodyMarker implements m.Component<ModalBodyAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalBodyAttrs>): JSX.Element;
}
/**
 * @class ModalFooterMarker
 * @description
 * `Modal.Footer` — モーダルのフッター領域。アクションボタン（OK ・キャンセル等）を配置する。
 */
export declare class ModalFooterMarker implements m.Component<ModalFooterAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalFooterAttrs>): JSX.Element;
}
/**
 * @class ModalCloseTriggerMarker
 * @description
 * `Modal.CloseTrigger` — モーダルを閃じるためのボタンコンポーネント。
 *
 * `_modalCtx` から `close` ハンドラを自動取得するため、`Modal.Root` でも `Modal.show()` でも
 * 明示的なコールバックの渡しこみは不要。
 * `asChild` を指定すると子要素の `onclick` にクローズ処理をラップする。
 *
 * @example
 * // デフォルト（×ボタン）
 * <Modal.CloseTrigger />
 *
 * // asChild（カスタムボタン）
 * <Modal.CloseTrigger asChild><button>閃じる</button></Modal.CloseTrigger>
 */
export declare class ModalCloseTriggerMarker implements m.Component<ModalCloseTriggerAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalCloseTriggerAttrs>): m.Children | JSX.Element;
}
/**
 * @class ModalActionTriggerMarker
 * @description
 * `Modal.ActionTrigger` — アクションを実行しつつモーダルを閃じるトリガーボタン。
 *
 * `CloseTrigger` との違いは、子要素（ラベルなど）をそのまま `<button>` 内に描画できる点。
 * `asChild` を指定すると子要素の `onclick` にクローズ処理をラップする。
 *
 * @example
 * <Modal.ActionTrigger>送信して閃じる</Modal.ActionTrigger>
 */
export declare class ModalActionTriggerMarker implements m.Component<ModalActionTriggerAttrs> {
    static __modalRole: ModalRole;
    view(vnode: m.Vnode<ModalActionTriggerAttrs>): m.Children | JSX.Element;
}
/**
 * @class Portal
 * @description
 * 子要素を `document.body` に転送する汎用コンポーネント。
 *
 * Mithril の仮想 DOM ツリーから切り離して `body` 直下に独立したポータルルートを作成し、
 * `m.render()` で子要素を直接描画する。z-index や `overflow: hidden` の影響を
 * 受けたくない要素（モーダル・トーストなど）に使用する。
 *
 * 注意: `ModalRoot` では `Portal` を直接使わず `m.mount()` 方式を採用しているため、
 * この `Portal` クラスは他のコンポーネントから利用する汎用実装として公開している。
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
    /** `open` prop が渡されているか（制御モード）かどうかを返す */
    private isControlled;
    /** 現在の open 状態を返す。制御モードなら `attrs.open`、非制御なら内部状態を使う */
    private getOpen;
    /**
     * open 状態を変更する。
     * 非制御モードなら内部状態を更新し、`onOpenChange` コールバックを常に呼ぶ。
     */
    private setOpen;
    /**
     * @description
     * モーダルを開き、エンターアニメーションを開始する。
     * `requestAnimationFrame` + `setTimeout(220ms)` の二重待機で
     * CSS トランジションが確実に再生されてから `entering` フラグを落とす。
     */
    private doOpen;
    /**
     * @description
     * モーダルを閉じ、エグジットアニメーションを開始する。
     * `exiting` フラグを立てて CSS アニメーションを開始し、
     * 170ms 後にフラグを落として open を false にする。
     */
    private doClose;
    /**
     * @description
     * `preventScroll` が有効な場合、`body` の `overflow` を `hidden` にして背後のスクロールを防ぐ。
     * 元の `overflow` 値を `prevOverflow` に退避しておき、`unlockScroll` で復元する。
     */
    private lockScroll;
    /** スクロールロックを解除し、退避しておいた `overflow` 値を復元する */
    private unlockScroll;
    /**
     * @description
     * Escape キーの `keydown` リスナーを `document` に登録する。
     * 多重登録を防ぐため `escHandler` が既に存在する場合は何もしない。
     * `closeOnEscape === false` のときは登録をスキップする。
     */
    private bindEscape;
    /** Escape キーリスナーを解除し、`escHandler` を null に戻す */
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
     * @function show
     * @static
     * @description
     * 命令的にモーダルを表示し、結果を Promise で返す。
     *
     * `content` コンポーネントには以下の attrs が自動注入される:
     * - `resolve(value)` — 任意の値を返してモーダルを閉じる
     * - `hide()` — `false` を返してモーダルを閉じる
     *
     * バックドロップとポジショナーは `show()` が自動生成するため、
     * `content` 内では `<Modal.Content>` から始める。
     *
     * @param {ModalShowOptions<T>} opts - 表示オプション（content、size、placement など）
     * @returns {Promise<T>} resolve() に渡した値で解決される Promise
     *
     * 実装の詳細:
     * 1. `ModalImperativeWrapper` を生成してアニメーション・Escape・スクロールロックを委譲
     * 2. `Overlay` に wrapper をアダプトして body にマウント
     * 3. resolve() / hide() 呼び出し後、フェードアウト完了で Overlay がアンマウントされ Promise が解決
     *
     * @example
     * const result = await Modal.show({
     *   content: {
     *     view(vnode) {
     *       return (
     *         <Modal.Content>
     *           <Modal.Header><Modal.Title>確認</Modal.Title></Modal.Header>
     *           <Modal.Body>本当によろしいですか？</Modal.Body>
     *           <Modal.Footer>
     *             <button onclick={() => vnode.attrs.resolve(true)}>はい</button>
     *             <button onclick={() => vnode.attrs.hide()}>キャンセル</button>
     *           </Modal.Footer>
     *         </Modal.Content>
     *       );
     *     }
     *   }
     * });
     * if (result) { // ユーザーが「はい」を選んだ場合
     */
    show<T = boolean>(opts: ModalShowOptions<T>): Promise<T>;
};
export {};
//# sourceMappingURL=Modal.d.ts.map