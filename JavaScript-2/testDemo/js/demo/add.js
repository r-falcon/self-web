/* 
  可以写很多函数，一般情况下把实现同类功能的函数，放在一个模块
*/
define(function () {
  function add(x, y) {
    return x + y;
  }

  function show() {
    console.log("hello world")
  }

  // 对外暴露
  return {
    outAdd: add,
    outShow: show
  }
})