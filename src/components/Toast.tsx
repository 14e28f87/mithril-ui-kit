/** @jsx m */
import m from "mithril";
import styles from "./Toast.module.scss";

// ─── Types ─────────────────────────────────────────────────

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
	action?: { label: string; onClick: () => void };
}

/** 表示中のトーストアイテム */
export interface ToastItem {
	id: string;
	type: ToastType;
	title?: string;
	description?: string;
	duration: number;
	action?: { label: string; onClick: () => void };
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
export interface ToastRootAttrs { class?: string; [key: string]: any; }
/** Toast.Indicator 属性 */
export interface ToastIndicatorAttrs { class?: string; [key: string]: any; }
/** Toast.Title 属性 */
export interface ToastTitleAttrs { class?: string; [key: string]: any; }
/** Toast.Description 属性 */
export interface ToastDescriptionAttrs { class?: string; [key: string]: any; }
/** Toast.ActionTrigger 属性 */
export interface ToastActionTriggerAttrs { class?: string; [key: string]: any; }
/** Toast.CloseTrigger 属性 */
export interface ToastCloseTriggerAttrs { class?: string; [key: string]: any; }

// ─── Context ────────────────────────────────────────────────

/** @internal 現在レンダリング中のトーストアイテムコンテキスト */
let _toastCtx: { item: ToastItem; dismiss: () => void } | null = null;

// ─── Meta ───────────────────────────────────────────────────

const TYPE_META: Record<ToastType, { icon: string }> = {
	info: { icon: "ℹ" },
	success: { icon: "✓" },
	warning: { icon: "⚠" },
	error: { icon: "✕" },
	loading: { icon: "⏳" },
};

// ─── Utility ────────────────────────────────────────────────

/** @internal */
function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

// ─── createToaster ──────────────────────────────────────────

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
export function createToaster(options: CreateToasterOptions = {}) {
	const {
		placement = "bottom-end",
		duration: defaultDuration = 5000,
		max = 24,
		removeDelay = 200,
		pauseOnHover = true,
	} = options;

	let toasts: ToastItem[] = [];
	let nextId = 1;
	const subscribers: Set<(toasts: ToastItem[]) => void> = new Set();

	const notify = () => {
		for (const cb of subscribers) cb([...toasts]);
		m.redraw();
	};

	const api = {
		placement,
		pauseOnHover,
		removeDelay,

		/** トーストを作成して ID を返す */
		create(opts: ToastCreateOptions): string {
			const id = `toast-${nextId++}`;
			const dur = opts.duration ?? defaultDuration;
			const item: ToastItem = {
				id,
				type: opts.type ?? "info",
				title: opts.title,
				description: opts.description,
				duration: dur,
				action: opts.action,
				status: "open",
				createdAt: Date.now(),
			};
			toasts = [...toasts, item];

			// 上限超過分を削除
			while (toasts.length > max) {
				const oldest = toasts[0];
				if (oldest._timerId) clearTimeout(oldest._timerId);
				toasts = toasts.slice(1);
			}

			// 自動消去タイマー
			if (dur > 0) {
				item._timerId = window.setTimeout(() => api.dismiss(id), dur);
			}

			notify();
			return id;
		},

		/** 成功トースト */
		success(opts: Omit<ToastCreateOptions, "type">): string {
			return api.create({ ...opts, type: "success" });
		},

		/** エラートースト */
		error(opts: Omit<ToastCreateOptions, "type">): string {
			return api.create({ ...opts, type: "error" });
		},

		/** 警告トースト */
		warning(opts: Omit<ToastCreateOptions, "type">): string {
			return api.create({ ...opts, type: "warning" });
		},

		/** 情報トースト */
		info(opts: Omit<ToastCreateOptions, "type">): string {
			return api.create({ ...opts, type: "info" });
		},

		/** ローディングトースト（持続表示） */
		loading(opts: Omit<ToastCreateOptions, "type">): string {
			return api.create({ ...opts, type: "loading", duration: 0 });
		},

		/** トーストを閉じる */
		dismiss(id: string): void {
			const item = toasts.find(t => t.id === id);
			if (!item || item.status !== "open") return;

			item.status = "closing";
			if (item._timerId) {
				clearTimeout(item._timerId);
				item._timerId = undefined;
			}
			notify();

			window.setTimeout(() => {
				toasts = toasts.filter(t => t.id !== id);
				notify();
			}, removeDelay);
		},

		/** すべてのトーストを閉じる */
		dismissAll(): void {
			[...toasts].forEach(t => api.dismiss(t.id));
		},

		/** 既存トーストを更新 */
		update(id: string, opts: Partial<ToastCreateOptions>): void {
			const item = toasts.find(t => t.id === id);
			if (!item) return;
			if (opts.type !== undefined) item.type = opts.type;
			if (opts.title !== undefined) item.title = opts.title;
			if (opts.description !== undefined) item.description = opts.description;
			if (opts.action !== undefined) item.action = opts.action;
			notify();
		},

		/**
		 * Promise トースト — loading → success / error に自動遷移
		 */
		promise<T>(
			promise: Promise<T>,
			opts: {
				loading: Omit<ToastCreateOptions, "type">;
				success: Omit<ToastCreateOptions, "type"> | ((result: T) => Omit<ToastCreateOptions, "type">);
				error: Omit<ToastCreateOptions, "type"> | ((err: any) => Omit<ToastCreateOptions, "type">);
			}
		): string {
			const id = api.loading(opts.loading);
			promise
				.then(result => {
					const sOpts = typeof opts.success === "function" ? opts.success(result) : opts.success;
					api.update(id, { ...sOpts, type: "success" });
					const item = toasts.find(t => t.id === id);
					if (item) {
						item.duration = sOpts.duration ?? defaultDuration;
						if (item.duration > 0) {
							item._timerId = window.setTimeout(() => api.dismiss(id), item.duration);
						}
					}
				})
				.catch(err => {
					const eOpts = typeof opts.error === "function" ? opts.error(err) : opts.error;
					api.update(id, { ...eOpts, type: "error" });
					const item = toasts.find(t => t.id === id);
					if (item) {
						item.duration = eOpts.duration ?? defaultDuration;
						if (item.duration > 0) {
							item._timerId = window.setTimeout(() => api.dismiss(id), item.duration);
						}
					}
				});
			return id;
		},

		/** 表示中のトースト一覧 */
		getToasts(): ToastItem[] { return [...toasts]; },

		/** トースト数 */
		getCount(): number { return toasts.length; },

		/** 変更を購読 */
		subscribe(cb: (toasts: ToastItem[]) => void): () => void {
			subscribers.add(cb);
			return () => subscribers.delete(cb);
		},
	};

	return api;
}

// ─── Compound Sub-components ────────────────────────────────

/**
 * トーストのルートコンテナ
 *
 * コンテキストから type / status を読み取り、適切なスタイルクラスを適用する。
 * duration > 0 の場合はプログレスバーを自動表示する。
 */
class ToastRoot implements m.ClassComponent<ToastRootAttrs> {
	static __role = "ToastRoot";

