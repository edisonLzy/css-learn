# transform


## origin

> transform-origin `相对于当前设置该属性的元素的位置`

## rotate
> 旋转的时候，元素相对的`坐标轴也会跟着一起旋转`。注意旋转的`顺序问题`

**2d**
> rotateX(angle)(angle) | rotateZ(angle) 

**3d**

> rotate3D(x,y,z,angle) x,y,z(`3个向量`) 确定在三维坐标轴上面的旋转轴

## scale

1. 伸缩的此元素 `坐标轴的刻度`,而不是改变 元素的大小
2. scale 叠加

```css
transform:scale(.5,.5) scale(3,3); 
/* 等同于 */
transform:scale(1.5,1.5); 
```
3. rotate的坐标轴 是否会跟着 scale的轴旋转
4. `scale会保留影响` : 雁过留声

- [] 先scale 后scale的区别

## skew

1. 用法
> transform:skew(y轴倾斜角度,x轴倾斜角度)

```css
transform:skew(ydeg,xdeg)
```

2. 坐标轴被倾斜 以及 拉伸
## 3d视图

> perspective:像素值

> transform-style:preserve-3d

# get
1. 角度单位 `ture` 表示 一圈