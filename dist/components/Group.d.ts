/** @jsx m */
import m from "mithril";
/**
 * Group の属性
 */
export interface GroupAttrs {
    /** 子要素を接着する */
    attached?: boolean;
    /** 子要素を均等に広げる */
    grow?: boolean;
    /** gap */
    gap?: string | number;
    /** レンダリングする要素タグ */
    as?: string;
    /** 追加クラス */
    class?: string;
    /** インラインスタイル */
    style?: Record<string, string> | string;
    [key: string]: any;
}
/**
 * @class Group
 * @description
 * 要素をグループ化して並べるコンポーネント。
 * Chakra UI の Group に相当する。
 *
 * @example
 * <Group attached>
 *   <Button>Left</Button>
 *   <Button>Right</Button>
 * </Group>
 */
declare class GroupComponent implements m.ClassComponent<GroupAttrs> {
    view(vnode: m.Vnode<GroupAttrs>): m.Vnode<any, any>;
}
export { GroupComponent as Group };
//# sourceMappingURL=Group.d.ts.map