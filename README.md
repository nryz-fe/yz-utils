# 有赚前端公用工具函数包

[![Test](https://github.com/nryz-fe/yz-utils/actions/workflows/test.yml/badge.svg)](https://github.com/nryz-fe/yz-utils/actions/workflows/test.yml)

# 安装

```
npm install @nryz/utils
```

or

```
yarn add @nryz/utils
```

# 使用

```
import { getTextContent } from 'nr-yz-utils-beta'
const str = `<!DOCTYPE html><html><head hidden><meta charset="UTF-8>" /><!-- 我是注释1 --><img />123</html>`
const text = getTextContent()

console.log(text) // 123
```

|     方法名     |     解释     |     输入     |     输出     |
| :----------: | :----------: | :----------: | :----------: |
|  addFrontZero  |  给数字添加前置 0  |  <num: number,[digit=2]>  |  string \| Error  |
|  camelCase  |  转换字符串string为驼峰写法  |  <word: string>  |  string  |
|  clamp  |  返回输入值在设限范围内的最大有效值  |  <number: number, lower: number, upper: number>  |  number  |
|  cloneDeep |  对象数组深克隆  |  <obj: T>  |  T  |
|  cookiesToObj |  转换cookies字符串对应为key、value的对象  |  <cookies: string>  |  Record\<string, any>  |
|  countBy |  记录collection中相同元素（返回结果）的次数  |  <collection: any[], iteratee>  |  Record\<string, any>  |
|  countUnit  |  数字转换为带单位的格式  |  <num: number,[len=2,[isK=false]]>  |  number \| Error  |
|  download |  创建a标签实现下载文件  |  <url: string, referrer>  |  -  |
|  flatMapDepth |  根据深度扁平化数组元素  |  <collection: any[], iteratee, depth>  |  any[]  |
|  formatSecond  |  解析传入的时间(秒)为天时分秒的对象  |  \<originTime: number>  |  { originTime, second, minute, hour, day } \| Error  |
|  getDateInfo  |  获取指定时间在当年已过去的时间和剩余的时间  | <[{year?: number month?: number day?: number hour?: number minute?: number second?: number}]> | {month, day, hour, minute, second, restMonth, restDay, restHour, restMinute, restSecond} |
|  getDaysPerMonthByYear  |  获取指定年份的每个月的天数数组  |  <[year: number]>  |  Array \| Error  |
|  getRangeNum  |  获取指定范围内的随机整数(左包右不包)  |  <min: number,max: number>  |  number  |
|  getTextContent  | 去掉字符串中的 html 部分(包含注释，文档类型) 只获取 textContent |  \<str: string>  |  string \| Error  |
|  getThousandBitSeparatorStr  |  为指定的数字添加千分位分隔符  |  <num: number>  |  string \| Error  |
|  is\<Type> |  检查数据是否为某个类型  |  <Type: InputType, params: any>  |  boolean  |
|  isEmail  |  是否是电子邮件  |  <email: string>  |  boolean  |
|  isFalsy  |  是否是假值  |  <value: any>  |  boolean  |
|  isLeapYear  |  是否是闰年  |  <year: number>  |  boolean  |
|  isTruthy  |  是否是真值  |  \<value: any>  |  boolean  |
|  kebabCase  |  转换字符串为短横线命名法  |  <word: string>  |  boolean  |
|  meanBy  |  计算array的平均值  |  <collection: number, iteratee>  |  number  |
|  numberToChinese  |  非负数数字转换为大写汉字金额 只处理小于等于一万亿的值  |  <num: number>  |  string \| Error  |
|  padStart  |  给输入字符添加前缀  |  <input: number \| string, length: number, pad: string\| number>  |  string \| Error  |
|  pick  |  从 object 中选中的属性的对象  |  <collection: Record\<string,any>, iteratee>  |  Record\<string,any>  |
|  round |  对数字四舍五入，保留精确小数  |  <num: number, precision:number>  |  number  |
|  routeToObj |  路径转层级对象  |  <num: number>  |  string \| Error  |
|  sample |  从集合中返回随机元素  |  <num: number>  |  string \| Error  |
|  sumBy |  计算array的总和  |  <collection: any[], iteratee>  |  number  |
|  toPercent |  处理成百分比数据  |  <num: number>  |  string \| number \| Error  |