import { RecoThemeData } from 'vuepress-theme-reco/lib/types'

import * as zhConfig from './zh'

export const themeConfig: RecoThemeData = {
  locales: {
    '/': {
      selectLanguageName: '简体中文',
      lastUpdatedText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      commentConfig: zhConfig.commentConfig,
      // bulletin: zhConfig.bulletin,
      catalogTitle: '页面导航',
      tip: '提示',
      info: '信息',
      warning: '警告',
      danger: '危险',
      details: '详情',
      editLinkText: '编辑当前页面',
      notFound: '哇哦，没有发现这个页面！',
      backToHome: '返回首页'
    },
    // '/en/': {
    //   selectLanguageName: 'English',
    //   navbar: enConfig.navbar,
    //   series: enConfig.series,
    //   commentConfig: enConfig.commentConfig,
    //   bulletin: enConfig.bulletin,
    // },
  },
  colorMode: 'light',
  logo: '/logo.png',
  author: 'Keylen',
  docsRepo: 'https://github.com/BiscuitCoder/blogsite',
  docsBranch: 'main',
  docsDir: '/docs',
  algolia: {
    appId: 'N9C91DEY7R',
    apiKey: '9730f5c36486207ec8726568786edbde',
    indexName: '0xspace',
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  // socialLinks: [
  //   {
  //     icon: 'IconReco',
  //     link: 'https://recoluan.com/'
  //   },
  //   {
  //     icon: 'IconRevili',
  //     link: 'https://revili.recoluan.com'
  //   }
  // ],
}
