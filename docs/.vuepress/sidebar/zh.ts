import { sidebar } from 'vuepress-theme-hope';

export const zh = sidebar({
  '/': [
    '',
    'slide',
    {
      text: '文章',
      icon: 'note',
      prefix: 'posts/article/',
      children: ['article1']
    }
  ]
});
