/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Skeleton.module.scss";

/**
 * Skeleton バリアント
 */
export type SkeletonVariant = "pulse" | "shine" | "none";

/**
 * Skeleton の属性
 */
export interface SkeletonAttrs {
	/** バリアント（アニメーション種別） */
	variant?: SkeletonVariant;
	/** ローディング状態。false の場合は children を表示 */
	loading?: boolean;
	/** 高さ */
	height?: string;
	/** 幅 */
	width?: string;
	/** 角丸（border-radius） */
	borderRadius?: string;
	/** 追加クラス */
	class?: string;
	[key: string]: any;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Skeleton コンポーネント — コンテンツ読み込み中のプレースホルダー表示
 *
 * @example
 * ```tsx
 * <Skeleton height="20px" width="200px" />
 * <Skeleton loading={isLoading}><p>実際のコンテンツ</p></Skeleton>
 * ```
 */
class SkeletonComponent implements m.ClassComponent<SkeletonAttrs> {
	view(vnode: m.Vnode<SkeletonAttrs>) {
		const {
			variant = "pulse",
			loading = true,
			height,
			width,
			borderRadius,
			class: className,
			...rest
		} = vnode.attrs;

		if (!loading) {
			return <m.fragment>{vnode.children}</m.fragment>;
		}

		const style: Record<string, string> = {};
		if (height) style.height = height;
		if (width) style.width = width;
		if (borderRadius) style.borderRadius = borderRadius;

		return (
			<div
				{...rest}
				class={classNames(
					styles.skeleton,
					(styles as any)[`variant${capitalize(variant)}`],
					className
				)}
				style={style}
				aria-busy="true"
				aria-live="polite"
			/>
		);
	}
}

/**
 * SkeletonCircle — 丸型の Skeleton
 */
class SkeletonCircleComponent implements m.ClassComponent<SkeletonAttrs> {
	view(vnode: m.Vnode<SkeletonAttrs>) {
		const { size = "2.5rem", class: className, ...rest } = vnode.attrs as any;
		return (
			<SkeletonComponent
				{...rest}
				height={size}
				width={size}
				borderRadius="50%"
				class={className}
			/>
		);
	}
}

/**
 * SkeletonText — テキスト行の Skeleton
 */
export interface SkeletonTextAttrs extends SkeletonAttrs {
	/** 行数 */
	noOfLines?: number;
}

class SkeletonTextComponent implements m.ClassComponent<SkeletonTextAttrs> {
	view(vnode: m.Vnode<SkeletonTextAttrs>) {
		const { noOfLines = 3, class: className, loading = true, ...rest } = vnode.attrs;

		if (!loading) {
			return <m.fragment>{vnode.children}</m.fragment>;
		}

		const lines = Array.from({ length: noOfLines }, (_, i) => (
			<SkeletonComponent
				key={i}
				{...rest}
				height="0.75rem"
				width={i === noOfLines - 1 ? "80%" : "100%"}
				class={styles.textLine}
			/>
		));

		return (
			<div class={classNames(styles.textContainer, className)}>
				{lines}
			</div>
		);
	}
}

export { SkeletonComponent as Skeleton, SkeletonCircleComponent as SkeletonCircle, SkeletonTextComponent as SkeletonText };
