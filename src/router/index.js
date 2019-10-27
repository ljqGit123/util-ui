import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 定义路由配置
let routes = []
let concat = (router) => {
  routes = routes.concat(router)
}
import Index from '../views/utilPage/router/index'
concat(Index)//加入cms模块的路由
export default routes;
