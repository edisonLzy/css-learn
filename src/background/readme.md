# background & 渐变

## background-image

> linear-graident | radial-gradient | url() 

```css

/* 添加多张背景图片，可用于图片占位符*/
background-image:
url(source/1.png),url(source/2.png)

```

## background-size
> width height , width height | cover(一张图片填充整个容器，且不会改变原始的图片比例) | contain (一张图片填充容器 `且不会超出`，且不会改变原始的图片比例)

## background-repeat
> `设置背景图片在水平方向 和 垂直方向是否重复` repeat-x | repeat-y | round | space | no-repeat | repeat

```css

```

## background-position
> x y `设置背景图片起始点相对于 origin的偏移`

## background-origin

> `设置图片的开始渲染的起始点，并且决定了 background-position的坐标原点`border-box | content-box |padding-box(默认值)

## background-clip

> `设置图片渲染的结束点，包括临界点区域，超出临界点不显示`border-box(默认值) | content-box |padding-box | text

```css
/* 根据文本 截取背景图片 */
-webkit-background-clip:text;
background-clip:text;
-webkit-text-fill-color:transparent;
text-fill-color:transparent;
```
## background-attachment
>  scroll(默认相对于容器定位) | local(相对于内容定位) | fixed(相对于`视口`定位) 结合 `position 属性进行定位`


## linear-gradient 
> 线性 渐变 | (to direction | 0deg ,color1 [endPoint1],color2 [endPoint2] ...)


## radial-gradient 
> 径向 渐变 | ([circle|ellipse] [farthest-slide | farthest-corner |  closest-slide | closest-corner] [ at x,y],color1 [endPoint1] ,color2 [endPoint2] )


# get

1. 主要内容 必须 使用img 标签进行呈现
2. overflow:scroll 设置超出部分出现滚动条
3. currentColor(中转颜色) 计算当前样式作用域中 color属性的值 
4. url-loader 处理css 背景图片路径的问题
> https://stackoverflow.com/questions/48475500/webpack-scss-how-to-work-with-image-paths