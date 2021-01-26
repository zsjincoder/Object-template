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
          },
          {
            menuId: 3,
            icon: 'icon-cat-skuQuery',
            menuName: '商品管理1',
            hasThird: 'N',
            url: 'goods/Goods1'
          }
        ]
      },
    ],
    // 面包屑
    breadcrumbs: []
  },
  getters: {
    getMenuList: state => state.menuList,
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
