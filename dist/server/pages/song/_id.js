exports.ids = [22,2,3,4];
exports.modules = {

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("42bfc524", content, true, context)
};

/***/ }),

/***/ 217:
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
var external_vuex_ = __webpack_require__(25);

// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(196);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);

// EXTERNAL MODULE: ./components/SearchTool/index.vue + 4 modules
var SearchTool = __webpack_require__(55);

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
var installComponents = __webpack_require__(13);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSpeedDial/VSpeedDial.sass
var VSpeedDial = __webpack_require__(221);

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
  
  var style0 = __webpack_require__(219)
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
installComponents_default()(component, {SearchTool: __webpack_require__(55).default})


/* vuetify-loader */








installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */],VMenu: VMenu["a" /* default */],VSheet: VSheet["a" /* default */],VSpeedDial: VSpeedDial_VSpeedDial})


/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8d061670_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#group[data-v-8d061670]{position:fixed;z-index:10}#group div[data-v-8d061670]{margin:8px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e6b013ca", content, true)

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7c06aa28", content, true)

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("63c9496b", content, true)

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  emotionList: ["微笑", "撇嘴", "色", "发呆", "得意", "流泪", "害羞", "闭嘴", "睡", "大哭", "尴尬", "发怒", "调皮", "呲牙", "惊讶", "难过", "酷", "冷汗", "抓狂", "吐", "偷笑", "可爱", "白眼", "傲慢", "饥饿", "困", "惊恐", "流汗", "憨笑", "大兵", "奋斗", "咒骂", "疑问", "嘘", "晕", "折磨", "衰", "骷髅", "敲打", "再见", "擦汗", "抠鼻", "鼓掌", "糗大了", "坏笑", "左哼哼", "右哼哼", "哈欠", "鄙视", "委屈", "快哭了", "阴险", "亲亲", "吓", "可怜", "菜刀", "西瓜", "啤酒", "篮球", "乒乓", "咖啡", "饭", "猪头", "玫瑰", "凋谢", "示爱", "爱心", "心碎", "蛋糕", "闪电", "炸弹", "刀", "足球", "瓢虫", "便便", "月亮", "太阳", "礼物", "拥抱", "强", "弱", "握手", "胜利", "抱拳", "勾引", "拳头", "差劲", "爱你", "不", "好", "爱情", "飞吻", "跳跳", "发抖", "怄火", "转圈", "磕头", "回头", "跳绳", "挥手", "激动", "街舞", "献吻", "左太极", "右太极"]
});

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5910bed8", content, true, context)
};

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDataTable_VSimpleTable_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _src_components_VDataTable_VSimpleTable_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDataTable_VSimpleTable_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'v-simple-table',
  props: {
    dense: Boolean,
    fixedHeader: Boolean,
    height: [Number, String]
  },
  computed: {
    classes() {
      return {
        'v-data-table--dense': this.dense,
        'v-data-table--fixed-height': !!this.height && !this.fixedHeader,
        'v-data-table--fixed-header': this.fixedHeader,
        'v-data-table--has-top': !!this.$slots.top,
        'v-data-table--has-bottom': !!this.$slots.bottom,
        ...this.themeClasses
      };
    }

  },
  methods: {
    genWrapper() {
      return this.$slots.wrapper || this.$createElement('div', {
        staticClass: 'v-data-table__wrapper',
        style: {
          height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* convertToUnit */ "f"])(this.height)
        }
      }, [this.$createElement('table', this.$slots.default)]);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-data-table',
      class: this.classes
    }, [this.$slots.top, this.genWrapper(), this.$slots.bottom]);
  }

}));

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },

    styles() {
      // Styles are not needed when
      // using the absolute prop.
      if (this.absolute) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application; // Should always move for y-axis
      // applicationable components.

      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bottom + footer + insetFooter),
        paddingLeft: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(left),
        paddingRight: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "m"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "m"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          mouseenter: () => window.clearTimeout(this.activeTimeout),
          mouseleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5c8fbe94", content, true)

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0810caef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0810caef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0810caef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0810caef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0810caef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box[data-v-0810caef]{width:300px;max-height:150px;overflow-y:auto;background-color:#fff;padding-top:2px}.box .emo[data-v-0810caef]{margin:2px;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EmoticonBox/index.vue?vue&type=template&id=0810caef&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-menu',{attrs:{"close-on-content-click":false,"nudge-left":"300","nudge-top":"50"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({attrs:{"color":"grey","dark":"","icon":"","left":"","offset-x":"","offset-overflow":""}},'v-btn',attrs,false),on),[_c('v-icon',[_vm._v("mdi-emoticon-happy-outline")])],1)]}}]),model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_vm._v(" "),_c('div',{staticClass:"box"},_vm._l((_vm.emotionArr),function(line,i){return _c('span',{key:'emojo'+i,staticClass:"emo",domProps:{"innerHTML":_vm._s(line.url)},on:{"click":function($event){$event.stopPropagation();return _vm.emoClick(line.name)}}})}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EmoticonBox/index.vue?vue&type=template&id=0810caef&scoped=true&

// EXTERNAL MODULE: ./assets/emotionList.js
var emotionList = __webpack_require__(234);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EmoticonBox/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var EmoticonBoxvue_type_script_lang_js_ = ({
  name: 'EmoticonBox',
  props: {},

  data() {
    return {
      show: false,
      emotionArr: null
    };
  },

  watch: {
    show(val) {
      if (val && this.emotionArr == null) {
        this.loadEmotion();
      }

      this.$emit('iconClick', val);
    }

  },

  created() {},

  mounted() {},

  methods: {
    // 表情点击把名字发给父组件(调用者)
    emoClick(arg) {
      this.$emit('emotionClick', arg);
    },

    // 加载表情
    loadEmotion() {
      const list = emotionList["a" /* default */].emotionList;
      const emotionArr = [];
      list.map((item, index) => {
        emotionArr.push({
          name: `[${item}]`,
          url: `<img title="${item}" src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif">`
        });
      });
      this.emotionArr = emotionArr;
      this.load = true;
      console.log('表情盒子加载完成');
    }

  }
});
// CONCATENATED MODULE: ./components/EmoticonBox/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EmoticonBoxvue_type_script_lang_js_ = (EmoticonBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(13);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(214);

// CONCATENATED MODULE: ./components/EmoticonBox/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(242)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EmoticonBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0810caef",
  "df0fc9e0"
  
)

