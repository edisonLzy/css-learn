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



**timing-function:steps**

> `逐帧动画`： 以跳转的形式来实现动画 而非 transition 过渡的效果

1. start:保留下一帧的状态，直到这段时间结束
2. end:保留当前帧的状态，直到这段时间结束
```css
/* 第一个参数 控制 每一个状态之间 变化的次数 */
animation:name 4s steps(10,[start|end])
/* 特殊值 */
steps(1,end) === step-end;
steps(1,start) === step-start;
```

**局限性**

1. animation不能实现 每一段运动状态不一样的动画
2. 实现曲线运动比较困难



**demo**
1. 打字效果实现
> 使用 monospace 保证每一个字母占用的空间都是一致的
2. 钟表效果
3. 跑马效果
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
7. transform-origin 相对于自身定位
8. attr 属性可以做什么