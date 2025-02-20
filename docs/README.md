---
home: true
modules:
  - CustomBanner
  - Features
  - MdContent
  - Footer
customBanner:
  bgImage: '/bg.svg'
  title: Ox Space
  description: '旨在分享Web3前沿技术与咨询'
  tagline: 事实上随着Web3的快速发展，认知门槛也在相应变得更高，这倒不是说它的技术有多复杂，而是对一个项目、一个技术何以发展至此的上下文在变得越来越冗长。如果你对Web3技术感兴趣，但是苦于没有一个系统化前后文的认知，这个站点的资料或许可以帮助你。
  buttons:
    - { text: B站教程, link: '/docs/guide/introduce' }
    - { text: 导航整理, link: '/docs/theme/series', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
footer:
  startYear: 2025
# features:
# - title: 过去
#   details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
# - title: 当下
#   details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
# - title: 未来
#   details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 快速开始

::: tip
前往 [这里](/docs/guide/gui-builder.html) 体验全新可视化搭建脚手架。
:::

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
