import Vue from "vue"
import Vuex from "vuex"
import tab from "./tab"
Vue.use(Vuex)
//创建vuex的实例Store
export default new Vuex.Store({
    modules:{
        tab
    }
})
