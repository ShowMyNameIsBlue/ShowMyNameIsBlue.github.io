---
index: false
date: 2022-05-30
title: Markdown使用入门
description: 介绍什么是Markdown以及基本用法
category:
  - 前端
tag:
  - 技术
  - Markdown
---

## Markdown 基础语法

> Markdown 是一种用来编写说明文档的语法，它易读易写，后缀名为‘md’。而且 Markdown 编写的文档，可以快速转化为 PPT，World 等产品文档。

**Markdown 的大部分标记符号都需要在其后面添加*空格*，否则会不生效，而且建议编写一段内容后，前后都有个换行符，保证可读性。**

### Markdown 标题

使用`#` 添加到你所需的文本前以创建一个文本的标题,不同数量的`#` 对应标题的级别。例子：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b601c4d075ec4367b1b521cc5697b485~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 段落

段落即一段文本，无需任何特殊标识符号，只需在段落前后添加空白行，Markdown 即可正常转义为不同的段落。例子：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de5515dc55204b8593d330f7103ae5ef~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 换行

如果你的内容过长，可以通过在末尾添加两个或以上的空格，并且回车即可换行处理。直接在内容中回车是不会换行的）。例子：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/993282314e2f4b49be40f86b2e064c70~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 强调

强调分为两种 **粗体** 和 _斜体_

1. 粗体在内容前后添加`两`个`*`即可。例子：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b076a0ae017492eb8b1f779777fdb54~tplv-k3u1fbpfcp-watermark.image?)

2. 斜体对在内容前后添加`一`个`*`即可。例子：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30f91a2548334c3d8ab0076e114ad9cc~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 引用

在内容前使用`>` 即可创建内容的引用。例子

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7da5dc15ed145c9ae781d2c58ce315a~tplv-k3u1fbpfcp-watermark.image?)

可以使用多个`>` 创建多个段落的引用。只需添加`>`空白行即可。例子：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2291b415544c829bc3c314e5a1327d~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 列表

列表分为**有序列表**和**无序列表**两种形式

1. 创建有序列表，需要在每个列表项前添加数字并且紧跟一个**英文**句号。数字的顺序可以随意。但是第一个数字必须为 **1**。并且使用缩进可以创建嵌套列表。例子：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad5a7a85c1544de5bd482eccfefa72dd~tplv-k3u1fbpfcp-watermark.image?)

2. 创建无序列表，需要在每个列表项前添加`-`、`*`或者`+` 。并且使用缩进也可以创建嵌套列表。例子：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d54209ebd368461eb7b57fea4827c348~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 代码

使用`` ` ``添加在你的代码前后即可。例子：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41300f7ada5243b0bb99760543abd6d8~tplv-k3u1fbpfcp-watermark.image?)

如果你想在你的代码中使用 `` ` ``这个符号，不想让 Markdown 进行转义。使用两个反引号`` ` ` ``添加到你的代码前后即可。例子：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0536b590095c463594db158681b04089~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 分隔线

创建分隔线 可以使用三个或以上的 `***`, `---`或者`___`，并且不能包含其它内容，它们的渲染效果是一样的。为了兼容性，建议在分割线前后添加空白行

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/199c0bfcbbd0458895657503cd851396~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 链接

创建超链接需要满足以下形式： `[超链接显示名](超链接地址 "超链接title")` 对应的 HTML 代码为:  
`<a href="超链接地址" title="超链接title">超链接显示名</a>` 例子:

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2651d8c67b8947a385be28febaf8fda6~tplv-k3u1fbpfcp-watermark.image?)

URL 和邮件链接可以直接在链接前后添加尖括号`<>`即可。例子：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1381462b63934a728ebea2467f21483d~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 图片

创建一个图片引用的语法和创建链接的语法相似：`![图片alt](图片链接 "图片title")` 区别在于前面加了感叹号。 对应的 HTML 代码为: `<img src="图片链接" alt="图片alt" title="图片title">`
例子：
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92c6eaa863c24e3799f0b0006ef5cfe3~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 转义字符

如果想直接显示某些特殊字符比如：`* >`不想经过 Markdown 转义，那么在字符前添加`\`即可。例子：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76d9fba876fb4f0083f7dcc64890056b~tplv-k3u1fbpfcp-watermark.image?)

### Markdown 内嵌 HTML

Markdown 里面可以直接写 HTML 标签的，如果 Markdown 的语法不能支持你想要的功能，直接写入标签代码即可，不用标识它是 HTML 还是 Markdown,Markdown 会自己进行解析判断。例子：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f57b5fcd593d4c53a25ebe69d70b0e54~tplv-k3u1fbpfcp-watermark.image?)

**特别说明**：行内标签和块级标签是有区别的：行内标签直接写入到内容中即可。但是块级标签使用时必须在前后添加空行，以便于与内容区分。而且在块级标签中的 Markdown 语法是不会生效的，只会被渲染为普通的内容。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7664d86b536485093f7b3353ab57989~tplv-k3u1fbpfcp-watermark.image?)

## 总结

总的来说，Markdown 的语法是简单且易学的，但是不同的 Markdown 应用程序所支持的功能是有区别的。具体的用法需要考虑具体的应用程序。

> [掘金](https://juejin.cn/editor/drafts/6952699506248908813) [个人博客](https://showmynameisblue.github.io/)

[参考文档](https://markdown.com.cn/)
