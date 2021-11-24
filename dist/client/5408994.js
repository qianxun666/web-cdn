(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{532:function(e,t,o){var content=o(548);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(14).default)("dc222336",content,!0,{sourceMap:!1})},544:function(e,t,o){"use strict";o.r(t);o(147),o(538);var n={name:"MusicPlayer",props:{singerName:{type:String,default:""},songName:{type:String,default:""},singerPic:{type:String,default:""},src:{type:String,default:""},autoplay:{type:Boolean,default:!1},mobile:{type:Boolean,default:!1}},data:function(){return{volume:100,muted:!1,playing:this.autoplay,sliderTime:0,maxTime:0,mousedown:!1,repeat:!0}},computed:{icon:function(){var e=this.volume;return this.muted||e<=0?"mdi-volume-mute":e<=35?"mdi-volume-low":e>70?"mdi-volume-high":"mdi-volume-medium"},playIcon:function(){return this.playing?"mdi-pause":"mdi-play"},repeatIcon:function(){return this.repeat?"mdi-repeat":"mdi-repeat-off"}},watch:{volume:function(e){this.muted=!1;var t=e;return e<0?t=0:e>100&&(t=100),this.$refs.audio.volume=t/100,localStorage.setItem("audioVolume",t),t},muted:function(e){localStorage.setItem("audioMuted",e),this.$refs.audio.muted=e}},created:function(){},mounted:function(){var e=this,t=localStorage.getItem("audioVolume");null==t||""===t||isNaN(t)||(this.volume=parseInt(t)),this.$nextTick((function(){var t=localStorage.getItem("audioMuted");e.muted="true"===t}))},methods:{scrollBarWheel:function(e){((e=e||window.event).wheelDelta?e.wheelDelta<0:e.detail>0)?this.volume-=5:this.volume+=5},paly:function(){this.playing?this.$refs.audio.pause():this.$refs.audio.play()},onPlay:function(e){this.playing=!0,this.$refs.audio&&this.$emit("playing",this.$refs.audio.currentTime)},onPause:function(e){this.playing=!1,this.$refs.audio&&this.$emit("paused",this.$refs.audio.currentTime)},onEnded:function(e){this.playing=!1},onError:function(e){console.log(e)},onWaiting:function(e){},onTimeupdate:function(e){if(!this.mousedown){var t=this.sliderTime;this.sliderTime=parseInt(e.target.currentTime),this.sliderTime<t&&this.$emit("seeked",e.target.currentTime)}},onLoadedmetadata:function(e){this.maxTime=parseInt(e.target.duration),this.sliderTime=parseInt(e.target.currentTime)},fmtTime:function(time){return"".concat(parseInt(time/60),":")+(""+time%60).padStart(2,0)},setTime:function(){this.mousedown=!1,this.$refs.audio.currentTime=this.sliderTime,this.$refs.audio&&this.$emit("seeked",this.$refs.audio.currentTime)}}},r=(o(547),o(32)),l=o(58),d=o.n(l),m=o(221),c=o(512),v=o(219),f=o(516),h=o(634),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"player"},[o("div",{staticClass:"float-left ma-2"},[o("v-avatar",{attrs:{tile:"",size:"64"}},[o("img",{attrs:{alt:e.singerName,src:e.singerPic}})]),e._v(" "),o("v-btn",{staticClass:"mx-2",attrs:{fab:"",icon:"",color:"white"},on:{click:e.paly}},[o("v-icon",{attrs:{dark:""}},[e._v("\n        "+e._s(e.playIcon)+"\n      ")])],1),e._v(" "),o("v-btn",{staticClass:"mx-2",attrs:{fab:"",icon:"",color:"white"},on:{click:function(t){e.repeat=!e.repeat}}},[o("v-icon",{attrs:{dark:""}},[e._v("\n        "+e._s(e.repeatIcon)+"\n      ")])],1)],1),e._v(" "),e.mobile?e._e():o("div",{staticClass:"vol float-right mr-10",on:{wheel:function(t){return t.preventDefault(),e.scrollBarWheel.apply(null,arguments)}}},[o("v-menu",{attrs:{"open-on-hover":"",top:"","offset-y":"","nudge-top":"3"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-btn",e._g(e._b({attrs:{icon:"",color:"white"},on:{click:function(t){e.muted=!e.muted}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{dark:""}},[e._v(e._s(e.icon))])],1),e._v(" "),o("span",[e._v(e._s(e.volume)+"%")])]}}],null,!1,3070573750)},[e._v(" "),o("div",{staticClass:"slider",on:{wheel:function(t){return t.preventDefault(),e.scrollBarWheel.apply(null,arguments)}}},[o("v-slider",{staticClass:"audio-slider",attrs:{vertical:""},model:{value:e.volume,callback:function(t){e.volume=t},expression:"volume"}})],1)])],1),e._v(" "),o("div",{staticClass:"time-slider mx-130"},[o("div",{class:e.mobile?"mt-8":"mt-2"},[o("span",[e._v(e._s(e.songName))]),e._v(" "),o("span",{staticClass:"float-right mr-5"},[e._v(e._s(e.fmtTime(e.sliderTime))+"/"+e._s(e.fmtTime(e.maxTime)))])]),e._v(" "),e.mobile?e._e():o("div",[o("v-slider",{attrs:{max:e.maxTime},on:{mousedown:function(t){e.mousedown=!0},mouseup:e.setTime},model:{value:e.sliderTime,callback:function(t){e.sliderTime=t},expression:"sliderTime"}})],1)]),e._v(" "),e.mobile?o("div",{staticClass:"mx-10 mt-15"},[o("v-slider",{attrs:{max:e.maxTime},on:{mousedown:function(t){e.mousedown=!0},mouseup:e.setTime},model:{value:e.sliderTime,callback:function(t){e.sliderTime=t},expression:"sliderTime"}})],1):e._e(),e._v(" "),o("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"audio",attrs:{src:e.src,autoplay:e.autoplay,loop:e.repeat,preload:"auto"},on:{play:e.onPlay,error:e.onError,waiting:e.onWaiting,pause:e.onPause,timeupdate:e.onTimeupdate,loadedmetadata:e.onLoadedmetadata,ended:e.onEnded}})])}),[],!1,null,"c7e8aa6e",null);t.default=component.exports;d()(component,{VAvatar:m.a,VBtn:c.a,VIcon:v.a,VMenu:f.a,VSlider:h.a})},547:function(e,t,o){"use strict";o(532)},548:function(e,t,o){var n=o(13)(!1);n.push([e.i,'.vol[data-v-c7e8aa6e]{width:36px}.slider[data-v-c7e8aa6e]{background-color:rgba(0,0,0,.9)}.audio-slider[data-v-c7e8aa6e]{height:200px;scrollbar-width:none;-ms-overflow-style:none;overflow-x:hidden;overflow-y:auto}.audio-slider[data-v-c7e8aa6e]::-webkit-scrollbar{display:none}img[data-v-c7e8aa6e]:after{content:" ";display:block;position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;background:url(/default-songer.png);background-size:100% 100%}',""]),e.exports=n}}]);