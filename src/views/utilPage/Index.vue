<template>
  <div>
    <el-container>
      <el-header style="background-color: aquamarine; height: 80px; line-height: 80px;">
        <span style="text-shadow: 5px 5px 5px #ff4646; font-size: 28px">快速成型工具</span>
      </el-header>

      <el-container class="tac">
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :router=true
            :unique-opened=true>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>自动化工具</span>
              </template>
              <el-menu-item index="/autoCode">自动生成代码</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>文件工具</span>
              </template>
              <el-menu-item index="/excelUtil">excel文件上传下载功能</el-menu-item>
              <el-menu-item index="/uploadImage">图片上传</el-menu-item>
              <el-menu-item index="/lodop">lodop打印</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>图表报表</span>
              </template>
              <el-menu-item index="/pie">饼图</el-menu-item>
              <el-menu-item index="/bar">条形图</el-menu-item>
              <el-menu-item index="/category">曲线图</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>编辑工具</span>
              </template>
              <el-menu-item index="/markdown">编辑框</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>其他工具</span>
              </template>
              <el-menu-item index="/encryptUtil">加解密工具</el-menu-item>
              <el-menu-item index="/ipUtil">获取IP地址</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main id="autoCode">
            <router-view></router-view>
          </el-main>
          <el-footer style="text-align: center; height: 30px">
          Copyright © 2019 - * LJQ All Rights Reserved.
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Index",
    mounted(){
      let winWidth = 0;
      let winHeight = 0;
      // 获取窗口宽度
      if (window.innerWidth){
        winWidth = window.innerWidth;
      }
      else if ((document.body) && (document.body.clientWidth)){
        winWidth = document.body.clientWidth;
      }
      // 获取窗口高度
      if (window.innerHeight){
        winHeight = window.innerHeight;
      }
      else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight;
      }
      // 通过深入 Document 内部对 body 进行检测，获取窗口大小
      if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
      {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
      }

      document.getElementById('autoCode').style.height = (window.innerHeight - 80 - 30 - 20) + 'px';
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
   window.onresize = function() {
  //   window.location.reload();
   }
</script>

<style scoped>

</style>
