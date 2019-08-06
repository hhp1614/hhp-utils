/**
 * 判断是否为邮箱地址
 * @param   {string} str
 * @returns {boolean}
 */
export const isEmail = (str: string): boolean => {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
};
