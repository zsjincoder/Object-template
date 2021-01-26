// 登录
import login from '@/views/login';
// 首页
import index from '@/views/index';
/**
 * 基础菜单
 */
// 商品管理
import Goods from '@/views/goods/Goods';


// 导出路由
export default [{
  path: '/',
  name: '',
  component: login,
  hidden: true,
  meta: {
    requireAuth: false
  }
}, {
  path: '/login',
  name: '登录',
  component: login,
  hidden: true,
  meta: {
    requireAuth: false
  }
}, {
  path: '/index',
  name: '基础管理',
  component: index,
  iconCls: 'el-icon-tickets',
  children: [{
    path: '/goods/Goods',
    name: '商品管理',
    component: Goods,
    meta: {
      requireAuth: true
    }
  },{
    path: '/goods/Goods1',
    name: '商品管理2',
    component: Goods,
    meta: {
      requireAuth: true
    }
  }]
}]
