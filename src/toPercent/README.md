# toPercent

将数字转化为百分比制，例如：0.1234 => 12.34

## 代码演示

### 基础用法

```js
toPercent(0.12345) // Expected Return: 12.35
toPercent(-0.20135) // Expected Return: -20.13
toPercent(0.12345, 3) // Expected Return: 12.345
toPercent(0.12345, 2, true) // Expected Return: '12.35%'
```

## 参数介绍

toPercent(num, len, unit)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   num   | number  |     要转换的值     |         |
|   len   | number  |     保留小数位     |    2    |
|  unit   | boolean | 返回值是否带百分号 |  false  |
