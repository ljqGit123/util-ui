<template>
    <div>
      <el-button type="primary" @click="dialogTransfarVisible = true">选择要下载的列</el-button>
      <el-button type="primary" @click="exportTemplate">模板下载</el-button>
      <el-button type="primary" @click="dialogUploadVisible = true">上传</el-button>

      <el-dialog  title="选择导出列" :visible.sync="dialogTransfarVisible">
        <el-transfer  v-model="value" :data="data"></el-transfer>
        <el-button type="primary" @click="exportData">下载</el-button>
      </el-dialog>

      <el-dialog title="上传excel文件" :visible.sync="dialogUploadVisible">
        <el-upload
          class="upload-demo"
          action=""
          :multiple=false
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :before-remove="beforeRemove"
          :before-upload="beforeUpload"
          :http-request="uploadFile"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传xls文件</div>
        </el-upload>
      </el-dialog>
      <div id="div">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="Excel主题"
            prop="excelTitle"
            width="200">
          </el-table-column>
          <el-table-column
            prop="excelContent"
            label="Excel内容"
            width="150">
          </el-table-column>
          <el-table-column
            prop="excelDate"
            label="日期"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>

      <div style="margin: 0 auto">
        <el-pagination
          style="text-align: center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[20, 30, 40, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageTotal">
        </el-pagination>
      </div>

    </div>
</template>

<script>
  import { queryData, exportData, exportTemplate, uploadExcel} from './service';
    export default {
      name: "excelUtil",
      data() {
        let data = [
          {
            key: "excelTitle",
            label: "Excel主题"
          },
          {
            key: "excelContent",
            label: "Excel内容"
          },
          {
            key: "excelDate",
            label: "日期"
          },
          ]
        return {
          data: data,
          value: [],
          dialogTransfarVisible: false,
          fileList: [],
          multipleSelection: [],
          tableData: [],
          dialogUploadVisible: false,
          pageTotal: 0,
          currentPage: 1,
          pageSize: 20,
        };
      },
      mounted(){
        this.autoDivSize();
        let dto = { pageNo: this.currentPage, pageSize: this.pageSize}
        this.query(dto);
      },
      methods: {
        exportTemplate(){
          exportTemplate({},{},((data) => {
            let fileName = data.headers["content-disposition"].split(";")[1].split("filename=")[1];
            fileName = "Excel测试导入模板."+fileName.split(".")[1];
            let file = data.data;
            if(!file){
              return;
            }
            const blob = new Blob([file]);
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

        handleSizeChange(val) {
          let dto = { pageNo: this.currentPage, pageSize: val}
          this.query(dto);
        },

        handleCurrentChange(val) {
          let dto = { pageNo: val, pageSize: this.pageSize}
          this.query(dto);
        },

        handleRemove(file, fileList) {
        },
        handlePreview(file) {
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeUpload(file){
          const isText = file.type === 'application/vnd.ms-excel'
          const isTextComputer = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          return (isText | isTextComputer)
        },
        // 上传文件
        uploadFile (item) {
          const fileObj = item.file
          // FormData 对象
          const form = new FormData()
          // 文件对象
          form.append('file', fileObj)
          form.append('comId', '')
          uploadExcel(form, {}, ((data) => {
          }))
        },
        //选择列
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        //导出数据
        exportData(){
          if(this.value.length < 1){
            this.$message.error('请选择要导出的列');
            return;
          }
          let dto = {};
          dto.titleNames = this.value;
          exportData(dto, {}, ((data) => {
            let fileName = data.headers["content-disposition"].split(";")[1].split("filename=")[1];
            fileName = "excel导出列测试."+fileName.split(".")[1];
            let file = data.data;
            if(!file){
              return;
            }
            const blob = new Blob([file]);
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
        query(dto){
          queryData(dto, {}, ((data) => {
            if(data.list != undefined && data.list.length > 0){
              this.pageTotal = data.total;
              this.tableData = data.list;
            }else{
              this.tableData = [];
              this.pageTotal = 0;
            }
          }))
        },
        autoDivSize(){ //函数：获取尺寸
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
          //DIV高度为浏览器窗口高度 的60%
          document.getElementById("div").style.height= (winHeight - 80 - 30 - 20 - 115) +"px";
        }
      },
    }
</script>

<style scoped>

</style>
