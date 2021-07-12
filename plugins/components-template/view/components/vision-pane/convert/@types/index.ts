export interface ITypeDesc {
  displayName: string;
  props: Record<
    string,
    {
      defaultValue: null | string;
      description: string;
      name: string;
      parent: Record<string, any>;
      type: {
        name: string;
      };
    }
  >;
  tags: Record<
    string,
    string
  >
}
