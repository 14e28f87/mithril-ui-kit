/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./Card.module.scss";
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/* ─── マーカークラス ─── */
class CardHeaderMarker {
    view() { return null; }
}
CardHeaderMarker.__cardRole = "header";
class CardBodyMarker {
    view() { return null; }
}
CardBodyMarker.__cardRole = "body";
class CardFooterMarker {
    view() { return null; }
}
CardFooterMarker.__cardRole = "footer";
class CardTitleMarker {
    view() { return null; }
}
CardTitleMarker.__cardRole = "title";
class CardDescriptionMarker {
    view() { return null; }
}
CardDescriptionMarker.__cardRole = "description";
/**
 * Card Root コンポーネント — コンテンツのグルーピング表示
 *
 * @example
 * ```tsx
 * <Card.Root variant="outline">
 *   <Card.Header>
 *     <Card.Title>カードタイトル</Card.Title>
 *   </Card.Header>
 *   <Card.Body>本文テキスト</Card.Body>
 *   <Card.Footer>フッター</Card.Footer>
 * </Card.Root>
 * ```
 */
class CardRoot {
    view(vnode) {
        const { variant = "outline", size = "md", class: className, ...rest } = vnode.attrs;
        return (m("div", { ...rest, class: classNames(styles.root, styles[`variant${capitalize(variant)}`], styles[`size${capitalize(size)}`], className) }, this.renderChildren(vnode.children)));
    }
    renderChildren(children) {
        const arr = (Array.isArray(children) ? children : [children]).flat(Infinity);
        const rendered = [];
        for (const child of arr) {
            if (child && typeof child === "object" && "tag" in child) {
                const tag = child.tag;
                const cv = child;
                if (tag?.__cardRole === "header") {
                    rendered.push(m("div", { class: classNames(styles.header, cv.attrs?.class) }, this.renderChildren(cv.children)));
                    continue;
                }
                if (tag?.__cardRole === "body") {
                    rendered.push(m("div", { class: classNames(styles.body, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__cardRole === "footer") {
                    rendered.push(m("div", { class: classNames(styles.footer, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__cardRole === "title") {
                    rendered.push(m("h3", { class: classNames(styles.title, cv.attrs?.class) }, cv.children));
                    continue;
                }
                if (tag?.__cardRole === "description") {
                    rendered.push(m("p", { class: classNames(styles.description, cv.attrs?.class) }, cv.children));
                    continue;
                }
            }
            rendered.push(child);
        }
        return rendered;
    }
}
/**
 * Card コンポーネント名前空間
 */
export const Card = {
    Root: CardRoot,
    Header: CardHeaderMarker,
    Body: CardBodyMarker,
    Footer: CardFooterMarker,
    Title: CardTitleMarker,
    Description: CardDescriptionMarker,
};
export { CardRoot };
