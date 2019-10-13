<template>
  <div class="links">
    <h2>{{ title }}</h2>
    <ul>
      <li><a href="http://icyfry.io/github" target="_blank">icyfry.io/github</a></li>
      <li><a href="http://icyfry.io/gitlab" target="_blank">icyfry.io/gitlab</a></li>
      <li><a href="http://icyfry.io/bitbuket" target="_blank">icyfry.io/bitbuket</a></li>
    </ul>
    <br/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Links extends Vue {
  @Prop() private title!: string;
}
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
