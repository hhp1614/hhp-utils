/**
 * 判断是否为邮箱地址
 * @param   {String} str
 * @returns {Boolean}
 */
export const isEmail = (str: string): boolean => {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
}
