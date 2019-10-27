<template>
    <div>
      <el-row style="margin: 10px 10px">
        <el-col :span="12">
          <el-col :span="6">
            <span style="float: right; line-height: 40px">数据库表名:</span>
          </el-col>
          <el-col :span="14">
            <el-input v-model="dbTableName" placeholder="请输入内容" :disabled=true></el-input>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="6">
            <span style="float: right; line-height: 40px">JAVA类名:</span>
          </el-col>
          <el-col :span="14">
            <el-input v-model="javaEntiyName" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
      </el-row>
      <el-row style="margin: 10px 10px">
        <el-col :span="12">
          <el-col :span="6">
            <span style="float: right; line-height: 40px">包名:</span>
          </el-col>
          <el-col :span="14">
            <el-input v-model="packageName" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="6">
            <span style="float: right; line-height: 40px">作者:</span>
          </el-col>
          <el-col :span="14">
            <el-input v-model="author" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
      </el-row>
      <el-table
        :data="initData"
        border
        style="width: 100%">
        <el-table-column
          prop="dataType"
          label="JAVA类型"
          width="300">
        </el-table-column>
        <el-table-column
          prop="filed"
          label="数据表字段名">
          <template slot-scope="scope">
            <el-input v-model="scope.row.filed" :disabled=true></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="modifyFiled"
          label="修改属性"
          width="300">
          <template slot-scope="{row,$index}">
            <el-input v-model="result[$index]"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="key"
          label="主键"
          width="200">
          <template slot-scope="{row,$index}">
            <el-checkbox v-model="checke[$index]" @change="change($index)" label="主键" border></el-checkbox>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="height: 100px">
        <el-button type="primary" @click="sumbit">生成代码</el-button>
      </el-row>
    </div>
</template>

<script>
  import {getTableDetail,exportZip} from "./service";

  export default {
      name: "sqlTableDetail",
      data() {
        return {
          initData: [],
          dbTableName: this.$route.query.tableName,
          javaEntiyName: '', //java实体名
          packageName: '', //包名
          author: '', //作者
          result: [], //编辑框值
          checke: [], //选择框
        }
      },
      mounted(){
        let dto = {
          url: this.$route.query.url,
          databaseName: this.$route.query.databaseName,
          dataType: this.$route.query.dataType,
          userName: this.$route.query.userName,
          password: this.$route.query.password,
          tableName: this.$route.query.tableName,
        };
        getTableDetail(dto, {}, ((data) => {
          this.initData = data;
        }));
      },
      methods: {
        handleClick(row) {
        },
        //选择主键
        change(index) {
          for(let i = 0; i<this.initData.length; i++){
            if(index != i){
              this.checke[i] = false;
            }
          }
        },
        //生成代码
        sumbit(){
          if(this.checke.length == 0){
            this.$message.error('请选择一个作为主键');
            return;
          }
          let dto = {};
          dto.dbTableName = this.dbTableName;
          dto.javaEntiyName = this.javaEntiyName;
          dto.packageName = this.packageName;
          dto.author = this.packageName;
          for(let i=0; i<this.initData.length; i++){
            this.initData[i].key = this.checke[i];
            this.initData[i].modifyFiled = this.result[i];
          }
          dto.entityDtoList = this.initData;
          exportZip(dto, {}, ((data) => {
            // let fileName = data.headers["content-disposition"];
            let fileName = "";
            if(dto.javaEntiyName){
              fileName = dto.javaEntiyName + ".zip";
            }else{
              fileName = dto.dbTableName + ".zip";
            }
            let file = data.data;
            if(!file){
              return;
            }
            const blob = new Blob([file])
            if(window.navigator.msSaveOrOpenBlob){// 兼容IE10
              navigator.msSaveBlob(blob, fileName);
            }else{// 其他非IE内核支持H5的浏览器
              let url = window.URL.createObjectURL(blob);
              let link = document.createElement('a');
              link.style.display = 'none';
              link.href = url;
              link.setAttribute('download', fileName);
              document.body.appendChild(link);
              link.click()
            }
          }))
        },
      },
    }
</script>

<style scoped>

</style>
