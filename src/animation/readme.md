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

```scss
.div{
  animation:{
    name:'指定关键帧容器名称','指定关键帧容器名称', // 指定多个动画
    duration:'动画时长'，
    timing-function:'定义每一个段动画的运动状态',
    iteration-count:'动画执行次数 infinite | number',
    direction:'运动方向 reverse | normal | alternate(正执行一次 反执行一次) | alternate-reverse(反执行一次 正执行一次 ) ' ,
    play-state:'兼容性存在问题 可用户控制动画 是否运行 running|pause',
    fill-mode:'设置运动的最终状态 forwards(运动结束之后 保存最后一帧的状态 ) | backwards( 运动开始之前 保存第一帧的状态 ) | both'
  }
}

```
**@keyframes**

> `定义关键帧容器，用于记录运动不同时间点的状态`

```css
@keyframes name {
    0%{
        /* from  */
    } 
    50%{
        /* ... */
    }
    100%{
        /* to */
    }
}
```

**局限性**

1. animation不能实现 每一段运动状态不一样的动画
2. 实现曲线运动比较困难


## 如何选择动画

1. box-shadow的开销较大
2. 避免重绘 和 回流
3. 使用类名的方式来结合 js控制动画的状态
4. 使用 ease-out 或者 ease-in-out 而非 ease 和 ease-in
5. 合理使用 will-change 
6. 动画时间
  ```
    缓出：约 200 毫秒 - 500 毫秒。这让眼睛有机会看到动画，但不会觉得卡顿。
    缓入：约 200 毫秒 - 500 毫秒。请记住，它在结尾将晃动，没有时间量变化将缓和这种影响。
    弹跳或弹性效果：约 800 毫秒 - 1200 毫秒。您需要留出时间让弹性或弹跳效果“停下”。若没有这点额外时间，动画的弹性跳动部分看上去比较有攻击性，让人感觉不舒服。
  ```
# get 

1. 过渡事件 
2. 利用贝塞尔曲线 是否可以实现缓冲动画
> 贝塞尔曲线接 可以反应 `物体的运动状态` 所以可以实现
3. chrome控制面板 中的animation
4. 实现钟摆运动
5. hover 一个元素作用于兄弟元素 `只要是有效的选择器即可`
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
6. background-image 不支持动画
7. pointer-events:none 将阻止 事件穿透