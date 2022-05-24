import { defineUserConfig } from 'vuepress';
import theme from './theme';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '主题演示',
      description: 'vuepress-theme-hope 的演示'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Theme Demo',
      description: 'A demo for vuepress-theme-hope'
    }
  },

  theme
});
