<template>
    <div class="bottom">
      <span class="bottom-title">icyfry.io</span> - <a :href="url" target="_blank">{{url}}</a>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Bottom extends Vue {
  @Prop() private url!: string;
}
</script>

<style scoped>

.bottom {
  margin-top: 3px;
  font-size: 5pt;
}

.bottom-title {
  color: #ff006a;
}

.bottom-title a, a:visited, a:link{
  color: #2c3e50;
  text-decoration: none;
}

</style>
