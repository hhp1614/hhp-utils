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
export const getUrlParams = (
  url: string = window.location.href
): IUrlParams => {
  if (url.indexOf('?') === -1) {
    return {};
  }
  let search: any =
    url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {};
  }
  search = search.split('&');
  const query: IUrlParams = {};
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;

  // const res: IUrlParams = {}
  // const reg: RegExp = /([^?&=]+)=([^?&]+)/g

  // url.replace(reg, (_, k, v) => (res[k] = v))

  // return res
};
