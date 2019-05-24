# hhp-utils

代码工具库

为避免在不同项目中多次复制粘贴，这里把日常可能会使用到的函数整合起来，统一封装，并发布到 npm。

## 安装

1. `npm` 或 `yarn` 安装

```shell
# npm
npm install hhp-utils --save
# yarn
yarn add hhp-utils --save
```

## 如何使用

- `npm` 安装

```ts
// 按需引入（推荐）
import { getUrlParams } from 'hhp-utils';

const url = 'https://hhp1614.com/?name=hhp1614&pass=1234';
const urlParams = getUrlParams(url);

console.log('urlParams', urlParams);
```

```ts
// 全部引入
import * as hhpUtils from 'hhp-utils';

const url = 'https://hhp1614.com/?name=hhp1614&pass=1234';
const urlParams = hhpUtils.getUrlParams(url);

console.log('urlParams', urlParams);
```

- 浏览器使用

直接下载 `dist` 目录下的 [`hhp-utils.min.umd.js`](https://github.com/hhp1614/hhp-utils/blob/master/dist/hhp-utils.min.umd.js) 或者 [`hhp-utils.umd.js`](https://github.com/hhp1614/hhp-utils/blob/master/dist/hhp-utils.umd.js) 使用

```html
<script src="https://github.com/hhp1614/hhp-utils/blob/master/dist/hhp-utils.min.js"></script>
<script>
  const url = 'https://hhp1614.com/?name=hhp1614&pass=1234';
  const result = hhpUtils.url.getUrlParams(url);
  console.log(result);
</script>
```

## 目录

- [`url`](#url)

  - [`getUrlParams`](#getUrlParams): 获取 URL 参数对象

- [`random`](#random)

  - [`randomColor`](#randomColor): 返回随机颜色

- [`type`](#type)

  - [`type`](#type): 返回数据类型

## API

### `url`

#### `getUrlParams`

获取 URL 参数对象，不传参数则默认使用 `window.location.href`

```ts
getUrlParams(url = window.location.href): string;

// 例子
import { getUrlParams } from 'hhp-utils';

const urlParams = getUrlParams('https://hhp1614.com/?name=hhp1614&pass=1234');
console.log('urlParams', urlParams);
// => { name: 'hhp1614', pass: '1234' }
```

### `random`

#### `randomColor`

返回随机颜色，如 `#a1b2c3`

```ts
randomColor(): string;

// 例子
import { randomColor } from 'hhp-utils';

const color = randomColor();
```

### `type`

#### `type`

返回数据类型

返回值：`number`、`string`、`boolean`、`undefined`、`null`、`object`、`array`、`date`、`error`、`regexp`、`function`、`math`、`json`、`symbol`

```ts
type(variable: any): string;

// 例子
import { type } from 'hhp-utils';

const numType = type(123); // 'number'
const arrType = type([]); // 'array'
```

## 说明

本项目使用 `typescript` 开发，编译采用 `UMD`、`ESNext` 模块规范。

使用 `mocha` + `chai` + `ts-node` 进行单元测试.
