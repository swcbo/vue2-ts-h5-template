<template>
  <div>
    <img
      src="@/assets/images/top_view.png"
      style="width:100vw"
    />
    <div
      class="top_content row_center"
      v-if="topInfo"
    >
      <div class="column_center">
        <span>{{topInfo.participation}}</span>
        <span>参与人数</span>
      </div>
      <div class="line" />
      <div class="column_center">
        <span>{{topInfo.cumulative_voting}}</span>
        <span>累计投票</span>
      </div>
      <div class="line" />
      <div class="column_center">
        <span>{{topInfo.access_statistics}}</span>
        <span>访问数量</span>
      </div>
    </div>
    <div class="list_view">
      <div class="row_center"> <img src="@/assets/images/erwei.png" class="top_view"/>点击查看详情</div>
      <div class="list_item_view">
        <div
          v-for="(item,index) in items"
          :key="index"
          class="column_center item"
          @click="preView(`${item.head_portrait}?x-oss-process=image/resize,h_1200,m_lfit`)"
        >
          <div class="top_title">{{item.serial_number}}</div>
          <img :src="`${item.head_portrait}?x-oss-process=image/resize,h_400,m_lfit`" />
          <div class="name" v-html="item.name" style='white-space: pre-wrap;'></div>
          <div
            class="tou"
            @click.stop="toPiao(item.id,index)"
          >投TA一票</div>
          <div class="now_piao">已获投票数：{{item.votes}}票</div>
        </div>
        <div
          v-if="items.length==0"
          style="line-height:40vh;text-align:center;width:100%"
        >暂无数据</div>
      </div>
      <!-- <div
        class="loader_moer"
        v-if="total>page*20"
      >加载更多</div> -->
    </div>

  </div>
</template>

<script lang='ts'>
import { addPiao, inquirelist, querystatistical } from '@/api';
import { SearchModule } from '@/store/modules/user';
import { ImagePreview, Toast } from 'vant';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
@Component({ components: {}, name: 'Index' })
export default class Index extends Vue {
  private items: any[] = [];
  private topInfo: any = null;
  private page = 1;
  private total = 0;
  private get search() {
    return SearchModule.search;
  }
  @Watch('search', {
    immediate: true,
  })
  private watchSearch() {
    this.page = 1;
    this.getData();
  }
  private preView(url: string) {
    ImagePreview([url]);
  }
  private async toPiao(id: string, index: number) {
    const { status } = await addPiao(id);
    if (status) {
      Toast({ message: '投票成功' });
      const list = [...this.items];
      list[index].votes += 1;
      this.items = list;
    }
  }
  private async created() {
    const { content } = await querystatistical();
    this.topInfo = content;
  }
  private async getData() {
    const { content, count } = await inquirelist({
      votes_sort: false, // 是否根据投票数递减排序
      page: this.page, // 第N页
      page_size: 100, // 每页显示条数
      keyword: this.search, // 根据编号或者姓名查询
    });
    this.total = count;
    this.items = this.page > 1 ? this.items.concat(content) : content;
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

  .top_view {
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
      width: 300px;
      height: 560px;
      background-image: url(../assets/images/list_bg.png);
      background-size: 100%;
      background-repeat: no-repeat;
      margin-top: 36px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 270px;
        height: 360px;
        border-radius: 10px;
        margin-top: 10px;
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
         margin: 10px 0;
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