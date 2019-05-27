/**
 * 获取操作系统类型
 * @returns {String}
 */
export const getOS = (): string => {
  try {
    const userAgent = navigator.userAgent
    const appVersion = navigator.appVersion
    if (/mac/i.test(appVersion)) return 'MacOSX'
    if (/win/i.test(appVersion)) return 'windows'
    if (/linux/i.test(appVersion)) return 'linux'
    if (
      /iphone/i.test(userAgent) ||
      /ipad/i.test(userAgent) ||
      /ipod/i.test(userAgent)
    )
      return 'ios'
    if (/android/i.test(userAgent)) return 'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent))
      return 'windowsPhone'
    return 'Unkonwn'
  } catch (err) {
    return 'Unkonwn'
  }
}
