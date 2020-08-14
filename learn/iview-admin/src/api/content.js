import axios from '@/libs/api.request'
import qs from 'qs'

const getList = (options) => {
  return axios.get('/public/list?' + qs.stringify(options))
}

export {
  getList
}