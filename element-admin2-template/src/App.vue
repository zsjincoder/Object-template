<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from "vuex";
  import {routedBreadcrumbs} from "./utils/util";

  export default {
    name: "App",
    computed: {
      ...mapGetters({
        allMenu: 'getMenuList'
      })
    },
    created() {
      // 设置面包屑
      this.setBreadcrumbs(routedBreadcrumbs(this.$route.path, this.allMenu))
    },
    methods: {
      ...mapMutations({
        setBreadcrumbs: 'setBreadcrumbs'
      })
    },
    watch: {
      $route: {
        handler(val) {
          // 设置面包屑
          this.setBreadcrumbs(routedBreadcrumbs(val.path, this.allMenu))
        },
        // 深度观察监听
        deep: true
      }
    }
  };
</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    widows: 100%;
    height: 100%;
  }
</style>
