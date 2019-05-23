"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _url = __importStar(require("./modules/url/index"));
var _random = __importStar(require("./modules/random/index"));
exports.url = _url;
exports.random = _random;
exports.default = {
    url: exports.url,
    random: exports.random
};
