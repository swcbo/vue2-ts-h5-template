<template>
  <div style="position:relative" class="row_center bg_view">
    <img
      src="@/assets/images/WechatIMG423.jpeg"
      style="width:100vw"
      class="image_v"
    />
    <!-- <img
      class="image_v"
      src="@/assets/images/top_view.png"
      style="width:100vw"
    /> -->
    <div class="content_list column_center">
      <div class="title row_center">
        <div class="dot1" />
        <div class="dot2" />
        <div class="dot3 lc" />
        排行榜
        <div class="dot3" />
        <div class="dot2" />
        <div class="dot1" />
      </div>
      <!-- <div class="hint">投票排行多少？快快来围观~</div> -->
      <div
        class="row_between padding_t_40"
        style="width:100%;margin-bottom:10px;"
      >
        <div class="myname">排名</div>
        <div style="flex:1;text-align: left;">作品名称</div>
        <div>票数</div>
      </div>
      <div class="list_item_view">
        <!-- <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="10"
        class="list_item_view"
      > -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="row_between list_item"
          style="width:100%"
        >
          <div class="list_logo">
            <img :src="index < 3 ? log[index] : log[3]" />
            <div class="count" v-if="index > 2">{{ index + 1 }}</div>
          </div>

          <div class="row_center" style="flex:1;justify-content: flex-start;">
            <img
              :src="`${item.cover}?x-oss-process=image/resize,h_100,m_lfit`"
              class="head"
            />
            <div class="names" style="flex:1">
              {{ item.title }}
            </div>
          </div>
          <div>{{ item.show_vote_number }}</div>
        </div>
      </div>
      <!-- </van-list> -->
    </div>
  </div>
</template>

<script lang="ts">
import { inquirelist } from '@/api'
import { List } from 'vant'
import { Component, Vue } from 'vue-property-decorator'
@Component({ components: { [List.name]: List }, name: 'List' })
export default class ListPage extends Vue {
  items = []
  finished = false
  loading = false
  page = 0
  total = 0
  log = [
    require('@/assets/images/first.jpg'),
    require('@/assets/images/second.jpg'),
    require('@/assets/images/third.jpg'),
    require('@/assets/images/normal.jpg')
  ]
  created() {
    this.page += 1
    this.getData()
  }
  async getData() {
    const { content, count } = await inquirelist({
      votes_sort: true, // 是否根据投票数递减排序
      page: this.page, // 第N页
      page_size: 1000 // 每页显示条数
    })
    this.total = count
    this.loading = false
    this.finished = this.total <= this.page * 10
    this.items = this.page > 1 ? this.items.concat(content) : content
  }
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.bg_view {
  background-image: url('../assets/images/WechatIMG424.jpeg');
  background-repeat: no-repeat;
  height: calc(#{$height-primary} - constant(safe-area-inset-bottom) - 100px);
  height: calc(#{$height-primary} - env(safe-area-inset-bottom) - 100px);
  overflow: auto;
  background-size: 100% 100%;
  position: relative;
}
.list_item_view {
  height: calc(#{$height-primary} - 618px - constant(safe-area-inset-bottom));
  height: calc(#{$height-primary} - 618px - env(safe-area-inset-bottom));
  overflow: auto;
  width: 100%;
  margin-top: 10px;
  padding: 0 40px;
  box-sizing: border-box;
}
.image_v {
  position: absolute;
  top: 0;
  left: 0;
}
.content_list {
  z-index: 1;
  width: 690px;
  color: #103156;
  margin-top: 248px;
  // margin-top: 20px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 27px 0 20px 0;
  background: #ffffff;
  border-radius: 10px;
  font-size: 30px;
  .list_item {
    border-bottom: 1px solid #e9e9e9;
    padding: 20px 0;
    font-size: 28px;
    .list_logo {
      width: 130px;
      object-fit: contain;
      margin-right: 50px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .count {
        position: absolute;
        top: 40px;
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
  .padding_t_40 {
    padding: 0 40px;
    box-sizing: border-box;
  }
  .myname {
    margin-right: 145px;
  }
  .title {
    font-size: 48px;
    font-weight: 600;
    // margin-bottom: 49px;
    margin-bottom: 20px;
    div {
      background: #103056;
      border-radius: 50%;
      margin-left: 21px;
      font-size: small;
    }
    .lc {
      margin-right: 21px;
    }
    .dot1 {
      width: 8px;
      height: 8px;
    }
    .dot2 {
      width: 12px;
      height: 12px;
    }
    .dot3 {
      width: 14px;
      height: 14px;
    }
  }
  .hint {
    font-size: 28px;
    margin-bottom: 60px;
  }
}
.names {
  text-align: start;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  padding-right: 10px;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
