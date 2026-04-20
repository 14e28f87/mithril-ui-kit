/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Progress.module.scss";

/**
 * Progress バリアント
 */
export type ProgressVariant = "outline" | "subtle";

/**
 * Progress サイズ
 */
export type ProgressSize = "xs" | "sm" | "md" | "lg" | "xl";

/* ─── Role Types ─── */
type ProgressRole = "track" | "range" | "label" | "valueText";

/* ─── Attrs ─── */
export interface ProgressRootAttrs {
	/** 現在値（null で不確定） */
	value?: number | null;
	/** 最小値 */
	min?: number;
	/** 最大値 */
	max?: number;
	/** バリアント */
	variant?: ProgressVariant;
	/** サイズ */
	size?: ProgressSize;
	/** カラーパレット */
	colorPalette?: string;
	/** ストライプ */
	striped?: boolean;
	/** アニメーション (ストライプが動く) */
	animated?: boolean;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ─── マーカークラス ─── */
class ProgressTrackMarker { static __progressRole: ProgressRole = "track"; view() { return null; } }
class ProgressRangeMarker { static __progressRole: ProgressRole = "range"; view() { return null; } }
class ProgressLabelMarker { static __progressRole: ProgressRole = "label"; view() { return null; } }
class ProgressValueTextMarker { static __progressRole: ProgressRole = "valueText"; view() { return null; } }

/**
 * Progress Root コンポーネント — 進捗バー
 *
 * @example
 * ```tsx
 * <Progress.Root value={60} size="md" colorPalette="green">
 *   <Progress.Label>アップロード中</Progress.Label>
 *   <Progress.ValueText />
 *   <Progress.Track>
 *     <Progress.Range />
 *   </Progress.Track>
 * </Progress.Root>
 * ```
 */
class ProgressRoot implements m.ClassComponent<ProgressRootAttrs> {
	view(vnode: m.Vnode<ProgressRootAttrs>) {
		const {
			value,
			min = 0,
			max = 100,
			variant = "outline",
			size = "md",
			colorPalette = "blue",
			striped,
			animated,
			class: className,
			...rest
		} = vnode.attrs;

		const indeterminate = value === null || value === undefined;
		const percent = indeterminate ? 0 : Math.min(100, Math.max(0, ((value! - min) / (max - min)) * 100));

		const children = (Array.isArray(vnode.children) ? (vnode.children as any[]) : [vnode.children]).flat(Infinity);
		const rendered: m.Children[] = [];

		for (const child of children) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__progressRole === "label") {
					rendered.push(<span class={classNames(styles.label, cv.attrs?.class)}>{cv.children}</span>);
					continue;
				}
				if (tag?.__progressRole === "valueText") {
					rendered.push(<span class={classNames(styles.valueText, cv.attrs?.class)}>{indeterminate ? "" : `${Math.round(percent)}%`}</span>);
					continue;
				}
				if (tag?.__progressRole === "track") {
					rendered.push(
						<div class={classNames(styles.track, cv.attrs?.class)}>
							<div
								class={classNames(
									styles.range,
									{ [styles.striped]: striped || animated },
									{ [styles.animated]: animated },
									{ [styles.indeterminate]: indeterminate }
								)}
								style={{ width: indeterminate ? "100%" : `${percent}%` }}
								role="progressbar"
								aria-valuenow={indeterminate ? undefined : value!}
								aria-valuemin={min}
								aria-valuemax={max}
							/>
						</div>
					);
					continue;
				}
				if (tag?.__progressRole === "range") {
					continue; // range は track 内で自動生成
				}
			}
			rendered.push(child as m.Children);
		}

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`variant${capitalize(variant)}`],
					(styles as any)[`size${capitalize(size)}`],
					(styles as any)[`color${capitalize(colorPalette)}`],
					className
				)}
			>
				{rendered}
			</div>
		);
	}
}

/**
 * Progress コンポーネント名前空間
 */
export const Progress = {
	Root: ProgressRoot,
	Track: ProgressTrackMarker,
	Range: ProgressRangeMarker,
	Label: ProgressLabelMarker,
	ValueText: ProgressValueTextMarker,
} as const;

export { ProgressRoot };
