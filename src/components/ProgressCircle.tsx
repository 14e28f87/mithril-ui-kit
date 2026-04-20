/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./ProgressCircle.module.scss";

/**
 * ProgressCircle サイズ
 */
export type ProgressCircleSize = "xs" | "sm" | "md" | "lg" | "xl";

/* ─── Role Types ─── */
type ProgressCircleRole = "circle" | "track" | "range" | "valueText";

/* ─── Attrs ─── */
export interface ProgressCircleRootAttrs {
	/** 現在値（null で不確定） */
	value?: number | null;
	/** 最小値 */
	min?: number;
	/** 最大値 */
	max?: number;
	/** サイズ */
	size?: ProgressCircleSize;
	/** カラーパレット */
	colorPalette?: string;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/** サイズから SVG 寸法を取得 */
const SIZE_MAP: Record<ProgressCircleSize, { size: number; stroke: number }> = {
	xs: { size: 24, stroke: 3 },
	sm: { size: 32, stroke: 3.5 },
	md: { size: 48, stroke: 4 },
	lg: { size: 64, stroke: 5 },
	xl: { size: 80, stroke: 6 },
};

/* ─── マーカークラス ─── */
class ProgressCircleCircleMarker { static __pcRole: ProgressCircleRole = "circle"; view() { return null; } }
class ProgressCircleTrackMarker { static __pcRole: ProgressCircleRole = "track"; view() { return null; } }
class ProgressCircleRangeMarker { static __pcRole: ProgressCircleRole = "range"; view() { return null; } }
class ProgressCircleValueTextMarker { static __pcRole: ProgressCircleRole = "valueText"; view() { return null; } }

/**
 * ProgressCircle Root コンポーネント — 円形の進捗インジケーター
 *
 * @example
 * ```tsx
 * <ProgressCircle.Root value={75} size="lg" colorPalette="green">
 *   <ProgressCircle.Circle>
 *     <ProgressCircle.Track />
 *     <ProgressCircle.Range />
 *   </ProgressCircle.Circle>
 *   <ProgressCircle.ValueText />
 * </ProgressCircle.Root>
 * ```
 */
class ProgressCircleRoot implements m.ClassComponent<ProgressCircleRootAttrs> {
	view(vnode: m.Vnode<ProgressCircleRootAttrs>) {
		const {
			value,
			min = 0,
			max = 100,
			size = "md",
			colorPalette = "blue",
			class: className,
			...rest
		} = vnode.attrs;

		const indeterminate = value === null || value === undefined;
		const percent = indeterminate ? 0 : Math.min(100, Math.max(0, ((value! - min) / (max - min)) * 100));

		const dim = SIZE_MAP[size] || SIZE_MAP.md;
		const radius = (dim.size - dim.stroke) / 2;
		const circumference = 2 * Math.PI * radius;
		const dashOffset = indeterminate ? circumference * 0.25 : circumference * (1 - percent / 100);

		return (
			<div
				{...rest}
				class={classNames(
					styles.root,
					(styles as any)[`color${capitalize(colorPalette)}`],
					{ [styles.indeterminate]: indeterminate },
					className
				)}
				role="progressbar"
				aria-valuenow={indeterminate ? undefined : value!}
				aria-valuemin={min}
				aria-valuemax={max}
				style={{ width: `${dim.size}px`, height: `${dim.size}px` }}
			>
				<svg class={styles.svg} viewBox={`0 0 ${dim.size} ${dim.size}`}>
					<circle
						class={styles.track}
						cx={dim.size / 2}
						cy={dim.size / 2}
						r={radius}
						fill="none"
						stroke-width={dim.stroke}
					/>
					<circle
						class={styles.range}
						cx={dim.size / 2}
						cy={dim.size / 2}
						r={radius}
						fill="none"
						stroke-width={dim.stroke}
						stroke-dasharray={circumference}
						stroke-dashoffset={dashOffset}
						stroke-linecap="round"
						transform={`rotate(-90 ${dim.size / 2} ${dim.size / 2})`}
					/>
				</svg>
				{!indeterminate && this.renderValueText(vnode.children, percent)}
			</div>
		);
	}

	private renderValueText(children: m.Children, percent: number): m.Children {
		const arr = (Array.isArray(children) ? (children as any[]) : [children]).flat(Infinity);
		for (const child of arr) {
			if (child && typeof child === "object" && "tag" in child) {
				const tag = (child as m.Vnode<any>).tag as any;
				const cv = child as m.Vnode<any>;
				if (tag?.__pcRole === "valueText") {
					return (
						<span class={classNames(styles.valueText, cv.attrs?.class)}>
							{cv.children && (cv.children as any[]).length > 0 ? cv.children : `${Math.round(percent)}%`}
						</span>
					);
				}
			}
		}
		return null;
	}
}

/**
 * ProgressCircle コンポーネント名前空間
 */
export const ProgressCircle = {
	Root: ProgressCircleRoot,
	Circle: ProgressCircleCircleMarker,
	Track: ProgressCircleTrackMarker,
	Range: ProgressCircleRangeMarker,
	ValueText: ProgressCircleValueTextMarker,
} as const;

export { ProgressCircleRoot };
