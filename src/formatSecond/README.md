# formatSecond

根据传入的时间(秒)来返回对应的格式字符

## 代码演示

### 基础用法

```
formatSecond(1230)

// Expected Return: {originTime: 1230, second: 30, minute: 20, hour: 0, day: 0}
```

```
formatSecond(-1)

// Expected Return: {originTime: -1}
```

## 参数介绍

|  options   |  type  | note | default |
| :--------: | :----: | :--: | :-----: |
| originTime | number | 秒数 |         |
