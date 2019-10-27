// 创建script标签加载js
export const createScript = (url = "") => {
  let scriptTags = window.document.querySelectorAll('script');
  let len = scriptTags.length;
  let i = 0;
  // 截取字符串,去掉可能url是相对路径的
  let _url = location.origin + url.indexOf(".") === 0 ? url.substr(1) : url;

  return new Promise((resolve, reject) => {
    var isHas = false;
    for (i = 0; i < len; i++) {
      var src = scriptTags[i].src;
      if (src && src === _url) {
        isHas = true;
        resolve();
        // scriptTags[i].parentElement.removeChild(scriptTags[i]);
      }
    }
    if(!isHas){
      let node = document.createElement('script');
      node.type = 'text/javascript';
      node.src = url;
      node.onload = resolve;
      document.body.appendChild(node);
    }
  });
};

// 创建lodop打印组件
export const createLodop = () => {
  return createScript('./assets/js/lodop/LodopFuncs.js')
}
