<!--
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-23 13:42:35
--> 
<!--  -->
<template>
  <div>
    <router-view class="tab_content" />
    <van-tabbar
      v-model="active"
      inactive-color="#9A9A9A"
      active-color="#103056"
    >
      <van-tabbar-item to="/index">
        首页
        <template #icon="props">
          <img :src="props.active ? icon.home_choose : icon.home" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/search">
        搜索
        <template #icon="props">
          <img :src="props.active ? icon.search_choose : icon.search" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/detail">
        活动详情
        <template #icon="props">
          <img :src="props.active ? icon.detail_choose : icon.detail" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/list">
        排行榜
        <template #icon="props">
          <img :src="props.active ? icon.list_choose : icon.list" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
import { UserModule } from '../store/modules/user';
import { Tabbar, TabbarItem } from 'vant';
@Component({
  components: { [Tabbar.name]: Tabbar, [TabbarItem.name]: TabbarItem },
  name: 'Home',
})
export default class extends Vue {
  private active = 0;
  private icon = {
    home_choose: require('@images/home_tab_select.png'),
    home: require('@images/home_tab.png'),
    search_choose: require('@images/search_tab_select.png'),
    search: require('@images/search_tab.png'),
    detail_choose: require('@images/detail_tab_select.png'),
    detail: require('@images/detail_tab.png'),
    list_choose: require('@images/list_tab_select.png'),
    list: require('@images/list_tab.png'),
  };
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