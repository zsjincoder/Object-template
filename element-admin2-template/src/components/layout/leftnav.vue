/**
* 左边菜单
*/
<template>
  <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path"
           unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff"
           active-text-color="#ffd04b">
    <div class="logobox">
      <img class="logoimg" src="../../assets/img/logo.png" alt="">
    </div>
    <sub-menu :all-menu="allMenu"></sub-menu>
  </el-menu>
</template>
<script>
  import {mapGetters} from "vuex";
  import SubMenu from "./SubMenu";

  export default {
    name: 'leftnav',
    components: {SubMenu},
    data() {
      return {
        collapsed: false
      }
    },
    computed:{
      ...mapGetters({
        allMenu:'getMenuList'
      })
    },
    // 创建完毕状态(里面是操作)
    created() {
      // 监听
      this.$root.Bus.$on('toggle', value => {
        this.collapsed = !value
      })
    }
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
    text-align: left;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-bg {
    background-color: #1f2d3d !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    height: 40px;
    line-height: 40px;
    color: #9d9d9d;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }

  .logoimg {
    height: 40px;
  }
</style>
