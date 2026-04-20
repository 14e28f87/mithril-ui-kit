/** @jsx m */
import m from "mithril";
/** トースト配置位置 */
export type ToastPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";
/** トーストの種類 */
export type ToastType = "success" | "error" | "warning" | "info" | "loading";
/** トースト作成オプション */
export interface ToastCreateOptions {
    type?: ToastType;
    title?: string;
    description?: string;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}
/** 表示中のトーストアイテム */
export interface ToastItem {
    id: string;
    type: ToastType;
    title?: string;
    description?: string;
    duration: number;
    action?: {
        label: string;
        onClick: () => void;
    };
    status: "open" | "closing";
    createdAt: number;
    /** @internal タイマーID */
    _timerId?: number;
}
/** createToaster オプション */
export interface CreateToasterOptions {
    /** 表示位置（デフォルト: "bottom-end"） */
    placement?: ToastPlacement;
    /** 自動消去までのミリ秒（デフォルト: 5000、0 で無期限） */
    duration?: number;
    /** 同時表示の最大数（デフォルト: 24） */
    max?: number;
    /** 閉じアニメーション後に DOM から除去するまでの猶予（デフォルト: 200ms） */
    removeDelay?: number;
    /** ホバー中にタイマーを一時停止するか（デフォルト: true） */
    pauseOnHover?: boolean;
}
/** Toaster コンポーネントの属性 */
export interface ToasterAttrs {
    /** createToaster で作成したトースター */
    toaster: ReturnType<typeof createToaster>;
    /** カスタムテンプレート（指定しない場合はデフォルトテンプレートを使用） */
    each?: (toast: ToastItem, dismiss: () => void) => m.Children;
}
/** Toast.Root 属性 */
export interface ToastRootAttrs {
    class?: string;
    [key: string]: any;
}
/** Toast.Indicator 属性 */
export interface ToastIndicatorAttrs {
    class?: string;
    [key: string]: any;
}
/** Toast.Title 属性 */
export interface ToastTitleAttrs {
    class?: string;
    [key: string]: any;
}
/** Toast.Description 属性 */
export interface ToastDescriptionAttrs {
    class?: string;
    [key: string]: any;
}
/** Toast.ActionTrigger 属性 */
export interface ToastActionTriggerAttrs {
    class?: string;
    [key: string]: any;
}
/** Toast.CloseTrigger 属性 */
export interface ToastCloseTriggerAttrs {
    class?: string;
    [key: string]: any;
}
/**
 * トースター（トースト管理エンジン）を作成する
 *
 * @param options - 初期設定
 * @returns 命令的 API（create / success / error 等）を持つオブジェクト
 *
 * @example
 * ```tsx
 * const toaster = createToaster({ placement: "top-end" });
 * toaster.success({ title: "保存しました" });
 *
 * // JSX 内に Toaster を配置
 * <Toast.Toaster toaster={toaster} />
 * ```
 */
export declare function createToaster(options?: CreateToasterOptions): {
    placement: ToastPlacement;
    pauseOnHover: boolean;
    removeDelay: number;
    /** トーストを作成して ID を返す */
    create(opts: ToastCreateOptions): string;
    /** 成功トースト */
    success(opts: Omit<ToastCreateOptions, "type">): string;
    /** エラートースト */
    error(opts: Omit<ToastCreateOptions, "type">): string;
    /** 警告トースト */
    warning(opts: Omit<ToastCreateOptions, "type">): string;
    /** 情報トースト */
    info(opts: Omit<ToastCreateOptions, "type">): string;
    /** ローディングトースト（持続表示） */
    loading(opts: Omit<ToastCreateOptions, "type">): string;
    /** トーストを閉じる */
    dismiss(id: string): void;
    /** すべてのトーストを閉じる */
    dismissAll(): void;
    /** 既存トーストを更新 */
    update(id: string, opts: Partial<ToastCreateOptions>): void;
    /**
     * Promise トースト — loading → success / error に自動遷移
     */
    promise<T>(promise: Promise<T>, opts: {
        loading: Omit<ToastCreateOptions, "type">;
        success: Omit<ToastCreateOptions, "type"> | ((result: T) => Omit<ToastCreateOptions, "type">);
        error: Omit<ToastCreateOptions, "type"> | ((err: any) => Omit<ToastCreateOptions, "type">);
    }): string;
    /** 表示中のトースト一覧 */
    getToasts(): ToastItem[];
    /** トースト数 */
    getCount(): number;
    /** 変更を購読 */
    subscribe(cb: (toasts: ToastItem[]) => void): () => void;
};
/**
 * トーストのルートコンテナ
 *
 * コンテキストから type / status を読み取り、適切なスタイルクラスを適用する。
 * duration > 0 の場合はプログレスバーを自動表示する。
 */
