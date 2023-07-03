import router from '@/router'
import mRoute from './mRoute'
import { usePermission } from '@/store/usePermission'
import { useUserInfo } from '@/store/useUserInfo'
// import { useMenu } from '@/store/useMenu'
import { clearCookie } from '@/utils/cookie'

/**
 * 用户退出操作
 */
function logout() {
  const permissionStore = usePermission()
  const userInfoStore = useUserInfo()
  // const menuStore = useMenu()
  // 清除路由配置
  mRoute.reset()
  // 权限清除
  permissionStore.clear()
  // 用户信息清除
  userInfoStore.clear()
  // 菜单清除
  // menuStore.clear()
  // 清除cookie
  clearCookie()
  // 跳转到登录页
  router.push({ path: '/login' })
}

/**
 * 用户登录操作
 */
function login() {

}

export default {
  login, logout
}
