(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{517:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("5074118b",content,!0,{sourceMap:!1})},518:function(t,e,n){"use strict";n.r(e);n(9),n(10),n(12),n(4),n(16),n(11),n(17);var o=n(1),r=n(102),l=n(529),d=n.n(l);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"FloatButtonGroup",components:{SearchTool:n(108).default},props:{appUrl:{type:String,default:"https://qianxun666.com/download"},shareUrl:{type:String,default:void 0},search:{type:Boolean,default:!1}},data:function(){return{fab:!1,appQR:"",fabShare:!1,shareQR:""}},computed:v(v({},Object(r.b)(["footer","content"])),{},{right:function(){var t=this.content.left+this.content.width+90,e=document.documentElement.clientWidth-t;return e>0?e:0}}),watch:{appUrl:function(t){this.calcAppQR()},shareUrl:function(t){this.calcShareQR()}},created:function(){},mounted:function(){this.calcAppQR(),this.calcShareQR()},methods:{calcAppQR:function(){var t=this;this.appUrl&&d.a.toDataURL(this.appUrl).then((function(e){t.appQR=e})).catch((function(t){console.error(t)}))},calcShareQR:function(){var t=this;this.shareUrl&&d.a.toDataURL(this.shareUrl).then((function(e){t.shareQR=e})).catch((function(t){console.error(t)}))}}},h=(n(521),n(32)),m=n(58),_=n.n(m),x=n(221),y=n(512),O=n(223),k=n(219),S=n(516),w=n(64),j=n(539),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{right:t.right+"px",bottom:"100px"},attrs:{id:"group"}},[t._t("prepend"),t._v(" "),t.shareUrl?n("div",[n("v-speed-dial",{attrs:{direction:"left","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{fab:"",dark:"",large:"",color:"blue darken-2"},model:{value:t.fabShare,callback:function(e){t.fabShare=e},expression:"fabShare"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n            mdi-share-variant\n          ")])],1)]},proxy:!0}],null,!1,2522381705),model:{value:t.fabShare,callback:function(e){t.fabShare=e},expression:"fabShare"}},[t._v(" "),n("v-card",[n("v-avatar",{attrs:{size:"180",tile:"",color:"grey"}},[n("img",{attrs:{alt:"分享",src:t.shareQR}})]),t._v(" "),n("div",{staticClass:"tips mt-n2"},[t._v("\n          扫描播放或下载App\n        ")])],1)],1)],1):t._e(),t._v(" "),t.shareUrl?t._e():n("div",[n("v-speed-dial",{attrs:{direction:"left","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{fab:"",dark:"",large:"",color:"blue darken-2"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n            mdi-android\n          ")])],1)]},proxy:!0}],null,!1,3319218952),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),n("v-card",[n("v-avatar",{attrs:{size:"150",tile:"",color:"grey"}},[n("img",{attrs:{alt:"APP 下载",src:t.appQR}})]),t._v(" "),n("div",{staticClass:"tips mt-n2"},[t._v("\n          扫码下载App\n        ")])],1)],1)],1),t._v(" "),t.search?n("div",[n("v-menu",{attrs:{"offset-x":"",transition:"slide-x-transition","nudge-left":"8",left:"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"",dark:"",large:"",color:"blue darken-2"}},"v-btn",r,!1),o),[n("v-icon",{attrs:{dark:""}},[t._v("\n            mdi-magnify\n          ")])],1)]}}],null,!1,1942183284)},[t._v(" "),n("v-sheet",{attrs:{elevation:"1",width:"300"}},[n("search-tool",{attrs:{small:"",height:30}})],1)],1)],1):t._e(),t._v(" "),n("div",[n("v-btn",{attrs:{fab:"",dark:"",large:"",color:"purple"},on:{click:function(e){return t.$vuetify.goTo(0,{duration:300})}}},[n("v-icon",{attrs:{dark:""}},[t._v("\n        mdi-chevron-up\n      ")])],1)],1),t._v(" "),t._t("append")],2)}),[],!1,null,"49e6b04c",null);e.default=component.exports;_()(component,{SearchTool:n(108).default}),_()(component,{VAvatar:x.a,VBtn:y.a,VCard:O.a,VIcon:k.a,VMenu:S.a,VSheet:w.a,VSpeedDial:j.a})},521:function(t,e,n){"use strict";n(517)},522:function(t,e,n){var o=n(13)(!1);o.push([t.i,"#group[data-v-49e6b04c]{position:fixed;z-index:10}#group div[data-v-49e6b04c]{margin:8px 0}.tips[data-v-49e6b04c]{width:100%;text-align:center}",""]),t.exports=o},523:function(t,e,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("e6b013ca",content,!0,{sourceMap:!1})},524:function(t,e,n){var o=n(13)(!1);o.push([t.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),t.exports=o},539:function(t,e,n){"use strict";var o=n(1),r=(n(35),n(145),n(70),n(37),n(523),n(42)),l=n(88),d=n(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=n(146),v=n(6);e.a=Object(v.a)(l.a,r.a,d).extend({name:"v-speed-dial",directives:{ClickOutside:c.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(o.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(o.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,n=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var o=0;n=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(o++,t("div",{style:{transitionDelay:.05*o+"s"},key:i},[b]))}))}var r=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},n);return t("div",data,[this.$slots.activator,r])}})}}]);