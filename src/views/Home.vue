<template>
  <div v-bind:class="[noColor ? 'home home-no-color' : 'home']">
    <h1>icyfry.bzh</h1>
    <h2 v-if="showGitInformation">
      Git Informations shown on website<br /><br />
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      showGitInformation: false,
      noColor: false,
    };
  },
});
</script>

<style>
.home {
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  min-height: 130px;
  width: 100%;
  margin: 0px;
  background: linear-gradient(-45deg, #7fdbff, #3d9970, #ff851b, #ffdc00);
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;
}

.home-no-color {
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background: linear-gradient(-45deg, #949494, #363636, #c5c5c5, #6b6b6b);
  background-size: 400% 400%;
}

.home a,
a:visited,
a:link {
  color: white;
  text-decoration: none;
}

.home a:hover {
  text-decoration: underline;
}

.home h1 {
  color: white;
  font-family: Mansalva, Arial;
  font-size: 55pt;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin: 0px;
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
