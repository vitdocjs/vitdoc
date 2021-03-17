import React, { Component, CSSProperties } from "react";
import "./index.scss";

interface IProps {
  /**
   * image src
   * @form.uiType Upload
   * @form.restrict ["width>300"]
   * @form.maxFileSize 10mb
   */
  src: string;
  /**
   * image height
   * @form.uiType Input
   */
  height?: number | string;
  /**
   * image width
   * @form.uiType Input
   */
  width?: number | string;
  /**
   * 图片最大高度
   */
  maxHeight?: number;
  /**
   * 图片最大宽度
   */
  maxWidth?: number;
  /**
   * 图片点击跳转地址
   * jump url when clicking image
   * @form.uiType Input
   */
  href?: string;
  /**
   * mode for image
   * scaleToFill 不保持纵横比缩放，使图片的宽高完全拉伸至填满 image 元素
   * aspectFit 保持纵横比缩放，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来
   * aspectFill 保持纵横比缩放，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
   * widthFix 宽度不变，高度自动变化，保持原图宽高比不变
   * @form.uiType Select
   * @form.options [ { "label": "scaleToFill", "value": "scaleToFill" }, { "label": "aspectFit", "value": "aspectFit" }, { "label": "aspectFill", "value": "aspectFill" } ]
   */
  mode?: "scaleToFill" | "aspectFit" | "aspectFill";
  style?: CSSProperties;
  className?: string;
  /**
   * the way for jumping
   * @form.uiType RadioGroup
   * @form.options [ { "label": "current tab", "value": "none" }, { "label": "new tab", "value": "_blank" } ]
   * @form.value _blank
   */
  target?: string;
}
const getNumberPx = (str) => (/^\d+$/.test(str) ? str + "px" : str);

export const Data = (props: { Item: string }) => {
  return <>DDD</>;
};

class Image extends Component<IProps> {
  static defaultProps = {
    src: "",
    height: "auto",
    width: "auto",
    target: "_blank",
    mode: "scaleToFill",
  };

  private container: Element;

  state = {
    imgSize: [],
  };

  handlerLoad = (info) => {
    const { mode, maxWidth, maxHeight } = this.props;
    const { target } = info;
    const { naturalWidth: nWidth, naturalHeight: nHeight } = target;

    if (!this.container) {
      return;
    }

    let { clientWidth: width, clientHeight: height } = this.container;

    maxWidth && (width = Math.min(maxWidth, width));
    maxHeight && (height = Math.min(maxHeight, height));

    if (mode === "aspectFit") {
      const isWidthAccept = +width / +height < nWidth / nHeight;
      const rate = isWidthAccept ? +width / nWidth : +height / nHeight;
      const imgSize = [nWidth * rate, nHeight * rate];
      this.setState({ imgSize });
    }

    if (mode === "aspectFill") {
      const isWidthAccept = width / height < nWidth / nHeight;
      const imgSize = isWidthAccept ? ["auto", "100%"] : ["100%", "auto"];
      this.setState({ imgSize });
    }
  };

  private getContainer = (ref) => {
    this.container = ref;
  };

  render() {
    const {
      src,
      height,
      width,
      style,
      href,
      target,
      mode,
      className = "",
    } = this.props;
    const { imgSize } = this.state;
    const localStyle = Object.assign(
      {},
      {
        height: getNumberPx(height) || "auto",
        width: getNumberPx(width) || "auto",
      },
      style
    );

    const imgStyle = imgSize.length
      ? { width: getNumberPx(imgSize[0]), height: getNumberPx(imgSize[1]) }
      : {};

    const tag = href ? "a" : "div";

    return React.createElement(
      tag,
      {
        style: localStyle,
        href,
        target,
        ref: this.getContainer,
        className: "image-card",
      },
      <img
        className={`image-card-img image-mode-${mode} ${className}`}
        style={imgStyle}
        src={src}
        onLoad={this.handlerLoad}
        alt="img"
      />
    );
  }
}

export default Image;
