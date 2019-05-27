/**
 * 生成指定范围随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机数
 */
export const randomNum = (min: number = 0, max: number = 1): number => {
  return Math.floor(min + Math.random() * (max - min))
}
