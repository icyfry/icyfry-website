<template>
  <div class="links">
    <h2>{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyLinks',
  data (): {title: string} {
    return {
      title: '' as string
    }
  },
  methods: {}
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
