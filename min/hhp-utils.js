define('modules/url', ['require', 'exports'], function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
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
define('index', ['require', 'exports', 'modules/url'], function(require, exports, url_1) {
  'use strict';
  function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
  Object.defineProperty(exports, '__esModule', { value: true });
  __export(url_1);
});
