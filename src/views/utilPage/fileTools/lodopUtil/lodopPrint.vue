<template>
    <div>
      <el-button type="primary" @click="lodopPrint">lodop打印</el-button>
      <div>
        <span style="color: red;">
          注：点击下载打印插件，下载完启动即可点击查看打印例子
        </span>
      </div>
    </div>
</template>

<script>
    import {getLodop} from './LodopFuncs';
    export default {
        name: "lodopPrint",
      methods:{
        lodopPrint(){
          var { LODOP, lodopMessage } = getLodop();
          if (lodopMessage) {
            this.$alert(lodopMessage, 'LODOP启动错误', {
              dangerouslyUseHTMLString: true
            });
          }
          //打印初始化
          LODOP.PRINT_INIT("");
          //设置纸张大小（横向打印，宽0，高0，A4纸张）
          LODOP.SET_PRINT_PAGESIZE(2,0,0,"A4");
          //新建页
          LODOP.NEWPAGE();
          //学生课表头
          //字体大小
          LODOP.SET_PRINT_STYLE("FontSize", 13);
          //是否粗体
          LODOP.SET_PRINT_STYLE("Bold", 1);
          //打印头部标题内容
          LODOP.ADD_PRINT_TEXT(10,390,300,10,"测试Lodop");
          LODOP.PREVIEW();
        }
      },
    }
</script>

<style scoped>

</style>
