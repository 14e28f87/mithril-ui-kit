/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Table.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class THeaderMarker {
    view() { return null; }
}
THeaderMarker.__tRole = "header";
class TBodyMarker {
    view() { return null; }
}
TBodyMarker.__tRole = "body";
class TFooterMarker {
    view() { return null; }
}
TFooterMarker.__tRole = "footer";
class TRowMarker {
    view() { return null; }
}
TRowMarker.__tRole = "row";
class TColumnHeaderMarker {
    view() { return null; }
}
TColumnHeaderMarker.__tRole = "columnHeader";
class TCellMarker {
    view() { return null; }
}
TCellMarker.__tRole = "cell";
class TCaptionMarker {
    view() { return null; }
}
TCaptionMarker.__tRole = "caption";
class TScrollAreaMarker {
    view() { return null; }
}
TScrollAreaMarker.__tRole = "scrollArea";
class TColumnGroupMarker {
    view() { return null; }
}
TColumnGroupMarker.__tRole = "columnGroup";
class TColumnMarker {
    view() { return null; }
}
TColumnMarker.__tRole = "column";
/**
 * Table Root コンポーネント — データテーブル表示
 *
 * @example
 * ```tsx
 * <Table.Root variant="line" striped>
 *   <Table.Header>
 *     <Table.Row>
 *       <Table.ColumnHeader>名前</Table.ColumnHeader>
 *       <Table.ColumnHeader>値</Table.ColumnHeader>
 *     </Table.Row>
 *   </Table.Header>
 *   <Table.Body>
 *     <Table.Row>
 *       <Table.Cell>項目A</Table.Cell>
 *       <Table.Cell>100</Table.Cell>
 *     </Table.Row>
 *   </Table.Body>
 * </Table.Root>
 * ```
 */
class TableRoot {
    view(vnode) {
        const { variant = "line", size = "md", striped, hoverable, stickyHeader, class: className, ...rest } = vnode.attrs;
        return (m("table", { ...rest, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], { [styles.striped]: striped }, { [styles.hoverable]: hoverable }, { [styles.stickyHeader]: stickyHeader }, className) }, this.renderChildren(vnode.children)));
    }
    renderChildren(children) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__tRole === "header") {
                    rendered.push(m("thead", { class: classNames(styles.header, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__tRole === "body") {
                    rendered.push(m("tbody", { class: classNames(styles.body, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__tRole === "footer") {
                    rendered.push(m("tfoot", { class: classNames(styles.footer, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__tRole === "row") {
                    rendered.push(m("tr", { class: classNames(styles.row, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__tRole === "columnHeader") {
                    rendered.push(m("th", { class: classNames(styles.columnHeader, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__tRole === "cell") {
                    rendered.push(m("td", { class: classNames(styles.cell, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__tRole === "caption") {
                    rendered.push(m("caption", { class: classNames(styles.caption, cv.attrs?.class) }, cv.children));
                    continue;
                }
            }
            rendered.push(child);
        }
        return rendered;
    }
}
/**
 * Table コンポーネント名前空間
 */
export const Table = {
    Root: TableRoot,
    Header: THeaderMarker,
    Body: TBodyMarker,
    Footer: TFooterMarker,
    Row: TRowMarker,
    ColumnHeader: TColumnHeaderMarker,
    Cell: TCellMarker,
    Caption: TCaptionMarker,
    ScrollArea: TScrollAreaMarker,
    ColumnGroup: TColumnGroupMarker,
    Column: TColumnMarker,
};
export { TableRoot };
