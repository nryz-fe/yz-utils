# cookiesToObj

转换cookies字符串对应为key、value的对象

## 代码演示

### 基础用法

```js
cookiesToObj('lang=zh-cn; __wpkreporterwid_=538b912b-8fdc-47cd-300a-6d0e4a8968a4; _yuque_session=c9v9yCC75zwaj_XhOKBEswoz5bNNa4Yk5y6SEfgQayp-ZiOQf7GjZuqCi7q7332zEjHr9mXJlCPeidxEEir-Ew==; yuque_ctoken=TH_9PKh1HSOKEm1-Hp8iYZc8; current_theme=default;')
// =>
// {
//   "lang": "zh-cn",
//   "__wpkreporterwid_": "538b912b-8fdc-47cd-300a-6d0e4a8968a4",
//   "_yuque_session": "c9v9yCC75zwaj_XhOKBEswoz5bNNa4Yk5y6SEfgQayp-ZiOQf7GjZuqCi7q7332zEjHr9mXJlCPeidxEEir-Ew==",
//   "yuque_ctoken": "TH_9PKh1HSOKEm1-Hp8iYZc8",
//   "current_theme": "default"
// }
```

## 参数介绍

cookiesToObj(collection, iteratee)

| options |  type   |        note        | default |
| :-----: | :-----: | :----------------: | :-----: |
|   cookies   |  string  |     cookies字符串     |    -     |
