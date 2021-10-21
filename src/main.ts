import Vue from 'vue'
import { checkCode, statistical } from './api'
import App from './App.vue'
import './assets/css/common.scss'
import router from './router'
import store from './store'
import { getAuth, setAuth } from './utils/utils'
Vue.config.productionTip = false
router.beforeEach(async ({ meta: { title } }, from, next) => {
  console.log(title)
  title && (document.title = title)
  next()
})
document
  .getElementsByTagName('body')[0]
  .style.setProperty('--height-primary', `${window.outerHeight}px`)
window.addEventListener('resize', () => {
  document
    .getElementsByTagName('body')[0]
    .style.setProperty('--height-primary', `${window.outerHeight}px`)
})
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const info = getAuth()
    if (!info || this.getCodes('code')) {
      if (this.getCodes('code')) {
        this.getopenId()
      } else {
        const redirecturl = encodeURIComponent('https://vote.huangb.top')
        const appid = 'wxe00470f7a99e85cf'
        window.location.href =
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
          appid +
          '&redirect_uri=' +
          redirecturl +
          '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      }
    }
  },
  methods: {
    async getopenId() {
      const {
        content: { token }
      } = await checkCode(this.getCodes('code')!!)
      setAuth(token)
      statistical()
      location.replace('https://vote.huangb.top')
    },
    getCodes(code: string) {
      const reg = new RegExp('(^|&)' + code + '=([^&]*)(&|$)')
      const r = location.search.substr(1).match(reg)
      if (r != null) {
        return unescape(r[2])
      } else {
        return null
      }
    }
  }
}).$mount('#app')
