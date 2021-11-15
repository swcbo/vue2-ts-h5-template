<template>
  <div class="deital_bg">
    <video-player
      v-if="info.video"
      ref="videoPlayer"
      style="width:100vw;"
      :playsinline="true"
      :options="playerOptions"
      @pause="onPlayerPause($event)"
      @play="onPlayerPlay($event)"
      @ended="onPlayerEnded($event)"
      customEventName="customstatechangedeventname"
    ></video-player>
    <div class="toBakc" @click="goBack()">返回</div>
  </div>
</template>

<script lang="ts">
import { voteDetail } from '@/api'
import { Component, Prop, Vue } from 'vue-property-decorator'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
// @ts-ignore
import { videoPlayer } from 'vue-video-player'

@Component({ components: { videoPlayer } })
export default class extends Vue {
  info = { video: '' }
  playerOptions = {
    playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
    autoplay: false, // 如果为true,浏览器准备好时开始回放。
    muted: false, // 默认情况下将会消除任何音频。
    loop: false, // 是否视频一结束就重新开始。
    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: 'zh-CN',
    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [
      {
        type: 'video/mp4', // 类型
        src: '' // url地址
      }
    ],
    notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
  }
  isPlay: boolean = false
  get player() {
    const videoPlayer: any = this.$refs.videoPlayer
    return videoPlayer.player
  }
  async created() {
    const { content } = await voteDetail(this.$route.params.id)
    this.info = content as any
    this.playerOptions.sources[0].src = this.info.video
    document.title = content.title
  }
  goBack() {
    this.$router.go(-1)
  }

  onPlayerPause(e: any) {
    this.isPlay = false //暂停
  }

  onPlayerPlay(e: any) {
    this.isPlay = true //播放
  }

  onPlayerClick() {
    if (this.isPlay) {
      this.player.pause()
    } else {
      this.player.play()
    }
  }
}
</script>
<style lang="scss">
.video-js {
  // width: 100vw !important;
  // max-height: 550px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 0;
  .vjs-big-play-button {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 0;
  }
}
</style>
<style lang="scss" scoped>
.video-player-box {
  width: 100vw;
}

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
