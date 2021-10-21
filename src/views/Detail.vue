<template>
  <div class="deital_bg">
    <video
      oncontextmenu="return false"
      id="videoDemo"
      controls
      :src="info.video"
      style="width:100vw;"
    ></video>
    <!-- <div class="content mP-20" v-html="info.content"></div> -->
    <div class="toBakc" @click="goBack()">返回</div>
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
  goBack() {
    this.$router.go(-1)
  }
}
</script>
<style lang="scss" scoped>
.toBakc {
  position: fixed;
  bottom: 20vh;
  border-radius: 50%;
  right: 20px;
  height: 100px;
  background: #fff;
  text-align: center;
  line-height: 100px;
  color: #333;
  width: 100px;
}
.deital_bg {
  background: black;
  height: 100vh;
  width: 100vw;
}
#videoDemo {
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto;
}
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
