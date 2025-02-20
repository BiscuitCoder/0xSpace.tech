export const navbar = [
  { text: '首页', link: '/', icon: 'IconHome' },
  { text: '综合导航', link: '/docs/guide/introduce', icon: 'IconCompass' },
  {
    text: '技术文档',
    icon: 'IconSubVolume',
    children: [
      { 
        text: 'EVM',
        link: 'https://vuepress-theme-reco.recoluan.com/' 
      },
      {
        text: 'Solana',
        link: 'http://v1.vuepress-reco.recoluan.com/views/1.x/',
      },
    ],
  },
  { text: '项目', link: '/posts', icon: 'IconDocumentAttachment' },
  { text: '博客', link: '/posts', icon: 'IconDocumentAttachment' },
  { text: '关于', link: '/docs/message-board', icon: 'IconChat' },
]
