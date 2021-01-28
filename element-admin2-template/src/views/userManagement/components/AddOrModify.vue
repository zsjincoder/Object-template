<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="30%"
      @close="handleClose">
      <el-form ref="form"
               :model="fromData"
               :rules="rules"
               size="small"
               label-width="100px">
        <el-form-item label="门店门头："
                      prop="shopHead">
          <z-upload @fileChange="fileChange"></z-upload>
        </el-form-item>
        <el-form-item label="门店名称："
                      prop="shopName">
          <el-input v-model.trim="fromData.shopName"
                    placeholder="请输入门店名称"></el-input>
        </el-form-item>
        <el-form-item label="门店地址："
                      prop="shopSite">
          <el-input v-model.trim="fromData.shopSite"
                    placeholder="请输门店地址"></el-input>
        </el-form-item>
        <el-form-item label="负责人："
                      prop="principal">
          <el-input v-model.trim="fromData.principal"
                    placeholder="请输入负责人姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号码："
                      prop="phone">
          <el-input v-model.number="fromData.phone"
                    placeholder="请输入手机号码"
                    :maxLength="11"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small"
                   @click="handleClose">取 消</el-button>
        <el-button size="small"
                   type="primary"
                   @click="ok()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {isValidPhone} from "@/validate";

  export default {
    name: "AddOrModify",
    props: {show: Boolean, isAdd: Boolean},
    data() {
      return {
        dialogVisible: false,
        title: '新增',
        fromData: {
          shopHead: [],
          shopName: '',
          shopSite: '',
          principal: '',
          phone: '',
        },
        rules: {
          shopHead: [
            { type: 'array', required: false, message: '请选择门店门头', trigger: 'change' }
          ],
          shopName: [
            {required: true,message: '请输入门店名称', trigger:'blur' }
          ],
          shopSite: [
            {required: true,message: '请输入门店地址', trigger:'blur' }
          ],
          principal: [
            {required: true,message: '请输入负责人姓名', trigger:'blur' }
          ],
          phone: [
            { required: true, validator: isValidPhone, trigger: ['change','blur'] }
          ]
        }
      }
    },
    created() {
      this.dialogVisible = this.show;
      this.title = this.isAdd ? '新增门店' : '修改门店'
    },
    methods: {
      ok() {
        this.$refs['form'].validate((valid) => {
          if (valid) {

          }
        });
      },
      handleClose(status = false) {
        this.$emit('close', status)
      },
      fileChange(files) {
        this.fromData.shopHead = files
      }
    }
  }
</script>

<style scoped>
/deep/.el-input {
  /*width: 250px;*/
}
</style>
