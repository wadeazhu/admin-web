import router from '@/router'

/**
 * 用户退出操作
 */
function logout() {
  // 清除路由配置

  // 权限清除
  // 用户信息清除
  // 菜单清除

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
