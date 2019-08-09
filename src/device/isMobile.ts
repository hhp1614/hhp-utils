/**
 * 判断是否为移动端
 * @param   {string} ua UserAgent 默认取当前 UA
 * @returns {boolean}
 */

let userAgent = '';
try {
  if (window) {
    userAgent = window.navigator.userAgent;
  }
} catch (e) {}

export const isMobile = (ua: string = userAgent): boolean => {
  return !!ua.match(/(iPhone|iPod|Android|ios)/i);
};
