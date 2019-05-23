"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test('randomColor', function () {
    var color = index_1.randomColor();
    var reg = /^#([0-9]|[a-f]){6}/;
    expect(color).toMatch(reg);
});
