/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Alert.module.scss";

/**
 * Alert ステータス
 */
export type AlertStatus = "info" | "warning" | "success" | "error" | "neutral";

/**
 * Alert バリアント
 */
export type AlertVariant = "subtle" | "surface" | "outline" | "solid";

/**
 * Alert サイズ
 */
export type AlertSize = "sm" | "md" | "lg";

/* ─── Role Types ─── */
type AlertRole = "indicator" | "content" | "title" | "description";

/* ─── Attrs ─── */
export interface AlertRootAttrs {
	/** ステータス */
	status?: AlertStatus;
	/** バリアント */
	variant?: AlertVariant;
	/** サイズ */
	size?: AlertSize;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

export interface AlertIndicatorAttrs {
	class?: string;
	[key: string]: any;
}
export interface AlertContentAttrs {
	class?: string;
	[key: string]: any;
}
export interface AlertTitleAttrs {
	class?: string;
	[key: string]: any;
}
export interface AlertDescriptionAttrs {
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── ステータスアイコン ─── */
const STATUS_ICONS: Record<AlertStatus, string> = {
	info: "ℹ️",
	warning: "⚠️",
	success: "✅",
	error: "❌",
	neutral: "💬",
};

/* ─── マーカークラス ─── */
class AlertIndicatorMarker {
	static __alertRole: AlertRole = "indicator";
	view() { return null; }
}
class AlertContentMarker {
	static __alertRole: AlertRole = "content";
	view() { return null; }
}
class AlertTitleMarker {
	static __alertRole: AlertRole = "title";
	view() { return null; }
}
class AlertDescriptionMarker {
	static __alertRole: AlertRole = "description";
	view() { return null; }
}

/**
 * Alert Root コンポーネント — フィードバックメッセージの表示
 *
 * @example
 * ```tsx
 * <Alert.Root status="success" variant="subtle">
 *   <Alert.Indicator />
 *   <Alert.Content>
 *     <Alert.Title>成功</Alert.Title>
 *     <Alert.Description>操作が完了しました。</Alert.Description>
 *   </Alert.Content>
 * </Alert.Root>
 * ```
 */
class AlertRoot implements m.ClassComponent<AlertRootAttrs> {
	view(vnode: m.Vnode<AlertRootAttrs>) {
		const {
			status = "info",
			variant = "subtle",
			size = "md",
			class: className,
			...rest
		} = vnode.attrs;

		const children = (Array.isArray(vnode.children) ? (vnode.children as any[]) : [vnode.children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of children) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__alertRole === "indicator") {
					rendered.push(
						<span class={classNames(styles.indicator, cv.attrs?.class)}>
							{cv.children && (cv.children as any[]).length > 0 ? cv.children : STATUS_ICONS[status]}
						</span>
					);
					continue;
				}
				if (tag?.__alertRole === "content") {
					rendered.push(
						<div class={classNames(styles.content, cv.attrs?.class)}>
							{this.renderContent(cv.children)}
						</div>
					);
					continue;
				}
				if (tag?.__alertRole === "title") {
					rendered.push(
						<div class={classNames(styles.title, cv.attrs?.class)}>
							{cv.children}
						</div>
					);
					continue;
				}
				if (tag?.__alertRole === "description") {
					rendered.push(
						<div class={classNames(styles.description, cv.attrs?.class)}>
							{cv.children}
						</div>
					);
					continue;
				}
			}
			rendered.push(child as m.Children);
		}

		return (
			<div
				{...rest}
				role="alert"
				class={classNames(
					styles.root,
					(styles as any)[`status${capitalize(status)}`],
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					className
				)}
			>
				{rendered}
			</div>
		);
	}

	private renderContent(children: m.Children): m.Children[] {
		const result: m.Children[] = [];
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);

		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__alertRole === "title") {
					result.push(<div class={classNames(styles.title, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
				if (tag?.__alertRole === "description") {
					result.push(<div class={classNames(styles.description, cv.attrs?.class)}>{cv.children}</div>);
					continue;
				}
			}
			result.push(child as m.Children);
		}
		return result;
	}
}

/**
 * Alert コンポーネント名前空間
 */
export const Alert = {
	Root: AlertRoot,
	Indicator: AlertIndicatorMarker,
	Content: AlertContentMarker,
	Title: AlertTitleMarker,
	Description: AlertDescriptionMarker,
} as const;

export { AlertRoot };
