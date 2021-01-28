import Vue from 'vue'
import Headers from "@/components/hearders/Headers";
import Table from "@/components/table/Table";
import Pagination from "@/components/pagination/Pagination";

export default {
  install: ()=>{
    Vue.component('Headers', Headers)
    Vue.component('ZTable', Table)
    Vue.component('Pagination', Pagination)
  }
}
