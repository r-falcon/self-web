console.log("hello world!!!")
/* 
  引入模块，遵从AMD规范
  第一个参数，必须是数组
 */
require(['demo/add'], function (addObj) {
  var res = addObj.outAdd(10, 20);
  alert(res);
  addObj.outShow();
})