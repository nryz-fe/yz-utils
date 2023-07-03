# countBy

记录collection中每个元素执行迭代函数（iteratee）之后返回的不同结果的次数，key为返回结果，key对应的值为返回结果的次数。

iteratee为string时，视为读取元素属性  
iteratee为其他值时，视为undefined
## 代码演示

### 基础用法

```js
countBy(['8', 'y', '10', '88', 'y'])
// => {8: 1, 10: 1, 88: 1, y: 2}

countBy(['one', 'two', 'three'], 'length')
// => {3: 2, 5: 1}

countBy([6.1, 4.2, 6.3], Math.floor)
// => {4: 1, 6: 2}
```

## 参数介绍

countBy(collection, iteratee)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   collection   |  any[]  |     输入数组     |    -     |
|   iteratee   |  Function \| string  |     迭代函数 \| 元素属性key     |    -    |
