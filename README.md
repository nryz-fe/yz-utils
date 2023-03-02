# @newrank/yz-utils

[![Test](https://github.com/nryz-fe/yz-utils/actions/workflows/test.yml/badge.svg)](https://github.com/nryz-fe/yz-utils/actions/workflows/test.yml)

有赚前端公用工具函数包

# 安装

```
npm i nr-yz-utils-beta
```

or

```
yarn add nr-yz-utils-beta
```

# 使用

|           方法名           |                              解释                               |                                             输入                                              |                                           输出                                           |
| :------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
|        addFrontZero        |       给一个数字添加前置 0，返回一个指定位数数字的字符串        |                                    <num: number,[digit=2]>                                    |                                     string \| Error                                      |
|         countUnit          |             将数字转换为带单位的格式，最大单位万亿              |                               <num: number,[len=2,[isK=false]]>                               |                                     number \| Error                                      |
|        formatSecond        |           根据传入的时间(秒)返回解析为天时分秒的对象            |                                     \<originTime: number>                                     |                    { originTime, second, minute, hour, day } \| Error                    |
|        getDateInfo         |           获取指定时间在当年已过去的时间和剩余的时间            | <[{year?: number month?: number day?: number hour?: number minute?: number second?: number}]> | {month, day, hour, minute, second, restMonth, restDay, restHour, restMinute, restSecond} |
|   getDaysPerMonthByYear    |            获取指定年份的每个月的天数 返回天数的数组            |                                       <[year: number]>                                        |                                      Array \| Error                                      |
|        getRangeNum         |              获取指定范围内的随机整数(左包右不包)               |                                   <min: number,max: number>                                   |                                          number                                          |
|       getTextContent       | 去掉字符串中的 html 部分(包含注释，文档类型) 只获取 textContent |                                        \<str: string>                                         |                                     string \| Error                                      |
| getThousandBitSeparatorStr |                  为指定的数字添加千分位分隔符                   |                                         <num: number>                                         |                                     string \| Error                                      |
|          isEmail           |                         是否是电子邮件                          |                                        <email: string>                                        |                                         boolean                                          |
|          isFalsy           |                           是否是假值                            |                                         <value: any>                                          |                                         boolean                                          |
|          isTruthy          |                           是否是真值                            |                                         \<value: any>                                         |                                         boolean                                          |
|         isLeapYear         |                           是否是闰年                            |                                        <year: number>                                         |                                         boolean                                          |
|      numberToChinese       |      非负数数字转换为大写汉字金额 只处理小于等于一万亿的值      |                                         <num: number>                                         |                                     string \| Error                                      |
