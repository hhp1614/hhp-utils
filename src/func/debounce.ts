/**
 * 防抖
 * @param func  回调函数
 * @param wait 等待多久没有执行后才会执行回调函数
 */
export const debounce = (func: Function, wait: number = 160): Function => {
  let timeout: any = null;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, wait);
  };
};
