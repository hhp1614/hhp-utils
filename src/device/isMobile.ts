/**
 * 判断是否为移动端
 * @param   {string} ua UserAgent 默认取当前 UA
 * @returns {boolean}
 */

let userAgent = '';
if (window) {
  userAgent = window.navigator.userAgent;
}

export const isMobile = (ua: string = userAgent): boolean => {
  return !!ua.match(/(iPhone|iPod|Android|ios)/i);
};
