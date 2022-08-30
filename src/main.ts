import Vue from 'vue'
import {checkCode} from './api'
import App from './App.vue'
import './assets/css/common.scss'
import router from './router'
import store from './store'
import {getAuth, setAuth} from './utils/utils'
// @ts-ignore
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
const fpPromise = FingerprintJS.load({
    apiKey: '87PMzkspFMcDXxLnS5df',
})

Vue.config.productionTip = false
router.beforeEach(async ({meta: {title}}, from, next) => {
    title && (document.title = title)
    next()
})

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        if (!getAuth())
            fpPromise
                .then(fp => fp.get())
                .then(result => {
                    checkCode(result.visitorId).then(({content: {token}}) => {
                        setAuth(token)
                    })
                })
    },
    // created() {
    //     const info = getAuth()
    //     if (!info || this.getCodes('code')) {
    //         if (this.getCodes('code')) {
    //             console.log(this.getCodes('code'), '111111')
    //             this.getopenId()
    //         } else {
    //             const redirect = encodeURIComponent('https://temporary.zhongdhy.top/plausible/')
    //             const appid = 'wx6e914febaa066e4f'
    //             window.location.href =
    //                 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    //                 appid +
    //                 '&redirect_uri=' +
    //                 redirect +
    //                 '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    //         }
    //     }
    // },
    methods: {
        async getopenId() {
            const {
                content: {token, status},
            } = await checkCode(this.getCodes('code')!!)
            if (status) {
                setAuth(token)
                location.replace('https://temporary.zhongdhy.top/plausible/')
            }
        },
        getCodes(code: string) {
            const reg = new RegExp('(^|&)' + code + '=([^&]*)(&|$)')
            const r = location.search.substr(1).match(reg)
            if (r != null) {
                return unescape(r[2])
            } else {
                return null
            }
        },
    },
}).$mount('#app')
