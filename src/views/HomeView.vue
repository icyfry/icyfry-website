<template>
  <div v-bind:class="'home-head'">
    <h1>icyfry.bzh</h1>
    <ul>
      <li>
      <a href="https://github.com/icyfry">
        <img alt="github" src="https://img.shields.io/badge/Github-icyfry-white?style=for-the-badge&logo=github" />
      </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jonathan-le-brun/">
        <img alt="linkedin" src="https://img.shields.io/badge/linkedin-jonathan le brun-blue?style=for-the-badge&logo=linkedin">
      </a>
      </li>
      <li>
      <a href="https://www.malt.fr/profile/jonathanlebrun">
        <img alt="malt" src="https://img.shields.io/badge/malt-jonathan le brun-FC5757?style=for-the-badge&logo=malt"></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyResume from '@/components/MyResume.vue'
export default defineComponent({
  name: 'HomeView',
  data () {
    return {}
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
  background-image: linear-gradient(-45deg, #7fdbff, #3d9970, #ff851b, #ffdc00);
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;
}

.home-head-no-color {
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-image: linear-gradient(-45deg, #949494, #363636, #c5c5c5, #6b6b6b);
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
  font-family: Mansalva, Arial, sans-serif;
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
