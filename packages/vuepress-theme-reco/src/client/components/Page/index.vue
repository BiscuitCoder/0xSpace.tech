<template>
  <main class="page-container">

    <div class="page-content">
      <h1 v-if="!!title" class="page-title">{{ title }}</h1>

      <PageInfo :key="page.path" :page-data="page" />

      <div v-if="!setedPagePassword" class="theme-reco-md-content">
        <Content />
      </div>

      <div v-else class="theme-reco-md-content">
        <Password v-if="pageLoaded && !pagePasswordPass" @pass="handlePass" />
        <Content v-if="pageLoaded && pagePasswordPass" />
      </div>

      <PageMeta />

      <PageNav />

      <Comments :hide-comments="shouldHideComments" />
      <div class="giscus"></div>
    </div>

    <Catalog v-if="isShowCatalog" />
  </main>
</template>

<script lang="ts" setup>
import {
  computed,
  onMounted,
} from 'vue'

import { usePageData } from 'vuepress/client'

import Catalog from '@components/Catalog/index.vue'
import PageInfo from '@components/PageInfo.vue'
import Password from '@components/PagePassword/index.vue'
import { usePageCatalog } from '@composables/index.js'
import { useComment } from '@vuepress-reco/vuepress-plugin-comments/composables'

import { usePassword } from './hook.js'
import PageMeta from './PageMeta.vue'
import PageNav from './PageNav.vue'

const page = usePageData()
const { options } = useComment()
const { pageLoaded, pagePasswordPass, setedPagePassword, handlePass } = usePassword()

const title = computed(
  () => page?.value?.frontmatter?.title
    || page?.value?.title
    || ''
)

const sticky = computed(
  () => page?.value?.frontmatter?.sticky
    || ''
)

console.log(111, sticky)

// 是否显示评论
const shouldHideComments = computed(() => {
  const { hideComments: hideCommentsInSinglePage } = page?.value?.frontmatter
  const { hideComments: hideCommentsInAllPage } = options.value

  return hideCommentsInSinglePage === true
    || (hideCommentsInSinglePage !== false && hideCommentsInAllPage === true)
})

const { isShowCatalog } = usePageCatalog()

// 评论动态加载
onMounted(()=>{
  const script = document.createElement('script');
  // 设置 script 元素的属性
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', 'BiscuitCoder/0xSpace.tech');
  script.setAttribute('data-repo-id', 'R_kgDON8d6bg');
  script.setAttribute('data-category', 'Announcements');
  script.setAttribute('data-category-id', 'DIC_kwDON8d6bs4CnYzf');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'bottom');
  script.setAttribute('data-theme', 'preferred_color_scheme');
  script.setAttribute('data-lang', 'zh-CN');
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;

  // 将 script 元素添加到文档的 head 中
  document.head.appendChild(script);
})
</script>
