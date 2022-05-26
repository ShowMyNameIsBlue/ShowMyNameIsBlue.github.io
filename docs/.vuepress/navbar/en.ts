import { navbar } from 'vuepress-theme-hope';

export const en = navbar([
  '/en/',
  { text: 'Notes', icon: 'like', link: '/en/like/' },
  {
    text: 'Posts',
    icon: 'edit',
    prefix: '/en/posts/',
    children: ['article1']
  }
]);
