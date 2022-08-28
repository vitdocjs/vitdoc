export type MarkdownMeta = {
  /**
   * 用于配置该页面的标题，将会被用作该页面标题的子标题以及左侧菜单。
   */
  title?: string;
  /**
   * 控制该文档的显示顺序，数值越小排序越靠前。
   */
  order?: number;
  /**
   * 控制侧边栏菜单的显示或隐藏。
   */
  sidemenu?: boolean;

  /**
   * 该配置用于对当前页面进行分组，这样可以在侧边栏菜单进行分组显示
   */
  group?: {
    /**
     * 分组名称
     */
    title?: string;

    /**
     * 分组的排序，数值越小排序越靠前
     */
    order?: number;
  };
};

export type ConfigType = {
  /**
   * 页面 Logo
   */
  logo?: string;

  /**
   * 扩展 HTML
   */
  htmlAppend?: string;
};
