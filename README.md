# leeTemplate-ts

## title
>  title取值与package.json 的 name字段

## Git Commit Message
> 规范Git提交说明，提交规则需要符合 AngularJs规范
- [x] 安装
> npm install -g commitizen
- [x] 初始化
> commitizen init cz-conventional-changelog --save --save-exact
## css工程化 - postcss
>  postcss-loader 自动补充前缀 [官网](https://www.postcss.com.cn/)
 - [x]  安装 
 > cnpm i postcss-loader -D 
 - [x] 新增配置文件
 > 新增 postcss.config.js
 - [x] 新增预设的插件
 > cnpm i postcss-preset-env -D

## css工程化 - stylelint

> 校验样式文件的书写规范
- [x] 安装 
> cnpm i -D stylelint stylelint-config-standard
- [x] 新增配置文件
> 新增 .stylelintrc 文件
- [x] 修改 postcss.config.js 配置

## js工程化  - babel

## js工程化  - eslint
 - [x] 安装 
 > eslint-loader eslint
 - [x] 初始化 
 > eslint -- init

## js工程化  - typescirpt
> ts-loader typescript
## 图片处理 
> url-loader

## public目录处理 
> copy-webpack-plugin
## 浏览器兼容范围设置 
> 新增 .browerslistrc 文件
```
last 2 version // 兼容近期的两个版本
> 1% // 兼容用户大于1%的浏览器
not ie <=8 // 不兼容ie 8 以下的版本
```

# 问题记录


1. scss中的背景图片引入问题 