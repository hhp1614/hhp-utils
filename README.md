# hhp-utils

代码工具库

- getUrlParams: 获取 URL 参数对象

## 安装使用

1. 直接下载 `min` 目录下的 [hhp-utils.js](https://github.com/hhp1614/hhp-utils/blob/master/min/hhp-utils.js) 使用
2. `npm` 安装

```shell
npm i hhp-utils
```

## 如何使用

```ts
// 按需引入
import { getUrlParams } from 'hhp-utils';
// 全部引入
import * as utils from 'hhp-utils';

const urlParams1 = getUrlParams('https://hhp1614.com/?name=hhp1614&pass=1234');
console.log('urlParams1', urlParams1);

const urlParams2 = getUrlParams('https://hhp1614.com/?name=hhp1614&pass=1234');
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

## 说明

本项目采用[prettier](https://prettier.io/)来统一代码风格，并且会在`pre-commit`前自动 format 你本次提交的代码，推荐你在你的编辑器里安装 prettier 插件，并且开启保存文件就自动 format 选项，这样可以在开发的时候，就能自动 format

本项目采用[git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) 工作流，请按照 git flow 工作流来提交合并代码

推荐使用`yarn commit`来代替`git commit`作为格式化 commit 信息的工具

```shell
yarn commit
```
