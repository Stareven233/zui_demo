import axios from 'axios'

const service = axios.create({
  // 服务接口请求
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时设置
  timeout: 15000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

export default service
