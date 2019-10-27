<template>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="数据库URL" label-width="150px" prop="url">
          <el-input v-model="ruleForm.url" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="数据库名" label-width="150px" prop="databaseName">
          <el-input v-model="ruleForm.databaseName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="数据库类型" label-width="150px" prop="dataType">
          <el-select v-model="ruleForm.dataType" placeholder="请选择数据库类型" :disabled="true">
            <el-option label="MYSQL" value="MYSQL"></el-option>
            <el-option label="ORACLE" value="ORACLE"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数据库用户名" label-width="150px" prop="userName">
          <el-input v-model="ruleForm.userName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="数据库密码" label-width="150px" prop="password">
          <el-input v-model="ruleForm.password" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div>
        <span style="color: red;">注：mysql测试例子，数据已加密</span>
      </div>
    </div>
</template>

<script>
  import {getDBTable} from './service';
    export default {
      name: "autoCode",
      data() {
        return {
          ruleForm: {
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            url: 'F5FBFDFCA5F2E6ECEEF3A5B0B0AEADADB1AAAEB1A8ACB1AEADA9A5ACACAFA9',
            databaseName: 'EAEBF6F3',
            dataType: 'MYSQL',
            userName: 'EDF0F0EB',
            password: 'AEADACABAAA9',
          },
          rules: {
            url: [
              { required: true, message: '请输入数据库URL', trigger: 'blur' },
            ],
            databaseName: [
              { required: true, message: '请输入数据库名', trigger: 'blur' },
            ],
            dataType: [
              { required: true, message: '请选择数据库类型', trigger: 'change' }
            ],
            userName: [
              { required: true, message: '请输入数据库用户名', trigger: 'blur' },
            ],
            password: [
              { required: true, message: '请输入数据库密码', trigger: 'blur' },
            ],
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let dto = {
                url: this.ruleForm.url,
                databaseName: this.ruleForm.databaseName,
                dataType: this.ruleForm.dataType,
                userName: this.ruleForm.userName,
                password: this.ruleForm.password,
              };
              getDBTable(dto,{},((data) => {
                this.$router.push(
                    { name: 'SqlTable', params: { data: data }}
                  );
              }))
            } else {
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
