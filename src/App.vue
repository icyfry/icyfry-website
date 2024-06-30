<template>
    <div id="nav">
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/me">Resume</router-link>
      -->
    </div>
    <router-view />
    <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppFooter from '@/components/AppFooter.vue'

export default defineComponent({
  name: 'App',

  components: {
    AppFooter
  },

  data () {
    return {}
  },

  methods: {
  },

  mounted () {
  }

})
</script>

<style>
#app {
  font-family: Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue,
    sans-serif;
  text-align: center;
  color: #66757f;
  background-color: #E1E8ED;
}

#app a,
a:visited,
a:link {
  text-decoration: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #66757f;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
