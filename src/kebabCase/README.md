# kebabCase

转换字符串string为kebab case(短横线命名法).

## 代码演示

### 基础用法

```js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

meanBy(objects, function(o) { return o.n; });
// Expected Return: 5

meanBy(objects, 'n');
// Expected Return: 5
```

## 参数介绍

kebabCase(collection, iteratee)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   input   |  string \| number  |     输入字符/数字     |    -     |
|   length   | number  |     返回字符串的长度     |    -    |
|   pad    | boolean | 前缀字符 |  -  |
