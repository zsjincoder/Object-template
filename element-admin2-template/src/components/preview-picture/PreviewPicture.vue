<template>
  <div class="img-con">
    <div class="img-body" :style="{width: width+'px',height: height+'px', cursor: 'pointer'}">
      <img :src="$fileUrl + src"
           alt=""
           class="img">
      <div class="img-eye" @click="dialogVisible = true">
        <i class="el-icon-view" style="color: #ffffff"></i>
      </div>
    </div>
    <el-dialog
      title="图预览"
      :visible.sync="dialogVisible"
      width="30%">
      <div>
        <img :src="$fileUrl + src"
             alt=""
             class="pre-img"
             :style="{width: width * 10+'px',height: height * 10+'px'}">
      </div>
      <span slot="footer" class="dialog-footer"></span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "PreviewPicture",
    props: {
      src: {
        type: String,
        required: true
      },
      width: {
        type: Number,
        default: 40
      },
      height: {
        type: Number,
        default: 40
      }
    },
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {}
  }
</script>

<style scoped
       lang="less">
.img-con {
  display: flex;
  justify-content: center;

  .img-body {
    position: relative;
    .img {
      width: 100%;
      height: 100%;
      display: block;
    }

    .img-eye {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
    }
    .img-eye:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
