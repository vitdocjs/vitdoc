import { PluginOption } from "./core/types";

export * from "./core/types";

export type MarkdownMeta = {
  /**
   * For configuring the title of the page, which will be used as the subtitle of the page title and the left menu.
   */
  title?: string;

  /**
   * Controls the display order of the document, the smaller the number, the earlier the sort.
   */
  order?: number;

  /**
   * Controls the display or hiding of the sidebar menu.
   */
  sidemenu?: boolean;

  /**
   * For grouping the current page, so that you can group display in the sidebar menu
   */
  group?: {
    /**
     * Group name
     */
    title?: string;

    /**
     * Group sort, the smaller the number, the earlier the sort.
     */
    order?: number;
  };
};

export type ConfigType = {
  /**
   * Page Logo
   */
  logo?: string;

  /**
   * Expand the html
   */
  htmlAppend?: string;

  /**
   * Page template
   * @default "@vitdoc/theme-default"
   */
  template?: string;

  /**
   * meta data file name
   */
  metaFileName?: string | false;

  /**
   * Plugin of vitdoc
   */
  plugins?: PluginOption[];

  /**
   * Document directory
   * @default ["docs", "src"]
   */
  docDirs?: string[];
};