	view(vnode: m.Vnode<ToastRootAttrs>) {
		const ctx = _toastCtx;
		if (!ctx) return null;

		const { class: cls, ...rest } = vnode.attrs;
		const typeClass = (styles as any)[`type${capitalize(ctx.item.type)}`] ?? "";

		return (
			<div
				class={[styles.root, typeClass, ctx.item.status === "closing" ? styles.closing : "", cls].filter(Boolean).join(" ")}
				data-type={ctx.item.type}
				data-state={ctx.item.status === "closing" ? "closed" : "open"}
				role="alert"
				aria-live={ctx.item.type === "error" || ctx.item.type === "warning" ? "assertive" : "polite"}
				aria-atomic="true"
				{...rest}
			>
				{vnode.children}
				{ctx.item.duration > 0 && (
					<div class={styles.progress} aria-hidden="true">
						<span class={styles.progressBar} style={{ animationDuration: `${ctx.item.duration}ms` }} />
					</div>
				)}
			</div>
		);
	}
}

/** タイプアイコンインジケーター */
class ToastIndicator implements m.ClassComponent<ToastIndicatorAttrs> {
	static __role = "ToastIndicator";

	view(vnode: m.Vnode<ToastIndicatorAttrs>) {
		const ctx = _toastCtx;
		if (!ctx) return null;

		const { class: cls, ...rest } = vnode.attrs;
		const meta = TYPE_META[ctx.item.type];
		const hasChildren = vnode.children && (vnode.children as any[]).length > 0;

		return (
			<div class={[styles.indicator, cls].filter(Boolean).join(" ")} aria-hidden="true" {...rest}>
				{hasChildren ? vnode.children : meta.icon}
			</div>
		);
	}
}

/** トーストのタイトル */
class ToastTitle implements m.ClassComponent<ToastTitleAttrs> {
	static __role = "ToastTitle";

	view(vnode: m.Vnode<ToastTitleAttrs>) {
		const ctx = _toastCtx;
		if (!ctx) return null;

		const { class: cls, ...rest } = vnode.attrs;
		const hasChildren = vnode.children && (vnode.children as any[]).length > 0;

		return (
			<div class={[styles.title, cls].filter(Boolean).join(" ")} {...rest}>
				{hasChildren ? vnode.children : ctx.item.title}
			</div>
		);
	}
}

/** トーストの説明文 */
class ToastDescription implements m.ClassComponent<ToastDescriptionAttrs> {
	static __role = "ToastDescription";

	view(vnode: m.Vnode<ToastDescriptionAttrs>) {
		const ctx = _toastCtx;
		if (!ctx) return null;

		const { class: cls, ...rest } = vnode.attrs;
		const hasChildren = vnode.children && (vnode.children as any[]).length > 0;

		return (
			<div class={[styles.description, cls].filter(Boolean).join(" ")} {...rest}>
				{hasChildren ? vnode.children : ctx.item.description}
			</div>
		);
	}
}

/** アクションボタン */
class ToastActionTrigger implements m.ClassComponent<ToastActionTriggerAttrs> {
	static __role = "ToastActionTrigger";

