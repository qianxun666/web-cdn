exports.ids = [3];
exports.modules = {

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  emotionList: ["微笑", "撇嘴", "色", "发呆", "得意", "流泪", "害羞", "闭嘴", "睡", "大哭", "尴尬", "发怒", "调皮", "呲牙", "惊讶", "难过", "酷", "冷汗", "抓狂", "吐", "偷笑", "可爱", "白眼", "傲慢", "饥饿", "困", "惊恐", "流汗", "憨笑", "大兵", "奋斗", "咒骂", "疑问", "嘘", "晕", "折磨", "衰", "骷髅", "敲打", "再见", "擦汗", "抠鼻", "鼓掌", "糗大了", "坏笑", "左哼哼", "右哼哼", "哈欠", "鄙视", "委屈", "快哭了", "阴险", "亲亲", "吓", "可怜", "菜刀", "西瓜", "啤酒", "篮球", "乒乓", "咖啡", "饭", "猪头", "玫瑰", "凋谢", "示爱", "爱心", "心碎", "蛋糕", "闪电", "炸弹", "刀", "足球", "瓢虫", "便便", "月亮", "太阳", "礼物", "拥抱", "强", "弱", "握手", "胜利", "抱拳", "勾引", "拳头", "差劲", "爱你", "不", "好", "爱情", "飞吻", "跳跳", "发抖", "怄火", "转圈", "磕头", "回头", "跳绳", "挥手", "激动", "街舞", "献吻", "左太极", "右太极"]
});

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EmoticonTextarea/index.vue?vue&type=template&id=68b4ea30&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"d-flex align-center",domProps:{"innerHTML":_vm._s(_vm.html)}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EmoticonTextarea/index.vue?vue&type=template&id=68b4ea30&scoped=true&

// EXTERNAL MODULE: ./assets/emotionList.js
var emotionList = __webpack_require__(238);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EmoticonTextarea/index.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var EmoticonTextareavue_type_script_lang_js_ = ({
  name: 'EmoticonTextarea',
  props: {
    content: {
      type: String,
      default: ''
    }
  },

  data() {
    return {};
  },

  computed: {
    html() {
      return this.content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/\r?\n/g, '<br>').replace(/\s/g, '&nbsp;').replace(/\\/g, '&#x27;').replace(/\//g, '&#x2F;').replace(/\[[\u4E00-\u9FA5]{1,3}\]/gi, words => {
        const word = words.replace(/\[|\]/gi, '');
        console.log(word);
        const index = emotionList["a" /* default */].emotionList.indexOf(word);

        if (index !== -1) {
          return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif">`;
        } else {
          return words;
        }
      });
    }

  },

  created() {},

  mounted() {},

  methods: {}
});
// CONCATENATED MODULE: ./components/EmoticonTextarea/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EmoticonTextareavue_type_script_lang_js_ = (EmoticonTextareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/EmoticonTextarea/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EmoticonTextareavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "68b4ea30",
  "5837bd31"
  
)

/* harmony default export */ var EmoticonTextarea = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=emoticon-textarea.js.map