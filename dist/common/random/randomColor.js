"use strict";
/**
 * @file 随机方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 随机 16 进制颜色
 * @returns {string} 16 进制颜色
 */
exports.randomColor = function () {
    return "#" + Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0');
};
