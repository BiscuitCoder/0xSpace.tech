<template>
  <GenericContainer>
    <section class="page-404-wrapper">
      <div class="content">
        <h1>navs</h1>
      </div>
    </section>
  </GenericContainer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { usePageFrontmatter } from 'vuepress/client'

// @ts-ignore
import GenericContainer from '@components/GenericContainer/index.vue'

const frontmatter = usePageFrontmatter()
console.log('frontmatter==>',frontmatter.value);
</script>

