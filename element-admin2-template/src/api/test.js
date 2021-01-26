import axios from '@/libs/api.request'

/**
 * test
 * @param data
 * @return {*}
 */
export const test = (data) => {
  return axios.request({
    url: '/test/test',
    method: 'get',
    params: data
  })
}
