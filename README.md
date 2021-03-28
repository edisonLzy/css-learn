# 《css 世界》学习总结

## 第二章 术语和概念

### 属性

> width height ...

### 值

**整数值**

```css
z-index: 1;
```

**数值**

```css
line-height: 1.5;
```

**百分比值**

```css
width: 100%;
```

**长度值**

```css
width: 100px;
```

**颜色值**

```css
color: #999;
```

### 关键字

> css 里面很关键的 `单词`

```css
/* solid */
border: 1px solid #ddd;
/* transparent */
color: transparent;
/* inherit */
font-size: inherit;
/* 等等。。。 */
```

### 变量

```css
/* currentColor:使用该变量的元素的最近父元素color属性的值 */
.parent {
  color: red;

  .child {
    /* color:red */
    color: currentColor;
  }
}
```

### 长度单位

**相对字体长度单位**

> em ex rem ch

**相对视口长度单位**

> vw vh vmin vmax

**绝对长度单位**

> px pt cm mm pc

### 功能符

**颜色功能符**

```css
/* rgba */
color:rgba(0, 0, 0, 1)
/* hsla */
color:hsla(120, 100%, 50%, 0.3)
```

**背景地址**

```css
background-image: url('xxx');
```

**attr**

> 目前只能作用于 在 `伪元素的content属性`

```html
<div data-id="123" class="container"></div>
```

```css
.container::after {
  /* content:123 */
  content: attr(data-id);
}
```

**calc**

> 注意操作数之间的空格

```css
width: calc(100px - 50px);
```

**transform 的变化属性**

### 属性值

> 属性冒号后面的所有内容的统一称呼

### 声明

> 属性名: 属性值

```css
color: red;
```

### 声明块

> {} 包括的一系列声明

```css
 {
  color: red;
  font-size: 12px;
}
```

### 规则或规则集

> 选择器 + 声明块

<<<<<<< HEAD
``` css
.parent {
    color: red;
    font-size: 12px;
=======
```css
.parent {
  color: red;
  font-size: 12px;
>>>>>>> f62bdd4cc6a8d395119124c1915653a1d1734334
}
```

### 选择器(后续单独研究)

> 用于 `定位` 规则作用的 `html元素`

```css
/* 类选择器 */
.parent {
}

/* ID选择器 */
#parent {
}

/* 属性选择器 */
[title^='css'] {
}

/* 伪类选择器 */
:first-child {
}

/* 伪元素选择器 */
::after {
}
```

### @规则

> 媒体查询:https://www.runoob.com/cssref/css3-pr-mediaquery.html

```css
/* @media 媒体查询*/
@media mediatype and|not|only (media feature) {
}

/* @font-face */
@font-face {
  /* font-properties */
}
```

### 未定义行为

> web 标准描述以外的场景. 各大厂商按照自己的理解去实现 , 所以会出现的行为差异。

## 流、元素与基本尺寸

### 块级元素(block-level element)

> 水平流上只能 `显示一个块级元素`

```css
/* display 值 为👇几种值的元素 */
display: block;
/* ie 不支持伪元素的 display的值为 list-item */
display: list-item;
display: table;
```

**配合 clear 清楚浮动带来的影响**

> 不是太明白

```css
.clear::after {
  content: '';
  display: block;
  clear: both;
}
```

#### css 中的盒子

**标记盒子(marker box)**

> 块级元素 = 块级盒子 + `可选的标记盒子` 。标记盒子用于存放 圆点 , 数字等项目符号。

```css
/* list-item前面的 点符号 就是 一个标记盒子 */
display: list-item;
```

**外在盒子和内在盒子**

> 元素 = 外在盒子(用于控制元素是否可以一行显示) + 内在盒子(容器盒子, 负责元素宽高, 内容的呈现)

```css
/* display:inline-block:可以解释为该元素由外在的 内联盒子 以及 内在的块级容器盒子组成 */
display: inline-block;
```

```css
/* 实现图文并排的表格 */
.inline-table {
  display: inline-table;
  width: 120px;
  margin-right: 10px;
}
```

### width/height 的作用细节

> width/height 都是作用于 元素的容器盒子上。

#### width:auto

> auto: 是 width 属性的默认值 , 且至少具有 👇 几种宽度表现

**充分利用可用空间(fill-available)**

> `<div> <p>` 等元素 默认是 100%于父级容器

**shrink to fit**

> 即元素的大小由内容决定。css3 中的 `fit-content` 即使如此。
>
> 具体代表元素为: 浮动, 绝对定位，inline-block, table 元素

**收缩到最小(min-content)**

> 最小的内容宽度， `主要表现在图文布局的时候` 。

**超出容器限制(max-content)**

> 内容很长的连续英文或者数字, 或者内联元素的 `white-space:nowrap;` , 则子元素的宽度可能会超过父元素

```html
<div class="parent">
  <div data-id="30px" class="child"></div>
