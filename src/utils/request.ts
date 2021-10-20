import { getAuth } from './utils'
import { Toast } from 'vant'
import axios, { AxiosRequestConfig } from 'axios'
axios.defaults.timeout = 1000 * 60

interface AxiosErrorInterface {
  message: string
  config: any
  response: any
}

axios.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: AxiosErrorInterface) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: AxiosErrorInterface) => {
    return Promise.reject(error)
  }
)
let count = 0
const baseRequest = (config: any) => {
  if (!config.hiddenToast) {
    count === 0 &&
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
  }
  count += 1
  config = {
    ...config,
    url: `${process.env.VUE_APP_BASE_API}${config.url}`,
    headers: {
      Authorization: `Bearer ${getAuth()}`,
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
  return axios
    .request(config)
    .then(response => {
      count -= 1
      count === 0 && Toast.clear()
      if (!response.data.status) {
        Toast.fail(response.data.message)
      }

      return response.data
    })
    .catch(error => {
      count -= 1
      count === 0 && Toast.clear()
      if (error.response.status === 401) {
        // const redirecturl = encodeURIComponent('https://vote.huangb.top')
        // const appid = 'wxc28969991d4ab616'
        // window.location.href =
        //   'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        //   appid +
        //   '&redirect_uri=' +
        //   redirecturl +
        //   '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      } else {
        Toast.fail('服务器异常')
      }

      return Promise.reject(error)
    })
}

export default {
  get: (url: string, params?: object, config?: any) => {
    return baseRequest({
      method: 'get',
      params,
      url,
      ...config
    })
  },
  post: (url: string, data = {}, config?: any) => {
    return baseRequest({
      data,
      method: 'post',
      url,
      ...config
    })
  },
  patch: (url: string, data: object, config?: any) => {
    return baseRequest({
      data,
      method: 'patch',
      url,
      ...config
    })
  },
  put: (url: string, data?: object, config?: any) => {
    return baseRequest({
      data,
      method: 'put',
      url,
      ...config
    })
  },
  delete: (url: string, data?: object, config?: any) => {
    return baseRequest({
      data,
      method: 'delete',
      url,
      ...config
    })
  }
}
