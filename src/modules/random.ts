/**
 * @file 随机方法
 */

/**
 * 随机 16 进制颜色
 * @returns {string} 16 进制颜色
 */
export const randomColor = (): string => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;
};