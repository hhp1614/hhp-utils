/**
 * 判断是否为移动端
 * @param   {string} ua UserAgent 默认取当前 UA
 * @returns {boolean}
 */
export const isMobile = (ua: string = navigator.userAgent): boolean => {
  return !!ua.match(/(iPhone|iPod|Android|ios)/i)
}
