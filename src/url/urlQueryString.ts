interface IUrlParams {
  [key: string]: any;
}

/**
 * 对象序列化
 * @param obj {IUrlParams} 参数对象
 */
export const urlQueryString = (obj: IUrlParams): string => {
  if (!obj) return '';
  const pairs = [];
  for (let key in obj) {
    const value: any = obj[key];
    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        const k: string = encodeURIComponent(`${key}[${i}]`);
        const v: string = encodeURIComponent(value[i]);
        pairs.push(`${k}=${v}`);
      }
      continue;
    }
    pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  }
  return pairs.join('&');
};
