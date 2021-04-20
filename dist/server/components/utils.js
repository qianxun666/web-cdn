exports.ids = [8];
exports.modules = {

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
// 获取当前年月日星期几几点几分几秒并打印
function getDate(date) {
  date = date || new Date();
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const datee = date.getDate();
  const day = date.getDay();
  const time = year + '-' + month.toString().padStart(2, '0') + '-' + datee.toString().padStart(2, '0') + ' ' + week[day];
  return time;
}
function getTime(time) {
  time = time || new Date();
  let hour = time.getHours();
  hour = hour < 10 ? '0' + hour : hour;
  let minute = time.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  let second = time.getSeconds();
  second = second < 10 ? '0' + second : second;
  return hour + ':' + minute + ':' + second;
}

/***/ })

};;
//# sourceMappingURL=utils.js.map