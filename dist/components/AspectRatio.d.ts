/** @jsx m */
import m from "mithril";
/**
 * AspectRatio の属性
 */
export interface AspectRatioAttrs {
    /** アスペクト比（数値で指定、例: 16/9） */
    ratio?: number;
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class AspectRatio
 * @description
 * 子要素のアスペクト比を維持するコンポーネント。
 * Chakra UI の AspectRatio に相当する。
 *
 * @example
 * <AspectRatio ratio={16 / 9}>
 *   <img src="photo.jpg" style={{ objectFit: "cover" }} />
 * </AspectRatio>
 */
declare class AspectRatioComponent implements m.ClassComponent<AspectRatioAttrs> {
    view(vnode: m.Vnode<AspectRatioAttrs>): m.Vnode<any, any>;
}
export { AspectRatioComponent as AspectRatio };
//# sourceMappingURL=AspectRatio.d.ts.map