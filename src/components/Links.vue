<template>
  <div class="links">
    <h1>{{ title }}</h1>
    <ul>
      <li><a href="http://github.icyfry.io" target="_blank" rel="noopener">github</a></li>
      <li><a href="http://gitlab.icyfry.io" target="_blank" rel="noopener">gitlab</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Links extends Vue {
  @Prop() private title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}
</style>
