/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import Overlay from "./Overlay";
import "animate.css";
import styles from "./OffcanvasClassic.module.scss";
export class OffcanvasClassic {
    static show(opts) {
        return new Promise((resolve) => {
            let settled = false;
            const resolveOnce = (value) => {
                if (settled)
                    return;
                settled = true;
                resolve(value);
            };
            const titleId = `mku-offcanvas-${OffcanvasClassic.seed++}`;
            class OffcanvasWrapper {
                view(vnode) {
                    const Content = opts.content;
                    const attrs = opts.attrs ?? {};
                    const placement = opts.placement ?? "start";
                    const placementStyleMap = {
                        start: styles.offcanvasStart,
                        end: styles.offcanvasEnd,
                        top: styles.offcanvasTop,
                        bottom: styles.offcanvasBottom,
                    };
                    const animateInMap = {
                        start: "animate__slideInLeft",
                        end: "animate__slideInRight",
                        top: "animate__slideInDown",
                        bottom: "animate__slideInUp",
                    };
                    const placementClass = placementStyleMap[placement];
                    const animateInClass = animateInMap[placement];
                    return (m("div", { class: classNames(styles.offcanvas, styles.offcanvasShow, placementClass, "animate__animated", "animate__faster", animateInClass, opts.class), "data-offcanvas": "", tabindex: -1, role: "dialog", "aria-labelledby": titleId, style: "visibility: visible;" },
                        m("div", { class: styles.offcanvasHeader },
                            m("h5", { class: styles.offcanvasTitle, id: titleId }, opts.title ?? ""),
                            m("button", { type: "button", class: styles.btnClose, "aria-label": "Close", onclick: () => {
                                    resolveOnce(false);
                                    vnode.attrs.hide();
                                } })),
                        m("div", { class: classNames(styles.offcanvasBody, opts.bodyClass) }, m(Content, {
                            ...attrs,
                            resolve: (v) => {
                                resolveOnce(v);
                                vnode.attrs.hide();
                            },
                            hide: () => vnode.attrs.hide(),
                        }))));
                }
                onbeforeremove(vnode) {
                    const dom = vnode.dom;
                    const placement = opts.placement ?? "start";
                    const panel = dom.hasAttribute("data-offcanvas") ? dom : dom.querySelector("[data-offcanvas]");
                    if (!panel)
                        return;
                    const inClassByPlacement = {
                        start: "animate__slideInLeft",
                        end: "animate__slideInRight",
                        top: "animate__slideInDown",
                        bottom: "animate__slideInUp",
                    };
                    const outClassByPlacement = {
                        start: "animate__slideOutLeft",
                        end: "animate__slideOutRight",
                        top: "animate__slideOutUp",
                        bottom: "animate__slideOutDown",
                    };
                    const inClass = inClassByPlacement[placement];
                    const outClass = outClassByPlacement[placement];
                    panel.classList.remove(inClass);
                    panel.classList.add("animate__animated", "animate__faster", outClass);
                    return new Promise((done) => {
                        panel.addEventListener("animationend", () => {
                            done();
                        }, { once: true });
                    });
                }
                onremove() {
                    resolveOnce(false);
                }
            }
            const overlay = new Overlay(OffcanvasWrapper, {
                closeOnEscapeKey: opts.closeOnEscapeKey ?? true,
                closeOnOutsideClick: opts.closeOnOutsideClick ?? false,
                hasBackdrop: opts.hasBackdrop ?? true,
                inline: opts.inline ?? false,
            });
            overlay.show();
        });
    }
}
OffcanvasClassic.seed = 1;
