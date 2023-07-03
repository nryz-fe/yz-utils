# clamp

返回输入值在设限范围内的最大有效值，[lower, upper]
如果最大值 < 最小值，视为最大值无效，返回最小值

## 代码演示

### 基础用法

```js
clamp(-10, -5, 5);
// => -5

clamp(10, -5, 5);
// => 5

clamp(4, 5, 3);
// => 5
```

## 参数介绍

clamp(number, lower, upper)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   number   |  number  |     输入数字     |    -     |
|   lower   | number  |     最小值     |    -    |
|   upper    | number | 最大值 |  -  |
