/**
 * 时间格式化
 * @param   {Number} time 毫秒数，默认为当前时间毫秒数
 * @returns {String} 返回格式：YYYY-MM-DD HH:mm:ss
 */
export const timeFormat = (time: number = +new Date()): string => {
  const date = new Date(time + 8 * 3600 * 1000)
  return date
    .toJSON()
    .substr(0, 19)
    .replace('T', ' ')
}
