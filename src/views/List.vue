<!--
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-09-23 13:36:18
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-25 23:39:02
-->
<!--  -->
<template>
  <div
    style="position:relative"
    class="row_center"
  >
    <img
      class="image_v"
      src="@/assets/images/home_top.png"
      style="width:100vw"
    />
    <div class="content_list column_center">
      <div class="title">排行榜</div>
      <div class="hint">你与他们投票差有多少？快快来围观~</div>
      <div
        class="row_between"
        style="width:100%;margin-bottom:10px"
      >
        <div class="myname">排名</div>
        <div style="flex:1;text-align: left;">昵称</div>
        <div>票数</div>
      </div>
      <div
        v-for="(item,index) in items"
        :key="index"
        class="row_between list_item"
        style="width:100%"
      >
        <div class="list_logo">
          <img :src="index<3?log[index]:log[3]" />
          <div
            class="count"
            v-if="index>2"
          >{{index+1}}</div>
        </div>

        <div
          class="row_center"
          style="flex:1;justify-content: flex-start;"
        ><img
            :src="items.head_portrait"
            class="head"
          />{{item.name}}</div>
        <div>{{item.votes}}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { inquirelist } from '@/api';
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({ components: {}, name: 'List' })
export default class List extends Vue {
  private items = [];
  private log = [
    require('@/assets/images/first.png'),
    require('@/assets/images/second.png'),
    require('@/assets/images/third.png'),
    require('@/assets/images/normal.png'),
  ];
  private async created() {
    const { content, count } = await inquirelist({
      votes_sort: true, // 是否根据投票数递减排序
      page: 1, // 第N页
      page_size: 1000, // 每页显示条数
    });
    this.items = content;
  }
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.image_v {
  position: absolute;
  top: 0;
  left: 0;
}
.content_list {
  z-index: 1;
  width: 690px;
  color: #103156;
  margin-top: 338px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 47px 49px 53px 57px;
  margin-bottom: 20px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 30px;
  .list_item {
    border-bottom: 1px solid #e9e9e9;
    padding: 21px 0 23px;
    font-size: 28px;
    .list_logo {
      height: 55px;
      width: 42px;
      margin-right: 124px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .count {
        position: absolute;
        top: 13px;
        left: 0;
        right: 0;
        font-size: 22px;
        text-align: center;
        font-weight: bold;
        color: #7e7e7e;
        line-height: 1;
      }
    }
    .head {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-right: 43px;
    }
  }
  .myname {
    margin-right: 145px;
  }
  .title {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 49px;
  }
  .hint {
    font-size: 28px;
    margin-bottom: 85px;
  }
}
</style>