</div>
```

```css
.father {
  width: 150px;
  /* 该属性会被传递给子元素 */
  white-space: nowrap;

  .child {
    display: inline-block;
  }
}
```

##### 内部尺寸和外部尺寸

> 内部尺寸: 元素的尺寸由内部元素决定
>
> 外部尺寸: 元素的尺寸由外部元素决定

**外部尺寸与流体特性**

> 表现为外部尺寸的块级元素一旦设置了宽度，流动性就会丢失

**正常流宽度**

```html
<div class="parent">
  <div data-id="30px" class="child"></div>
</div>
```

```css
.father {
  width: 250px;

  .child {
    /* 该元素的宽度将表现为 240px */
    width: 200px;
    padding: 0x 20px;
  }
}
```

**格式化宽度**

> 表现在绝对定位模型中(fixed, absolute), 默认情况下 绝对定位的元素表现为包裹性， `但是当设置了对角属性的时候表现为格式化宽度`

```html
<div class="parent">
  <div data-id="30px" class="child"></div>
</div>
```

```css
.parent {
  width: 200px;
  height: 300px;
  padding: 20px;
  position: relative;

  .child {
    position: absolute;
    /* 该元素的宽度将铺满父元素 */
    left: 0;
    right: 0;
  }
}
```

**内部尺寸与流体特性**

**包裹性**

> 即元素的大小由内部元素决定, 且永远小于包含块的容器元素

```html
<div class="parent">
  <!-- 默认情况下 连续的英文字符是不会被截断的. word-break: break-all;-->
  <div data-id="30px" class="child">
    asdasdhasjdhjakshd asdjhjashdkj ajshdjkashd sajdhjashd asd jkashd
  </div>
</div>
```

**首选最小宽度**

> 即当 width:0 的时候, 元素的最小宽度为一个中文的宽度或者一个连续英文字符单元的宽度

**最大宽度**

> 即元素可以有的最大宽度。如果元素内部没有块级元素或者块级没有设置宽度( `设置的宽度下雨最大连续内连盒子的宽度` ), 则 `最大宽度` 是最大的连续内联盒子的宽度

```css
<div class="parent"><span>1</span><span>2</span><span>1</span><span>2</span><span>1</span><span>2</span><span>1</span><span>2</span><p>hh</p></div>
```

```css
.parent {
  /* parent 的最大宽度将表现为 span盒子的width 总和值 */
  background-color: aquamarine;
  display: inline-block;

  p {
    /*如果p 设置的宽度大于连续span的宽度 则最大宽度为 100px*/
    width: 100px;
  }
}
```

#### width 具体值的作用细节

> width 设置具体值默认作用在 content-box 上面。可以通过 box-sizing 来控制 width 作用的具体盒子

```css
box-sizing: padding-box|border-box|content-box;
```

**宽度分离原则**

> 即设主了 width 的元素, 通常不设置 margin 或者 padding 等值。而包裹一层元素来解决, 避免流动性丢失

```html
<div class="parent">
  <div class="child">1</div>
</div>
```

```css
.parent {
  width: 200px;

  .child {
    padding: 20px;
    margin: 20px;
  }
}
```

**box-sizing 发明的初衷**

> 解决 `替换元素` 宽度自适应的问题.

```css
/* 替换元素的宽度 始终由内部元素决定 */
input,
textarea,
img,
video,
object {
  box-sizing: border-box;
}
```

```html
<div class="parent">
    <input type="text" class="child">
    <textarea type="text" class="child">
</div>
```

```css
.parent {
  width: 200px;

  .child {
    /* 让 input 元素和 textarea元素的宽度保持为 200px */
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
  }
}
```

#### height:auto

> 元素高度由内部元素决定

**height:100%**

> height:100% 要生效，其父级必须要有一个可以生效的高度值或者使用绝对定位

```html
<div class="ancestor">
  <div class="parent">
    <div class="child"></div>
  </div>
</div>
```

```css
/* 父有可以生效的高度值 ，且按照content-box计算 */
.ancestor {
  position: relative;
  height: 100px;

  .parent {
    width: 200px;
    height: 200px;
    padding: 20px;

    .child {
      width: 40px;
      height: 100%;
      /* 200px */
      background: red;
    }
  }
}
```

```html
<div class="ancestor">
  <div class="parent">
    <div class="child"></div>
  </div>
