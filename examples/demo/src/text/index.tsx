import * as React from 'react';
import './index.scss';

export interface IProps {
  /**
   * 组件主题
   * @default {primary:'#399aff',isMobile:undefined}
   */
  theme?: {
    primary?: string;
    isMobile?: boolean;
  };

  /**
   * 图片地址
   */
  image?: string;

  /**
   * 是否显示
   */
  visible?: boolean;

  /**
   * 显示尺寸
   */
  size?: "large" | 'medium' | 'small';

  /**
   * Banner高度
   * @default 300px
   */
  height?: number;
}

/**
 * 这是一个非常Nice的例子
 */
export function Text(props: IProps) {
  const { visible = true, size } = props;
  return (
    <div className={'component-scope ' + size}>
      {visible ? 'Hello World' : ''} {size}
    </div>
  );
}

export default Text;
