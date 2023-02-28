# countUnit

将数字转换为带单位的格式，最大单位万亿

## 代码演示

### 基础用法

```
countUnit(123456789)

// Expected Return: 1.23亿
```

## 参数介绍

| options |  type   |      note      | default |
| :-----: | :-----: | :------------: | :-----: |
|   num   | number  | 需要转换的数字 |         |
|  [len]  | number  |  保留小数位数  |    2    |
|  [num]  | boolean | 千位是否转为 k |  false  |
