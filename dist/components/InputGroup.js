/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import styles from "./InputGroup.module.scss";
// ===========================
// マーカーコンポーネント
// ===========================
/** InputGroup.Field — 入力フィールドのマーカー */
export class IGFieldMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
IGFieldMarker.__igRole = "field";
/** InputGroup.Addon — アドオンのマーカー */
export class IGAddonMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
IGAddonMarker.__igRole = "addon";
/** InputGroup.Element — オーバーレイ要素のマーカー */
export class IGElementMarker {
    view(vnode) {
        return m("div", null, vnode.children);
    }
}
IGElementMarker.__igRole = "element";
// ===========================
// ユーティリティ
// ===========================
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/** 子要素から全マーカーを順序付きで抽出 */
function collectMarkers(children) {
    const result = [];
    if (!children)
        return result;
    const arr = Array.isArray(children) ? children : [children];
    for (let i = 0; i < arr.length; i++) {
        const child = arr[i];
        if (child && typeof child === "object" && "tag" in child) {
            const tag = child.tag;
            if (tag && tag.__igRole) {
                result.push({ role: tag.__igRole, vnode: child, index: i });
            }
        }
    }
    return result;
}
// ===========================
// メインコンポーネント
// ===========================
/**
 * @class InputGroupRoot
 * @description
 * Chakra UI 風の InputGroup compound component。
 *
 * テキスト入力にアドオン（接頭辞/接尾辞）やオーバーレイ要素を追加する。
 * size / variant / disabled / invalid を統一的に管理する。
 *
 * @example
 * <InputGroup.Root size="md" variant="outline">
 *   <InputGroup.Addon>$</InputGroup.Addon>
 *   <InputGroup.Field placeholder="Amount" />
 *   <InputGroup.Element placement="end">✓</InputGroup.Element>
 * </InputGroup.Root>
 */
export class InputGroupRoot {
    view(vnode) {
        const attrs = vnode.attrs;
        const size = attrs.size ?? "md";
        const variant = attrs.variant ?? "outline";
        const markers = collectMarkers(vnode.children);
        const fieldMarker = markers.find((e) => e.role === "field");
        const addonMarkers = markers.filter((e) => e.role === "addon");
        const elementMarkers = markers.filter((e) => e.role === "element");
        // 配置を判定: addon/element が field の前にある → start、後 → end
        const fieldIdx = fieldMarker ? fieldMarker.index : Infinity;
        const hasAddonStart = addonMarkers.some((e) => {
            if (e.vnode.attrs?.placement)
                return e.vnode.attrs.placement === "start";
            return e.index < fieldIdx;
        });
        const hasAddonEnd = addonMarkers.some((e) => {
            if (e.vnode.attrs?.placement)
                return e.vnode.attrs.placement === "end";
            return e.index > fieldIdx;
        });
        // Element の padding 計算 (left/right padding on field)
        const elementStartMarkers = elementMarkers.filter((e) => {
            if (e.vnode.attrs?.placement)
                return e.vnode.attrs.placement === "start";
            return e.index < fieldIdx;
        });
        const elementEndMarkers = elementMarkers.filter((e) => {
            if (e.vnode.attrs?.placement)
                return e.vnode.attrs.placement === "end";
            return e.index > fieldIdx;
        });
        // element 幅に応じた field padding
        const elementWidth = size === "xs" ? 1.5 : size === "sm" ? 2 : size === "lg" ? 3 : 2.5;
        const extraStyle = {};
        if (elementStartMarkers.length > 0) {
            extraStyle.paddingLeft = `${elementWidth * elementStartMarkers.length}rem`;
        }
        if (elementEndMarkers.length > 0) {
            extraStyle.paddingRight = `${elementWidth * elementEndMarkers.length}rem`;
        }
        return (m("div", { class: classNames(styles.root, styles[`size${capitalize(size)}`], styles[`variant${capitalize(variant)}`], {
                [styles.hasAddonStart]: hasAddonStart,
                [styles.hasAddonEnd]: hasAddonEnd,
                [styles.invalid]: attrs.invalid,
                [styles.disabled]: attrs.disabled,
            }, attrs.class), style: attrs.style, "data-scope": "input-group", "data-part": "root" },
            addonMarkers
                .filter((e) => {
                if (e.vnode.attrs?.placement)
                    return e.vnode.attrs.placement === "start";
                return e.index < fieldIdx;
            })
                .map((e) => (m("span", { class: classNames(styles.addon, styles.addonStart, e.vnode.attrs?.class), style: e.vnode.attrs?.style, "data-part": "addon" }, e.vnode.children))),
            elementStartMarkers.map((e) => (m("span", { class: classNames(styles.element, styles.elementStart, e.vnode.attrs?.class), style: e.vnode.attrs?.style, "data-part": "element" }, e.vnode.children))),
            fieldMarker && (m("input", { class: classNames(styles.field, fieldMarker.vnode.attrs?.class), style: { ...(fieldMarker.vnode.attrs?.style ?? {}), ...extraStyle }, type: fieldMarker.vnode.attrs?.type ?? "text", value: fieldMarker.vnode.attrs?.value ?? "", placeholder: fieldMarker.vnode.attrs?.placeholder, disabled: fieldMarker.vnode.attrs?.disabled ?? attrs.disabled, readonly: fieldMarker.vnode.attrs?.readonly, name: fieldMarker.vnode.attrs?.name, id: fieldMarker.vnode.attrs?.id, "aria-label": fieldMarker.vnode.attrs?.["aria-label"], "aria-invalid": attrs.invalid || undefined, "data-part": "field", oninput: (e) => {
                    fieldMarker.vnode.attrs?.oninput?.(e.target.value);
                } })),
            elementEndMarkers.map((e) => (m("span", { class: classNames(styles.element, styles.elementEnd, e.vnode.attrs?.class), style: e.vnode.attrs?.style, "data-part": "element" }, e.vnode.children))),
            addonMarkers
                .filter((e) => {
                if (e.vnode.attrs?.placement)
                    return e.vnode.attrs.placement === "end";
                return e.index > fieldIdx;
            })
                .map((e) => (m("span", { class: classNames(styles.addon, styles.addonEnd, e.vnode.attrs?.class), style: e.vnode.attrs?.style, "data-part": "addon" }, e.vnode.children)))));
    }
}
// ===========================
// バンドルエクスポート
// ===========================
/**
 * InputGroup compound component
 *
 * @example
 * ```tsx
 * <InputGroup.Root size="md">
 *   <InputGroup.Addon>$</InputGroup.Addon>
 *   <InputGroup.Field placeholder="金額を入力" />
 * </InputGroup.Root>
 * ```
 */
export const InputGroup = {
    Root: InputGroupRoot,
    Field: IGFieldMarker,
    Addon: IGAddonMarker,
    Element: IGElementMarker,
};
