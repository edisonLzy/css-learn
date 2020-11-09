# css3 新增选择器 

## relationship selectors 

**E + F**
> 下一个 满足条件(`F`)的 `直接兄弟元素节点`

**E ~ F**
> 下一系列 满足条件(`F`)的 `兄弟元素节点`

**E > F**

## attribute selectors

**~**
> 包含指定的属性值,则选中

**|**
> 选中以某个`值`开头 或者 `值-` 开头

**^**
> 以 指定 value开头

**$**
> 以 指定 value结尾

** * **
> 存在 指定的值则选中

## pseude-element selectors

**E::placeholder**

> 可用于改变 input中的placeholder的文本颜色

**E::selection**

> 用于 控制光标选中文本 的样式

```css
/* 只能写以下属性 */
color
background-color
text-shadow
```

# get

1. 并列选择器