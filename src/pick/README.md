# pick

创建一个从 object 中选中的属性的对象

## 代码演示

### 基础用法

```js
var objects = { a: 1, b: 2, c: 7, d: 6 }

pick(objects, function(o) { return o > 5; });
// Expected Return: { c: 7, d: 6 }

pick(objects, ['a', 'c']);
// Expected Return: { a: 1, c: 7 }
```

## 参数介绍

pick(collection, iteratee)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   input   |  string \| number  |     输入字符/数字     |    -     |
|   length   | number  |     返回字符串的长度     |    -    |
|   pad    | boolean | 前缀字符 |  -  |
