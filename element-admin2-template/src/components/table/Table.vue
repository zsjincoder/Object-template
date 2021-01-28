<template>
  <el-table
    border
    :data="data"
    :stripe="true"
    :header-cell-style="{background:'#dfe0e3',color:'#606266'}">
    <el-table-column
      label="序号"
      align="center"
      width="70">
      <template slot-scope="scope">
        {{ (scope.$index + 1) + (searchData.page - 1) * searchData.pageSize }}
      </template>
    </el-table-column>
    <template v-for="(item, index) in columns">
      <el-table-column
        :key="index"
        align="center"
        :prop="item.prop"
        :label="item.title"
        :minWidth="item.minWidth || 100">
      </el-table-column>
    </template>
    <slot name="action"></slot>
  </el-table>
</template>

<script>
  export default {
    name: "Table",
    props: {
      data: {
        type: Array,
        required: true
      },
      columns: {
        type: Array,
        required: true
      },
      searchData: {
        type: Object,
        default: ()=> {
          return {
            page: 1,
            pageSize: 10
          }
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      rowClass({row, rowIndex}){
        let c = rowIndex % 2 === 0 ? 'info-row' : 'positive-row'
        console.log(c);
        return c
      }
    }
  }
</script>

<style>
  .el-table .info-row {
    background: red;
  }
</style>
