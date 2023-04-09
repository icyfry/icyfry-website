<template>
  <MyResume />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyResume from '@/components/MyResume.vue'

export default defineComponent({
  name: 'MeView',

  components: {
    MyResume
  }
})
</script>
