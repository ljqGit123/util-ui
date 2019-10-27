import { post } from "../../../../util/AxiosUtils";
import ElementUI from "element-ui";

/**
 * 加密
 * @param params
 * @param permission
 * @param callback
 */
export function encrypt(params, permission, callback) {
  post("/api/encrypt", params, {}, {headers:{permission:permission}}).then(response => {
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
 * 解密
 * @param params
 * @param permission
 * @param callback
 */
export function decode(params, permission, callback) {
  post("/api/decode", params, {}, {headers:{permission:permission}}).then(response => {
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

