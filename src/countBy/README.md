# countBy

记录collection中每个元素执行迭代函数之后返回的不同结果的次数，key为返回结果，key对应的值为返回结果的次数。

## 代码演示

### 基础用法

```js
countBy(8, 2, 0) // Expected Return: '08'

```

## 参数介绍

countBy(collection , n)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   input   |  string \| number  |     输入字符/数字     |    -     |
|   length   | number  |     返回字符串的长度     |    -    |
|   pad    | boolean | 前缀字符 |  -  |
