/**
 * 判断是否为移动端
 * @returns {Boolean}
 */
export const isMobile = (ua: string = navigator.userAgent): boolean => {
  return !!ua.match(/(iPhone|iPod|Android|ios)/i)
}
