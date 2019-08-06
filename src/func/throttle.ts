/**
 * 节流
 * @param func  回调函数
 * @param delay 连续执行只会在一定时间内执行一遍回调
 */
export const throttle = (func: Function, delay: number = 160): Function => {
  let timeout: any = null;
  let start: number = +new Date();
  return (...args: any[]) => {
    const curr: number = +new Date();
    clearTimeout(timeout);
    if (curr - start) {
      // @ts-ignore
      func.apply(this, args);
      start = curr;
    } else {
      timeout = setTimeout(() => {
        // @ts-ignore
        func.apply(this, args);
      }, delay);
    }
  };
};
