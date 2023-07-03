# padStart

给输入字符添加前缀，支持数字(>=0)或字符串，例如 8 -> 08

## 代码演示

### 基础用法

```js
padStart(8, 2, 0) // Expected Return: '08'

padStart('nil', 'a', 5) // Expected Return: 'aanil'

padStart(-0.20135) // Expected Return: -0.20135
```

## 参数介绍

padStart(input, length, pad)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   input   |  string \| number  |     输入字符/数字     |    -     |
|   length   | number  |     返回字符串的长度     |    -    |
|   pad    | boolean | 前缀字符 |  -  |
