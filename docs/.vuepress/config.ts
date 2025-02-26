import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

import { viteBundler } from '@vuepress/bundler-vite'

import { themeConfig } from './config/index'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '0xSpace-web3发展史|合约开发|学习区块链|转行web3|区块链教程|web3教程|区块链导航',
      description: '0xSpace-探索Web3发展史与区块链技术前沿，一站式掌握合约开发、学习路径与职业转型。从比特币创世到DeFi/NFT革命，深度解析智能合约开发全流程，提供零基础区块链教程与Web3实战指南。转行Web3必备资源库：覆盖公链生态、GameFi设计、DAO治理等核心领域，整合开发工具链与主网部署方案。区块链导航站精准对接开发需求，助你快速融入价值互联网新时代。'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'vuepress-reco',
    //   description: 'A simple vuepress Blog & Doc theme.',
    // },
  },
  bundler: viteBundler({}),
  theme: recoTheme(themeConfig),
  // debug: true,
})
