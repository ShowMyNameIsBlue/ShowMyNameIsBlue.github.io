import { hopeTheme } from 'vuepress-theme-hope';
import * as navbar from './navbar';
import * as sidebar from './sidebar';
import { resolve } from 'path';
export default hopeTheme({
  hostname: 'https://showmynameisblue.github.io/',
  darkmode: 'toggle',
  author: {
    name: 'Mr.Orange',
    url: 'https://showmynameisblue.github.io/'
  },

  iconAssets: '//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css',
  iconPrefix: 'iconfont icon-',

  logo: '/logo.svg',

  repo: 'vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'demo/src',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    name: 'Mr.Orange',
    medias: {
      GitHub: 'https://github.com/ShowMyNameIsBlue',
      Gmail: 'https://bluesandviola@gmail.com',
      网易云: [
        // 链接
        'https://music.163.com/#/user/home?id=342374623',
        // 图标地址
        resolve(__dirname, 'public/icons/wangyiyun.svg')
      ]
    }
  },

  locales: {
    /**
     * Chinese locale config
     */
    '/': {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: 'hello world',

      displayFooter: true,

      blog: {
        description: '一个还算有趣的前端开发者',
        intro: '/en/intro.html'
      }
    },
    '/en/': {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: 'hello world',

      displayFooter: true,

      blog: {
        description: 'A FrontEnd programmer',
        intro: '/intro.html'
      }
    }
  },

  // encrypt: {
  //   config: {
  //     '/guide/encrypt.html': ['1234'],
  //     '/en/guide/encrypt.html': ['1234']
  //   }
  // },

  plugins: {
    blog: {
      autoExcerpt: true
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: 'giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69'

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
});
