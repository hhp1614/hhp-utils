/**
 * 现在距离结束时间的剩余时间
 * @param endTime {number|string|Date} 结束时间
 * @returns `${d}天 ${h}小时 ${m}分钟 ${s}秒`
 */
export const timeFormatRemain = (endTime: number | string | Date): string => {
  const start: number = +new Date()
  const end: number = +new Date(endTime)
  const difftime: number = end - start
  let d: number = 0
  let h: number = 0
  let m: number = 0
  let s: number = 0
  if (difftime >= 0) {
    d = Math.floor(difftime / 1000 / 3600 / 24)
    h = Math.floor((difftime / 1000 / 60 / 60) % 24)
    m = Math.floor((difftime / 1000 / 60) % 60)
    s = Math.floor((difftime / 1000) % 60)
  }
  return `${d}天 ${h}小时 ${m}分钟 ${s}秒`
}
