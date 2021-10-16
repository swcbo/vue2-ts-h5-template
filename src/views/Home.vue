<template>
  <div>
    <router-view class="tab_content" />
    <van-tabbar
      v-model="active"
      inactive-color="#9A9A9A"
      active-color="#103056"
    >
      <van-tabbar-item to="/index">
        投票入口
        <template #icon="props">
          <img :src="props.active ? icon.home_choose : icon.home" />
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
import { Component, Vue } from 'vue-property-decorator';
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
   icon = {
    home_choose: require('@images/home_tab_select.png'),
    home: require('@images/home_tab.png'),
    list_choose: require('@images/list_tab_select.png'),
    list: require('@images/list_tab.png'),
  };
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