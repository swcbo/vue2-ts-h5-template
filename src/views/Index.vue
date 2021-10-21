<template>
  <div class="bg_view">
    <div class="bg_scroll">
      <img src="@/assets/images/WechatIMG423.jpeg" style="width:100vw" />
      <div class="top_content row_center" v-if="topInfo">
        <div class="column_center">
          <span>{{ topInfo.participate }}</span>
          <span>参与人数</span>
        </div>
        <div class="line" />
        <div class="column_center">
          <span>{{ topInfo.vote_number }}</span>
          <span>累计投票</span>
        </div>
        <div class="line" />
        <div class="column_center">
          <span>{{ topInfo.visit }}</span>
          <span>访问数量</span>
        </div>
      </div>
      <div class="list_view">
        <!-- <div class="row_center">
        <img src="@/assets/images/erwei.png" class="top_view" />
        点击查看详情
      </div> -->
        <div class="list_item_view" ref="scorll">
          <!-- <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :offset="50"
        > -->
          <div
            v-for="(item, index) in items"
            :key="index"
            class="column_center item"
            @click="preView(item)"
          >
            <!-- <div class="top_title">{{ item.serial_number }}</div> -->
            <img :src="`${item.cover}?imageView2/1/h/400`" />
            <div class="name_view">
              <div class="name" style="white-space: pre-wrap;">
                {{ item.title }}
              </div>
            </div>
            <div class="tou" @click.stop="toPiao(item.id, index)">投TA一票</div>
            <div class="now_piao">
              已获投票数：{{ item.show_vote_number }}票
            </div>
          </div>
          <!-- </van-list> -->
          <img
            src="@/assets/images/bottom_view.png"
            style="width:100%;margin-top:10px"
          />
        </div>
      </div>
    </div>

    <van-popup v-model="show" closeable round>
      <div class="pop_view">
        <div
          style="color:#333;font-size:18px;margin-bottom:10px;"
          class="row_center"
        >
          <img src="@/assets/images/fll.png" />
          初赛作品投票规则
        </div>
        <div style="text-align:left">
          <van-icon name="clock-o" color="#1989fa" />
          投票开始：2021-10-22 08:00
        </div>
        <div style="text-align:left">
          <van-icon name="clock-o" color="#1989fa" />
          投票结束：2021-10-28 22:00
        </div>
        <div style="text-align:left">
          <van-icon name="info-o" color="#1989fa" />
          投票规则：每个微信号每天可以投票10次（每天可为同一作品投票10次，也可为不同作品分别投票）
        </div>
        <div style="text-align:left">
          <van-icon name="orders-o" color="#1989fa" />
          活动介绍：海峡两岸暨港澳无人机航拍创作大赛自2017年经国务院台湾事务办公室批准并立项，至今已在深圳成功举办三届，是国家级重点交流活动。“第四届海峡两岸暨港澳无人机航拍创作大赛”已在深圳市大鹏新区正式启动，海峡两岸暨港澳专业队伍报名踊跃。大赛将由组委会专家评出金、银、铜奖，及网络人气奖、传媒关注奖等团体奖，最佳编剧奖、最佳飞手奖、最佳云台手奖、最佳剪辑奖、校园新锐奖等个人奖及其它专项奖，并颁发丰厚的奖金，其中最高奖金金额达3万元人民币。
        </div>
      </div>
    </van-popup>
    <div class="toNet" @click="toWeb">
      <img src="@/assets/images/rukou.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import { addPiao, inquirelist, querystatistical } from '@/api'
import { List, Toast, Popup, Icon } from 'vant'
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  components: {
    [List.name]: List,
    [Popup.name]: Popup,
    [Icon.name]: Icon
  },
  name: 'Index'
})
export default class Index extends Vue {
  items: any[] = []
  topInfo: any = null
  show = !(window as any).show
  page = 0
  total = 0
  finished = false
  loading = false
  scroll = 0
  @Watch('show')
  watchSHow() {
    ;(window as any).show = true
  }
  preView(item: any) {
    this.$router.push(`/detail/${item.id}`)
  }
  toWeb() {
    window.location.href = 'https://www.uavdvc.com/'
  }
  async toPiao(id: string, index: number) {
    const { status } = await addPiao(id)
    if (status) {
      Toast({ message: '投票成功' })
      const list = [...this.items]
      list[index].show_vote_number += 1
      this.items = list
    }
  }
  onLoad() {
    this.page += 1
    this.getData()
  }
  async mounted() {
    document
      .querySelector('.bg_scroll')!
      .addEventListener('scroll', this.handleScroll)
    const { content } = await querystatistical()
    this.topInfo = content
    this.onLoad()
  }
  handleScroll() {
    this.scroll = document.querySelector('.bg_scroll')?.scrollTop || 0
  }
  activated() {
    document.querySelector('.bg_scroll')?.scrollTo(0, this.scroll)
  }

  async getData() {
    const { content, count } = await inquirelist({
      votes_sort: false,
      page: this.page,
      page_size: 1000
    })
    this.total = count
    this.loading = false
    this.finished = this.total <= this.page * 10
    this.items = this.page > 1 ? this.items.concat(content) : content
  }
}
</script>
<style lang="scss" scoped>
.toNet {
  position: fixed;
  top: 70vh;
  right: -10px;
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  z-index: 1;
  color: #4c6dac;
  img {
    width: 140px;
    object-fit: contain;
  }
}
.pop_view {
  padding: 30px;
  width: 70vw;
  font-size: 26px;
  img {
    width: 100px;
    object-fit: contain;
  }
}
.bg_view {
  background-image: url('../assets/images/WechatIMG424.jpeg');
  background-repeat: no-repeat;
  height: calc(#{$height-primary} - constant(safe-area-inset-bottom) - 100px);
  height: calc(#{$height-primary} - env(safe-area-inset-bottom) - 100px);
  position: relative;
  height: 1;
}
.bg_scroll {
  height: calc(#{$height-primary} - constant(safe-area-inset-bottom) - 100px);
  height: calc(#{$height-primary} - env(safe-area-inset-bottom) - 100px);
  overflow-y: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

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
  margin-top: 100px;
  // margin-top: 230px;
  padding: 0px 20px 10px;
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
    // height: calc(#{$height-primary} - 620px - constant(safe-area-inset-bottom));
    // height: calc(#{$height-primary} - 620px - env(safe-area-inset-bottom));
    text-align: left;
    // overflow-y: auto;
    // overflow-x: hidden;
    width: 100%;
    .item {
      width: 300px;
      display: inline-block;
      // background-image: url(../assets/images/list_bg.png);
      // background-size: 100%;
      // background-repeat: no-repeat;
      text-align: center;
      position: relative;
      // padding-top: 30px;
      box-sizing: border-box;
      margin: 10px 20px 30px;
      img {
        width: 300px;
        height: 200px;
        border-radius: 10px;
        object-fit: cover;
      }
      .name_view {
        height: 60px;
      }
      .name {
        font-size: 28px;
        font-weight: 500;
        color: #103056;
        margin-top: 10px;
        line-height: 120%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
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
  top: 300px;
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
