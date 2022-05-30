---
index: false
date: 2022-05-27
title: JS中的ToPrimitive原始值转换
description: JS中是如何将引用类型转换为原始类型的呢
category:
  - 前端
tag:
  - 技术
  - JavaScript
---

**下面4句的结果是什么，以及为什么？**

```js
 [] + {}

 {} + []

 {} + {}

 [] + []
```

> 结果：`"[object Object]"` &nbsp; `0`&nbsp; `"[object Object][object Object]"` &nbsp; `""`

### JS中+运算规则

* （1）正号：将其他类型强制转换为数字类型

* （2）加法运算： 加法运算又分为两种，数字相加的二元运算和字符串连接运算

### 加法运算的规则

&emsp;&emsp;将加号两边都转换为原始数据类型。如果其中有一个转换结果为string类型，使用ToString强制  
转换另一个运算元，然后做字符串拼接操作；否则就是都使用ToNumber强制转换为数字作加法运算。

### 类型转换

&emsp;&emsp;在进行类型转换的时候会进行[ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)运算,该运算的逻辑如下：

ToPrimitive(input, PreferredType)

input是调用的对象，PreferredType是期望返回的结果类型

* a:判断input是否是对象，如果不是直接return input

* b:根据PreferredType定义hint，hint的取值一共有三种情况：'default'（PreferredType为空）, 'number'（PreferredType是number）, 'string'（PreferredType是string）

* c:判断该对象是否有[Symbol.toPrimitive](https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive)方法, 如果有则传入参数hint进行调用，若执行结果是基本类型，则return该结果，否则抛出TypeError。

* d:如果hint是'default',则改为'number'。也就是说默认是按'number'。除了Date对象，和Symbol对象。Date对象转换时hint参数是String。Symbol对象进行类型转换会抛出异常。

* e: 执行[OrdinaryToPrimitive](https://tc39.es/ecma262/#sec-ordinarytoprimitive)运算

    如果hint是'string'，调用toString方法，得到的是原始数据类型，返回该值；否则调用valueOf方法，如果得到的是原始数据类型，返回该值；否则抛出异常

    如果hint是'number'，则相反；先调用valueOf方法，得到的是原始数据类型，返回该值；否则调用toString方法，如果得到的是原始数据类型，返回该值；否则抛出异常

js中加法操作，参数PreferredType一般是Default

+正号操作，参数PreferredType一般是Number

### valueOf与toString方法的返回值

* （1）对于Object

&emsp;&emsp;&emsp;&emsp;valueOf：返回对象本身

&emsp;&emsp;&emsp;&emsp;toString：返回的是"[object type]"字符串，"type"指的是对象本身的类型识别。例如Object对象返回"[object Object]"，Math对象返回"[object Math]"

* （2）对于Array
  
&emsp;&emsp;&emsp;&emsp;valueOf：返回对象本身

&emsp;&emsp;&emsp;&emsp;toString方法返回值: 相当于用数组值调用join(',')所返回的字符串。例如：[1,2,3].toString()会是"1,2,3"

* （3）对于Number

&emsp;&emsp;&emsp;&emsp;valueOf：返回对象本身

&emsp;&emsp;&emsp;&emsp;toString：转换为字符串类型时的字符串值。可以传一个参数，决定转换为字符串时的进制(2、8、16)

* （4）对于String
  
&emsp;&emsp;&emsp;&emsp;valueOf：返回对象本身

&emsp;&emsp;&emsp;&emsp;toString：返回对象本身

* （4）对于Boolean

&emsp;&emsp;&emsp;&emsp;valueOf：返回对象本身

&emsp;&emsp;&emsp;&emsp;toString：返回"true"或"false"字符串

> [] + {}

[] 先调用valueOf()返回的是本身,继续调用toString方法，返回"",{}调用valueOf返回本身，调用toString方法，返回"[object Object]", 所以"" + "[object Object]"，进行字符串拼接操作。打印结果为"[object Object]"

> {} + []

{} 有两种常见的用途（1）对象的定义(2)区块语句。这里的{}会被浏览器认为是区块语句而不是对象字面量，所以{} + [] 相当于 +[]，相当于把[]强制转换成数字，转换结果为0。打印结果为0

> {} + {}

{} 调用valueOf返回本身，调用toString方法，返回"[object Object]", 所以"[object Object]" + "[object Object]"，进行字符串拼接操作。打印结果为"[object Object][object Object]"。火狐浏览器除外，火狐浏览器会把第一个{}当作区块语句，相当于+{}，转化为+"[object Object]",转为数字结果为NaN。

> [] + []

[] 先调用valueOf()返回的是本身,继续调用toString方法，返回""。相当于"" + ""。打印结果为""
