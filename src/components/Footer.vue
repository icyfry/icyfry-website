<template>
    <div class="footer">
      <a :href="repo" target="_blank"><span class="footer-title">{{repo}}</span></a><br/>{{git}}
      <div class="footer-tech">
        <a href="https://vuejs.org/" target="_blank"><img src="/vue.js.png" alt="vue.js" title="vue.js" height="20"/></a>
        <a href="https://aws.amazon.com/" target="_blank"><img src="/aws.png" alt="aws" title="aws" height="20"/></a>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import gitInfo from '../git-info.json';

@Component
export default class Footer extends Vue {
  @Prop({default: 'https://github.com/icyfry/icyfry-website'}) private repo!: string;
  @Prop() private git!: string;

  public created() {
    this.git = gitInfo.abbreviatedSha + ' - ' + gitInfo.branch;
  }

}
</script>

<style scoped>

.footer {
  margin-top: 3px;
}

.footer-title {
  text-decoration: none;
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
