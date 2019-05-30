/**
 * 浏览器信息对象
 * @property type {string} 浏览器类型
 * @property version {string} 浏览器版本
 */
interface IExplore {
    type: string;
    version: string;
}
/**
 * 获取浏览器信息
 * @param   {string} ua UserAgent 默认取当前 UA
 * @returns {IExplore} 浏览器信息对象
 */
export declare const getExplore: (ua?: string) => IExplore;
export {};
