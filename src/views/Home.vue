<!--
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-15 22:08:10
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
      <van-tabbar-item to="/detail">
        活动详情
        <template #icon="props">
          <img :src="props.active ? icon.detail_choose : icon.detail" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/index">
        投票入口
        <template #icon="props">
          <img :src="props.active ? icon.home_choose : icon.home" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item
        @click="OnItemCLick"
        to="/index"
      >
        搜索
        <template #icon="props">
          <img :src="props.active ? icon.search_choose : icon.search" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/list">
        排行榜
        <template #icon="props">
          <img :src="props.active ? icon.list_choose : icon.list" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <van-overlay
      :show="show"
      @click="show = false;active = 1;searchInfo=''"
    >
      <div
        class="column_center"
        style="height:100vh"
      >
        <div
          class="wrapper column"
          style="align-items:center"
          @click.stop
        >
          <div class="row_center cc"><span />
            <div>搜索选手</div><span />
          </div>
          <input
            placeholder="输入编号或姓名"
            v-model="searchInfo"
          />
          <div
            class="btn"
            @click="onOk"
          >确认</div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
import { SearchModule } from '../store/modules/user';
import { Tabbar, TabbarItem, Overlay } from 'vant';
@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Overlay.name]: Overlay,
  },
  name: 'Home',
})
export default class extends Vue {
  private active = 0;
  private show = false;
  private searchInfo = '';
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

  private onOk() {
    this.show = false;
    this.active = 0;
    SearchModule.SET_SEARCH(this.searchInfo);
  }
  private OnItemCLick() {
    this.show = true;
  }
}
</script>
<style lang='scss' scoped>
.wrapper {
  height: 454px;
  width: 594px;
  background-image: url(../assets/images/ccc.png);
  background-size: 100%;
  background-repeat: no-repeat;
  color: #103056;
  .cc {
    margin-top: 57px;
    div {
      margin: 0 32px;
    }
    span {
      width: 73px;
      height: 1px;
      background: #103056;
    }
  }
  input {
    width: 491px;
    height: 69px;
    border: 1px solid #103056;
    border-radius: 35px;
    font-size: 30px;
    text-align: center;
    font-weight: 500;
    line-height: 67px;
    box-sizing: border-box;
    margin-top: 84px;
    &::placeholder {
      color: #103056;
    }
  }
  .btn {
    width: 491px;
    height: 69px;
    background: #103056;
    border-radius: 35px;
    font-size: 30px;
    font-weight: 500;
    color: #ffffff;
    line-height: 69px;
    margin-top: 56px;
  }
}
</style>