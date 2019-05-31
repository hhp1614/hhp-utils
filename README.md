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
import { getUrlParams } from 'hhp-utils'

const url = 'https://hhp1614.com/?name=hhp1614&pass=1234'
const urlParams = getUrlParams(url)

console.log('urlParams', urlParams)
```

```ts
// 全部引入
import * as hhpUtils from 'hhp-utils'

const url = 'https://hhp1614.com/?name=hhp1614&pass=1234'
const urlParams = hhpUtils.getUrlParams(url)

console.log('urlParams', urlParams)
```

- 浏览器使用

直接下载 `dist` 目录下的 [`hhp-utils.min.umd.js`](https://github.com/hhp1614/hhp-utils/blob/master/dist/hhp-utils.min.umd.js) 或者 [`hhp-utils.umd.js`](https://github.com/hhp1614/hhp-utils/blob/master/dist/hhp-utils.umd.js) 使用

```html
<script src="https://github.com/hhp1614/hhp-utils/blob/master/dist/hhp-utils.min.js"></script>
<script>
  const url = 'https://hhp1614.com/?name=hhp1614&pass=1234'
  const result = hhpUtils.url.getUrlParams(url)
  console.log(result)
</script>
```

## 目录

- [`device`](#device)
  - [`getExplore`](#getExplore) 返回浏览器类型及版本
  - [`getOS`](#getOS) 返回操作系统类型
  - [`isMobile`](#isMobile) 是否为移动端
- [`format`](#format)
  - [`milliFormat`](#milliFormat) 数字千位分隔符
- [`random`](#random)
  - [`randomColor`](#randomColor) 返回指定范围随机数
  - [`randomNum`](#randomNum) 返回随机数
- [`regexp`](#regexp)
  - [`isEmail`](#isEmail) 判断是否为邮箱地址
  - [`isIdCard`](#isIdCard) 判断是否为身份证号
  - [`isPhoneNum`](#isPhoneNum) 判断是否为手机号
  - [`isUrl`](#isUrl) 判断是否为 URL 地址
- [`time`](#time)
  - [`timeFormat`](#timeFormat) 时间格式化
  - [`timeFormatPass`](#timeFormatPass) 距离现在已经过去的时间
  - [`timeFormatRemain`](#timeFormatRemain) 现在距离结束时间的剩余时间
- [`type`](#type)
  - [`type`](#type) 返回数据类型
- [`url`](#url)
  - [`getUrlParams`](#getUrlParams) 获取 URL 参数对象

## API

### `device`

#### `getExplore`

获取浏览器类型及版本，不传参数则默认为当前浏览器 UA

返回类型：`IE`、`EDGE`、`Firefox`、`Chrome`、`Opera`、`Safari`、`Unkonwn`

```ts
interface IExplore {
  type: string
  version: string
}
getExplore(ua: string = navigator.userAgent): IExplore

// 例子
import { getExplore } from 'hhp-utils'

getExplore()
```

#### `getOS`

获取当前操作系统类型

返回值：`MacOSX`、`windows`、`linux`、`ios`、`android`、`windowsPhone`、`Unkonwn`

```ts
getOS(): string

// 例子
import { getOS } from 'hhp-utils'

getOS()
```

#### `isMobile`

判断是否为移动端，不传参数则默认为当前浏览器 UA

```ts
isMobile(ua: string = navigator.userAgent): boolean

// 例子
import { isMobile } from 'hhp-utils'

isMobile()
```

### `format`

#### `milliFormat`

数字千位分隔符

```ts
milliFormat(value: string | number, fixed?: number): string

// 例子
import { milliFormat } from 'hhp-utils'

milliFormat(123456) // => 123,456
milliFormat(123456.789, 2) // => 123,456.79
```

| 参数    | 类型              | 说明                |
| ------- | ----------------- | ------------------- |
| `value` | `number | string` | 传入的值            |
| `fixed` | `number`          | 保留 `fixed` 位小数 |

### `random`

#### `randomColor`

返回随机颜色，如 `#a1b2c3`

```ts
randomColor(): string

// 例子
import { randomColor } from 'hhp-utils'

const color = randomColor()
```

