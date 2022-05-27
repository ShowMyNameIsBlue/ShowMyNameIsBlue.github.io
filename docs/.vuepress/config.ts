import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import theme from './theme';
export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Mr.Orange',
      description:
        '橙子先生的博客。博客里面有博主的自己的文章或者转载，大多数是技术类的，还有些随记。希望大家多多的交流。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Mr.Orange',
      description:
        'Mr.Orange blog. Blog with blogger own articles or reproduced, mostly technical, and some with in mind. Hope that we can communicate。'
    }
  },
  plugins: [
    searchPlugin({
      // 你的选项
      locales: {
        '/': {
          placeholder: '搜索'
        },
        '/en/': {
          placeholder: 'Search'
        }
      }
    })
  ],
  theme
});
