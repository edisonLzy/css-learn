# border

## border-radius

> 复合属性 `border-radius:10px 10px 10px 10px` 

```css

border-radius:10px 10px 10px 10px;
==== 
border-top-left-radius:10px
border-top-right-radius:10px
border-bottom-left-radius:10px
border-bottom-right-radius:10px

==== 
border-top-left-radius:水平方向 垂直方向
border-top-left-radius:10px 10px
border-top-right-radius:10px 10px
border-bottom-left-radius:10px 10px
border-bottom-right-radius:10px 10px

====
border-radius:10px 10px 10px 10px / 10px 10px 10px 10px;

```

**实现 扇形**

**实现 半圆**

## box-shadow

> box-shoadow :[inset] 水平偏移 垂直偏移 模糊范围 扩大范围 颜色，[inset] 水平偏移 垂直偏移 模糊范围 扩大范围 颜色 。。。`设置多个阴影`

```css
box-shadow:inset 0px 0px 10px #fff,
           3px 0px 10px #f0f,
           0px -3px 10px #0ff
```
**模糊范围**

> 基于原来边框的位置 向两边进行模糊衍生


**实现充电效果**

**阴影重叠**

## border-image
> 设置 边框的渲染样式
**border-image-source**
> 支持渐变色  `linear-gradient` | url('指定图片的地址')

**border-image-slice**
> 值是 数字 或者 %

# get

1. calc 符号间 左右必须存在一个 空格
2. border-left-width