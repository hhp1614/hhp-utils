/**
 * @file URL 参数对象
 */
interface IUrlParams {
    [key: string]: any;
}
/**
 * 获取 URL 参数对象
 * @param url {string} URL，默认为当前 RUL
 * @returns {IUrlParams} URL 参数对象
 */
export declare const getUrlParams: (url?: string) => IUrlParams;
export {};
