exports.ids = [1,8];
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

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5a12f29a", content, true, context)
};

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9cd18aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(268);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9cd18aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9cd18aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9cd18aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9cd18aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "p[data-v-e9cd18aa]{margin:0;padding:0}#clock[data-v-e9cd18aa]{font-family:\"Share Tech Mono\",monospace;color:#fff;text-align:center;width:100%;color:#daf6ff;text-shadow:0 0 20px #0aafe6,0 0 20px rgba(10,175,230,0)}#clock .time[data-v-e9cd18aa]{letter-spacing:.05em;font-size:50px;padding:5px 0}#clock .date[data-v-e9cd18aa]{letter-spacing:.15em;font-size:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Clock/index.vue?vue&type=template&id=e9cd18aa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"clock"}},[_vm._ssrNode("<p class=\"date\" data-v-e9cd18aa>"+_vm._ssrEscape(_vm._s(_vm.date))+"</p> <p class=\"time\" data-v-e9cd18aa>"+_vm._ssrEscape(_vm._s(_vm.time))+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Clock/index.vue?vue&type=template&id=e9cd18aa&scoped=true&

// EXTERNAL MODULE: ./components/utils/index.js
var utils = __webpack_require__(267);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Clock/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Clockvue_type_script_lang_js_ = ({
  name: 'Clock',
  props: {},

  data() {
    return {
      time: '',
      date: ''
    };
  },

  created() {
    setInterval(this.updateTime, 1000);
  },

  mounted() {},

  methods: {
    updateTime() {
      const now = new Date();
      this.time = Object(utils["getTime"])(now);
      this.date = Object(utils["getDate"])(now);
    }

  }
});
// CONCATENATED MODULE: ./components/Clock/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Clockvue_type_script_lang_js_ = (Clockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Clock/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(292)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Clockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e9cd18aa",
  "57205039"
  
)

/* harmony default export */ var Clock = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=clock.js.map