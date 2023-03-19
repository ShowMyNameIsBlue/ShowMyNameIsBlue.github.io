import { sidebar } from 'vuepress-theme-hope';

export const zh = sidebar({
  '/fontend/': [
    {
      text: 'JavaScript文章',
      prefix: 'javascript',
      children: ['JS中的ToPrimitive原始值转换.md'],
    },
    {
      text: 'HTML文章',
      prefix: 'html',
      children: ['H5语义化标签.md'],
    },
  ],
  '/code/': [
    {
      text: '技术文档',
      prefix: 'technics',
      children: ['Markdown使用入门.md'],
    },
  ],
});
