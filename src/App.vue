<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
    <!--
    <Links title="Links"/>
    -->
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Footer from '@/components/Footer.vue';
import Links from '@/components/Links.vue';

@Component({
  components: {
    Footer, Links,
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: "Exo", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}

#app a, a:visited, a:link {
  color: #2c3e50;
  text-decoration: none;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



</style>
