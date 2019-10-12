<template>
  <div class="home">
    <h1>icyfry.io</h1>
  </div>
</template>


<style>

.home {
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  min-height: 250px;
  padding-top: 5px;
  margin: 0;
	width: 100%;
	font-family: "Exo", sans-serif;
	background: linear-gradient(-45deg, #4af3ff, #e73c7e, #23a6d5);
	background-size: 400% 400%;
	animation: gradientBG 15s ease infinite;
}

h1 {
  color: white;
  font-family:Mansalva, Arial;
  font-size: 55pt;
  text-shadow: black 0.1em 0.1em 0.2em;
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

.container {
	width: 100%;
	position: absolute;
	top: 35%;
	text-align: center;
}

</style>