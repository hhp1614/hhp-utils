interface IUrlParams {
    [key: string]: any;
}
/**
 * 对象序列化
 * @param obj {IUrlParams} 参数对象
 */
export declare const urlQueryString: (obj: IUrlParams) => string;
export {};
