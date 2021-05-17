exports.ids = [4];
exports.modules = {

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("42bfc524", content, true, context)
};

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FloatButtonGroup/index.vue?vue&type=template&id=8d061670&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({ right: (_vm.right + "px"), bottom: "100px" }),attrs:{"id":"group"}},[_vm._t("prepend"),_vm._ssrNode(" "),(_vm.shareUrl)?_vm._ssrNode("<div data-v-8d061670>","</div>",[_c('v-speed-dial',{attrs:{"direction":"left","open-on-hover":""},scopedSlots:_vm._u([{key:"activator",fn:function(){return [_c('v-btn',{attrs:{"fab":"","dark":"","large":"","color":"blue darken-2"},model:{value:(_vm.fabShare),callback:function ($$v) {_vm.fabShare=$$v},expression:"fabShare"}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("\n            mdi-share-variant\n          ")])],1)]},proxy:true}],null,false,2522381705),model:{value:(_vm.fabShare),callback:function ($$v) {_vm.fabShare=$$v},expression:"fabShare"}},[_vm._v(" "),_c('v-card',[_c('v-avatar',{attrs:{"size":"150","tile":"","color":"grey"}},[_c('img',{attrs:{"alt":"分享","src":_vm.shareQR}})])],1)],1)],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-8d061670>","</div>",[_c('v-speed-dial',{attrs:{"direction":"left","open-on-hover":""},scopedSlots:_vm._u([{key:"activator",fn:function(){return [_c('v-btn',{attrs:{"fab":"","dark":"","large":"","color":"blue darken-2"},model:{value:(_vm.fab),callback:function ($$v) {_vm.fab=$$v},expression:"fab"}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("\n            mdi-cellphone-android\n          ")])],1)]},proxy:true}]),model:{value:(_vm.fab),callback:function ($$v) {_vm.fab=$$v},expression:"fab"}},[_vm._v(" "),_c('v-card',[_c('v-avatar',{attrs:{"size":"150","tile":"","color":"grey"}},[_c('img',{attrs:{"alt":"APP 下载","src":_vm.appQR}})])],1)],1)],1),_vm._ssrNode(" "),(_vm.search)?_vm._ssrNode("<div data-v-8d061670>","</div>",[_c('v-menu',{attrs:{"offset-x":"","transition":"slide-x-transition","nudge-left":"8","left":"","close-on-content-click":false},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({attrs:{"fab":"","dark":"","large":"","color":"blue darken-2"}},'v-btn',attrs,false),on),[_c('v-icon',{attrs:{"dark":""}},[_vm._v("\n            mdi-magnify\n          ")])],1)]}}],null,false,1942183284)},[_vm._v(" "),_c('v-sheet',{attrs:{"elevation":"1","width":"300"}},[_c('search-tool',{attrs:{"small":"","height":30}})],1)],1)],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-8d061670>","</div>",[_c('v-btn',{attrs:{"fab":"","dark":"","large":"","color":"purple"},on:{"click":function($event){return _vm.$vuetify.goTo(0, {duration: 300})}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("\n        mdi-chevron-up\n      ")])],1)],1),_vm._ssrNode(" "),_vm._t("append")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FloatButtonGroup/index.vue?vue&type=template&id=8d061670&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(26);

// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(200);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);

