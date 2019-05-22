interface IUrlParams {
  [key: string]: string;
}

export const getUrlParams = (url: string = window.location.href): IUrlParams => {
  const res: IUrlParams = {};
  const reg: RegExp = /([^?&=]+)=([^?&]+)/g;
  url.replace(reg, (_, k, v) => (res[k] = v));
  return res;
};
