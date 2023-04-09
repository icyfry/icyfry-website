<template>
  <div>
    <iframe src="resume.html" width="100%" height="2900" frameborder="0" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'MyResume',
  data () {
    return {
      resume: '' as string
    }
  },
  methods: {
    mounted () {
      axios.get('resume.html').then((data) => {
        this.resume = data.data
      })
    }
  }
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
