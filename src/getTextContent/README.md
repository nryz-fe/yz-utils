# getTextContent

去掉字符串中的 html 部分(包含注释，文档类型) 只获取 textContent

## 代码演示

### 基础用法

```
getTextContent(`<!DOCTYPE html><html><head hidden><meta charset="UTF-8>" /><!-- 我是注释1 --><img />123</html>`)

// Expected Return: 123
```

## 参数介绍

| options |  type  |      note      | default |
| :-----: | :----: | :------------: | :-----: |
|   str   | string | 待处理的字符串 |         |
