<template>
  <GenericContainer>
    <div class="navpage">
      <div v-for="(item, index) in datas" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="group">
          <a :href="nav.link" target="_blank"  v-for="(nav, index) in item.items">
            <img :src="nav.icon" />
            <div>
              <b>{{ nav.name }}</b>
              <small>{{ nav.desc }}</small>
            </div>
          </a>
        </div>
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
    desc: string;
    link: string;
    icon: string;
  }[];
}[];

const frontmatter = usePageFrontmatter();
const datas = computed<Datas>(() => {
  return frontmatter.value.datas as Datas;
});
</script>

<style scoped>
.navpage{
  width: 100%;
  padding-bottom: 50px;
  >div{
    .title{
      font-weight: bold;
      font-size: 20px;
      margin-top: 50px;
      margin-bottom: 20px;
    }
  }
  .group{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    a{
      display: flex;
      color: #333;
      align-items: center;
      letter-spacing: 0;
      &:hover{
        img{
          transform: scale(1.25);
        }
        color: #0022fb;
        small{
          opacity: 1;
        }
      }
      >div{
        overflow: hidden;
      }
      b, small{
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      small{
        opacity: 0.5;
      }
      img{
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        transition: all 0.3s ease;
        transform-origin: right;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .navpage{
    padding: 0 15px;
    .group{
      display: grid;
      grid-template-columns: repeat(2, 48%);
      gap: 15px;
      font-size: 14px;
    }
  }
}
</style>