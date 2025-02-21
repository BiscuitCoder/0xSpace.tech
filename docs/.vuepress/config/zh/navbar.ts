export const navbar = [
  { text: '首页', link: '/', icon: 'IconHome' },
  { text: '何以至此', link: '/docs/guide/introduce', icon: 'IconCompass' },
  {
    text: '欲练此功',
    icon: 'IconSubVolume',
    children: [
      { 
        text: '江湖格局',
        link: 'https://vuepress-theme-reco.recoluan.com/' 
      },
      { 
        text: 'EVM',
        link: 'https://vuepress-theme-reco.recoluan.com/' 
      },
      { 
        text: 'Solana',
        link: 'https://vuepress-theme-reco.recoluan.com/' 
      }
    ],
  },
  { text: '有点意思', link: '/posts', icon: 'IconDocumentAttachment' },
  { text: '仙人指路', link: '/docs/guide/introduce', icon: 'IconCompass' },
  { text: '扯扯闲篇', link: '/docs/message-board', icon: 'IconChat' },
]
