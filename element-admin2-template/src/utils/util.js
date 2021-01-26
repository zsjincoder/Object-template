import routers from "@/router/routers";

/**
 * 时间戳
 * @param {*} timestamp  时间戳
 */
const timestampToTime = (timestamp) => {
    let date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-'
    let M =
        (date.getMonth() + 1 < 10 ?
            '0' + (date.getMonth() + 1) :
            date.getMonth() + 1) + '-'
    let D =
        (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    let h =
        (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let m =
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
        ':'
    let s =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return Y + M + D + h + m + s
};
/**
 * 存储localStorage
 */
const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 设置cookie
 **/
function setCookie(name, value, day) {
    let date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;
}

/**
 * 获取cookie
 **/
function getCookie(name) {
    let reg = RegExp(name + '=([^;]+)');
    let arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return '';
    }
}

/**
 * 删除cookie
 **/
function delCookie(name) {
    setCookie(name, null, -1);
}

/**
 * 导出
 **/
export {
    timestampToTime,
    setStore,
    getStore,
    removeStore,
    setCookie,
    getCookie,
    delCookie
}


/**
 * 返回当前路由的面包屑
 * @param path
 * @param routers
 * @return {*[]}
 */
/*******判断是否找到该值********/
export const routedBreadcrumbs = (path, routers) =>{
  let children = []
  /**
   * 返回树形结构某个节点链
   * @param value
   * @param treeList
   * @param nodes
   */
  const treeNodeChain = (value, treeList, nodes) => {
    for(let i = 0; i < treeList.length; i++){
      let nodesTree = JSON.parse(JSON.stringify(nodes))
      let treeItem = JSON.parse(JSON.stringify(treeList[i]))
      delete treeItem.children
      nodesTree.push(treeItem)
      if (value === `${treeList[i].path}`){
        children = nodesTree
        return nodesTree
      }
      if(treeList[i].hasOwnProperty('children')){
        treeNodeChain(value, treeList[i].children, nodesTree)
      }else {
        nodesTree.pop()
      }
    }
  }
  treeNodeChain(path, routers, [])
  return children
}

// 返回路由菜单
export const returnToRoutingMenu = () =>{
  let menu = routers.filter(item => !item.hidden)
  return menu
}
