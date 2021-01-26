import {returnToRoutingMenu} from "@/utils/util";

export default {
  state: {
    // 菜单路由
    menuList:[
      {
        menuId: 1,
        icon: 'li-icon-xiangmuguanli',
        menuName: '基础管理',
        hasThird: null,
        url: 'index',
        menus: [
          {
            menuId: 2,
            icon: 'icon-cat-skuQuery',
            menuName: '商品管理',
            hasThird: 'N',
            url: 'goods/Goods'
          }
        ]
      },
    ],
    // 面包屑
    breadcrumbs: []
  },
  getters: {
    getMenuList: state => returnToRoutingMenu(),
    getBreadcrumbs: state => state.breadcrumbs
  },
  mutations: {
    setBreadcrumbs: (state, data) => {
      state.breadcrumbs = data
    }
  },
  actions: {

  }
}
