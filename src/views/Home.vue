<!--
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-07-26 11:39:00
--> 
<!--  -->
<template>
  <div>
    32131212312
    <Button class="mT-20">{{title}}</Button>
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
.mT-20{
}
</style>