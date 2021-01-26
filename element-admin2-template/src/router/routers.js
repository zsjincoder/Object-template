// 登录
import login from '@/views/login';
// 首页
import index from '@/views/index';
/************基础信息菜单********/
// 用户管理
import UserManagement from '@/views/userManagement/UserManagement';



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
  path: '/baseData',
  name: '基础数据管理',
  component: index,
  icon: 'el-icon-s-grid',
  children: [{
    path: '/goods/Goods',
    name: '用户管理',
    icon:'el-icon-s-custom',
    component: UserManagement,
    meta: {
      requireAuth: true
    }
  }]
}]
