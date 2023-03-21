// import { Snackbar } from "~/utils/snackbar";

export default defineNuxtRouteMiddleware((to, from) => {
  // const loggedIn = !!store.getters.loggedIn
  // if (!loggedIn && !to.matched.some(record => record.meta.noAuthRequired)) {
  //   Snackbar.emitsInfo(`欢迎来到${siteTitle}。要继续访问此内容，请先登录。`)
  //   next({ name: 'Login', query: { redirect: to.path } })
  // } else {
  //   next()
  // }
  const route = useRoute();
  // Snackbar.emitsInfo(`欢迎来到${route.name}`)

  // if (to.fullPath === '/infors') {
  //     // 重定向
  //     return navigateTo('/applyCode');
  // }
  // if (to.fullPath === '/login') {
  //     // 停止当前导航
  //     return abortNavigation();
  // }
  // if (to.fullPath === '/comePay/comePay') {
  //     // 拒绝当前导航并出现错误
  //     return abortNavigation('禁止进入页面');
  // }
});
