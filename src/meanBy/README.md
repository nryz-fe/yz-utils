# meanBy

计算array的平均值，接受 iteratee 来调用 array 中的每一个元素返回参与计算的元素值

## 代码演示

### 基础用法

```js
meanBy([2,3,4])
// => 3

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
meanBy(objects, (e) => e['n']);
// => 5
```

## 参数介绍

meanBy(collection, iteratee)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   collection   |  any[]  |     输入数组     |    -     |
|   iteratee   | Function  |     迭代函数     |    -    |
