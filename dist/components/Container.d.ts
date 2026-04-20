/** @jsx m */
import m from "mithril";
/**
 * Container の属性
 */
export interface ContainerAttrs {
    /** 最大幅 */
    maxWidth?: string;
    /** コンテンツを中央揃えにする */
    centerContent?: boolean;
    /** 幅いっぱいに広がる */
    fluid?: boolean;
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class Container
 * @description
 * コンテンツの幅を制約するコンテナコンポーネント。
 * Chakra UI の Container に相当する。
 *
 * @example
 * <Container maxWidth="960px">
 *   <p>コンテンツ...</p>
 * </Container>
 */
declare class ContainerComponent implements m.ClassComponent<ContainerAttrs> {
    view(vnode: m.Vnode<ContainerAttrs>): m.Vnode<any, any>;
}
export { ContainerComponent as Container };
//# sourceMappingURL=Container.d.ts.map