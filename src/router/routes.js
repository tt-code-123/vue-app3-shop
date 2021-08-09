/* 
  所有路由配置的数组
*/
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'
export default [
  {
    path: '/msite',
    component: Msite,
    name:'msite'
  },
  {
    path: '/search',
    component: Search,
    name:'search'
  },
  {
    path: '/order',
    component: Order,
    name:'order'
  },
  {
    path: '/profile',
    component: Profile,
    name:'profile'
  },
  {
    path: '/',
    redirect:'/msite'
  }
]