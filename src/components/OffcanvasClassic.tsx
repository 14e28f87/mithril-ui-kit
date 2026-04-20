/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import Overlay from "./Overlay";
import "animate.css";
import styles from "./OffcanvasClassic.module.scss";

export type OffcanvasClassicPlacement = "start" | "end" | "top" | "bottom";

export type OffcanvasClassicOptions<T = any> = {
	title?: string;
	content: m.ComponentTypes<any>;
	placement?: OffcanvasClassicPlacement;
	attrs?: Record<string, any>;
	closeOnEscapeKey?: boolean;
	closeOnOutsideClick?: boolean;
	hasBackdrop?: boolean;
	inline?: boolean;
	class?: string;
	bodyClass?: string;
};

type OffcanvasWrapperAttrs = {
	hide: () => void;
};

export type OffcanvasClassicContentAttrs<T = any> = {
	resolve: (v: T) => void;
	hide: () => void;
	[key: string]: any;
};

export class OffcanvasClassic {
	private static seed = 1;

	static show<T = boolean>(opts: OffcanvasClassicOptions<T>): Promise<T> {
		return new Promise<T>((resolve) => {
			let settled = false;
			const resolveOnce = (value: T) => {
				if (settled) return;
				settled = true;
				resolve(value);
			};

			const titleId = `mku-offcanvas-${OffcanvasClassic.seed++}`;

			class OffcanvasWrapper implements m.ClassComponent<OffcanvasWrapperAttrs> {
				view(vnode: m.Vnode<OffcanvasWrapperAttrs>) {
					const Content = opts.content;
					const attrs = opts.attrs ?? {};
					const placement = opts.placement ?? "start";

					const placementStyleMap: Record<OffcanvasClassicPlacement, string> = {
						start:  styles.offcanvasStart,
						end:    styles.offcanvasEnd,
						top:    styles.offcanvasTop,
						bottom: styles.offcanvasBottom,
					};
					const animateInMap: Record<OffcanvasClassicPlacement, string> = {
						start:  "animate__slideInLeft",
						end:    "animate__slideInRight",
						top:    "animate__slideInDown",
						bottom: "animate__slideInUp",
					};

					const placementClass = placementStyleMap[placement];
					const animateInClass = animateInMap[placement];

					return (
						<div
							class={classNames(styles.offcanvas, styles.offcanvasShow, placementClass, "animate__animated", "animate__faster", animateInClass, opts.class)}
							data-offcanvas=""
							tabindex={-1}
							role="dialog"
							aria-labelledby={titleId}
							style="visibility: visible;"
						>
							<div class={styles.offcanvasHeader}>
								<h5 class={styles.offcanvasTitle} id={titleId}>
									{opts.title ?? ""}
								</h5>
								<button
									type="button"
									class={styles.btnClose}
									aria-label="Close"
									onclick={() => {
										resolveOnce(false as unknown as T);
										vnode.attrs.hide();
									}}
								></button>
							</div>
							<div class={classNames(styles.offcanvasBody, opts.bodyClass)}>
								{m(Content as m.Component<OffcanvasClassicContentAttrs<T>>, {
									...attrs,
									resolve: (v: T) => {
										resolveOnce(v);
										vnode.attrs.hide();
									},
									hide: () => vnode.attrs.hide(),
								})}
							</div>
						</div>
					);
				}

				onbeforeremove(vnode: m.VnodeDOM<OffcanvasWrapperAttrs>) {
					const dom = vnode.dom as HTMLElement;
					const placement = opts.placement ?? "start";
					const panel = dom.hasAttribute("data-offcanvas") ? dom : (dom.querySelector("[data-offcanvas]") as HTMLElement | null);
					if (!panel) return;

					const inClassByPlacement: Record<OffcanvasClassicPlacement, string> = {
						start: "animate__slideInLeft",
						end: "animate__slideInRight",
						top: "animate__slideInDown",
						bottom: "animate__slideInUp",
					};
					const outClassByPlacement: Record<OffcanvasClassicPlacement, string> = {
						start: "animate__slideOutLeft",
						end: "animate__slideOutRight",
						top: "animate__slideOutUp",
						bottom: "animate__slideOutDown",
					};

					const inClass = inClassByPlacement[placement];
					const outClass = outClassByPlacement[placement];

					panel.classList.remove(inClass);
					panel.classList.add("animate__animated", "animate__faster", outClass);

					return new Promise<void>((done) => {
						panel.addEventListener(
							"animationend",
							() => {
								done();
							},
							{ once: true }
						);
					});
				}

				onremove() {
					resolveOnce(false as unknown as T);
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
