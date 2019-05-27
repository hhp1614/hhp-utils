/**
 * 判断是否为 URL 地址
 * @param  {String} str
 * @return {Boolean}
 */
export const isUrl = (str: string): boolean => {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
    str
  )
}
