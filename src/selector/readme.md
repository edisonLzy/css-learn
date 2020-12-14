# css3 新增选择器 

## relationship selectors 

**E + F**
> 匹配 `E紧邻且满足条件(F)`的 `直接兄弟元素节点`，若果直接直接兄弟元素节点,不满足 `条件 F`则不能选中

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


## pseude-class selectors
> `被选中元素的状态`
**selector:not(selector)**
> 处理边界的情况

```css
li:not(:last-of-type){
    /* 选中除了最后一个 li 以外的 li */
}
```

**:root**
> `根标签选择器`,在 html中 等同于 html标签选择器 `其实是包含 html元素`


**E:target**

> 匹配 id和当前锚点匹配(location.hash) 的元素。`实现非js改变元素的状态`

```css
div[id]:not(:target){

}
```

**E:first-child**

**E:last-child**

**E:only-child**

**E:nth-child(n)**
> n 从 0 开始计算 `2n选中偶数项` 
```css
/* 选中第一个 子元素是 p 标签的 p元素 ， 如果第一个子元素不是p 则不能选中 */
p:nth-child(1){

}
```

**E:first-of-type**
> 选中 匹配选择器E 的第一个元素

```css
p:first-of-type{
    /* 选中第一个p */
}
```

**E:last-of-type**
> 选中 匹配选择器E 的第一个元素

```css
p:last-of-type{
    /* 选中 最后一个p */
}
```

**E:only-of-type**

**E:nth-of-type(n)**

**E:nth-of-last-type(n)**

**E:empty**
> 选中 匹配选择器E 且是没有元素内容的元素 。`注释节点也算empty`

**E:checked**
> input ` type = 'checkbox'` 选中 将会添加该 伪类


**E:enabled**
> 可用于 控制非disabled状态的 input 元素等 

**E:disabled**
> 可用于 控制 disabled状态的 input 元素等 

**E:readonly**
> 可用于 控制 readonly状态的 input 元素等 

```css
input:read-only{
    
}
```

**E:disabled**
> 可用于 控制 disabled状态的 input 元素等 

# get

1. 并列选择器
2. document.querySelector 选中第一个满足条件的元素
3. ul>li{content}
