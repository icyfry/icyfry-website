<template>
    <div class="bottom">
      <b>icyfry.io</b> - {{url}}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Bottom extends Vue {
  @Prop() private url!: string;
}
</script>

<style scoped>

.bottom {
  margin-top: 3px;
  font-size: 5pt;
}

</style>
