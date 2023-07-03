import router from '@/router'
import { RouteRecord } from 'vue-router'

const baseNameList = ['home_page', 'from', 'table', 'login', 'info']

/**
 * 还原路由
 * @param routeList
 */
function reset(routeList: string[] = []): void {
  router.getRoutes().forEach((route: RouteRecord) => {
    if (!routeList.concat(baseNameList).includes(route.name as string)) {
      if (router.hasRoute(route.name)) {
        router.removeRoute(route.name)
      }
    }
  })
}

export default {
  reset
}
