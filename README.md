# hhp-utils

代码工具库

- getUrlParams: 获取 URL 参数对象

## 安装使用

1. 直接下载 `min` 目录下的 [hhp-utils.js](https://github.com/hhp1614/hhp-utils/blob/master/min/hhp-utils.js) 使用
2. `npm` 安装

```shell
npm install hhp-utils --save
```

## 如何使用

```ts
// 按需引入（推荐）
import { getUrlParams } from 'hhp-utils';

const urlParams1 = getUrlParams('https://hhp1614.com/?name=hhp1614&pass=1234');
console.log('urlParams1', urlParams1);

// 全部引入
import * as utils from 'hhp-utils';

const url = 'https://hhp1614.com/?name=hhp1614&pass=1234';
const urlParams2 = utils.getUrlParams(url);
console.log('urlParams2', urlParams2);
```

## API

`getUrlParams`: 获取 URL 参数对象，不传参数则默认使用 `window.location.href`

```ts
getUrlParams(url = window.location.href): string;

// 例子
import { getUrlParams } from 'hhp-utils';

const urlParams = getUrlParams('https://hhp1614.com/?name=hhp1614&pass=1234');
console.log('urlParams', urlParams);
// => { name: 'hhp1614', pass: '1234' }
```

`randomColor`: 返回随机颜色，如 `#a1b2c3`

```ts
import { randomColor } from 'hhp-utils';

const color = randomColor();
```
