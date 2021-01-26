<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="(item,index) in breadcrumbs">
        <el-breadcrumb-item v-if="item.url && index !== breadcrumbs.length -1"
                            :key="index"
                            :to="{ path: item.url }">
          {{item.menuName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else>{{item.menuName}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "BreadCrumbs",
    computed: {
      ...mapGetters({
        allMenu: 'getMenuList',
        breadcrumbs: 'getBreadcrumbs'
      })
    }
  }
</script>

<style scoped>

</style>
