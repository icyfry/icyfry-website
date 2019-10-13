<template>
    <div class="footer">
      <!--<span class="footer-title">icyfry.io</span>--><a :href="git" target="_blank">{{git}}</a>
      <div class="footer-tech">
        <a href="https://vuejs.org/" target="_blank"><img src="/vue.js.png" alt="vue.js" title="vue.js" height="20"/></a>
        <a href="https://aws.amazon.com/" target="_blank"><img src="/aws.png" alt="aws" title="aws" height="20"/></a>
        <a href="https://aws.amazon.com/fr/amplify/" target="_blank"><img src="/amplify.png" alt="aws - amplify" title="aws - amplify" height="20"/></a>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  @Prop({default: 'https://github.com/icyfry/website'}) private git!: string;
}
</script>

<style scoped>

.footer {
  margin-top: 3px;
}

.footer-title {
  color: #000000;
  font-weight: bold;
}

.footer-title a, a:visited, a:link {
  color: #2c3e50;
  text-decoration: none;
}

.footer-title a, a:hover {
  text-decoration: underline;
}

.footer-tech {
  margin: 20px;
}

.footer-tech a {
  margin: 7px;
}

</style>
