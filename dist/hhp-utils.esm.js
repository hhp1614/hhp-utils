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

export { getUrlParams, randomColor };
