<template>
  <section class="banner-brand__wrapper" :style="{ ...bgImageStyle }">
    <div class="banner-brand__content">
      <h1 class="title" v-if="frontmatter?.customBanner?.title">{{ frontmatter?.customBanner?.title }}</h1>

      <p class="description" v-if="frontmatter?.customBanner?.description">{{ frontmatter?.customBanner?.description }}</p>

      <p class="tagline" v-if="frontmatter?.customBanner?.tagline" v-html="frontmatter?.customBanner?.tagline"></p>


      <div class="flex items-center justify-center" style="flex-wrap: wrap;">
       <small style="margin-right: 10px;color: #6028b8;font-weight: bold;">🚀 基于此模板，你可以速启动自己的dApp项目！</small>
        <a href="https://github.com/BiscuitCoder/web3-next-temp" target="_blank" class="inline-block">
          <img src="https://img.shields.io/badge/示例模板-MIT-green?logo=nextdotjs" alt="" srcset="">
        </a>
      </div>
      
      <div class="btn-group" v-if="buttons.length > 0">

        <RouteLink class="xicon-container left" to="/videos/">
          <span class="xicon-content" style="display: flex;align-items: center;"><IconPlay style="width: 20px;margin-right: 10px;"/><b>视频合集</b></span>
        </RouteLink>

        <a class="xicon-container left plain" href="https://www.coze.cn/s/i5LMuARr" target="_blank">
          <span class="xicon-content"  style="display: flex;align-items: center;"><IconMagicWand style="width: 20px;margin-right: 10px;"/><b>智能体</b></span>
        </a>

        <!-- <Xicons
          v-for="(btn, index) in buttons" :class="btn.type" :key="index"
          :icon="btn.icon"
          :text="btn.text"
          :link="btn.link"
          icon-size="18"
          text-size="14"
        /> -->
      </div>

      <Transition name="fade">
        <div class="live" v-if="news.length">
            <div class="name">
              <div class="load">
                <div class="loading"></div><span>正在发生</span>
              </div>
              <small class="more" @click="showLenth = showLenth>1?1:news.length">{{showLenth>1?'收起':'更多'}}({{ news.length }})</small>
            </div>
            <div v-for="(item,index) in news" :key="index" v-show="index<showLenth">
              <div class="date">{{ item.pubDate }}</div>
              <a :href="item.link" target="_blank" rel="noopener noreferrer" :style="`border-bottom:${showLenth>1?'':'none'} ;`">
                <div><b>{{ item.title }}</b></div>
                <p v-html="item.description"   :style="`border-bottom: ${showLenth<=1 && 'none;'}`"></p>
              </a>
            </div>
        </div>
      </Transition>
    </div>
  </section>
  <iframe src="/bghtml/index.html" frameborder="0" scrolling="no" />
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
} from 'vue'

import Link from 'vuepress-theme-reco/lib/client/components/Link.vue'
import { createOneColor } from 'vuepress-theme-reco/lib/client/utils'
import {
  usePageFrontmatter,
  withBase,
} from 'vuepress/client'

const frontmatter = usePageFrontmatter()

const heroImage = computed(() => {
  return frontmatter.value?.customBanner?.heroImage
    ? withBase(frontmatter.value?.customBanner?.heroImage)
    : null
})

const buttons = computed(() => {
  return frontmatter.value?.customBanner?.buttons || []
})

const heroImageStyle = computed(
  () => frontmatter.value.customBanner.heroImageStyle || {}
)

const bgImageStyle = computed(() => {
  const { bgImageStyle, bgImage } = frontmatter.value?.customBanner || {}

  const initBgImageStyle = bgImage ? {
    overflow: 'hidden',
    background: `url(${withBase(bgImage)}) center/cover no-repeat`
  } : {}

  return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
})


// 数据请求
interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author: string;
  category: string[];
}
const news = ref<RssItem[]>([]);
const getDatas = async()=>{
  const response = await fetch('https://api.allorigins.win/raw?url=https://rss.panewslab.com/zh/tvsq/rss');
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(await response.text(), "text/xml");
  const items = xmlDoc.querySelectorAll('item');
  const rssData = {
    title: xmlDoc.querySelector('channel > title')?.textContent || '',
    description: xmlDoc.querySelector('channel > description')?.textContent || '',
    items: Array.from(items).map(item => ({
      title: item.querySelector('title')?.textContent || '',
      link: item.querySelector('link')?.textContent || '',
      description: item.querySelector('description')?.textContent || '',
      pubDate: item.querySelector('pubDate')?.textContent || '',
      author: item.querySelector('author')?.textContent || '',
      category: Array.from(item.querySelectorAll('category')).map(cat => cat.textContent)
    }))
  };
  news.value = rssData.items;
}
onMounted(() => {
  getDatas();
});

// 控制显示
const showLenth = ref<number>(1);
</script>

<style scoped>
.banner-brand__wrapper{
  min-height: 100vh;
  margin-top: 0;
  height: auto;
  position: relative;
  /* background: url('/bg2.svg') no-repeat !important; */
  background: none !important;
  background-size: 100% !important;
  display: block !important;
  .banner-brand__content{
    position: relative;
    z-index: 11;
    margin: 0 auto;
    margin-top: 50px;
  }
}
iframe{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
  }
@media screen and (max-width: 768px) {
  .banner-brand__wrapper{
    /* background: url('/bg.svg') no-repeat !important; */
    background-size: contain !important;
    .banner-brand__content{
      margin-top: 5rem;
    }
  }
  iframe{
    display: none;
  }
}
.shields-wrapper {
  position: relative;
  @apply mt-20 text-left;
  img {
    @apply inline-block ml-0 mr-1 my-1 w-auto h-6 !important;
  }
}

.live{
  background: rgba(255, 255, 255, 0.048);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid #7777772d;
  text-align: left;
  background: rgba(255, 255, 255, 0.883);
  margin: 20px 0;
  .name{
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    .load{
      display: flex;
      align-items: center;
      color: #00d170;
    }
    .more{
      cursor: pointer;
      font-size: 12px;
    }
  }
  .date{
    font-weight: 500;
    letter-spacing: 0;
    font-size: 12px;
    color: rgba(128, 128, 128, 0.603);
    margin-top: 20px;
    margin-bottom: 10px;
  }
  a{
    display: block;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    border-bottom: 1px dashed rgba(128, 128, 128, 0.164);
    >div{
      font-size: 16px;
    }
    ::v-deep(p){
      display: block;
      margin: 5px 0;
      line-height: 1.8em;
      text-align: left;
      letter-spacing: 0px;
      word-break: break-all;
      color: #64748b;
    }
    ::v-deep(img){
      display: block;
      max-width: 100%;
      border-radius: 0;
    }
    &:hover{
      color: #0d00ff;
    }
  }
  
}

.loading {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #00d170;
  animation: ball-scale infinite linear 1s;
  margin-right: 10px;
}

@keyframes ball-scale {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

</style>
