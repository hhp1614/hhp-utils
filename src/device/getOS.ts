/**
 * 获取操作系统类型
 * @returns {string}
 */

let userAgent = '';
let appVersion = '';
try {
  userAgent = navigator.userAgent || '';
  appVersion = navigator.appVersion || '';
} catch (e) {
}

export const getOS = (): string => {
  try {
    const ua = userAgent;
    const av = appVersion;
    if (/mac/i.test(av)) return 'MacOSX';
    if (/win/i.test(av)) return 'windows';
    if (/linux/i.test(av)) return 'linux';
    if (
      /iphone/i.test(ua) ||
      /ipad/i.test(ua) ||
      /ipod/i.test(ua)
    )
      return 'ios';
    if (/android/i.test(userAgent)) return 'android';
    if (/win/i.test(av) && /phone/i.test(ua))
      return 'windowsPhone';
    return 'Unkonwn';
  } catch (err) {
    return 'Unkonwn';
  }
};
