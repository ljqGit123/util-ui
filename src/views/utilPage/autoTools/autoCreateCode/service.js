import { post,exportDataWord } from "../../../../util/AxiosUtils";
import ElementUI from "element-ui";

/**
 * 获取数据库表
 * @param params
 * @param permission
 * @param callback
 */
export function getDBTable(params, permission, callback) {
  post("/api/getTables", params, {}, {headers:{permission:permission}}).then(response => {
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
          title: '错误' ,
          message: '查询失败',
          type: 'error'
        });
      }
    }
  });
}

/**
 * 获取数据表详情
 * @param params
 * @param permission
 * @param callback
 */
export function getTableDetail(params, permission, callback) {
  post("/api/getTableDetail", params, {}, {headers:{permission:permission}}).then(response => {
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
          title: '错误' ,
          message: '查询失败',
          type: 'error'
        });
      }
    }
  });
}

/**
 * 导出zip文件
 * @param params
 * @param permission
 * @param callback
 */
export function exportZip(params, permission, callback) {
  exportDataWord("/api/autoCode", params, {headers:{permission:permission}}).then(response => {
    callback(response)
  });
}

