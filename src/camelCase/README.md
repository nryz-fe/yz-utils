# camelCase

转换字符串string为驼峰写法。

## 代码演示

### 基础用法

```js
camelCase('Foo Bar');
// Expected Return: 'fooBar'

camelCase('--foo-bar--');
// Expected Return: 'fooBar'

camelCase('__FOO_BAR__');
// Expected Return: 'fooBar'
```

## 参数介绍

camelCase(word)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   word   |  string  |     要转化的字符     |    -     |