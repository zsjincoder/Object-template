<template>
  <div class="u-con">
    <div class="file-list">
      <template v-for="(item,key) in fileList">
        <div v-if="item.type === 'image'"
             class="file-item"
             :key="key"
             @click="delFile(key)">
          <img :src="item.preImg"
               class="f-l-img"
               alt="">
          <i class="el-icon-delete i-del"></i>
        </div>
        <div v-else
             class="file-item"
             :key="key"
             @click="delFile(key)">
          <span>{{item.name}}</span>
          <i class="el-icon-delete i-del"></i>
        </div>
      </template>
    </div>
    <div class="u-b">
      <input ref="uploadFile"
             type="file"
             class="upload-file"
             :multiple="multiple"
             :accept="accept"
             @change="fileEvent"/>
      <div class="file-add"
           @click="$refs.uploadFile.click()">
        <i class="el-icon-plus" style="font-size: 22px"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ZUpload",
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      accept: {
        type: String,
        default: "image/*"
      },
    },
    data() {
      return {
        fileList: []
      }
    },
    computed: {
      files() {
        return this.fileList.map(item => item.file)
      }
    },
    methods: {
      // 删除文件
      delFile(index) {
        this.fileList.splice(index, 1)
        this.$emit('fileChange', this.files)
      },
      // 选择文件
      fileEvent() {
        if (this.$refs.uploadFile.files.length > 0) {
          for (let i = 0; i < this.$refs.uploadFile.files.length; i++) {
            let obj = {
              file: this.$refs.uploadFile.files[i],
              name: this.$refs.uploadFile.files[i].name
            }
            let t = this.$refs.uploadFile.files[i].type.split('/')[0]
            obj.type = t
            if (t === 'image') {
              obj.preImg = window.URL.createObjectURL(this.$refs.uploadFile.files[i])
            }
            this.fileList.push(obj)
          }
          this.$emit('fileChange', this.files)
        }
      }
    }
  }
</script>

<style scoped
       lang="less">
  .u-con {
    display: flex;

    .file-list {
      box-sizing: border-box;
      padding-top: 5px;
      display: flex;

      .file-item {
        position: relative;
        display: flex;
        align-items: center;
        margin-right: 10px;

        .f-l-img {
          width: 80px;
          height: 80px;
        }

        .i-del {
          position: absolute;
          top: -6px;
          right: -6px;
          font-size: 18px;
          color: red;
          cursor: pointer;
        }
      }

    }

    .u-b {
      position: relative;
      margin-left: 10px;

      .upload-file {
        width: 80px;
        height: 80px;

        opacity: 0;
        border-radius: 10px;
        cursor: pointer;
      }

      .file-add {
        width: 80px;
        height: 80px;
        background-color: rgba(232, 232, 232, .5);
        cursor: pointer;
        position: absolute;
        top: 5px;
        left: 0;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px #acacac dashed;
      }

      .file-add:hover {
        /*background-color: #91d7ec;*/
        border: 1px #05b870 dashed;
      }
    }
  }

</style>