#### `randomNum`

返回指定范围随机数

```ts
randomNum(min: number, max: number): number

// 例子
import { randomNum } from 'hhp-utils'

const num = randomNum(10, 20)
```

| 参数  | 类型     | 默认值 |
| ----- | -------- | ------ |
| `min` | `number` | `0`    |
| `max` | `number` | `1`    |

### `regexp`

#### `isEmail`

判断是否为邮箱地址

```ts
isEmail(str: string): boolean

// 例子
import { isEmail } from 'hhp-utils'

isEmail('hhp1614@gmail.com') // true
```

#### `isIdCard`

判断是否为身份证号

```ts
isIdCard(str: string | number): boolean

// 例子
import { isIdCard } from 'hhp-utils'

isIdCard(123456789012345678) // false
```

#### `isPhoneNum`

判断是否为手机号

```ts
isPhoneNum(str: string | number): boolean

// 例子
import { isPhoneNum } from 'hhp-utils'

isPhoneNum(12345689012) // false
```

#### `isUrl`

判断是否为 URL 地址

```ts
isUrl(str: string): boolean

// 例子
import { isUrl } from 'hhp-utils'

isUrl('https://hhp1614.com') // true
```

### `time`

#### `timeFormat`

时间格式化，返回格式：YYYY-MM-DD HH:mm:ss

```ts
timeFormat(time: number = +new Date()): string

// 例子
import { timeFormat } from 'hhp-utils'

const time = +new Date('2019-5-27 18:5:35')
timeFormat(time) // 2019-05-27 18:05:35
```

| 参数   | 类型     | 默认值        | 说明                           |
| ------ | -------- | ------------- | ------------------------------ |
| `time` | `number` | `+new Date()` | 毫秒数，默认为当前时间的毫秒数 |

#### `timeFormatPass`

距离现在已经过去的时间，返回：年前 | 月前 | 天前 | 小时前 | 分钟前 | 刚刚

```ts
timeFormatPass(startTime: number | string | Date): string

// 例子
import { timeFormatPass } from 'hhp-utils'

const time = +new Date()
// const time = new Date()
// const time = '2019-5-30 18:41:35'
timeFormatPass(time) // 刚刚
```

| 参数        | 类型                       | 默认值 | 说明               |
| ----------- | -------------------------- | ------ | ------------------ |
| `startTime` | `number`、`string`、`Date` |        | 距离现在的开始时间 |

#### `timeFormatRemain`

现在距离结束时间的剩余时间，返回：`${d}天 ${h}小时 ${m}分钟 ${s}秒`

```ts
timeFormatRemain(endTime: number | string | Date): string

// 例子
import { timeFormatRemain } from 'hhp-utils'

timeFormatRemain(1559318400000)
timeFormatRemain('2019-6-1')
timeFormatRemain('2019-6-1 9:30:00')
timeFormatRemain(new Date('2019-6-1'))
```

| 参数      | 类型                       | 默认值 | 说明               |
| --------- | -------------------------- | ------ | ------------------ |
| `endTime` | `number`、`string`、`Date` |        | 距离现在的结束时间 |

### `type`

#### `type`

返回数据类型

返回值：`number`、`string`、`boolean`、`undefined`、`null`、`object`、`array`、`date`、`error`、`regexp`、`function`、`math`、`json`、`symbol`

```ts
type(value: any): string

// 例子
import { type } from 'hhp-utils'

const numType = type(123) // 'number'
const arrType = type([]) // 'array'
```

### `url`

#### `getUrlParams`

获取 URL 参数对象，不传参数则默认使用 `window.location.href`

```ts
getUrlParams(url = window.location.href): string

// 例子
import { getUrlParams } from 'hhp-utils'

const urlParams = getUrlParams('https://hhp1614.com/?name=hhp1614&pass=1234')
console.log('urlParams', urlParams)
// => { name: 'hhp1614', pass: '1234' }
```

## 说明

本项目使用 `typescript` 开发，编译采用 `UMD`、`ESNext` 模块规范。

使用 `mocha` + `chai` + `ts-node` 进行单元测试.