// EXTERNAL MODULE: ./components/SearchTool/index.vue + 4 modules
var SearchTool = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FloatButtonGroup/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FloatButtonGroupvue_type_script_lang_js_ = ({
  name: 'FloatButtonGroup',
  components: {
    SearchTool: SearchTool["default"]
  },
  props: {
    appUrl: {
      type: String,
      default: '应用下载地址'
    },
    shareUrl: {
      type: String,
      default: undefined
    },
    search: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      fab: false,
      appQR: '',
      fabShare: false,
      shareQR: ''
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['footer', 'content']),

    right() {
      if (true) {
        return 0;
      } // console.log(this.content)


      const offset = this.content.left + this.content.width + 90;
      const r = document.documentElement.clientWidth - offset;
      return r > 0 ? r : 0;
    }

  },
  watch: {
    appUrl(val) {
      this.calcAppQR();
    },

    shareUrl(val) {
      this.calcShareQR();
    }

  },

  created() {},

  mounted() {
    this.calcAppQR();
    this.calcShareQR();
  },

  methods: {
    calcAppQR() {
      if (!this.appUrl) {
        return;
      }

      external_qrcode_default.a.toDataURL(this.appUrl).then(url => {
        this.appQR = url;
      }).catch(err => {
        console.error(err);
      });
    },

    calcShareQR() {
      if (!this.shareUrl) {
        return;
      }

      external_qrcode_default.a.toDataURL(this.shareUrl).then(url => {
        this.shareQR = url;
      }).catch(err => {
        console.error(err);
      });
    }

  }
});
// CONCATENATED MODULE: ./components/FloatButtonGroup/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FloatButtonGroupvue_type_script_lang_js_ = (FloatButtonGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSpeedDial/VSpeedDial.sass
var VSpeedDial = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(21);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/transitionable/index.js

/* harmony default export */ var transitionable = (external_vue_default.a.extend({
  name: 'transitionable',
  props: {
    mode: String,
    origin: String,
    transition: String
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSpeedDial/VSpeedDial.js
// Styles
 // Mixins



 // Directives

 // Types


/* @vue/component */

/* harmony default export */ var VSpeedDial_VSpeedDial = (Object(mixins["a" /* default */])(positionable["a" /* default */], toggleable["a" /* default */], transitionable).extend({
  name: 'v-speed-dial',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  props: {
    direction: {
      type: String,
      default: 'top',
      validator: val => {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }
    },
    openOnHover: Boolean,
    transition: {
      type: String,
      default: 'scale-transition'
    }
  },
  computed: {
    classes() {
      return {
        'v-speed-dial': true,
        'v-speed-dial--top': this.top,
        'v-speed-dial--right': this.right,
        'v-speed-dial--bottom': this.bottom,
        'v-speed-dial--left': this.left,
        'v-speed-dial--absolute': this.absolute,
        'v-speed-dial--fixed': this.fixed,
        [`v-speed-dial--direction-${this.direction}`]: true,
        'v-speed-dial--is-active': this.isActive
      };
    }

  },

  render(h) {
    let children = [];
    const data = {
      class: this.classes,
      directives: [{
        name: 'click-outside',
        value: () => this.isActive = false
      }],
      on: {
        click: () => this.isActive = !this.isActive
      }
    };

    if (this.openOnHover) {
      data.on.mouseenter = () => this.isActive = true;

      data.on.mouseleave = () => this.isActive = false;
    }

    if (this.isActive) {
      let btnCount = 0;
      children = (this.$slots.default || []).map((b, i) => {
        if (b.tag && typeof b.componentOptions !== 'undefined' && (b.componentOptions.Ctor.options.name === 'v-btn' || b.componentOptions.Ctor.options.name === 'v-tooltip')) {
          btnCount++;
          return h('div', {
            style: {
              transitionDelay: btnCount * 0.05 + 's'
            },
            key: i
          }, [b]);
        } else {
          b.key = i;
          return b;
        }
      });
    }

    const list = h('transition-group', {
      class: 'v-speed-dial__list',
      props: {
        name: this.transition,
        mode: this.mode,
        origin: this.origin,
        tag: 'div'
      }
    }, children);
    return h('div', data, [this.$slots.activator, list]);
  }

}));
// CONCATENATED MODULE: ./components/FloatButtonGroup/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(222)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FloatButtonGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8d061670",
  "424fca82"
  
)

/* harmony default export */ var FloatButtonGroup = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SearchTool: __webpack_require__(56).default})


/* vuetify-loader */








installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */],VMenu: VMenu["a" /* default */],VSheet: VSheet["a" /* default */],VSpeedDial: VSpeedDial_VSpeedDial})


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#group[data-v-8d061670]{position:fixed;z-index:10}#group div[data-v-8d061670]{margin:8px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e6b013ca", content, true)

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=float-button-group.js.map