<template>
  <div>
    <!-- <img src="@/assets/images/top_view.png" style="width:100vw" /> -->
    <div class="top_content row_center" v-if="topInfo">
      <div class="column_center">
        <span>{{ topInfo.participation }}</span>
        <span>参与人数</span>
      </div>
      <div class="line" />
      <div class="column_center">
        <span>{{ topInfo.cumulative_voting }}</span>
        <span>累计投票</span>
      </div>
      <div class="line" />
      <div class="column_center">
        <span>{{ topInfo.access_statistics }}</span>
        <span>访问数量</span>
      </div>
    </div>
    <div class="list_view">
      <div class="row_center">
        <img src="@/assets/images/erwei.png" class="top_view" />
        点击查看详情
      </div>
      <div class="list_item_view">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :offset="50"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="column_center item"
            @click="
              preView(
                `${item.head_portrait}?x-oss-process=image/resize,h_1200,m_lfit`
              )
            "
          >
            <div class="top_title">{{ item.serial_number }}</div>
            <img
              :src="
                `${item.head_portrait}?x-oss-process=image/resize,h_400,m_lfit`
              "
            />
            <div
              class="name"
              v-html="item.name"
              style="white-space: pre-wrap;"
            ></div>
            <div class="tou" @click.stop="toPiao(item.id, index)">投TA一票</div>
            <div class="now_piao">已获投票数：{{ item.votes }}票</div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { addPiao, inquirelist, querystatistical } from '@/api'
import { ImagePreview, Toast, List } from 'vant'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
@Component({
  components: {
    [List.name]: List
  },
  name: 'Index'
})
export default class Index extends Vue {
  items: any[] = []
  topInfo: any = null
  page = 1
  total = 0
  finished = false
  loading = false
  preView(url: string) {
    ImagePreview([url])
  }
  async toPiao(id: string, index: number) {
    const { status } = await addPiao(id)
    if (status) {
      Toast({ message: '投票成功' })
      const list = [...this.items]
      list[index].votes += 1
      this.items = list
    }
  }
  onLoad() {
    this.page += 1
    this.getData()
  }
  async created() {
    const { content } = await querystatistical()
    this.topInfo = content
  }
  async getData() {
    const { content, count } = await inquirelist({
      votes_sort: false, // 是否根据投票数递减排序
      page: this.page, // 第N页
      page_size: 10 // 每页显示条数
      // keyword: this.search, // 根据编号或者姓名查询
    })
    this.total = count
    this.loading = false
    this.finished = this.total <= this.page * 10
    this.items = this.page > 1 ? this.items.concat(content) : content
  }
}
</script>
<style lang="scss" scoped>
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
  // margin-top: 156px;
  margin-top: 230px;
  background: white;
  padding: 40px 20px 10px;
  font-size: 32px;
  font-weight: bold;
  color: #103056;
  box-sizing: border-box;
  width: 100vw;

  .top_view {
    height: 36px;
    width: 36px;
    margin-right: 32px;
  }
  .list_item_view {
    height: calc(#{$height-primary} - 430px - constant(safe-area-inset-bottom));
    height: calc(#{$height-primary} - 430px - env(safe-area-inset-bottom));
    overflow: auto;
    width: 100%;
    margin-top: 10px;
    .item {
      width: 300px;
      height: 560px;
      display: inline-block;
      background-image: url(../assets/images/list_bg.png);
      background-size: 100%;
      background-repeat: no-repeat;
      text-align: center;
      position: relative;
      padding-top: 30px;
      box-sizing: border-box;
      margin: 18px 20px;
      img {
        width: 250px;
        height: 310px;
        border-radius: 10px;
        object-fit: cover;
      }
      .name {
        font-size: 28px;
        font-weight: 500;
        color: #103056;
        margin-top: 10px;
        line-height: 120%;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .tou {
        width: 163px;
        height: 48px;
        background: #103056;
        line-height: 48px;
        text-align: center;
        margin: 10px auto;
        border-radius: 27px;

        font-size: 24px;
        font-weight: 500;
        color: #ffffff;
      }
      .now_piao {
        font-size: 26px;
        font-weight: 500;
        color: #103056;
        line-height: 120%;
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
  // top: 338px;
  top: 20px;
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
