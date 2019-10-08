<template>
  <div class="about">
    <Links title="Links"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Links from '@/components/Links.vue';

@Component({
  components: {
    Links,
  },
})
export default class About extends Vue {}
</script>