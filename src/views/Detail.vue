<template>
  <div>
    <video
      oncontextmenu="return false"
      id="videoDemo"
      controls
      :src="info.video"
      style="width:100vw;background:black"
    ></video>
    <div class="content" v-html="info.remark"></div>
  </div>
</template>

<script lang="ts">
import { voteDetail } from '@/api'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({ components: {} })
export default class extends Vue {
  info = { video: '' }
  // content = `<img src="https://res.dryork.cn/pic/dryork/other/20210928/1632821773711409_790x2183.jpg" width="100%"><br><div><img src="https://res.dryork.cn/pic/dryork/other/20210928/1632814141060430_790x501.jpg" width="100%"><br></div><div><img src="https://res.dryork.cn/pic/dryork/other/20210928/1632814152198967_790x591.jpg" width="100%"><br></div><div><img src="https://res.dryork.cn/pic/dryork/other/20210928/1632814164296532_790x1155.jpg" width="100%"><br></div><div><img src="https://res.dryork.cn/pic/dryork/other/20210928/1632814178336799_790x1001.jpg" width="100%"><br></div>`
  async created() {
    const { content } = await voteDetail(this.$route.params.id)
    this.info = content
    document.title = content.title
  }
  mounted() {}
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
