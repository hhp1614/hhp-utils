/**
 * 距离现在已经过去的时间
 * @param startTime {number|string|Date} 开始时间
 * @returns {string} 年前 | 月前 | 天前 | 小时前 | 分钟前 | 刚刚
 */
export const timeFormatPass = (startTime: number | string | Date): string => {
  const currentTime: number = +new Date()
  const time: number = currentTime - +new Date(startTime)
  const day: number = parseInt(`${time / (1000 * 60 * 60 * 24)}`)
  const hour: number = parseInt(`${time / (1000 * 60 * 60)}`)
  const min: number = parseInt(`${time / (1000 * 60)}`)
  const month: number = parseInt(`${day / 30}`)
  const year: number = parseInt(`${month / 12}`)
  if (year) return year + '年前'
  if (month) return month + '月前'
  if (day) return day + '天前'
  if (hour) return hour + '小时前'
  if (min) return min + '分钟前'
  return '刚刚'
}
