import { sidebar } from 'vuepress-theme-hope';

export const en = sidebar({
  '/en/': [
    '',
    'slide',
    {
      text: 'Articles',
      icon: 'note',
      prefix: 'posts/article/',
      children: ['article1']
    }
  ]
});
