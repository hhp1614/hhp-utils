"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test('getUrlParams', function () {
    var url = 'http://hhp1614.com/?name=admin&pass=123';
    var res = {
        name: 'admin',
        pass: '123',
    };
    expect(index_1.getUrlParams(url)).toEqual(res);
});
