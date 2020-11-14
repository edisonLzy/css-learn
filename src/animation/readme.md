# animation & transition

## transition 

> 设置状态过渡  

```scss
.div
{
    transition:
    {
        property:all,
        duration:1s,
        timing-function:ease,
        delay:0s
    }
}

// 如何利用 scss来 设置多个过渡属性
```

## 贝塞尔曲线
> `cubic-bezier(x1,y1,x2,y2)` x,y表示两个控制点 ，y轴坐标 可以为 负，但x轴始终为正

## animation

# get 

1. 利用贝塞尔曲线 是否可以实现缓冲动画
> 贝塞尔曲线接 可以反应 `物体的运动状态` 所以可以实现
2. hover 一个元素作用于兄弟元素 `只要是有效的选择器即可`

```scss

$transition:all .5s;
.root{
    .title{
        cursor: pointer;
        color:lightgrey;
        transition: $transition;
        &:hover + .square{
            // 作用于兄弟元素 
            width:100px;
        }
        .sub-title{
            color: aqua;
        }
        &:hover .sub-title{
            // 作用于 子元素
            color: gold;
        }
    }

    .square{
        cursor:move;
        width:50px;
        height: 50px;
        color: lightpink;
        transition: $transition;
        background:{
            color: currentColor;
        }
    }

}






```