	view(vnode: m.Vnode<ToastActionTriggerAttrs>) {
		const ctx = _toastCtx;
		if (!ctx) return null;

		const { class: cls, ...rest } = vnode.attrs;
		const action = ctx.item.action;
		const hasChildren = vnode.children && (vnode.children as any[]).length > 0;

		return (
			<button
				type="button"
				class={[styles.actionTrigger, cls].filter(Boolean).join(" ")}
				onclick={() => { action?.onClick(); ctx.dismiss(); }}
				{...rest}
			>
				{hasChildren ? vnode.children : action?.label}
			</button>
		);
	}
}

/** 閉じるボタン */
class ToastCloseTrigger implements m.ClassComponent<ToastCloseTriggerAttrs> {
	static __role = "ToastCloseTrigger";

	view(vnode: m.Vnode<ToastCloseTriggerAttrs>) {
		const ctx = _toastCtx;
		if (!ctx) return null;

		const { class: cls, ...rest } = vnode.attrs;
		const hasChildren = vnode.children && (vnode.children as any[]).length > 0;

		return (
			<button
				type="button"
				class={[styles.closeTrigger, cls].filter(Boolean).join(" ")}
				aria-label="Close"
				onclick={() => ctx.dismiss()}
				{...rest}
			>
				{hasChildren ? vnode.children : "×"}
			</button>
		);
	}
}

// ─── Internal: Toast item context wrapper ───────────────────

/**
 * @internal 各トーストのコンテキスト設定ラッパー。
 * Mithril の深さ優先レンダリングにより、このコンポーネントの view() 内で
 * _toastCtx を設定すれば、子ツリーが同じコンテキストを参照できる。
 */
class ToastItemWrapper implements m.ClassComponent<{
	item: ToastItem;
	toaster: ReturnType<typeof createToaster>;
	each?: ToasterAttrs["each"];
}> {
	view(vnode: m.Vnode<{
		item: ToastItem;
		toaster: ReturnType<typeof createToaster>;
		each?: ToasterAttrs["each"];
	}>) {
		const { item, toaster, each } = vnode.attrs;
		const dismiss = () => toaster.dismiss(item.id);
		_toastCtx = { item, dismiss };

		if (each) {
			return each(item, dismiss);
		}

		// デフォルトテンプレート
		return (
			<ToastRoot>
				<ToastIndicator />
				<div class={styles.content}>
					{item.title ? <ToastTitle /> : null}
					{item.description ? <ToastDescription /> : null}
				</div>
				{item.action ? <ToastActionTrigger /> : null}
				<ToastCloseTrigger />
			</ToastRoot>
		);
	}
}

// ─── Toaster Component ──────────────────────────────────────

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
class ToasterComponent implements m.ClassComponent<ToasterAttrs> {
	static __role = "Toaster";

	private pausedTimers = new Map<string, number>();

	view(vnode: m.Vnode<ToasterAttrs>) {
		const { toaster, each } = vnode.attrs;
		const toasts = toaster.getToasts();
		const placement = toaster.placement;
		const placementKey = `placement${placement.split("-").map(capitalize).join("")}`;
		const placementClass = (styles as any)[placementKey] ?? "";

		const hoverHandlers = toaster.pauseOnHover
			? {
				onmouseenter: () => this.pauseAll(toaster),
				onmouseleave: () => this.resumeAll(toaster),
			}
			: {};

		return (
			<div class={[styles.toaster, placementClass].filter(Boolean).join(" ")} {...hoverHandlers}>
				{toasts.map(item => (
					m(ToastItemWrapper, { key: item.id, item, toaster, each })
				))}
			</div>
		);
	}

	/** @internal タイマーを一時停止 */
	private pauseAll(toaster: ReturnType<typeof createToaster>) {
		const toasts = toaster.getToasts();
		for (const item of toasts) {
			if (item._timerId && item.status === "open") {
				clearTimeout(item._timerId);
				const elapsed = Date.now() - item.createdAt;
				const remaining = Math.max(0, item.duration - elapsed);
				this.pausedTimers.set(item.id, remaining);
				item._timerId = undefined;
			}
		}
	}

	/** @internal タイマーを再開 */
	private resumeAll(toaster: ReturnType<typeof createToaster>) {
		for (const [id, remaining] of this.pausedTimers) {
			if (remaining > 0) {
				const item = toaster.getToasts().find(t => t.id === id);
				if (item && item.status === "open") {
					item._timerId = window.setTimeout(() => toaster.dismiss(id), remaining);
				}
			}
		}
		this.pausedTimers.clear();
	}
}

// ─── Export ─────────────────────────────────────────────────

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
export const Toast = {
	Root: ToastRoot,
	Indicator: ToastIndicator,
	Title: ToastTitle,
	Description: ToastDescription,
	ActionTrigger: ToastActionTrigger,
	CloseTrigger: ToastCloseTrigger,
	Toaster: ToasterComponent,
} as const;