/* harmony default export */ var EmoticonBox = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VMenu: VMenu["a" /* default */]})


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EmoticonTextarea/index.vue?vue&type=template&id=68b4ea30&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"d-flex align-center",domProps:{"innerHTML":_vm._s(_vm.html)}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EmoticonTextarea/index.vue?vue&type=template&id=68b4ea30&scoped=true&

// EXTERNAL MODULE: ./assets/emotionList.js
var emotionList = __webpack_require__(234);

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

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(275);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("cdc8e66a", content, true, context)
};

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }

  },
  watch: {
    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },

    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }

  },

  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },

  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },

    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },

    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },

    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }

      this.$emit('keydown', e);
    }

  }
}));

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_1fb5ec58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_1fb5ec58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_1fb5ec58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_1fb5ec58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_1fb5ec58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".player[data-v-1fb5ec58]{position:fixed;right:0;left:0;z-index:9;bottom:0}.lyric[data-v-1fb5ec58]{overflow-y:auto;text-align:center;margin-right:2rem;height:300px;margin-left:290px}.lyric .none[data-v-1fb5ec58]{height:250px;width:100%}#comment[data-v-1fb5ec58]{margin-left:310px;margin-right:2rem}.text[data-v-1fb5ec58]{vertical-align:middle}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/song/_id.vue?vue&type=template&id=1fb5ec58&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card',{attrs:{"flat":""}},[_c('div',{staticClass:"ma-5 float-left"},[_c('nuxt-link',{attrs:{"to":_vm.singerId? ("/singer/" + _vm.singerId + "-1"): '#'}},[_c('v-avatar',{attrs:{"size":"250","tile":"","color":"grey"}},[_c('img',{attrs:{"alt":_vm.singerName,"src":_vm.singerImg}})])],1),_vm._v(" "),_c('v-overlay',{attrs:{"value":_vm.overlay}},[(_vm.download)?_c('v-card',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"}]},[_c('v-simple-table',{scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('thead',[_c('tr',[_c('th',{staticClass:"text-left"},[_vm._v("\n                    地址\n                  ")]),_vm._v(" "),_c('th',{staticClass:"text-left"},[_vm._v("\n                    提取码\n                  ")]),_vm._v(" "),_c('th',{staticClass:"text-left"})])]),_vm._v(" "),_c('tbody',_vm._l((_vm.download),function(item,i){return _c('tr',{key:i},[_c('td',[_c('a',{attrs:{"href":item.downloadUrl,"target":"_blank"}},[_vm._v(_vm._s(item.downloadUrl))])]),_vm._v(" "),_c('td',{ref:"accessCode",refInFor:true},[_vm._v(_vm._s(item.downloadPass))]),_vm._v(" "),_c('td',[_c('v-btn',{attrs:{"text":""},on:{"click":function($event){return _vm.open(item, i)}}},[_vm._v("打开")])],1)])}),0)]},proxy:true}],null,false,551101340)}),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n            温馨提示: 请直接点击打开,提取码会自动复制\n          ")])],1):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"pl-5 pb-10 pt-2"},[_c('v-card-title',{staticClass:"headline"},[_c('v-icon',{attrs:{"color":"red"}},[_vm._v("mdi-fire")]),_vm._v(" "+_vm._s(_vm.songName)+"\n      ")],1),_vm._v(" "),_c('v-card-title',{staticClass:"subtitle-1 pl-11"},[_vm._v("\n        "+_vm._s(_vm.singerName)+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"d-flex align-start mb-6 py-3 pl-8"},[_c('v-btn',{staticClass:"mx-2",attrs:{"to":_vm.singerId == null ? '' : ("/singer/" + _vm.singerId + "-1")}},[_c('v-icon',{staticClass:"mr-2"},[_vm._v("mdi-format-list-bulleted")]),_vm._v("\n          歌曲列表\n        ")],1),_vm._v(" "),_c('v-btn',{staticClass:"mx-2",on:{"click":function($event){return _vm.$vuetify.goTo('#comment', { duration: 300 })}}},[_c('v-icon',{staticClass:"mr-2"},[_vm._v("mdi-message-processing-outline")]),_vm._v("\n          "+_vm._s(_vm.commentCount)+"\n        ")],1)],1),_vm._v(" "),_c('div',{staticClass:"lyric grey lighten-4 pt-2",style:(_vm.lyricStyle)},[_vm._l((_vm.lyrics),function(item,index){return _c('p',{key:index},[_vm._v("\n          "+_vm._s(item)+"\n        ")])}),_vm._v(" "),(_vm.lyrics.length < 2)?_c('div',{staticClass:"none d-flex align-center justify-center"},[_vm._v("暂无歌词")]):_vm._e()],2)],1)]),_vm._ssrNode(" "),_c('v-card',{staticClass:"mt-5",attrs:{"id":"comment","flat":""}},[_c('v-card-title',{staticClass:"headline"},[_vm._v("\n      评论区\n    ")]),_vm._v(" "),_c('v-divider',{staticClass:"primary main-divider"}),_vm._v(" "),_c('v-card-subtitle',{staticClass:"mt-2"},[_c('v-snackbar',{attrs:{"color":"error","absolute":"","centered":""},scopedSlots:_vm._u([{key:"action",fn:function(ref){
var attrs = ref.attrs;
return [_c('v-btn',_vm._b({attrs:{"color":"blue","text":""},on:{"click":function($event){_vm.sendSnackbar = false}}},'v-btn',attrs,false),[_vm._v("\n            关闭\n          ")])]}}]),model:{value:(_vm.sendSnackbar),callback:function ($$v) {_vm.sendSnackbar=$$v},expression:"sendSnackbar"}},[_vm._v("\n        "+_vm._s(_vm.msg)+"\n\n        ")]),_vm._v(" "),_c('v-textarea',{ref:"commentText",attrs:{"solo":"","outlined":"","auto-grow":"","counter":300,"label":"我也说两句"},on:{"change":_vm.onTextareaChange},scopedSlots:_vm._u([{key:"counter",fn:function(ref){
var ref_props = ref.props;
var value = ref_props.value;
var max = ref_props.max;
return [_c('div',[_c('emoticon-box',{on:{"emotionClick":_vm.emotionClick,"iconClick":_vm.iconClick}}),_vm._v(" "),_c('span',{staticClass:"px-2"},[_vm._v(_vm._s(value)+" / "+_vm._s(max))]),_vm._v(" "),_c('v-btn',{staticClass:"mr-0",attrs:{"color":"primary","width":"100","large":"","loading":_vm.sending},on:{"click":_vm.sendComment}},[_vm._v("发布")])],1)]}}]),model:{value:(_vm.comment),callback:function ($$v) {_vm.comment=$$v},expression:"comment"}})],1),_vm._v(" "),_c('v-card-text',[_vm._l((_vm.comments),function(item,i){return _c('v-card',{key:i,staticClass:"ma-2",attrs:{"flat":""}},[_c('v-divider'),_vm._v(" "),_c('v-card-text',{staticClass:"d-flex align-center text-h6"},[_c('span',{staticClass:"light-blue--text accent-4"},[_vm._v(_vm._s(item.userName))]),_vm._v(":  \n          "),_vm._v(" "),_c('emoticon-textarea',{attrs:{"content":item.contentStr}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"mr-5"},[_vm._v("\n            "+_vm._s(item.time)+"\n          ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","color":"primary"},on:{"click":function($event){return _vm.thumbUp(item, i)}}},[(item.prize)?_c('v-icon',[_vm._v("mdi-thumb-up")]):_c('v-icon',[_vm._v("mdi-thumb-up-outline")]),_vm._v(" "),(item.prizeCount > 1)?_c('span',{staticClass:"px-2"},[_vm._v(_vm._s(item.prizeCount))]):_vm._e()],1),_vm._v(" "),_c('v-divider',{attrs:{"vertical":""}}),_vm._v(" "),_c('v-btn',{attrs:{"text":""}},[_vm._v("\n            回复\n          ")])],1)],1)}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.snackbar),expression:"snackbar"}],staticClass:"d-flex justify-center my-2"},[_vm._v("\n        --真的没有了--\n      ")])],2),_vm._v(" "),_c('v-card-actions',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loading my-2"},[_c('v-progress-linear',{attrs:{"indeterminate":"","color":"yellow darken-2"}})],1)],1),_vm._ssrNode(" "),_c('client-only',[_c('float-button-group',{attrs:{"share-url":_vm.shareUrl,"search":""},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('div',[_c('v-btn',{attrs:{"fab":"","dark":"","large":"","color":"success"},on:{"click":function($event){return _vm.$vuetify.goTo('#comment', { duration: 300 })}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("\n              mdi-comment-processing\n            ")])],1)],1)]},proxy:true}])})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/song/_id.vue?vue&type=template&id=1fb5ec58&scoped=true&

// EXTERNAL MODULE: ./components/FloatButtonGroup/index.vue + 6 modules
var FloatButtonGroup = __webpack_require__(217);

// EXTERNAL MODULE: ./components/EmoticonBox/index.vue + 4 modules
var EmoticonBox = __webpack_require__(244);

// EXTERNAL MODULE: ./components/EmoticonTextarea/index.vue + 4 modules
var EmoticonTextarea = __webpack_require__(245);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/song/_id.vue?vue&type=script&lang=js&
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
// import MusicPlayer from '~/components/MusicPlayer'



const limit = 10;
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    // MusicPlayer,
    FloatButtonGroup: FloatButtonGroup["default"],
    EmoticonBox: EmoticonBox["default"],
    EmoticonTextarea: EmoticonTextarea["default"]
  },

  validate({
    params
  }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },

  asyncData({
    params,
    $axios
  }) {
    return $axios.post(`/getSongDetail`, {
      songId: parseInt(params.id)
    }).then(data => {
      data.lyrics = data.lyric.split('\n');
      return data;
    });
  },

  data() {
    return {
      listenUrl: undefined,
      comments: [],
      comment: '',
      loading: false,
      lastFreshTime: 0,
      snackbar: false,
      download: undefined,
      overlay: false,
      sending: false,
      sendSnackbar: false,
      msg: '',
      commentCount: 0,
      singerId: undefined,
      downloadTimes: 0
    };
  },

  computed: {
    lyricStyle() {
      const dark = this.$vuetify.theme.isDark; // console.log(dark)

      return {
        'border-color': dark ? this.$vuetify.theme.themes.dark.primary : this.$vuetify.theme.themes.light.primary
      };
    },

    singerImg() {
      const names = (this.singerName || '').split('、'); // if (this.singerName.includes('、')) {
      //   return `/music/pic/固定2.jpg`
      // }
      // return `/music/pic/${this.singerName}2.jpg`

      if (names.length > 2 || names.length === 0) {
        return 'https://cdn.jsdelivr.net/gh/qianxun666/singer-img@master/固定2.jpg';
      }

      return `https://cdn.jsdelivr.net/gh/qianxun666/singer-img@master/${names[0].trim()}2.jpg`;
    },

    shareUrl() {
      if (true) {
        return '';
      }

      return window.location.href;
    }

  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll, {
      passive: true
    });
  },

  created() {// console.log(this.$vuetify)
  },

  mounted() {
    this.getComments();
    window.addEventListener('scroll', this.handleScroll, {
      passive: true
    });
  },

  methods: {
    onClickOutside() {
      this.overlay = false;
    },

    open(item, index) {
      this.$copyText(item.downloadPass).then(function (e) {
        window.open(item.downloadUrl, '_blank');
      }, function (e) {
        alert('自动复制提取码失败，手动复制');
        console.log(e);
      });
    },

    onTextareaChange(val) {
      // console.log(val)
      if (val.length > 300) {
        const comment = val.slice(0, 305);
        const emo = /\[[\u4E00-\u9FA5]{1,3}\]/gi.exec(comment);

        if (emo.length) {
          this.comment = val;
        }

        this.comment = val.slice(0, 300);
      }
    },

    sendComment() {
      if (!this.comment || !this.comment.trim()) {
        return;
      }

      this.sending = true;
      this.$axios.post('/sendComman', {
        songId: this.$route.params.id,
        contentStr: this.comment
      }).then(data => {
        this.comments.unshift({
          userName: this.$store.getters.name || '游客',
          contentStr: this.comment,
          time: '刚刚'
        });
        this.commentCount += 1;
        this.comment = '';
        this.sending = false;
      }).catch(err => {
        console.log(err);
        this.sending = false;
        this.msg = err.response.data.resMsg;
        this.sendSnackbar = true;
      });
    },

    getComments() {
      // 防抖
      if (this.loading) {
        return;
      }

      const now = new Date().getTime();

      if (now - this.lastFreshTime < 1000) {
        return;
      }

      this.lastFreshTime = now;
      /* 显示加载效果*/

      this.loading = true;
      this.$axios.post(`/getComman`, {
        songId: parseInt(this.$route.params.id),
        limit,
        offset: this.comments.length
      }).then(data => {
        // console.log(data, data.commans.length === 0)
        this.commentCount = data.count;

        if (data.commans.length === 0) {
          this.snackbar = true;
        } else {
          this.comments.push(...data.commans);
        }

        this.loading = false;
      }).catch(err => {
        console.log(err);
        this.loading = false;
      });
    },

    handleScroll() {
      if (this.snackbar) {
        // 没有了
        return;
      } // 变量scrollTop是滚动条滚动时,距离顶部的距离


      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 变量windowHeight是可视区的高度

      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight; // 变量scrollHeight是滚动条的总高度

      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      /* 4舍5入 取大 滚动巨鹿 + 可是区域高度 大于 滚动总高度*/

      if (Math.ceil(scrollTop + windowHeight) >= scrollHeight) {
        window.scrollTo(0, scrollHeight - 1); // // 清空计时器
        // clearInterval(this.time)
        // this.time = null
        // /* 效果 显示 时常 */
        // this.time = setInterval(this.getComments, 500)

        this.getComments();
      }
    },

    getDownloadUrl(token) {
      console.log(token);

      if (!this.download) {
        const sessionId = this.$store.getters.ssid;

        if (sessionId || typeof token === 'string') {
          this.$axios.post(`/queryAddress`, {
            songId: parseInt(this.$route.params.id),
            token
          }).then(data => {
            // console.log(data)
            this.download = data.adList;
            this.downloadTimes++;
            this.overlay = true;
          }).catch(err => {
            console.log(err);
          });
        } else {
          const uuid = this.$store.getters.uuid;
          this.$clicaptcha({
            songId: parseInt(this.$route.params.id),
            uuid,
            src: '/clicaptcha/',
            // 后端地址
            success: '验证成功！',
            // 成功提示，默认为“验证成功！”
            error: '未点中正确区域，请重试！',
            // 错误提示，默认为“未点中正确区域，请重试！”
            callback: token => {
              console.log(token);
              setTimeout(() => {
                this.getDownloadUrl(token);
              }, 100);
            }
          });
        }
      } else {
        this.overlay = true;
      }
    },

    play() {
      this.$refs.player.paly();
    },

    thumbUp(item, i) {
      if (item.prize) {
        item.prizeCount--;
        item.prize = false;
      } else {
        item.prizeCount++;
        item.prize = true;
      }
    },

    emotionClick(emo) {
      const input = this.$refs.commentText.$refs.input;
      input.focus();
      let start = input && Number(input.selectionStart) || 0;
      let end = input && Number(input.selectionEnd) || 0;

      if (start > end) {
        const tmp = start;
        start = end;
        end = tmp;
      }

      const left = this.comment.slice(0, start);
      const right = this.comment.slice(end, this.comment.length);
      this.comment = left + emo + right;

      if (input) {
        setTimeout(() => {
          input.focus();
          const pos = start + emo.length; // console.log(start, end, pos, input)

          if (input.setSelectionRange) {
            input.setSelectionRange(pos, pos); // input.blur()
            // input.focus()
          } else if (input.createTextRange) {
            const range = input.createRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
          }
        }, 10);
      }
    },

    iconClick(show) {
      const input = this.$refs.commentText.$refs.input; // console.log('show', show, input)

      input.focus();
      this.$refs.commentText.focus();
    }

  }
});
// CONCATENATED MODULE: ./pages/song/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var song_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(13);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js
var VSimpleTable = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(211);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(88);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(41);

// CONCATENATED MODULE: ./pages/song/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(274)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  song_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1fb5ec58",
  "43ba98a6"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {EmoticonBox: __webpack_require__(244).default,EmoticonTextarea: __webpack_require__(245).default,FloatButtonGroup: __webpack_require__(217).default})


/* vuetify-loader */
















installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardText: components_VCard["c" /* VCardText */],VCardTitle: components_VCard["d" /* VCardTitle */],VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VOverlay: VOverlay["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VSimpleTable: VSimpleTable["a" /* default */],VSnackbar: VSnackbar["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(component, {ClickOutside: click_outside["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_id.js.map