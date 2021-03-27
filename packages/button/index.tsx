import React, { Component, CSSProperties } from 'react';
// @ts-ignore
import { Button as NextButton, Icon } from '@alife/next';
import classnames from 'classnames';

import './index.scss';

export interface IButtonProps  {
  style?: CSSProperties;
  /**
   * 按钮样式类型(Type of button)
   * @default 'primary'
   * @setter.title 按钮类型
   * @vision true
   */
  type?: 'primary' | 'secondary' | 'normal' | 'link';

  /**
   * Size of buttons in group
   * @default 'medium'
   * @vision true
   * @setter.title 按钮尺寸
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * loading status
   * @default false
   */
  loading?: boolean;

  /**
   * disable tip title
   */
  disabledTitle?: string;
  /**
   * title perporty of element
   * @default 'title'
   */
  title?: string;
  /**
   * 按钮内的文案(button text)
   * @default button
   * @setter.title 按钮文案
   * @vision true
   * @vision.columnPlaceholder true
   */
  text: string;
  /**
   * 按钮跳转链接(href attribute of button link)
   * @setter.title 跳转链接
   * @vision true
   * @vision.columnPlaceholder true
   */
  href?: string;

  /**
   * 是否禁用按钮(disable status)
   * @default false
   * @setter.title 是否禁用
   * @vision true
   */
  disabled?: boolean;

  /**
   * target attribute of button link
   */
  target?: string;
  /**
   * icon of component
   */
  icon?: string;
  /**
   * position of icon
   * @default 'end'
   */
  iconPosition?: 'start' | 'end';
  /**
   * 当点击时
   */
  onClick?: (evt: React.MouseEvent, data?: any) => void;

  /**
   * A+ d位
   */
  spm?: string;

  className?: string;
}

/**
 * @author 翰哥
 * @workNo 202932
 * @vision.icon https://img.alicdn.com/tfs/TB1epKUvi_1gK0jSZFqXXcpaXXa-202-200.png
 * @vision.title 按钮(Button)
 * @category Basic
 * @vision.table true
 * @visible true
 * @description 按钮组件，一般用于提交等场景
 */
class Button extends Component<IButtonProps> {
  static defaultProps = {
    size: 'medium',
    disabled: false,
    iconPosition: 'end',
  };

  onLinkClick = e => {
    const { href, target } = this.props;
    e.preventDefault();
    this.handleOnClick(e);
    if (href) {
      if (target && target === '_blank') {
        window.open(href);
      } else {
        location.href = href;
      }
    }
  };

  handleOnClick = (e: React.MouseEvent) => this.props.onClick && this.props.onClick(e);

  renderContent = ({ size } = {} as any) => {
    const { text, icon, iconPosition } = this.props;
    const nodes = [text, icon ? <Icon className="button-icon" type={icon} size={size} /> : null];
    if (iconPosition === 'start') nodes.reverse();
    return nodes;
  };

  renderLinkButton = () => {
    const { href = 'javascript:void(0);', target, type, text, icon, spm, className = '', ...restProps } = this.props;
    const LinkProps = {
      href,
      target,
    };
    return (
      <NextButton
        component="a"
        {...LinkProps}
        className={classnames(className, {
          'aplus-auto-clk': !!spm && href && href.indexOf('javascript') !== -1,
          'aplus-auto-exp': !!spm,
        })}
        {...(restProps as any)}
        data-spm={spm}
        onClick={this.handleOnClick}
        type={type as any}
      >
        {this.renderContent()}
      </NextButton>
    );
  };

  renderNextButton = () => {
    const { className = '', type, size, loading, disabled, style, title = '', spm } = this.props;
    return (
      <NextButton
        className={classnames(className, {
          'dada-btn': true,
          'aplus-auto-clk': !!spm,
          'aplus-auto-exp': !!spm,
        })}
        style={style}
        type={(type as any) || 'primary'}
        size={size}
        loading={loading}
        disabled={disabled}
        title={title}
        onClick={this.handleOnClick}
        data-spm={spm}
      >
        {this.renderContent()}
      </NextButton>
    );
  };

  wrapperDisabledLabel(content) {
    return content;
  }

  render() {
    const { type, href = '', target, title = '', disabled, spm } = this.props;
    if (type === 'link') {
      return this.wrapperDisabledLabel(
        <a
          className={classnames('link', {
            link_disabled: disabled,
            'aplus-auto-clk': spm && href && href.indexOf('javascript') !== -1,
            'aplus-auto-exp': !!spm,
          })}
          href={!disabled && href ? href : 'javascript:void(0);'}
          target={target}
          onClick={disabled ? undefined : this.handleOnClick}
          title={title}
          data-spm={spm}
        >
          {this.renderContent({ size: 'small' })}
        </a>,
      );
    } else {
      return href
        ? this.wrapperDisabledLabel(this.renderLinkButton())
        : this.wrapperDisabledLabel(this.renderNextButton());
    }
  }
}

export default Button;
