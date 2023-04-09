<template>
  <div class="about">
    <MyLinks title="Links" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyLinks from '@/components/MyLinks.vue'

export default defineComponent({
  name: 'AboutView',

  components: {
    MyLinks
  }
})
</script>
