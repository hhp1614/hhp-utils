/**
 * 判断是否为移动端
 * @returns {boolean} 是否为移动端
 */
export const isMobile = (ua: string = navigator.userAgent): boolean => {
  return !!ua.match(/(iPhone|iPod|Android|ios)/i)
}