declare class ToastRoot implements m.ClassComponent<ToastRootAttrs> {
    static __role: string;
    view(vnode: m.Vnode<ToastRootAttrs>): JSX.Element | null;
}
/** タイプアイコンインジケーター */
declare class ToastIndicator implements m.ClassComponent<ToastIndicatorAttrs> {
    static __role: string;
    view(vnode: m.Vnode<ToastIndicatorAttrs>): JSX.Element | null;
}
/** トーストのタイトル */
declare class ToastTitle implements m.ClassComponent<ToastTitleAttrs> {
    static __role: string;
    view(vnode: m.Vnode<ToastTitleAttrs>): JSX.Element | null;
}
/** トーストの説明文 */
declare class ToastDescription implements m.ClassComponent<ToastDescriptionAttrs> {
    static __role: string;
    view(vnode: m.Vnode<ToastDescriptionAttrs>): JSX.Element | null;
}
/** アクションボタン */
declare class ToastActionTrigger implements m.ClassComponent<ToastActionTriggerAttrs> {
    static __role: string;
    view(vnode: m.Vnode<ToastActionTriggerAttrs>): JSX.Element | null;
}
/** 閉じるボタン */
declare class ToastCloseTrigger implements m.ClassComponent<ToastCloseTriggerAttrs> {
    static __role: string;
    view(vnode: m.Vnode<ToastCloseTriggerAttrs>): JSX.Element | null;
}
/**
 * Toaster コンポーネント
 *
 * createToaster() で作成したトースターを受け取り、
 * 全トーストを固定位置コンテナ内にレンダリングする。
 *
 * @example
 * ```tsx
 * const toaster = createToaster({ placement: "top-end" });
 * // ...
 * <Toast.Toaster toaster={toaster} />
 * ```
 */
declare class ToasterComponent implements m.ClassComponent<ToasterAttrs> {
    static __role: string;
    private pausedTimers;
    view(vnode: m.Vnode<ToasterAttrs>): JSX.Element;
    /** @internal タイマーを一時停止 */
    private pauseAll;
    /** @internal タイマーを再開 */
    private resumeAll;
}
/**
 * Toast 複合コンポーネント
 *
 * Ark UI / Chakra UI スタイルの命令的トースト通知システム。
 * `createToaster()` でトースター管理エンジンを作成し、
 * `Toast.Toaster` コンポーネントでレンダリングする。
 *
 * サブコンポーネント:
 * - `Toast.Root` — ルートコンテナ（type/status に応じたスタイル + プログレスバー）
 * - `Toast.Indicator` — タイプアイコン
 * - `Toast.Title` — タイトル
 * - `Toast.Description` — 説明文
 * - `Toast.ActionTrigger` — アクションボタン
 * - `Toast.CloseTrigger` — 閉じるボタン
 * - `Toast.Toaster` — 全トーストを表示する固定位置コンテナ
 *
 * @example
 * ```tsx
 * const toaster = createToaster({ placement: "top-end" });
 *
 * // 命令的に呼び出し
 * toaster.success({ title: "保存しました" });
 * toaster.error({ title: "エラー", description: "接続に失敗しました" });
 *
 * // JSX
 * <Toast.Toaster toaster={toaster} />
 * ```
 */
export declare const Toast: {
    readonly Root: typeof ToastRoot;
    readonly Indicator: typeof ToastIndicator;
    readonly Title: typeof ToastTitle;
    readonly Description: typeof ToastDescription;
    readonly ActionTrigger: typeof ToastActionTrigger;
    readonly CloseTrigger: typeof ToastCloseTrigger;
    readonly Toaster: typeof ToasterComponent;
};
export {};
//# sourceMappingURL=Toast.d.ts.map