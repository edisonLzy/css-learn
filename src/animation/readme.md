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

1. 过渡事件 
2. 利用贝塞尔曲线 是否可以实现缓冲动画