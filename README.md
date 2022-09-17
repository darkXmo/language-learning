# jd-h5 要素收集表 H5 开发

吴江区法院 裁判文书生成系统 要素收集表 H5 开发。

该项目为 `Version: 2.0`， `Version: 1.0` 可参照[该仓库](https://git2.aegis-info.com/xuzhile/jd-h5)

## 使用技术

`Vue3` + `Vite` + `Typescript` + `Vant` + `cal-rule`

![](https://img.shields.io/badge/vue-%5E3.2.39-brightgreen)
![](https://img.shields.io/badge/typescript-%5E4.8.3-brightgreen)
![](https://img.shields.io/badge/vite-%5E3.1.1-brightgreen)
![](https://img.shields.io/badge/vant-%5E3.6.2-brightgreen)
![](https://img.shields.io/badge/cal-rule-%5E0.4.1-brightgreen)

## 开发环境说明

```bash
pnpm i
```

## 运行和部署

运行

```bash
npm run dev
```

部署

```bash
npm run build //正式环境
```

## 分支说明

| 分支    | 说明     | 状态   |
| ------- | -------- | ------ |
| master  | 正式分支 | 使用中 |
| develop | 开发分支 | 使用中 |

## 项目文档

[需求文档](https://doc.weixin.qq.com/doc/w3_AD8A4QY1AD09I8nR4z0Th2yVy52ls?scode=AMMACgfAAAc9t0uk6BAD8A4QY1AD0&version=4.0.6.6516&platform=win)
[接口文档](https://doc.weixin.qq.com/doc/w3_AHcAmQbhAJwLD4ltCVpRkuTEqQrgU?scode=AMMACgfAAAcN4kaew7AHcAmQbhAJw&version=4.0.3.6007&platform=win)

## 项目模块和依赖备注

1. 项目使用 vant3 ui 库
2. 项目使用了`unplugin-auto-import`和`unplugin-vue-components`自动引入变量，这意味着你可以直接使用`ref`和`reactive`以及`useRoute`和`useRouter`等`api`而不需要手动引入。
3. 项目主要内容在`src/modules`文件夹中，以模块化形式进行开发。
4. 项目前后端对接内容在`src/api`文件夹中。
5. `auto-imports.d.ts`和`components.d.ts`为自动生成的内容，当出现依赖变更或引入新组件的时候就会更新。

## 注意事项

由于前端的需求已发生变更，跟蓝湖的设计会存在较大的出入，以项目内容为主。

## 项目负责人

- 设计： 周莉萍
- 前端： 徐志乐(当前项目负责人)
- 后端： 郝昇

## 环境和相关资料说明

- [接口文档](https://doc.weixin.qq.com/doc/w3_AHcAmQbhAJwLD4ltCVpRkuTEqQrgU?scode=AMMACgfAAAcN4kaew7AHcAmQbhAJw&version=4.0.3.6007)

- [蓝湖地址-v1](https://lanhuapp.com/web/#/item/project/stage?tid=21632454-d79f-4464-a251-9e1bfe1cdb16&pid=c37e032c-850b-494f-8115-c0a37f29a330)

- [蓝湖地址-v2](https://lanhuapp.com/web/#/item/project/stage?pid=c37e032c-850b-494f-8115-c0a37f29a330&focusItem=1b7b532d-71c7-4ed3-840c-bde8939566e7&from=search)

- [测试环境地址](http://t-pc-jdgs.aegis-info.com/)

- [内网测试环境地址](https://ai.szwjfy.gov.cn/)
