<!--
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-07-26 13:25:04
--> 
<!--  -->
<template>
  <div>
    32131212312
    <Button
      class="mT-20"
      @click="OnTitle"
    >{{token}}</Button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
import { UserModule } from '../store/modules/user';
@Component({ components: { Button }, name: '' })
export default class extends Vue {
  get token() {
    return UserModule.token;
  }
  private OnTitle() {
    UserModule.SET_TOKEN('测试修改token');
  }
  private created() {
    console.log(process.env.VUE_APP_BASE_API);
  }
}
</script>
<style lang='scss' scoped>
</style>