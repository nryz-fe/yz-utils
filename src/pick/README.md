# pick

创建一个从 object 中选中的属性的对象

## 代码演示

### 基础用法

```js
var objects = { a: 1, b: 2, c: 7, d: 6 }

pick(objects, function(o) { return o > 5; });
// => { c: 7, d: 6 }

pick(objects, ['a', 'c']);
// => { a: 1, c: 7 }
```

## 参数介绍

pick(collection, iteratee)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   obj   |  Record\<string, any\>  |     输入对象     |    -     |
|   iteratee   |  Function \| string[]  |     迭代函数 \| 保留的属性key数组     |    -    |
