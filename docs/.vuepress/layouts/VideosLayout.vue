<template>
  <GenericContainer>
    <div class="videospage">
        <div v-for="(item,index) in datas" :key="index">
            <div class="title">{{ item.title }}</div>

            <div class="group">
              <div class="curr"  v-for="(curr,index) in item.items">
                <iframe :src="curr.url" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" />
                <div class="name">{{ curr.name }}</div>
              </div>
            </div>
            <!-- group -->

        </div>
    </div>
  </GenericContainer>
</template>

<script lang="ts" setup>
import {
  computed,
  ref,
} from 'vue'

import { usePageFrontmatter } from 'vuepress/client'

// @ts-ignore
import GenericContainer from '@components/GenericContainer/index.vue'

type Datas = {
  title: string;
  items: {
    name: string;
    img: string;
    name: string;
  }[];
}[];

const frontmatter = usePageFrontmatter();
const datas = computed<Datas>(() => {
  return frontmatter.value.datas as Datas;
});
</script>

<style scoped>
.videospage{
  width: 100%;
  .group{
    display: grid;
    width: 100%;
    gap: 20px;
    grid-template-columns: repeat(3, calc(33% - 10px));
  }
  .title{
    font-weight: bold;
    margin: 20px 0;
    font-size: 20px;
    margin-top: 40px;
  }
  iframe{
    width: 100%;
    height: 250px;
    margin-bottom: 10px;
    background: linear-gradient(to top, #b0b0b0, #dedede);
    border-radius: 10px;
    overflow: hidden;
  }
  .name{
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    height: 50px;
  }
}
@media screen and (max-width: 768px) {
  .videospage{
    >div{
      padding: 0 15px;
    }
    .group{
      grid-template-columns: 100%;
    }
    iframe{
      height: 200px;
    }
  }
}
</style>