import React from "react";
import classnames from "classnames";

import "./index.scss";

export interface AvatarProps {
  img: string;
  text?: string;
  size?: number | string;
  shape?: "circle" | "square";
  direction?: "column" | "row";
  defaultBgColor?: string;
  href?: string;
}

/**
 * @author 折峰
 * @workNo 165504
 * @category General
 */
function Avatar({
  img,
  text,
  href,
  size,
  defaultBgColor,
  shape = "circle",
  direction = "column",
}: AvatarProps) {
  const ContainerTag = href ? "a" : "div";
  if (size === undefined) {
    size = direction === "row" ? "1.5em" : "64px";
  }

  return (
    <ContainerTag
      className={classnames("avatar-scope", direction)}
      href={href}
      title={text}
    >
      <div
        className={classnames("avatar-content", shape)}
        style={{
          width: size,
          height: size,
          margin: direction === "row" ? `0 0.5em 0 0` : `0 auto 0.5em`,
          backgroundColor: defaultBgColor || "auto",
        }}
      >
        <img style={{ width: size, height: size }} src={img} alt={text} />
      </div>
      <figcaption className="avatar-name">{text}</figcaption>
    </ContainerTag>
  );
}

export default Avatar;
