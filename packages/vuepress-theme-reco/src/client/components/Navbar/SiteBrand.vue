<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
})

const { title, icon, link } = toRefs(props)
</script>

<template>
  <div class="site-brand">
    <RouterLink  :to="link">
      <img
        id="logo"
        v-if="icon"
        class="logo"
        :src="icon"
        :alt="title"
      />
    </RouterLink>

    <!-- <RouterLink
      v-if="title"
      :to="link"
      class="site-name"
      :class="{ 'can-hide': icon }"
    >
      {{ title }}
    </RouterLink> -->
    
  </div>
</template>

<style>
.site-brand {
  @apply flex text-xl font-semibold;
  .logo {
    @apply mr-4 inline-block h-8 rounded-lg hover:opacity-90;
  }
}
</style>
