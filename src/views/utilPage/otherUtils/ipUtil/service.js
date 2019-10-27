import { get } from "../../../../util/AxiosUtils";

// 教师评价监控管理
export function getIpAddress(params, permission, callback) {
  get("api/getIp", params, {headers:{permission:permission}}).then(response => {
    if (response.code == '200') {
      callback(response.data);
    } else {
      if (response.message) {
        message.error(response.message);
      } else {
        message.error('查询失败');
      }
    }
  });
}
