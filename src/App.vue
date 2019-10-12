<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Footer :url="git"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {Route} from 'vue-router';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class App extends Vue {

  @Prop({default: 'https://github.com/icyfry/website'}) private git: any;

}
</script>

<style>
#app {
  font-family: "Exo", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
