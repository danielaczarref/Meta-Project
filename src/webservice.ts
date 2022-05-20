import axios, { AxiosRequestConfig } from 'axios'
import { URL_API_GATEWAY } from './envVariables'

export const webservice = (config: AxiosRequestConfig) => {

  const axiosIntance = axios.create({
    baseURL: URL_API_GATEWAY,
    ...config
  })

  axiosIntance.interceptors.request.use(
    function request(conf) {
      // console.log('interceptors - request: ', conf)
      return conf
    },
    function requestError(error) {
      // console.log('interceptors - requestError: ', error)
      return Promise.reject(error)
    }
  )

  axiosIntance.interceptors.response.use(
    function resp(response: any) {
      // console.log('interceptors - response: ', response)
      return response
    },
    function responseError(error: any) {
      // console.log('interceptors - responseError: ', error)
      return Promise.reject(error)
    }
  )

  return axiosIntance
}
