<template>
  <div class="header-con">
    <el-form ref="form" :model="queryFormData"
             :label-width="labelWidth.toString()"
             size="mini"
             inline>
      <slot name="form"></slot>
      <el-form-item>
        <div class="btn">
          <el-button size="small"
                     v-if="hasSearch"
                     class="header-btn"
                     @click="queryData">
            搜索
          </el-button>
          <el-button v-if="hasAdd"
                     size="mini"
                     type="success"
                     @click="add">
            {{addName}}
          </el-button>
          <slot name="button"></slot>
          <slot name="switch"></slot>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Headers',
    props: {
      searchData: {
        type: Object,
        default: () => {
        }
      },
      labelWidth: {
        type: Number,
        default: 80
      },
      hasTime: {
        type: Boolean,
        default: false
      },
      hasAdd: {
        type: Boolean,
        default: true
      },
      addName: {
        type: String,
        default: '新增'
      },
      hasSearch: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        queryFormData: {
          startTime: null,
          endTime: null
        }
      }
    },
    computed: {
      disabledStartTime() {
        return {
          disabledDate: (time) => {
            if (this.queryFormData.endTime) {
              return time.getTime() > new Date(this.queryFormData.endTime.replace(/-/g, '/'))
            } else {
              return time.getTime() > Date.now()
            }
          }
        }
      },
      disabledEndTime() {
        return {
          disabledDate: (time) => {
            if (this.queryFormData.startTime) {
              return time.getTime() < new Date(this.queryFormData.startTime.replace(/-/g, '/')) || time.getTime() > Date.now()
            } else {
              return time.getTime() > Date.now()
            }
          }
        }
      }
    },
    methods: {
      // 改变开始时间
      changeStartTime(date) {
        this.queryFormData.startTime = date || null
        this.queryData()
      },
      // 改变结束时间
      changeEndTime(date) {
        this.queryFormData.endTime = date || null
        this.queryData()
      },
      queryData() {
        let newData = {}
        Object.assign(newData, this.queryFormData, this.searchData)
        newData.page = 1
        this.$emit('queryData', newData)
      },
      add() {
        this.$emit('addData')
      }
    }
  }
</script>

<style scoped
       lang="less">
  .header-con {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 60px;
    border-radius: 5px;
    margin-top: 15px;

    .btn {
      display: flex;
      flex-wrap: nowrap;
      min-width: 120px;
      margin-left: 20px;
    }
  }
</style>
