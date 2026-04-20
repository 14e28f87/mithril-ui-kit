/** @jsx m */
import m from "mithril";
import classNames from "classnames";
import "./StepsClassic.scss";

export type StepsClassicStepStatus = "wait" | "process" | "finish" | "error";
export type StepsClassicDirection = "horizontal" | "vertical";
export type StepsClassicSize = "default" | "small";
export type StepsClassicLabelPlacement = "horizontal" | "vertical";

export type StepsClassicStepItem = {
	title: m.Children;
	description?: m.Children;
	subTitle?: m.Children;
	icon?: m.Children;
	status?: StepsClassicStepStatus;
	disabled?: boolean;
	class?: string;
	onClick?: (index: number) => void;
};

export type StepsClassicProgressDotRenderInfo = {
	index: number;
	status: StepsClassicStepStatus;
	title: m.Children;
	description?: m.Children;
};

export type StepsClassicAttrs = {
	items: StepsClassicStepItem[];
	current?: number;
	initial?: number;
	status?: StepsClassicStepStatus;
	direction?: StepsClassicDirection;
	size?: StepsClassicSize;
	labelPlacement?: StepsClassicLabelPlacement;
	progressDot?: boolean | ((dot: m.Children, info: StepsClassicProgressDotRenderInfo) => m.Children);
	onChange?: (current: number) => void;
	class?: string;
	style?: Record<string, string>;
};

export class StepsClassic implements m.Component<StepsClassicAttrs> {
	private resolveStatus(attrs: StepsClassicAttrs, item: StepsClassicStepItem, index: number): StepsClassicStepStatus {
		if (item.status) return item.status;

		const initial = attrs.initial ?? 0;
		const current = attrs.current ?? initial;

		if (index + initial < current) return "finish";
		if (index + initial === current) return attrs.status ?? "process";
		return "wait";
	}

	private renderDefaultIcon(index: number, status: StepsClassicStepStatus) {
		if (status === "finish") {
			return <span class="mku-steps-check">{"\u2713"}</span>;
		}
		if (status === "error") {
			return <span class="mku-steps-error">{"\u2715"}</span>;
		}
		return <span>{index + 1}</span>;
	}

	private renderIcon(attrs: StepsClassicAttrs, item: StepsClassicStepItem, index: number, status: StepsClassicStepStatus) {
		if (attrs.progressDot) {
			const dot = <span class="mku-steps-dot" />;
			if (typeof attrs.progressDot === "function") {
				return attrs.progressDot(dot, {
					index,
					status,
					title: item.title,
					description: item.description,
				});
			}
			return dot;
		}

		if (item.icon != null) {
			return item.icon;
		}

		return this.renderDefaultIcon(index, status);
	}

	private handleStepClick(attrs: StepsClassicAttrs, item: StepsClassicStepItem, index: number) {
		if (item.disabled) return;
		item.onClick?.(index);
		attrs.onChange?.(index + (attrs.initial ?? 0));
	}

	view(vnode: m.Vnode<StepsClassicAttrs>) {
		const attrs = vnode.attrs;
		const items = attrs.items ?? [];
		const direction = attrs.direction ?? "horizontal";
		const size = attrs.size ?? "default";
		const labelPlacement = attrs.labelPlacement ?? "horizontal";

		return (
			<div
				class={classNames(
					"mku-steps",
					`mku-steps-${direction}`,
					`mku-steps-${size}`,
					{ "mku-steps-label-vertical": labelPlacement === "vertical" },
					attrs.class
				)}
				style={attrs.style}
			>
				{items.map((item, index) => {
					const status = this.resolveStatus(attrs, item, index);
					const clickable = !item.disabled && (!!attrs.onChange || !!item.onClick);
					const isLast = index === items.length - 1;

					return (
						<div
							class={classNames(
								"mku-steps-item",
								`mku-steps-item-${status}`,
								item.class,
								{
									"mku-steps-item-active": status === "process",
									"mku-steps-item-disabled": !!item.disabled,
									"mku-steps-item-clickable": clickable,
									"mku-steps-item-last": isLast,
								}
							)}
							key={`step-${index}`}
						>
							<div
								class="mku-steps-item-container"
								onclick={() => this.handleStepClick(attrs, item, index)}
							>
								<div class="mku-steps-item-tail">
									<i></i>
								</div>
								<div class="mku-steps-item-icon">
									<div class="mku-steps-icon-inner">{this.renderIcon(attrs, item, index, status)}</div>
								</div>
								<div class="mku-steps-item-content">
									<div class="mku-steps-item-title">
										{item.title}
										{item.subTitle ? (
											<span class="mku-steps-item-subtitle">{item.subTitle}</span>
										) : null}
									</div>
									{item.description != null ? (
										<div class="mku-steps-item-description">{item.description}</div>
									) : null}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}