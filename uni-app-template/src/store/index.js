import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//模块
import app from './modules/app'

const store = new Vuex.Store({
    plugins: [],
    modules:{
        app
    },

})

export default store
