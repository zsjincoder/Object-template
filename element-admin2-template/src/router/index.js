// 导入组件
import Vue from 'vue';
import Router from 'vue-router';
import routers from "./routers";


// 启用路由
Vue.use(Router);

// 导出路由
const router = new Router({
    routes: routers
})

// 路由拦截器
router.beforeEach((to, from, next) => {
  if (to.matched.length != 0) {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (Boolean(localStorage.getItem("userInfo"))) { // 通过vuex state获取当前的user是否存在
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    } else {
      if (Boolean(localStorage.getItem("userInfo"))) { // 判断是否登录
        if (to.path != "/" && to.path != "/login") { //判断是否要跳到登录界面
          next();
        } else {
          /**
           * 防刷新，如果登录，修改路由跳转到登录页面，修改路由为登录后的首页
           */
          next({
            path: '/goods/Goods'
          })
        }
      } else {
        next();
      }
    }
  } else {
    next({
      path: '/login',
      query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
})

export default router
