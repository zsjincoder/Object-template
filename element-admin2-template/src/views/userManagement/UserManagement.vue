<template>
  <div>
    <!-- 搜索条件 -->
    <headers @addData="showModal = true;isAdd = true"
             :searchData="searchData"
             @queryData="getData">
      <template v-slot:form>
        <el-form-item label="手机号">
          <el-input v-model="searchData.form"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="searchData.nickName"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchData.status" placeholder="请选择">
<!--            <el-option-->
<!--              v-for="item in options"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value">-->
<!--            </el-option>-->
          </el-select>
        </el-form-item>
      </template>
    </headers>
    <!-- 表格 -->
    <z-table :data="tableData"
             :columns="columns"
             :searchData="searchData">
      <el-table-column
        label="操作"
        align="center"
        width="120"
        slot="action">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit
          </el-button>
        </template>
      </el-table-column>
    </z-table>
    <!-- 分页组件 -->
    <pagination :child-msg="searchData"
                @callFather="callFather"></pagination>
  </div>
</template>

<script>
  export default {
    name: "UserManagement",
    data() {
      return {
        searchData: {
          page: 1,
          pageSize: 10,
          total: 0,
          phone: null,
          nickName: null,
          status: null
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        columns: [
          {title: '日期', prop: 'date', minWidth: 100},
          {title: '名称', prop: 'name', minWidth: 200},
          {title: '地址', prop: 'address', minWidth: 200}
        ]
      }
    },
    methods: {
      getData(refresh = false) {

      },
      handleEdit(index, row) {
        console.log(index);
      },
      // 分页插件事件
      callFather(param) {
        this.searchData.page = param.currentPage
        this.searchData.pageSize = param.pageSize
        this.getData()
      },
    }
  }
</script>

<style scoped>

</style>
