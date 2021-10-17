<template>
  <div style="position:relative" class="row_center">
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
      <div class="hint">投票排行多少？快快来围观~</div>
      <div
        class="row_between padding_t_40"
        style="width:100%;margin-bottom:10px;"
      >
        <div class="myname">排名</div>
        <div style="flex:1;text-align: left;">作品名称</div>
        <div>票数</div>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="50"
        class="list_item_view"
      >
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
              :src="
                `${item.head_portrait}?x-oss-process=image/resize,h_100,m_lfit`
              "
              class="head"
            />
            <div class="names" style="flex:1">
              {{ item.name }}
            </div>
          </div>
          <div>{{ item.votes }}</div>
        </div>
      </van-list>
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
  page = 1
  total = 0
  log = [
    require('@/assets/images/first.png'),
    require('@/assets/images/second.png'),
    require('@/assets/images/third.png'),
    require('@/assets/images/normal.png')
  ]
  onLoad() {
    this.page += 1
    this.getData()
  }
  async getData() {
    const { content, count } = await inquirelist({
      votes_sort: true, // 是否根据投票数递减排序
      page: this.page, // 第N页
      page_size: 10 // 每页显示条数
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
.list_item_view {
  height: calc(#{$height-primary} - 500px - constant(safe-area-inset-bottom));
  height: calc(#{$height-primary} - 500px - env(safe-area-inset-bottom));
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
  // margin-top: 338px;
  margin-top: 20px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 47px 0 20px 0;
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
    margin-bottom: 49px;
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
