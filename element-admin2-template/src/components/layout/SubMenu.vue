<template>
  <div>
    <template v-for="(menu,index) in allMenu">
      <template v-if="!(menu.hasOwnProperty('children') && menu.children)">
        <el-menu-item :index="menu.path" :key="index">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
      </template>
      <el-submenu :key="index"
                  :index="menu.name"
                  v-else>
        <template>
          <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{menu.name}}</span>
          </template>
          <el-menu-item-group>
            <sub-menu :all-menu="menu.children"></sub-menu>
          </el-menu-item-group>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: "SubMenu",
    props: {
      allMenu: {
        type: Array,
        required: true
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
