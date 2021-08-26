<template>
  <div class="links">
    <h2>{{ title }}</h2>
    <ul>
      <li>
        <a href="http://icyfry.io/github" target="_blank">icyfry.io/github</a>
      </li>
      <li>
        <a href="http://icyfry.io/gitlab" target="_blank">icyfry.io/gitlab</a>
      </li>
      <li>
        <a href="http://icyfry.io/bitbuket" target="_blank"
          >icyfry.io/bitbuket</a
        >
      </li>
    </ul>
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Links",
  data() {
    return {
      title: "" as string,
    };
  },
  methods: {},
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
