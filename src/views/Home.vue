<template>
  <div class="home">
    <h1>icyfry.io</h1>
    <h2 v-if="showGitInformation">Git Informations shown on website<br/><br/></h2>
  </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IConfigCatClient } from 'configcat-common/lib/ConfigCatClient';
import App from '../App.vue';

@Component
export default class Home extends Vue {

  @Prop() private showGitInformation!: boolean;

}
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
  background: linear-gradient(-45deg, #7FDBFF, #3D9970, #FF851B, #FFDC00);
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;
}

.home a, a:visited, a:link {
  color: white;
  text-decoration: none;
}

.home a:hover {
  text-decoration: underline;
}

.home h1 {
  color: white;
  font-family:Mansalva, Arial;
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