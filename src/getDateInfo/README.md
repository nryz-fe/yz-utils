# getDateInfo

获取指定时间在当年已过去的时间和剩余的时间(year,month,day.hour,minute,second)

## 代码演示

### 基础用法

```
getDateInfo()

// Expected Return: {
	day: 57,
	hour: 1384,
	minute: 83061,
	month: 1,
	restDay: 308,
	restHour: 7376,
	restMinute: 442539,
	restMonth: 11,
	restSecond: 26552329,
	second: 4983671
}
```

## 参数介绍

| options |                                           type                                            |  note  | default |
| :-----: | :---------------------------------------------------------------------------------------: | :----: | :-----: |
| [value] | {year?: number,month?: number,day?: number,hour?: number,minute?: number,second?: number} | 初始值 |         |
