(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.hhpUtils = {}));
}(this, function (exports) { 'use strict';

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

  exports.getUrlParams = getUrlParams;
  exports.randomColor = randomColor;
  exports.type = type;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
