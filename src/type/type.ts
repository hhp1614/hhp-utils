/**
 * @file 类型判断
 */

export const type = (variable: any): string => {
  if (variable == null) {
    return variable + '';
  }
  if (typeof variable === 'object' || typeof variable === 'function') {
    const reg: RegExp = / (.*?)\]$/;
    const str: string = Object.prototype.toString.call(variable);
    /**
     * 随着 ES6 引入 Symbol 后，此方法理论上已经是不严谨的了
     * 例：
     * const obj = {};
     * Object.prototype.toString.call(obj);
     * => [object Object]
     * obj[Symbol.toStringTag] = 'hhp1614';
     * => 'hhp1614'
     * Object.prototype.toString.call(obj);
     * => [object hhp1614]
     */
    const res: RegExpExecArray | null = reg.exec(str);
    return res && res[1] ? res[1].toLowerCase() : 'object';
  }
  return typeof variable;
};
