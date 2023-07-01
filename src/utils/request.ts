import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig } from 'axios'
import { useUserInfo } from '@/store/useUserInfo'
import { getCookie } from '@/utils/cookie'
import { responseCodeEnum } from '@/types/httpEnum'
import { message } from 'ant-design-vue'
import { BasicResult, optionsType } from '@/types/http'
import { object2FormData } from '@/utils/objFormat'
import user from '@/module/user'

// object 对象存放每次new CancelToken生产的方法
const source: any = {}

const instance = axios.create({
  baseURL: '',
  timeout: 1000 * 50
})

instance.interceptors.request.use((config:InternalAxiosRequestConfig) => {
  const userStore = useUserInfo()
  const _info = userStore.getUserInfo()
  if (_info && _info.token) {
    config.headers['Authorization'] = getCookie('token')
  }
  return config
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const statusCode = parseInt(response.data.code)

    if (statusCode === responseCodeEnum.SUCCESS) {
      return Promise.resolve(response.data)
    } else if (statusCode === responseCodeEnum.UNAUTHEN) {
      message.warn('登录失败，请重新登录~')
      user.logout()
      return Promise.reject(response)
    } else {
      message.error(response.data.message)
      return Promise.reject(response)
    }
  },
  (error) => {
    message.error(error.response.data.message)
    return Promise.reject(error)
  }
)

async function request<T = any>(options: optionsType): Promise<BasicResult<T>> {
  if (!options.method) {
    options.method = 'get'
  }

  let formatData: FormData | Object = {}

  const isUrlParam = ['get', 'put', 'delete'].includes(options.method.toLowerCase())

  if (options.isFormData) {
    formatData = object2FormData(options.data)
  }
  const config: AxiosRequestConfig = {
    url: options.url,
    method: options.method,
    cancelToken: new axios.CancelToken((c) => {
      source[options.url] = c
    })
  }

  if (isUrlParam) {
    config.params = formatData
  } else {
    config.data = formatData
    config.responseType = options.responseType || 'json'
  }

  const res = await instance.request<BasicResult<T>>(config)
  return res.data
}

function get(options: optionsType) {
  options.method = 'GET'
  return request(options)
}

function post(options: optionsType) {
  options.method = 'POST'
  return request(options)
}

function put(options: optionsType) {
  options.method = 'PUT'
  return request(options)
}

function del(options: optionsType) {
  options.method = 'DELETE'
  return request(options)
}

export { get, post, put, del }
