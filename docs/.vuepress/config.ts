import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

import { viteBundler } from '@vuepress/bundler-vite'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

import { themeConfig } from './config/index'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '0xSpace-web3发展史|合约开发|区块链学习|转行web3|区块链教程|web3教程|区块链导航',
      description: '0xSpace-探索Web3发展史与区块链技术前沿，一站式了解web3发展史，掌握合约开发、学习路径与职业转型。'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'vuepress-reco',
    //   description: 'A simple vuepress Blog & Doc theme.',
    // },
  },
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:image', content: '/og.svg' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-tvwqBt0esg' }],
    ['meta', { name: 'lgolia-site-verification', content: 'DCF509E99B418C75' }],
  ],
  plugins: [
    seoPlugin({
      hostname: '0xspace.tech'
    }),
    sitemapPlugin({
      hostname: '0xspace.tech',
      devServer:true
    })
  ],
  bundler: viteBundler({}),
  theme: recoTheme(themeConfig),
  // debug: true,
})
