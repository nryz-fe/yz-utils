# sample

从集合中返回随机元素

## 代码演示

### 基础用法

```js
sample(8, 2, 0) // Expected Return: '08'

sample('nil', 'a', 5) // Expected Return: 'aanil'

sample(-0.20135) // Expected Return: -0.20135
```

## 参数介绍

sample(collection , n)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   input   |  string \| number  |     输入字符/数字     |    -     |
|   length   | number  |     返回字符串的长度     |    -    |
|   pad    | boolean | 前缀字符 |  -  |
