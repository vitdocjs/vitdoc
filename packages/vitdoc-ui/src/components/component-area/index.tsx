import {
	BugOutlined,
	CheckOutlined,
	CodeOutlined,
	CopyOutlined,
	FileSearchOutlined,
	SyncOutlined,
} from "@ant-design/icons";
import {
	useBoolean,
	useCreation,
	useEventEmitter,
	useMemoizedFn,
} from "ahooks";
import classNames from "classnames";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import HighLight from "../highlight";
import { copyToClipboard } from "../link-copy";
import { useAtom } from "jotai";
import { propertiesPropsStore, useSetPartialProperties } from "../../store";
import { Divider, Tooltip as _Tooltip } from "antd";
import { RendererProps } from "../../types";

import "./index.scss";
import { ReactRender } from "../../utils/react-render";

const Tooltip = _Tooltip as any;

export const ComponentBlock = (
	props: RendererProps & {
		className?: string;
		style?: CSSProperties;
		pure?: boolean;
	},
) => {
	const { getModule, demoid: id = "", title, className, style } = props;

	const { lang, renderer, content, route } = useCreation(
		() => getModule?.(id?.trim()) ?? ({} as any),
		[getModule],
	);
	const [checkCode, { toggle }] = useBoolean();

	const [{ current }] = useAtom(propertiesPropsStore);

	const eventBus = useEventEmitter();
	const [renderKey, setRenderKey] = useState(Math.random());

	const active = current !== undefined && current === content;
	const iframe = props.previewerProps?.iframe;

	let ele = (
		<ComponentArea
			renderer={renderer}
			lang={lang}
			className={className}
			style={style}
			content={content}
			eventBus={eventBus}
			Provider={props.DemoProvider}
		/>
	);

	if (props.pure) return ele;

	if (iframe) {
		ele = (
			<iframe
				title="vitdoc-previewer"
				className="component-iframe-preview"
				src={`#${route}`}
				key={renderKey}
				style={{
					height: typeof iframe === "number" ? `${iframe}px` : "100%",
				}}
			/>
		);
	}
	return (
		<div
			className={classNames("component-area", {
				active,
			})}
		>
			{ele}
			<Divider orientation="left" dashed className="code-box-divider">
				{title}
			</Divider>
			<div className="code-box-actions">
				<Tooltip title="Debug" onClick={eventBus.emit}>
					<BugOutlined
						className={classNames("code-box-code-action", { active })}
					/>
				</Tooltip>
				<Tooltip
					title="Open in page"
					onClick={() => {
						open(`#${route}`);
					}}
				>
					<FileSearchOutlined className={classNames("code-box-code-action")} />
				</Tooltip>
				<CopyIcon content={content} />
				<Tooltip
					title={checkCode ? "Hide Code" : "View Code"}
					onClick={() => toggle()}
				>
					<CodeOutlined
						className={classNames(
							"code-box-code-action",
							checkCode && "active",
						)}
					/>
				</Tooltip>
				{iframe && (
					<Tooltip title="Refresh">
						<SyncOutlined
							className="code-box-code-action"
							onClick={() => setRenderKey(Math.random())}
						/>
					</Tooltip>
				)}
			</div>
			{checkCode && <HighLight lang={lang} children={content} />}
		</div>
	);
};

export function ComponentArea(props) {
	const { renderer, content, eventBus, Provider } = props;
	const componentRef = useRef() as any;

	const invoked = useRef(false);
	const newComp = useRef(new Map());

	let [{ defaultProps, props: componentStateProps, current }] =
		useAtom(propertiesPropsStore);

	const setPartialProps = useSetPartialProperties();
	const defaultPropsRef = useRef();

	const componentProps = useCreation(() => {
		if (!current) {
			return componentStateProps;
		}

		if (current === content) {
			return componentStateProps;
		}
		return {};
	}, [componentStateProps, current]);

	eventBus?.useSubscription(() => {
		let content = props.content;
		if (current !== undefined && current === content) {
			content = undefined;
		}
		setPartialProps({
			current: content,
			defaultProps: defaultPropsRef.current || {},
		});
	});

	const setDefaultProps = useMemoizedFn((props) => {
		defaultPropsRef.current = props;

		if (!Object.keys(defaultProps).length) {
			setPartialProps({
				defaultProps: { ...props },
			});
		}
	});

	const wrapProps = useMemoizedFn((Component, { React: OutReact }) => {
		if (newComp.current.get(Component)?.visionProps === componentProps) {
			return newComp.current.get(Component);
		}

		const outputComp = (props) => {
			if (!invoked.current) {
				useEffect(() => {
					setDefaultProps(props);
				}, []);
				invoked.current = true;
			}
			const finalProps = Object.assign({}, props, componentProps);
			const ele = OutReact.createElement(Component, finalProps);
			// if (Provider) {
			// return OutReact.createElement(Provider, { children: ele });
			// }
			return ele;
		};
		Object.assign(outputComp, Component);

		outputComp.visionProps = componentProps;
		outputComp.origin$ = Component;
		outputComp.wrap$ = (Component) => wrapProps(Component, { React: OutReact });

		newComp.current.set(Component, outputComp);

		return outputComp;
	});

	useEffect(() => {
		renderer(componentRef.current, {
			wrap: wrapProps,
		}).then((ele) => {
			if (ele) {
				// export default mode
				if (Provider) {
					ele = React.createElement(Provider, { children: ele });
				}
				ReactRender(ele, componentRef.current);
			}
		});
	}, [renderer, componentProps]);

	return (
		<div
			className={classNames("component-container", props.className)}
			style={props.style}
			id="vite-component-container"
			ref={componentRef}
		/>
	);
}

export function CopyIcon({ content }) {
	const [copied, { setTrue, setFalse }] = useBoolean();

	const copy = useMemoizedFn(() => {
		copyToClipboard(content);
		setTrue();
	});

	return (
		<Tooltip
			title={copied ? "Copied!" : "Copy Code"}
			onClick={copy}
			onOpenChange={(v) => {
				!v &&
					setTimeout(() => {
						setFalse();
					}, 500);
			}}
		>
			{copied ? (
				<CheckOutlined
					className="code-box-code-action"
					style={{ color: "#52c41a" }}
				/>
			) : (
				<CopyOutlined className="code-box-code-action" />
			)}
		</Tooltip>
	);
}
