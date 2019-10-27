<template>
    <div>
      <el-button type="primary" @click="getIp">获取IP</el-button>
      {{this.ipResult}}
    </div>
</template>

<script>
    import {getIpAddress} from "./service";
    export default {
      name: "ipUtil",
      data(){
        return{
          ipResult: "",
        }
      },
      methods:{
        getIp(){
          getIpAddress({},{},(data) => {
            this.ipResult = data;
          })
        }
      }
    }
</script>

<style scoped>

</style>
