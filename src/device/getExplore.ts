/**
 * 浏览器信息对象
 * @property type {string} 浏览器类型
 * @property version {string} 浏览器版本
 */
interface IExplore {
  type: string;
  version: string;
}

let userAgent = '';
try {
  userAgent = navigator.userAgent || '';
} catch (e) {
}

/**
 * 获取浏览器信息
 * @param   {string} ua UserAgent 默认取当前 UA
 * @returns {IExplore} 浏览器信息对象
 */
export const getExplore = (ua: string = userAgent): IExplore => {
  let sys: any = {};
  let s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/i))
    ? (sys.ie = s[1])
    : (s = ua.match(/msie ([\d\.]+)/i))
    ? (sys.ie = s[1])
    : (s = ua.match(/edge\/([\d\.]+)/i))
    ? (sys.edge = s[1])
    : (s = ua.match(/firefox\/([\d\.]+)/i))
    ? (sys.firefox = s[1])
    : (s = ua.match(/(?:opera|opr).([\d\.]+)/i))
    ? (sys.opera = s[1])
    : (s = ua.match(/chrome\/([\d\.]+)/i))
    ? (sys.chrome = s[1])
    : (s = ua.match(/version\/([\d\.]+).*safari/i))
    ? (sys.safari = s[1])
    : 0;
  // 根据关系进行判断
  if (sys.ie) return { type: 'IE', version: sys.ie };
  if (sys.edge) return { type: 'EDGE', version: sys.edge };
  if (sys.firefox) return { type: 'Firefox', version: sys.firefox };
  if (sys.chrome) return { type: 'Chrome', version: sys.chrome };
  if (sys.opera) return { type: 'Opera', version: sys.opera };
  if (sys.safari) return { type: 'Safari', version: sys.safari };
  return { type: 'Unkonwn', version: '' };
};
