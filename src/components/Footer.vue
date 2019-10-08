<template>
    <div class="footer">
      <span class="footer-title">icyfry.io</span> - <a :href="url" target="_blank">{{url}}</a>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  @Prop() private url!: string;
}
</script>

<style scoped>

.footer {
  margin-top: 3px;
  font-size: 5pt;
}

.footer-title {
  color: #ff006a;
}

.footer-title a, a:visited, a:link{
  color: #2c3e50;
  text-decoration: none;
}

</style>
