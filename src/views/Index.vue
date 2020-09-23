<!--
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-09-23 13:34:53
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-23 22:41:51
-->
<!--  -->
<template>
  <div>
    <img
      src="@/assets/images/home_top.png"
      style="width:100vw"
    />
    <div class="top_content row_center">
      <div class="column_center">
        <span>20</span>
        <span>参与人数</span>
      </div>
      <div class="line" />
      <div class="column_center">
        <span>20</span>
        <span>累计投票</span>
      </div>
      <div class="line" />
      <div class="column_center">
        <span>20</span>
        <span>访问数量</span>
      </div>
    </div>
    <div class="list_view">
      <div class="row_center"> <img src="@/assets/images/erwei.png" />点击预览人物事迹</div>
      <div class="list_item_view">
        <div
          v-for="(item,index) in items"
          :key="index"
          class="column_center item"
        >
          <div class="top_title">{{index+1}}号</div>
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2244088821,1012900352&fm=26&gp=0.jpg" />
          <div class="name">这是名字</div>
          <div class="tou">投TA一票</div>
          <div class="now_piao">已获投票数：9999票</div>
        </div>
      </div>
      <div class="loader_moer">加载更多</div>
    </div>

  </div>
</template>

<script lang='ts'>
import { SearchModule } from '@/store/modules/user';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
@Component({ components: {}, name: 'Index' })
export default class Index extends Vue {
  private items = [1, 2, 3, 4, 5, 6];
  private get search() {
    return SearchModule.search;
  }
  @Watch('search')
  private watchSearch() {
    this.getData();
  }
  private getData() {
    console.log(this.search);
  }
}
</script>
<style lang='scss' scoped>
.loader_moer {
  width: 250px;
  height: 60px;
  background: #103056;
  border-radius: 30px;
  text-align: center;
  line-height: 60px;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #ffffff;
  margin: auto;
  margin-top: 91px;
  margin-bottom: 20px;
}
.list_view {
  margin-top: 156px;
  background: white;
  padding: 40px 51px;
  font-size: 32px;
  font-weight: bold;
  color: #103056;
  box-sizing: border-box;
  width: 100vw;
  img {
    height: 36px;
    width: 36px;
    margin-right: 32px;
  }
  .list_item_view {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 41px;
    .item {
      width: 302px;
      height: 560px;
      background-image: url(../assets/images/list_bg.png);
      background-size: 100%;
      background-repeat: no-repeat;
      margin-top: 36px;
      position: relative;
      justify-content: flex-start;
      img {
        width: 280px;
        height: 363px;
        margin-top: 11px;
        margin-right: 0;
        margin-bottom: 21px;
        border-radius: 10px;
      }
      .name {
        font-size: 28px;
        font-weight: 500;
        color: #103056;
        margin-bottom: 15px;
        line-height: 100%;
      }
      .tou {
        width: 163px;
        height: 54px;
        background: #103056;
        line-height: 54px;
        text-align: center;
        border-radius: 27px;
        font-size: 28px;
        font-weight: 500;
        color: #ffffff;
      }
      .now_piao {
        font-size: 26px;
        font-weight: 500;
        color: #103056;
        margin-top: 17px;
        line-height: 100%;
      }
      .top_title {
        width: 129px;
        height: 48px;
        background: #103056;
        text-align: center;
        font-size: 30px;
        position: absolute;
        line-height: 48px;
        font-weight: 500;
        color: #ffffff;
        top: 11px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}
.top_content {
  width: 690px;
  height: 186px;
  background: #ffffff;
  border-radius: 10px;
  top: 338px;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: auto;

  div {
    flex: 1;

    span {
      &:first-child {
        font-size: 30px;
        font-weight: 500;
        color: #103056;
        line-height: 1;
      }
      &:last-child {
        margin-top: 48px;
        font-size: 30px;
        line-height: 1;
        font-weight: 500;
        color: #103056;
      }
    }
  }
  .line {
    width: 1px;
    height: 51px;
    background: #103056;
    flex: none;
  }
}
</style>