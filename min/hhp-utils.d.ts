declare module 'modules/url' {
  /**
   * @file URL 方法
   */
  interface IUrlParams {
    [key: string]: string;
  }
  /**
   * 获取 URL 参数对象
   * @param url {string} URL，默认为当前 RUL
   * @returns {IUrlParams} URL 参数对象
   */
  export const getUrlParams: (url?: string) => IUrlParams;
}
declare module 'modules/random' {
  /**
   * @file 随机方法
   */
  /**
   * 随机 16 进制颜色
   * @returns {string} 16 进制颜色
   */
  export const randomColor: () => string;
}
declare module 'index' {
  export * from 'modules/url';
  export * from 'modules/random';
}
