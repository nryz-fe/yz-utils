# flatMap

根据深度，递归扁平化执行迭代函数（iteratee）之后的数组元素

## 代码演示

### 基础用法

```js
flatMapDepth([[[2]],3,[5,9],[[[1],3],8,9],10])
// =>  [[2], 3, 5, 9, [[1],3], 8, 9, 10]

flatMapDepth([[[2]],3,[5,9],[[[1],3],8,9],10], 2, (e) => typeof(e) === 'number' ? e * 2 : e)
// => [2, 12, 10, 18, [1], 3, 16, 18, 40]


```

## 参数介绍

flatMapDepth(collection, iteratee, depth = 1)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   collection   |  any[]  |     输入数组     |    -     |
|   depth    | number | 扁平深度 |  1  |
|   iteratee   | Function  |     迭代函数     |    -    |
