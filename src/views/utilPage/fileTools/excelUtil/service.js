import {exportTemplateExcel, exportDataExcel, post} from "../../../../util/AxiosUtils";
import ElementUI from "element-ui";

/**
 * 导出数据excel文件
 * @param params
 * @param permission
 * @param callback
 */
export function exportData(params, permission, callback) {
  exportDataExcel("/api/exportData", params, {headers:{permission:permission}}).then(response => {
    callback(response)
  });
}

/**
 * 导出excel文件模板
 * @param params
 * @param permission
 * @param callback
 */
export function exportTemplate(params, permission, callback) {
  exportTemplateExcel("/api/exportTemplate", params, {headers:{permission:permission}}).then(response => {
    callback(response)
  });
}

/**
 * 上传excel文件
 * @param params
 * @param permission
 * @param callback
 */
export function uploadExcel(params, permission, callback) {
  post("/api/upload", params, {}, {headers:{permission:permission}}).then(response => {
    if (response.code == '200') {
      callback(response.data);
      ElementUI.Message({
        title: '成功' ,
        message: "导入成功",
        type: 'success'
      });
    } else {
      if (response.message) {
        ElementUI.Message({
          title: '错误' ,
          message: response.message,
          type: 'error'
        });
      } else {
        ElementUI.Message({
          title: '错误' ,
          message: '上传失败',
          type: 'error'
        });
      }
    }
  });
}

/**
 * 查询数据
 * @param params
 * @param permission
 * @param callback
 */
export function queryData(params, permission, callback) {
  post("/api/getExportData", params, {}, {headers:{permission:permission}}).then(response => {
    if (response.code == '200') {
      callback(response.data);
    } else {
      if (response.message) {
        ElementUI.Message({
          title: '错误' ,
          message: response.message,
          type: 'error'
        });
      } else {
        ElementUI.Message({
          title: '错误',
          message: '查询失败',
          type: 'error'
        });
      }
    }
  });
}


