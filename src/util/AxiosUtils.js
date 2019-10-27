import axios from "axios";

export function query(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params, ...config })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

// 导出word数据
export function exportDataPdf(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, { ...params }, { responseType: "blob", ...config })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

// 导出word数据
export function exportDataWord(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, { ...params }, { responseType: "blob", ...config })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

// 导出数据
export function exportDataExcel(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, { ...params }, { responseType: "blob", ...config })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

// 导出模板
export function exportTemplateExcel(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params, responseType: "blob", ...config })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
//Excel导入post请求会有post参数也可能有get参数,请求的一些系列配置
export function importExcel(url, datas, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, datas, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

//post请求会有post参数也可能有get参数
export function post(url, datas, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, datas, { params: params, ...config })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function get(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params, ...config })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function insert(url, datas, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, datas, { params: params, ...config })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function update(url, datas, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, datas, { params: params, ...config })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function remove(url, datas, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, datas, { params: params, ...config })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function requestAll(...paramsFun) {
  return new Promise((resolve, reject) => {
    axios
      .all(...paramsFun)
      .then(
        axios.spread(function(...response) {
          let responseList = [];
          for (let res of response) {
            if (!res.status && res.response) {
              responseList.push(res.response.data);
            } else {
              responseList.push(res.data);
            }
          }
          return responseList;
        })
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
