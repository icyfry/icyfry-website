<template>
  <div class="links">
    <h2>{{ title }}</h2>
    <ul>
      <li>
        <a href="https://github.com/icyfry" target="_blank">https://github.com/icyfry</a>
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
