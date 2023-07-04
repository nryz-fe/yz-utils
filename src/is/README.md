# is\<Type>

检查数据是否为某个类型

\<Type> 支持类型 InputType：  
'Function'  
'undefined'  
'Object'  
'Date'  
'Number'  
'AsyncFunction'  
'Promise'  
'String'  
'Boolean'  

## 代码演示

### 基础用法

```js
isNumber(0) // Expected Return: true

isDate(25) // Expected Return: false

isObject([]) // Expected Return: false
```

## 参数介绍

is\<Type>(params)

| options |   type    |    note    |  default  |
| :-----: | :-------: | :--------: | :-------: |
|  Type   | InputType |  检查类型  |     -     |
| params  |    any    | 要检查的值 | undefined |
