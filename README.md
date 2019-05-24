# hhp-utils

代码工具库

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
import { url } from 'hhp-utils';

const u = 'https://hhp1614.com/?name=hhp1614&pass=1234';
const urlParams1 = url.getUrlParams(u);
console.log('urlParams1', urlParams1);

// 全部引入
import hhpUtils from 'hhp-utils';

const url = 'https://hhp1614.com/?name=hhp1614&pass=1234';
const urlParams2 = hhpUtils.getUrlParams(url);
console.log('urlParams2', urlParams2);
```

- 浏览器使用

直接下载 `dist/web` 目录下的 [`hhp-utils.min.js`](https://github.com/hhp1614/hhp-utils/blob/master/dist/hhp-utils.min.js) 使用

```html
<script src="https://github.com/hhp1614/hhp-utils/blob/master/dist/hhp-utils.min.js"></script>
<script>
  const url = 'https://hhp1614.com/?name=hhp1614&pass=1234';
  const result = hhpUtils.url.getUrlParams(url);
  console.log(result);
</script>
```

## 目录

- [`url`](#`url`)

  - [`getUrlParams`](#`getUrlParams`): 获取 URL 参数对象

* [`random`](#`random`)

  - [`randomColor`](#`randomColor`): 返回随机颜色

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
