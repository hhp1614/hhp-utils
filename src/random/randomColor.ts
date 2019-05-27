/**
 * 随机 16 进制颜色
 * @returns {String}
 */
export const randomColor = (): string => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
}
