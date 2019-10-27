<template>
    <div>
      <el-row>
        <el-col :span="8">
          <el-input
            style="font-size: 25px;"
            type="textarea"
            :autosize="{ minRows: 13, maxRows: 15}"
            placeholder="请输入内容"
            v-model="plaintext">
          </el-input>
        </el-col>
        <el-col :span="3">
          <div style="margin: 0 auto; text-align: center;">
            <el-radio-group v-model="checkText" size="small" @change="change">
              <el-col>
                <el-radio class="type" label="1" border>MD5</el-radio>
              </el-col>
              <el-col>
                <el-radio class="type" label="2" border>SHA1</el-radio>
              </el-col>
              <el-col>
                <el-radio class="type" label="3" border>DES</el-radio>
              </el-col>
              <el-col>
                <el-radio class="type" label="4" border>AES</el-radio>
              </el-col>
              <el-col>
                <el-radio class="type" label="5" border>XOR</el-radio>
              </el-col>
              <el-col>
                <el-radio class="type" label="6" border>BASE64</el-radio>
              </el-col>
            </el-radio-group>
            <el-col>
              <el-input class="button-type" v-model="input" placeholder="密文"></el-input>
            </el-col>
            <el-col>
              <el-button class="button-type" type="primary" @click="encrypt">加密</el-button>
            </el-col>
            <el-col>
              <el-button class="button-type" type="primary" :disabled="flag" @click="decode">解密</el-button>
            </el-col>
          </div>
        </el-col>
        <el-col :span="8">
            <el-input
              style="font-size: 25px;"
              type="textarea"
              :autosize="{ minRows: 13, maxRows: 15}"
              placeholder="请输入内容"
              v-model="plainResult">
            </el-input>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import {encrypt, decode} from "./service";

  export default {
      name: "encryptUtil",
      data(){
        return {
          plaintext: "",
          checkText: "",
          plainResult: "",
          input: "",
          flag: false,
        }
      },
      methods:{
        change(index){
          if(index == "1" || index == "2"){
            this.flag = true;
          }else{
            this.flag = false;
          }
        },
        //加密
        encrypt(){
          let dto = {};
          if(this.plaintext == ""){
            this.$message.error('请输入要加密的明文');
            return;
          }
          if(this.checkText == ""){
            this.$message.error('请选择一个加解密类型');
            return;
          }
          dto.type = this.checkText;
          dto.encryptText = this.plaintext;
          dto.key = this.input;
          encrypt(dto, {}, (data) => {
            this.plainResult = data;
          })

        },
        //解密
        decode(){
          let dto = {};
          if(this.plainResult == ""){
            this.$message.error('请输入要解密的密文');
            return;
          }
          if(this.checkText == ""){
            this.$message.error('请选择一个加解密类型');
            return;
          }
          dto.type = this.checkText;
          dto.decodeText = this.plainResult;
          dto.key = this.input;
          decode(dto, {}, (data) => {
            this.plaintext = data;
          })

        }
      }
    }
</script>

<style scoped>
.type{
  margin: 10px 10px;
  width: 100px;
}
.button-type{
  margin: 10px 10px;
  width: 100px;
}
</style>
