import Vue from 'vue'
import App from './App'
import store from "@/store";

//调试工具
// #ifdef H5
import VConsole  from 'vconsole'
new VConsole()
// #endif

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    store,
  ...App
})
app.$mount()
