/**
 * @file URL 参数对象
 */
/**
 * 获取 URL 参数对象
 * @param url {string} URL，默认为当前 RUL
 * @returns {IUrlParams} URL 参数对象
 */
export var getUrlParams = function (url) {
    if (url === void 0) { url = window.location.href; }
    var res = {};
    var reg = /([^?&=]+)=([^?&]+)/g;
    url.replace(reg, function (_, k, v) { return (res[k] = v); });
    return res;
};
