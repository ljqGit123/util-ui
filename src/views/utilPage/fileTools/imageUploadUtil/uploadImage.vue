<template>
    <div>
      <el-upload
        class="upload-demo"
        ref="upload"
        :multiple=false
        :limit="1"
        :on-exceed="handleExceed"
        action="api/uploadImage"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png/jpeg文件或zip文件，zip文件只会处理文件中的图片,且图片不超过30kb</div>
      </el-upload>
      <el-image
        style="width: 100px; height: 100px"
        src="/api/image/b7938c25-fb7c-4b79-a5a7-d2951c453221"
        fit="fill"></el-image>
    </div>
</template>

<script>
    export default {
      name: "uploadImage",
      data(){
          return{
            fileList: [],
          }
      },
      mounted(){
        this.$http.post("/api/getImageInfo", {},
          {}).then(res => {
            console.log(res.data);
        },error=>{
          alert(error);
        });
      },
      methods: {
        submitUpload() {
          this.$refs.upload.submit();
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        handleRemove(file, fileList) {

        },
        handlePreview(file) {

        }

      }
    }
</script>

<style scoped>

</style>
