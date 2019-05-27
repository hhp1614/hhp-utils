/**
 * @file URL 参数对象
 */

interface IUrlParams {
  [key: string]: string
}

/**
 * 获取 URL 参数对象
 * @param url {string} URL，默认为当前 RUL
 * @returns {IUrlParams} URL 参数对象
 */
export const getUrlParams = (
  url: string = window.location.href
): IUrlParams => {
  const res: IUrlParams = {}
  const reg: RegExp = /([^?&=]+)=([^?&]+)/g

  url.replace(reg, (_, k, v) => (res[k] = v))

  return res
}
