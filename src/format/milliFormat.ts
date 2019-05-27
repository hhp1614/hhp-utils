/**
 * 数字千位分隔符
 * @param   {String | Number} value 需要处理的数字
 * @param   {Number}          fixed 需要保留的小数位，不传则保留所有小数
 * @returns {String}
 */
export const milliFormat = (value: string | number, fixed?: number): string => {
  const reg: RegExp = /\B(?=(\d{3})+(?=\b))(?<=\b(?<!\.)\d*)/g
  if (fixed === undefined) return value.toString().replace(reg, ',')
  const res = (+value)
    .toFixed(fixed)
    .toString()
    .replace(reg, ',')
  return res
}
