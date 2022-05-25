import { navbar } from 'vuepress-theme-hope';

export const zh = navbar([
  '/',
  { text: '随记', icon: 'like', link: '/like/' },
  {
    text: '博文',
    icon: 'edit',
    prefix: '/posts/article/',
    children: ['article1']
  }
]);
