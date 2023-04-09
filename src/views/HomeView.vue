<template>
  <div v-bind:class="'home-head'">
    <h1>icyfry.bzh</h1>
    <h2 v-if="showGitInformation">
      Git Informations shown on website
    </h2>
    <ul>
      <li>
      <a href="https://github.com/icyfry">
        <img src="https://img.shields.io/badge/Github-icyfry-white?style=for-the-badge&logo=github" />
      </a>
      </li>
      <!--
      <li>
      <a href="https://www.icyfry.io/">
        <img src="https://img.shields.io/badge/icyfry.io-white?style=for-the-badge" />
      </a>
      </li>
      -->
      <li>
        <a href="https://www.linkedin.com/in/jonathan-le-brun/">
        <img src="https://img.shields.io/badge/-linkedin-blue?style=for-the-badge&logo=linkedin">
      </a>
      </li>
  </ul>
  </div>
  <MyResume />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyResume from '@/components/MyResume.vue'
export default defineComponent({
  name: 'HomeView',
  data (): {showGitInformation: boolean} {
    return {
      showGitInformation: false
    }
  },
  components: {
    MyResume
  }
})
</script>

<style>
.home-head {
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  min-height: 130px;
  width: 100%;
  margin: 0px;
  padding-bottom: 0px;
  background: linear-gradient(-45deg, #7fdbff, #3d9970, #ff851b, #ffdc00);
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;
}

.home-head-no-color {
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background: linear-gradient(-45deg, #949494, #363636, #c5c5c5, #6b6b6b);
  background-size: 400% 400%;
}

.home-head a,
a:visited,
a:link {
  color: white;
  text-decoration: none;
}

.home-head a:hover {
  text-decoration: underline;
}

.home-head h1 {
  color: white;
  font-family: Mansalva, Arial;
  font-size: 55pt;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin: 0px;
}
ul {
  list-style-type: none;
  padding: 0px;
  padding-bottom: 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
