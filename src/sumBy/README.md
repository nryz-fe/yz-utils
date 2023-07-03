# meanBy

计算array的总和，接受 iteratee 来调用 array 中的每一个元素返回参与计算的元素值

## 代码演示

### 基础用法

```js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

sumBy(objects, function(o) { return o.n; });
// Expected Return: 20

sumBy(objects, 'n');
// Expected Return: 20
```

## 参数介绍

meanBy(collection, iteratee)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   input   |  string \| number  |     输入字符/数字     |    -     |
|   length   | number  |     返回字符串的长度     |    -    |
|   pad    | boolean | 前缀字符 |  -  |
