<template>
  <div>
    <video
      oncontextmenu="return false"
      id="videoDemo"
      controls
      :src="info.video"
      style="width:100vw;background:black"
    ></video>
    <div class="content mP-20" v-html="info.content"></div>
  </div>
</template>

<script lang="ts">
import { voteDetail } from '@/api'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({ components: {} })
export default class extends Vue {
  info = { video: '' }
  async created() {
    const { content } = await voteDetail(this.$route.params.id)
    this.info = content
    document.title = content.title
  }
  mounted() {}
}
</script>
<style lang="scss" scoped>
video::-webkit-media-controls-enclosure {
  overflow: hidden;
}
video::-webkit-media-controls-panel {
  width: calc(100% + 30px);
}
.mP-20 {
  padding: 0 40px;
}
</style>
