<template>
  <div class="about">
    <Links title="Links" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Links from "@/components/Links.vue";

export default defineComponent({
  name: "App",

  components: {
    Links,
  },
});
</script>
