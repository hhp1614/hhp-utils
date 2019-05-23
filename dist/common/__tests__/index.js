"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils = __importStar(require("../index"));
test('getUrlParams', function () {
    var url = 'http://hhp1614.com/?name=admin&pass=123';
    var res = {
        name: 'admin',
        pass: '123',
    };
    expect(utils.getUrlParams(url)).toEqual(res);
});
