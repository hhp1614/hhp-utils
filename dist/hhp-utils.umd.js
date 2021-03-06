(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.hhpUtils = {}));
}(this, function (exports) { 'use strict';

  var userAgent = '';

  try {
    if (window) {
      userAgent = window.navigator.userAgent || '';
    }
  } catch (e) {}
  /**
   * 获取浏览器信息
   * @param   {string} ua UserAgent 默认取当前 UA
   * @returns {IExplore} 浏览器信息对象
   */


  var getExplore = function getExplore(ua) {
    if (ua === void 0) {
      ua = userAgent;
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
   * 获取操作系统类型
   * @returns {string}
   */
  var userAgent$1 = '';
  var appVersion = '';

  try {
    if (window) {
      userAgent$1 = window.navigator.userAgent || '';
      appVersion = window.navigator.appVersion || '';
    }
  } catch (e) {}

  var getOS = function getOS() {
    try {
      var ua = userAgent$1;
      var av = appVersion;
      if (/mac/i.test(av)) return 'MacOSX';
      if (/win/i.test(av)) return 'windows';
      if (/linux/i.test(av)) return 'linux';
      if (/iphone/i.test(ua) || /ipad/i.test(ua) || /ipod/i.test(ua)) return 'ios';
      if (/android/i.test(userAgent$1)) return 'android';
      if (/win/i.test(av) && /phone/i.test(ua)) return 'windowsPhone';
      return 'Unkonwn';
    } catch (err) {
      return 'Unkonwn';
    }
  };

  /**
   * 判断是否为移动端
   * @param   {string} ua UserAgent 默认取当前 UA
   * @returns {boolean}
   */
  var userAgent$2 = '';

  try {
    if (window) {
      userAgent$2 = window.navigator.userAgent;
    }
  } catch (e) {}

  var isMobile = function isMobile(ua) {
    if (ua === void 0) {
      ua = userAgent$2;
    }

    return !!ua.match(/(iPhone|iPod|Android|ios)/i);
  };

  var _this = undefined;
  /**
   * 节流
   * @param func  回调函数
   * @param delay 连续执行只会在一定时间内执行一遍回调
   */


  var throttle = function throttle(func, delay) {
    if (delay === void 0) {
      delay = 160;
    }

    var timeout = null;
    var start = +new Date();
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var curr = +new Date();
      clearTimeout(timeout);

      if (curr - start) {
        // @ts-ignore
        func.apply(_this, args);
        start = curr;
      } else {
        timeout = setTimeout(function () {
          // @ts-ignore
          func.apply(_this, args);
        }, delay);
      }
    };
  };

  var _this$1 = undefined;
  /**
   * 防抖
   * @param func  回调函数
   * @param wait 等待多久没有执行后才会执行回调函数
   */


  var debounce = function debounce(func, wait) {
    if (wait === void 0) {
      wait = 160;
    }

    var timeout = null;
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        // @ts-ignore
        func.apply(_this$1, args);
      }, wait);
    };
  };

  /**
   * 数字千位分隔符
   * @param   {string | number} value 需要处理的数字
   * @param   {number}          fixed 需要保留的小数位，不传则保留所有小数
   * @returns {string}
   */
  var milliFormat = function milliFormat(value, fixed) {
    var reg = /\B(?=(\d{3})+(?=\b))(?<=\b(?<!\.)\d*)/g;
    if (fixed === undefined) return value.toString().replace(reg, ',');
    var res = (+value).toFixed(fixed).toString().replace(reg, ',');
    return res;
  };

  /**
   * 随机 16 进制颜色
   * @returns {string}
   */
  var randomColor = function randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
  };

  /**
   * 生成指定范围随机数
   * @param   {number} min 最小值
   * @param   {number} max 最大值
   * @returns {number}
   */
  var randomNum = function randomNum(min, max) {
    if (min === void 0) {
      min = 0;
    }

    if (max === void 0) {
      max = 1;
    }

    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  /**
   * 判断是否为邮箱地址
   * @param   {string} str
   * @returns {boolean}
   */
  var isEmail = function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
  };

  /**
   * 判断是否为身份证号
   * @param   {string | number} str
   * @returns {boolean}
   */
  var isIdCard = function isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test("" + str);
  };

  /**
   * 判断是否为手机号
   * @param  {string | number} str
   * @return {boolean}
   */
  var isPhoneNum = function isPhoneNum(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test("" + str);
  };

  /**
   * 判断是否为 URL 地址
   * @param  {string} str
   * @return {boolean}
   */
  var isUrl = function isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
  };

  /**
   * 时间格式化
   * @param   {number} time 毫秒数，默认为当前时间毫秒数
   * @returns {string} 返回格式：YYYY-MM-DD HH:mm:ss
   */
  var timeFormat = function timeFormat(time) {
    if (time === void 0) {
      time = +new Date();
    }

    var date = new Date(time + 8 * 3600 * 1000);
    return date.toJSON().substr(0, 19).replace('T', ' ');
  };

  /**
   * 距离现在已经过去的时间
   * @param startTime {number|string|Date} 开始时间
   * @returns {string} 年前 | 月前 | 天前 | 小时前 | 分钟前 | 刚刚
   */
  var timeFormatPass = function timeFormatPass(startTime) {
    var currentTime = +new Date();
    var time = currentTime - +new Date(startTime);
    var day = parseInt("" + time / (1000 * 60 * 60 * 24));
    var hour = parseInt("" + time / (1000 * 60 * 60));
    var min = parseInt("" + time / (1000 * 60));
    var month = parseInt("" + day / 30);
    var year = parseInt("" + month / 12);
    if (year) return year + '年前';
    if (month) return month + '个月前';
    if (day) return day + '天前';
    if (hour) return hour + '小时前';
    if (min) return min + '分钟前';
    return '刚刚';
  };

  /**
   * 现在距离结束时间的剩余时间
   * @param endTime {number|string|Date} 结束时间
   * @returns `${d}天 ${h}小时 ${m}分钟 ${s}秒`
   */
  var timeFormatRemain = function timeFormatRemain(endTime) {
    var start = +new Date();
    var end = +new Date(endTime);
    var difftime = end - start;
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;

    if (difftime >= 0) {
      d = Math.floor(difftime / 1000 / 3600 / 24);
      h = Math.floor(difftime / 1000 / 60 / 60 % 24);
      m = Math.floor(difftime / 1000 / 60 % 60);
      s = Math.floor(difftime / 1000 % 60);
    }

    return d + "\u5929 " + h + "\u5C0F\u65F6 " + m + "\u5206\u949F " + s + "\u79D2";
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

    if (url.indexOf('?') === -1) {
      return {};
    }

    var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);

    if (search === '') {
      return {};
    }

    search = search.split('&');
    var query = {};

    for (var i = 0; i < search.length; i++) {
      var pair = search[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }

    return query; // const res: IUrlParams = {}
    // const reg: RegExp = /([^?&=]+)=([^?&]+)/g
    // url.replace(reg, (_, k, v) => (res[k] = v))
    // return res
  };

  /**
   * 对象序列化
   * @param obj {IUrlParams} 参数对象
   */
  var urlQueryString = function urlQueryString(obj) {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
      var value = obj[key];

      if (value instanceof Array) {
        for (var i = 0; i < value.length; ++i) {
          var k = encodeURIComponent(key + "[" + i + "]");
          var v = encodeURIComponent(value[i]);
          pairs.push(k + "=" + v);
        }

        continue;
      }

      pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
  };

  // device

  exports.debounce = debounce;
  exports.getExplore = getExplore;
  exports.getOS = getOS;
  exports.getUrlParams = getUrlParams;
  exports.isEmail = isEmail;
  exports.isIdCard = isIdCard;
  exports.isMobile = isMobile;
  exports.isPhoneNum = isPhoneNum;
  exports.isUrl = isUrl;
  exports.milliFormat = milliFormat;
  exports.randomColor = randomColor;
  exports.randomNum = randomNum;
  exports.throttle = throttle;
  exports.timeFormat = timeFormat;
  exports.timeFormatPass = timeFormatPass;
  exports.timeFormatRemain = timeFormatRemain;
  exports.type = type;
  exports.urlQueryString = urlQueryString;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
