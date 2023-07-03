import { get } from '@/utils/request'

export function apiLogin(data) {
  return get({
    url: '/login',
    data
  })
}
