(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{513:function(t,e,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("30eafbc9",content,!0,{sourceMap:!1})},534:function(t,e,n){"use strict";n(513)},535:function(t,e,n){var o=n(7)(!1);o.push([t.i,"h1[data-v-348525d8]{font-size:20px}",""]),t.exports=o},584:function(t,e,n){"use strict";n.r(e);var o={layout:"none",components:{},asyncData:function(t){t.params,t.$axios},data:function(){return{text:"正在激活,请稍后..."}},computed:{},created:function(){},mounted:function(){if(console.log(this.$route.query),this.text="无效的验证连接",this.$route.query){var t=this.$route.query.email,e=this.$route.query.verifyRegist;t&&e&&(this.text="正在激活,请稍后...",this.verify(t,e))}},methods:{verify:function(t,e){var n=this;this.$axios.post("/regist",{email:t,verifyRegist:e,statue:1}).then((function(data){console.log(data),n.$router.push({path:n.redirect||"/login",query:n.otherQuery})})).catch((function(t){console.log(t);var data=t.response.data;n.text="服务器似乎开小差了，请稍后再试",data&&data.code&&1===data.code?n.text=data.resMsg:n.$errorMessage()}))}}},r=(n(534),n(22)),c=n(38),l=n.n(c),f=n(447),h=n(457),d=n(448),v=n(449),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{staticClass:"main-app"},[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{align:"center","align-content":"center",justify:"center"}},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"text-h3 pa-12"},[t._v("\n            "+t._s(t.text)+"\n          ")])])])],1)],1)],1)}),[],!1,null,"348525d8",null);e.default=component.exports;l()(component,{VApp:f.a,VContainer:h.a,VMain:d.a,VRow:v.a})}}]);