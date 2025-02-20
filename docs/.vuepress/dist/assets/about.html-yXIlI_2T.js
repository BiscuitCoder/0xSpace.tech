import{_ as s,c as a,a as t,b as o,d as r,e as n,o as i,r as p}from"./app-mRfgYBZq.js";const d={},c={class:"custom-container tip"},h={href:"https://www.recoluan.com",target:"_blank",rel:"noopener noreferrer"},g={style:{"text-align":"center"}},u={href:"https://github.com/kangxukangxu",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/recoluan/vuepress-theme-reco/commit/ec7426a88d50cf8d9f90a7ad9b731a10da7f438b",target:"_blank",rel:"noopener noreferrer"},b={style:{"text-align":"center"}},x={href:"https://github.com/danranVm",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/recoluan/vuepress-theme-reco-demo/commit/6d2bbe919e7f6564b8c8173558d197e38e024dc5",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"};function f(w,e){const l=p("ExternalLinkIcon");return i(),a("div",null,[e[12]||(e[12]=t("p",null,[t("img",{src:"https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg",alt:"vuepress"}),t("img",{src:"https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg",alt:"leancloud-storage"}),t("img",{src:"https://img.shields.io/badge/valine-1.3.4-blue.svg",alt:"valine"})],-1)),t("div",c,[e[5]||(e[5]=o('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">介绍</p>',2)),t("ol",null,[e[3]||(e[3]=t("li",null,[r("这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；"),t("br")],-1)),e[4]||(e[4]=t("li",null,[r("主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；"),t("br")],-1)),t("li",null,[e[1]||(e[1]=r("你可以打开 ")),t("a",h,[e[0]||(e[0]=r("午后南杂")),n(l)]),e[2]||(e[2]=r(" 来查看效果。"))])])]),e[13]||(e[13]=o('<h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together"><span>Play Together</span></a></h2><h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x"><span>0.x</span></a></h3><p><code>vuepress-theme-reco@0.x</code> 是基于 <code>vuepress@0.x</code> 的博客主题。</p><p><code>vuepress@0.x</code> 功能比较简单，只适合书写简单的文档，但好在支持主题自定义，而个人又希望能够用它来书写博客，原因就是它足够的简洁，毫无疑问，这也符合很多程序员的观念，也就是在这种情况下，<code>vuepress-theme-reco@0.x</code> 的第一个版本经过一个通宵而产生。</p><p>主题开源不久，很多朋友通过各种联系方式，给到很多好的意见和建议，所以我个人也在积极地更新。</p><p>因为我是一名前端开发工程师，开发的过程中，总是想着能不能加入一些炫酷的效果，有很多次都是添加上又去掉，反反复复，最后都是被 <strong>简洁</strong> 的这个原则阻止掉，毕竟，现在我是将它当作一个产品来看待，并不是一个技术或者是技巧的尝试项目。</p><h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x"><span>1.x</span></a></h3><p>随着不断有用户过来询问：为什么 <code>vuepress-theme-reco@0.x</code> 不能在 <code>vuepress@1.x</code> 上使用？本来只是打算对 <code>vuepress-theme-reco@0.x</code> 进行简单的bug修复的我，终究还是忍不住，开始了 <code>vuepress-theme-reco@1.x</code> 的开发。又是在一个寂静的凌晨两点半（晚上就是出活快），我默默地开始了。</p><p>主题升级的关键也就是 <code>@vuepress/plugin-blog</code> 这款官方插件，它不需要再去麻烦地过滤数据，将分类和标签的相关信息直接存在 <code>$categories</code> 和 <code>$tags</code> 这两个全局变量中。借助于 <code>@vuepress/plugin-blog</code>，分类和标签功能更容易实现，但也有了一些局限。接下来两三天的时间，都是在进行功能的迁移和一些bug的修复。</p><p><code>vuepress-theme-reco@1.x</code> 的开发中，更加深刻地明白了模块化和组件化编程的重要性，如果当初没有把一些功能进行封装，而是直接简单的复制，这次升级也不会这么顺利。模块拆分的越细，使用就会越灵活。</p><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli"><span>CLI</span></a></h3><p>还是衷心地希望能有更多的朋友参与进来，更快地去完善它。接下来时间允许的情况下，我会开源一款自动生成博客的脚手架，略过配置步骤，直接书写优质内容，这也是我后来逐渐形成的一种信念，就是希望能让这款主题，功能越完善，使用越来越简单。</p><h3 id="contribute" tabindex="-1"><a class="header-anchor" href="#contribute"><span>Contribute</span></a></h3><p><strong>衷心感谢为此项目贡献过宝贵代码的朋友们</strong></p>',14)),t("table",null,[e[10]||(e[10]=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"昵称"),t("th",null,"贡献记录")])],-1)),t("tbody",null,[t("tr",null,[t("td",g,[t("a",u,[e[6]||(e[6]=r("kangxu")),n(l)])]),t("td",null,[t("a",m,[e[7]||(e[7]=r("vuepress-theme-reco@0.x")),n(l)])])]),t("tr",null,[t("td",b,[t("a",x,[e[8]||(e[8]=r("Ekko")),n(l)])]),t("td",null,[t("a",v,[e[9]||(e[9]=r("vuepress-theme-reco-demo@1.x")),n(l)])])])])]),e[14]||(e[14]=o('<p><strong>衷心感谢美女设计师</strong></p><table><thead><tr><th style="text-align:center;">昵称</th><th>贡献内容</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="">Zoey</a></td><td>主题图标调整定稿</td></tr><tr><td style="text-align:center;">冰冰</td><td>主题图标初稿</td></tr></tbody></table><h2 id="preview" tabindex="-1"><a class="header-anchor" href="#preview"><span>Preview</span></a></h2><p><img src="https://i.loli.net/2020/01/13/nCbXp13lRG2TNeD.png" alt="size.png"></p><p><img src="https://i.loli.net/2020/01/13/ke1VirShQRLnEd7.png" alt="style.png"></p><p><img src="https://i.loli.net/2020/01/13/Lj6XbwdmDFCYH9k.png" alt="dark.png"></p><p><img src="https://i.loli.net/2020/01/13/nra3kbYSlxojmw4.png" alt="home.png"></p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2>',8)),t("p",null,[t("a",k,[e[11]||(e[11]=r("MIT")),n(l)])])])}const _=s(d,[["render",f],["__file","about.html.vue"]]),C=JSON.parse('{"path":"/blogs/about.html","title":"vuepress-theme-reco","lang":"zh-CN","frontmatter":{"title":"vuepress-theme-reco","date":"2019-04-09T00:00:00.000Z","categories":["blog"]},"headers":[{"level":2,"title":"Play Together","slug":"play-together","link":"#play-together","children":[{"level":3,"title":"0.x","slug":"_0-x","link":"#_0-x","children":[]},{"level":3,"title":"1.x","slug":"_1-x","link":"#_1-x","children":[]},{"level":3,"title":"CLI","slug":"cli","link":"#cli","children":[]},{"level":3,"title":"Contribute","slug":"contribute","link":"#contribute","children":[]}]},{"level":2,"title":"Preview","slug":"preview","link":"#preview","children":[]},{"level":2,"title":"License","slug":"license","link":"#license","children":[]}],"git":{"createdTime":1740048194000,"updatedTime":1740048194000,"contributors":[{"name":"keylen","email":"kelenworks@gmail.com","commits":1}]},"filePathRelative":"blogs/about.md"}');export{_ as comp,C as data};
