/**
 * @file URL 参数对象
 */

/**
 * 获取 URL 参数对象
 * @param url {string} URL，默认为当前 RUL
 * @returns {IUrlParams} URL 参数对象
 */
var getUrlParams = function getUrlParams(url) {
  if (url === void 0) {
    url = window.location.href;
  }

  var res = {};
  var reg = /([^?&=]+)=([^?&]+)/g;
  url.replace(reg, function (_, k, v) {
    return res[k] = v;
  });
  return res;
};

/**
 * @file 随机方法
 */

/**
 * 随机 16 进制颜色
 * @returns {string} 16 进制颜色
 */
var randomColor = function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * @file 类型判断
 */

/**
 * 判断类型
 * @returns {string} 类型字符串
 */
var type = function type(value) {
  if (value == null) {
    return value + '';
  }

  if (_typeof(value) === 'object' || typeof value === 'function') {
    var reg = / (.*?)\]$/;
    var str = Object.prototype.toString.call(value);
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

    var res = reg.exec(str);
    return res && res[1] ? res[1].toLowerCase() : 'object';
  }

  return _typeof(value);
};

/**
 * @file 获取浏览器信息
 */

/**
 * 获取浏览器信息
 * @param ua {string} UserAgent 默认取当前 UA
 * @returns {IExplore} 浏览器信息对象
 */
var getExplore = function getExplore(ua) {
  if (ua === void 0) {
    ua = navigator.userAgent;
  }

  var sys = {};
  var s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/i)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/i)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/i)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/i)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/i)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/i)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/i)) ? sys.safari = s[1] : 0; // 根据关系进行判断

  if (sys.ie) return {
    type: 'IE',
    version: sys.ie
  };
  if (sys.edge) return {
    type: 'EDGE',
    version: sys.edge
  };
  if (sys.firefox) return {
    type: 'Firefox',
    version: sys.firefox
  };
  if (sys.chrome) return {
    type: 'Chrome',
    version: sys.chrome
  };
  if (sys.opera) return {
    type: 'Opera',
    version: sys.opera
  };
  if (sys.safari) return {
    type: 'Safari',
    version: sys.safari
  };
  return {
    type: 'Unkonwn',
    version: ''
  };
};

/**
 * @file 获取操作系统类型
 */

/**
 * 获取操作系统类型
 * @returns {string} 操作系统类型
 */
var getOS = function getOS() {
  try {
    var userAgent = navigator.userAgent;
    var appVersion = navigator.appVersion;
    if (/mac/i.test(appVersion)) return 'MacOSX';
    if (/win/i.test(appVersion)) return 'windows';
    if (/linux/i.test(appVersion)) return 'linux';
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
    if (/android/i.test(userAgent)) return 'android';
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
    return 'Unkonwn';
  } catch (err) {
    return 'Unkonwn';
  }
};

/**
 * @file 是否为移动端
 */

/**
 * @returns {boolean} 是否为移动端
 */
var isMobile = function isMobile(ua) {
  if (ua === void 0) {
    ua = navigator.userAgent;
  }

  return !!ua.match(/(iPhone|iPod|Android|ios)/i);
};

// url

export { getExplore, getOS, getUrlParams, isMobile, randomColor, type };
