<template>
  <div id="main">
    <div>
        <span style="color: red;">
          注：点击 ctrl + s 保存html文本
        </span>
    </div>
    <!--@save: 按下 ctrl + s 时触发
            @change: 当值发生改变时 触发-->
    <mavon-editor style="min-height: 600px" v-model="value"  @save="saveDoc"
                  @change="updateDoc"/>
  </div>
</template>

<script>
    export default {
      name: "markdown",
      data () {
        return {
          value: ''
        }
      },
      methods:{
        updateDoc(markdown, html) {
          // 此时会自动将 markdown 和 html 传递到这个方法中
          console.log("markdown内容: " + markdown);
          console.log("html内容:" + html);
        },
        saveDoc(markdown, html) {
          // 此时会自动将 markdown 和 html 传递到这个方法中
          console.log("markdown内容:" + markdown);
          console.log("html内容:" + html);
          this.$message.info("html内容:" + html);
        }
      }
    }
</script>

<style scoped>

</style>
