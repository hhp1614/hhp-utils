/**
 * 生成指定范围随机数
 * @param   {Number} min 最小值
 * @param   {Number} max 最大值
 * @returns {Number}
 */
export const randomNum = (min: number = 0, max: number = 1): number => {
  return Math.floor(min + Math.random() * (max - min))
}
