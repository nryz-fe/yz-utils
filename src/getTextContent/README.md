# getTextContent

去掉字符串中的 html 部分(包含注释，文档类型) 只获取 textContent

## 代码演示

### 基础用法

```js
const o = getTextContent(
	"全款拿下一线城市大房子，感谢那个努力不放弃的自己@MVE<front class='wd-text-primary'>护肤</front>"
)
// Expected Return: 全款拿下一线城市大房子，感谢那个努力不放弃的自己@MVE护肤

const o = getTextContent(
	`<!DOCTYPE html><html><head hidden><meta charset="UTF-8>" /><!-- 我是注释1 --><img />123</html>`
) // Expected Return: 123
```

## 参数介绍

| options |  type  |      note      | default |
| :-----: | :----: | :------------: | :-----: |
|   str   | string | 待处理的字符串 |         |

```

```
