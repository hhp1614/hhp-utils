/**
 * 判断是否为手机号
 * @param  {string | number} str
 * @return {boolean}
 */
export const isPhoneNum = (str: string | number): boolean => {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(
    `${str}`
  )
}
