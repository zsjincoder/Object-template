import axios from '@/libs/api.request'

export const testContext = () => {
  return axios.request({
    url: '',
    method: 'get'
  })
}
