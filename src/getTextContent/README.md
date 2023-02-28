# getTextContent

过滤字符串中的 html 标签，只获取文字内容

## 代码演示

### 基础用法

```js
const json =
	"全款拿下一线城市大房子，感谢那个努力不放弃的自己@MVE<front class='wd-text-primary'>护肤</front>"
const o = getTextContent(json)
// Expected Return: 全款拿下一线城市大房子，感谢那个努力不放弃的自己@MVE护肤
```

## 参数介绍

| params |  description   |  type  |
| ------ | :------------: | :----: |
| str    | 要过滤的字符串 | string |
