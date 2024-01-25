import * as React from 'react';
import './index.scss';

export interface IProps {
  /**
   * 组件主题
   * @default {maxWidth:1000,isMobile:false}
   */
  theme?: {
    maxWidth?: number;
    isMobile?: boolean;
  };

  /**
   * 标题
   * @form.uiType Input
   */
  title: string;

  /**
   * 副标题
   * @form.uiType Input
   * @default null
   */
  subTitle?: string;
}

export function Title(props: IProps) {
  const { title, subTitle, theme = {} } = props;
  const { maxWidth = 1000, isMobile } = theme;

  return (
    <div className={`cms-one-stop-title-scope ismobile-${!!isMobile}`} style={{ maxWidth }}>
      <div className="cms-one-stop-title-container">
        <img src="https://img.alicdn.com/tfs/TB1Yu.Rnhn1gK0jSZKPXXXvUXXa-25-20.svg" alt="" />
        <h2>{title}</h2>
        <img src="https://img.alicdn.com/tfs/TB1MvMSnkL0gK0jSZFAXXcA9pXa-25-20.svg" alt="" />
      </div>
      {subTitle && (
        <div className="cms-sub-title">
          <span
            dangerouslySetInnerHTML={{
              // @ts-ignore
              __html: subTitle.replace('\\n', '\n'),
            }}
          />
        </div>
      )}
    </div>
  );
}
export default Title;