</div>
```

```css
/* 绝对定位:100% 相对于 最近的定位元素的高度进行计算。且按照padding-box计算  */
.ancestor {
  position: relative;
  height: 100px;
  padding: 20px;

  .parent {
    width: 200px;
    height: 200px;

    .child {
      position: absolute;
      width: 40px;
      height: 100%;
      /* 140px */
      background: red;
    }
  }
}
```

**利用包裹性和绝对定位实现，内容由图片撑开，高度 100%的切换区域的效果**

```html
<div class="banner">
  <a href="#" class="prev">prev</a>
  <a href="#" class="next">next</a>
  <img src="../../public/images/husky.jpg" alt="" />
</div>
```

```css
.banner {
  position: relative;
  display: inline-block;

  .prev,
  .next {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    text-align: center;
  }

  .prev {
    left: 0;
    background: rgba(255, 255, 255, 0.5);
  }

  .next {
    right: 0;
    background: rgba(240, 23, 23, 0.5);
  }
}
```

### min-width/max-width/min-height/max-height

#### 默认值

**min-**

> 默认值为 auto

**max-**

> 默认值为 none

#### 超越!important

> 设置了 max-width 都元素, 无论设置了宽度为多少，都以 max-width 的值为准。即会覆盖 width

#### 超越最大

<<<<<<< HEAD
> 当min-width的值大于max-width的时候, 则表现为min-width设置的值

### 内联元素

1. 内联元素指的是 "外在盒子" 
2. 内联元素的特征是可以和文字一行显示

#### 内容区域

1. 指环绕文字看不见的盒子,对于img标签 内容区域可以看成元素自身

2. 内容区域的大小仅由字符本身特性控制

#### 内联盒子

1. 内联盒子又可分为 内联盒子(泛指由内联元素包裹的盒子) 和 匿名内联盒子(泛指被内联元素包裹的光秃秃的文字)

``` html
<!-- 这是一行普通的文字由文字包裹(内联元素) -->
<p>这是一行普通的文字<em>xxx</em></p>
```

#### 行框盒子

1. 由一个一个内联盒子组成的

#### 包含盒子

1. 由一行行的行框盒子组合而成的 包含盒子

#### 幽灵空白节点

1. 内联元素的所有解析和渲染表现就如同`行框盒子`的前面有一个空白节点。

2. 高度表现为 18px,

``` css
span {
    display: inline-block;
}
```

``` html
<!-- 由 <span> 组成的行框盒子存在   幽灵空白节点 -->
<div><span></span></div>
<!-- 由 <img> 组成的行框盒子存在 幽灵空白节点 -->
<div><img /></div>
```

3. 为何同为内联元素的span和img表现形式不一致?

## 第四章 盒尺寸四大家族

### 替换元素

1. 替换元素: 通过修改`某个属性值`呈现的内容就可以被替换的元素。且元素的尺寸`始终由内容决定`。

``` html
<img /> <video></video> <object> <textarea> <input>
```

#### 特征

1. 内容的外观不受页面上 css的影响。可通过`appearance属性`或者暴露的一些样式接口
2. 有自己的尺寸`(通常表现为300*150)`; 
3. 在很多css属性上有自己的一套规则
4. 尺寸始终由内容决定
5. 替换元素不支持伪元素

#### 尺寸计算规则

1. 固有尺寸: 替换元素内容原本的尺寸。比如图片 , 视频的尺寸
2. html尺寸: 通过 html属性 指定的尺寸, 例如 <img width='300' height='300'/>
3. css尺寸: 通过 width , height 等设置元素尺寸的声明设置的尺寸, 对应盒尺寸中 contentbox
4. 作用优先级:css尺寸 -> html尺寸 -> 固有尺寸
5. 如果固有尺寸有长宽比例,且只给定了长或宽中的一个,则另一边按照比计算 

#### 特殊的img元素

1. 空白img标签表现为普通内联元素,带src属性的img标签表现为替换元素

``` html
<!-- chrome 下表现为 200 * 200 -->
<img style="width:200px;height:200px" />
<!-- fireFox 需要指定 img的display 为inline-block ，经测试 不要设置也表现为200 * 200-->
<img style="width:200px;height:200px" />
```

2. 为何 设置 宽高会影响图片的大小展示? 

**图片默认填充整个content 区域: object-fit:fill 。设置的宽高实际作用于content-box 但由于默认填充满所有 图片自然放大**

3. fireFox下存在有效alt属性且没有src属性的img标签的 (after)伪元素有效果
=======
> 当 min-width 的值大于 max-width 的时候, 则表现为 min-width 设置的值
>>>>>>> f62bdd4cc6a8d395119124c1915653a1d1734334
