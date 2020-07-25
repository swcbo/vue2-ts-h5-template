<!--  -->
<template>
  <div class="titile">
    32131212312
    <Button>{{title}}</Button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
@Component({ components: { Button }, name: '' })
export default class extends Vue {
  private title = '321312321';
  private created() {
    console.log(process.env.VUE_APP_BASE_API);
  }
}
</script>
<style lang='scss' scoped>
</style>