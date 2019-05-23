/**
 * @file URL 方法
 */
define('modules/url', ['require', 'exports'], function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  /**
   * 获取 URL 参数对象
   * @param url {string} URL，默认为当前 RUL
   * @returns {IUrlParams} URL 参数对象
   */
  exports.getUrlParams = function(url) {
    if (url === void 0) {
      url = window.location.href;
    }
    var res = {};
    var reg = /([^?&=]+)=([^?&]+)/g;
    url.replace(reg, function(_, k, v) {
      return (res[k] = v);
    });
    return res;
  };
});
/**
 * @file 随机方法
 */
define('modules/random', ['require', 'exports'], function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  /**
   * 随机 16 进制颜色
   * @returns {string} 16 进制颜色
   */
  exports.randomColor = function() {
    return (
      '#' +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0')
    );
  };
});
define('index', ['require', 'exports', 'modules/url', 'modules/random'], function(require, exports, url_1, random_1) {
  'use strict';
  function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
  Object.defineProperty(exports, '__esModule', { value: true });
  __export(url_1);
  __export(random_1);
});
