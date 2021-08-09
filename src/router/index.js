import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

/* 声明使用vue插件 */
Vue.use(VueRouter);
/* 向外暴露路由器对象模块 */
export default new VueRouter({
  mode:'history',  // 路由路径里没有#
  // 项目中所有路由
  routes
})