declare module 'modules/url' {
  interface IUrlParams {
    [key: string]: string;
  }
  export const getUrlParams: (url?: string) => IUrlParams;
}
declare module 'index' {
  export * from 'modules/url';
}
