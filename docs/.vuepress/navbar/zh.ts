import { navbar } from 'vuepress-theme-hope';

export const zh = navbar([
  '/',
  { text: '随记', icon: 'like', link: '/like/' },
  {
    text: '前端',
    icon: 'html',
    link: '/fontend/'
  },
  {
    text: '学习笔记',
    icon: 'code',
    link: '/code/'
  }
]);
