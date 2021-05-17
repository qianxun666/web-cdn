exports.ids = [23,5];
exports.modules = {

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("069c1d5e", content, true, context)
};

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MusicPlayer/index.vue?vue&type=template&id=42919dd2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"player"},[_vm._ssrNode("<div class=\"float-left ma-2\" data-v-42919dd2>","</div>",[_c('v-avatar',{attrs:{"tile":"","size":"64"}},[_c('img',{attrs:{"alt":_vm.singerName,"src":_vm.singerPic}})]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"mx-2",attrs:{"fab":"","icon":"","color":"white"},on:{"click":_vm.paly}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("\n        "+_vm._s(_vm.playIcon)+"\n      ")])],1),_vm._ssrNode(" "),_c('v-btn',{staticClass:"mx-2",attrs:{"fab":"","icon":"","color":"white"},on:{"click":function($event){_vm.repeat = !_vm.repeat}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("\n        "+_vm._s(_vm.repeatIcon)+"\n      ")])],1)],2),_vm._ssrNode(" "),(!_vm.mobile)?_vm._ssrNode("<div class=\"vol float-right mr-10\" data-v-42919dd2>","</div>",[_c('v-menu',{attrs:{"open-on-hover":"","top":"","offset-y":"","nudge-top":"3"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-btn',_vm._g(_vm._b({attrs:{"icon":"","color":"white"},on:{"click":function($event){_vm.muted=!_vm.muted}}},'v-btn',attrs,false),on),[_c('v-icon',{attrs:{"dark":""}},[_vm._v(_vm._s(_vm.icon))])],1),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.volume)+"%")])]}}],null,false,3070573750)},[_vm._v(" "),_c('div',{staticClass:"slider",on:{"wheel":function($event){$event.preventDefault();return _vm.scrollBarWheel($event)}}},[_c('v-slider',{staticClass:"audio-slider",attrs:{"vertical":""},model:{value:(_vm.volume),callback:function ($$v) {_vm.volume=$$v},expression:"volume"}})],1)])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"time-slider mx-130\" data-v-42919dd2>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.mobile ? 'mt-8' :'mt-2'))+" data-v-42919dd2><span data-v-42919dd2>"+_vm._ssrEscape(_vm._s(_vm.songName))+"</span> <span class=\"float-right mr-5\" data-v-42919dd2>"+_vm._ssrEscape(_vm._s(_vm.fmtTime(_vm.sliderTime))+"/"+_vm._s(_vm.fmtTime(_vm.maxTime)))+"</span></div> "),(!_vm.mobile)?_vm._ssrNode("<div data-v-42919dd2>","</div>",[_c('v-slider',{attrs:{"max":_vm.maxTime},on:{"mousedown":function($event){_vm.mousedown=true},"mouseup":_vm.setTime},model:{value:(_vm.sliderTime),callback:function ($$v) {_vm.sliderTime=$$v},expression:"sliderTime"}})],1):_vm._e()],2),_vm._ssrNode(" "),(_vm.mobile)?_vm._ssrNode("<div class=\"mx-10 mt-15\" data-v-42919dd2>","</div>",[_c('v-slider',{attrs:{"max":_vm.maxTime},on:{"mousedown":function($event){_vm.mousedown=true},"mouseup":_vm.setTime},model:{value:(_vm.sliderTime),callback:function ($$v) {_vm.sliderTime=$$v},expression:"sliderTime"}})],1):_vm._e(),_vm._ssrNode(" <audio"+(_vm._ssrAttr("src",_vm.src))+(_vm._ssrAttr("autoplay",_vm.autoplay))+(_vm._ssrAttr("loop",_vm.repeat))+" preload=\"auto\""+(_vm._ssrStyle(null,null, { display: (false) ? undefined : 'none' }))+" data-v-42919dd2></audio>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MusicPlayer/index.vue?vue&type=template&id=42919dd2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MusicPlayer/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MusicPlayervue_type_script_lang_js_ = ({
  name: 'MusicPlayer',
  props: {
    singerName: {
      type: String,
      default: ''
    },
    songName: {
      type: String,
      default: ''
    },
    singerPic: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      volume: 100,
      muted: false,
      playing: this.autoplay,
      sliderTime: 0,
      maxTime: 0,
      mousedown: false,
      repeat: true
    };
  },

  computed: {
    icon() {
      const val = this.volume;

      if (this.muted || val <= 0) {
        return 'mdi-volume-mute';
      } else if (val <= 35) {
        return 'mdi-volume-low';
      } else if (val > 70) {
        return 'mdi-volume-high';
      } else {
        return 'mdi-volume-medium';
      }
    },

    playIcon() {
      return this.playing ? 'mdi-pause' : 'mdi-play';
    },

    repeatIcon() {
      return this.repeat ? 'mdi-repeat' : 'mdi-repeat-off';
    }

  },
  watch: {
    volume(val) {
      this.muted = false;
      let vol = val;

      if (val < 0) {
        vol = 0;
      } else if (val > 100) {
        vol = 100;
      }

      this.$refs.audio.volume = vol / 100;
      localStorage.setItem('audioVolume', vol);
      return vol;
    },

    muted(val) {
      localStorage.setItem('audioMuted', val);
      this.$refs.audio.muted = val;
    }

  },

  created() {},

  mounted() {
    const vol = localStorage.getItem('audioVolume');

    if (vol != null && vol !== '' && !isNaN(vol)) {
      this.volume = parseInt(vol);
    }

    this.$nextTick(() => {
      const muted = localStorage.getItem('audioMuted');
      this.muted = muted === 'true';
    });
  },

  methods: {
    scrollBarWheel(e) {
      e = e || window.event;
      let down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作

      down = e.wheelDelta ? e.wheelDelta < 0 : e.detail > 0;

      if (down) {
        this.volume -= 5;
      } else {
        this.volume += 5;
      }
    },

    paly() {
      if (this.playing) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
    },

    onPlay(e) {
      this.playing = true; // this.$refs.audio.volume = this.volume / 100
      // this.$refs.audio.muted = this.muted
      // console.log('this.muted', this.muted)
      // console.log(e)
    },

    onPause(e) {
      // console.log(e)
      this.playing = false;
    },

    OnEnded(e) {
      // console.log(e)
      this.playing = false;
    },

    onError(e) {
      console.log(e);
    },

    onWaiting(e) {// console.log(e)
    },

    onTimeupdate(e) {
      if (this.mousedown) {
        return;
      }

      this.sliderTime = parseInt(e.target.currentTime);
    },

    onLoadedmetadata(e) {
      // console.log('onLoadedmetadata', e)
      this.maxTime = parseInt(e.target.duration);
      this.sliderTime = parseInt(e.target.currentTime);
    },

    fmtTime(time) {
      return `${parseInt(time / 60)}:` + ('' + time % 60).padStart(2, 0);
    },

    setTime() {
      this.mousedown = false; // console.log(this.$refs.audio)

      this.$refs.audio.currentTime = this.sliderTime;
    }

  }
});
// CONCATENATED MODULE: ./components/MusicPlayer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MusicPlayervue_type_script_lang_js_ = (MusicPlayervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlider/VSlider.sass
var VSlider = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js
var loadable = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var util_console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlider/VSlider.js
 // Components


 // Mixins


 // Directives

 // Helpers



/* harmony default export */ var VSlider_VSlider = (Object(mixins["a" /* default */])(VInput["a" /* default */], loadable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-slider',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  mixins: [loadable["a" /* default */]],
  props: {
    disabled: Boolean,
    inverseLabel: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    thumbColor: String,
    thumbLabel: {
      type: [Boolean, String],
      default: undefined,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    thumbSize: {
      type: [Number, String],
      default: 32
    },
    tickLabels: {
      type: Array,
      default: () => []
    },
    ticks: {
      type: [Boolean, String],
      default: false,
      validator: v => typeof v === 'boolean' || v === 'always'
    },
    tickSize: {
      type: [Number, String],
      default: 2
    },
    trackColor: String,
    trackFillColor: String,
    value: [Number, String],
    vertical: Boolean
  },
  data: () => ({
    app: null,
    oldValue: null,
    keyPressed: 0,
    isFocused: false,
    isActive: false,
    noClick: false
  }),
  computed: {
    classes() {
      return { ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-input__slider': true,
        'v-input__slider--vertical': this.vertical,
        'v-input__slider--inverse-label': this.inverseLabel
      };
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        val = isNaN(val) ? this.minValue : val; // Round value to ensure the
        // entire slider range can
        // be selected with step

        const value = this.roundValue(Math.min(Math.max(val, this.minValue), this.maxValue));
        if (value === this.lazyValue) return;
        this.lazyValue = value;
        this.$emit('input', value);
      }

    },

    trackTransition() {
      return this.keyPressed >= 2 ? 'none' : '';
    },

    minValue() {
      return parseFloat(this.min);
    },

    maxValue() {
      return parseFloat(this.max);
    },

    stepNumeric() {
      return this.step > 0 ? parseFloat(this.step) : 0;
    },

    inputWidth() {
      return (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100;
    },

    trackFillStyles() {
      const startDir = this.vertical ? 'bottom' : 'left';
      const endDir = this.vertical ? 'top' : 'right';
      const valueDir = this.vertical ? 'height' : 'width';
      const start = this.$vuetify.rtl ? 'auto' : '0';
      const end = this.$vuetify.rtl ? '0' : 'auto';
      const value = this.isDisabled ? `calc(${this.inputWidth}% - 10px)` : `${this.inputWidth}%`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end,
        [valueDir]: value
      };
    },

    trackStyles() {
      const startDir = this.vertical ? this.$vuetify.rtl ? 'bottom' : 'top' : this.$vuetify.rtl ? 'left' : 'right';
      const endDir = this.vertical ? 'height' : 'width';
      const start = '0px';
      const end = this.isDisabled ? `calc(${100 - this.inputWidth}% - 10px)` : `calc(${100 - this.inputWidth}%)`;
      return {
        transition: this.trackTransition,
        [startDir]: start,
        [endDir]: end
      };
    },

    showTicks() {
      return this.tickLabels.length > 0 || !!(!this.isDisabled && this.stepNumeric && this.ticks);
    },

    numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric);
    },

    showThumbLabel() {
      return !this.isDisabled && !!(this.thumbLabel || this.$scopedSlots['thumb-label']);
    },

    computedTrackColor() {
      if (this.isDisabled) return undefined;
      if (this.trackColor) return this.trackColor;
      if (this.isDark) return this.validationState;
      return this.validationState || 'primary lighten-3';
    },

    computedTrackFillColor() {
      if (this.isDisabled) return undefined;
      if (this.trackFillColor) return this.trackFillColor;
      return this.validationState || this.computedColor;
    },

    computedThumbColor() {
      if (this.thumbColor) return this.thumbColor;
      return this.validationState || this.computedColor;
    }

  },
  watch: {
    min(val) {
      const parsed = parseFloat(val);
      parsed > this.internalValue && this.$emit('input', parsed);
    },

    max(val) {
      const parsed = parseFloat(val);
      parsed < this.internalValue && this.$emit('input', parsed);
    },

    value: {
      handler(v) {
        this.internalValue = v;
      }

    }
  },

  // If done in as immediate in
  // value watcher, causes issues
  // with vue-test-utils
  beforeMount() {
    this.internalValue = this.value;
  },

  mounted() {
    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || Object(util_console["c" /* consoleWarn */])('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
  },

  methods: {
    genDefaultSlot() {
      const children = [this.genLabel()];
      const slider = this.genSlider();
      this.inverseLabel ? children.unshift(slider) : children.push(slider);
      children.push(this.genProgress());
      return children;
    },

    genSlider() {
      return this.$createElement('div', {
        class: {
          'v-slider': true,
          'v-slider--horizontal': !this.vertical,
          'v-slider--vertical': this.vertical,
          'v-slider--focused': this.isFocused,
          'v-slider--active': this.isActive,
          'v-slider--disabled': this.isDisabled,
          'v-slider--readonly': this.isReadonly,
          ...this.themeClasses
        },
        directives: [{
          name: 'click-outside',
          value: this.onBlur
        }],
        on: {
          click: this.onSliderClick,
          mousedown: this.onSliderMouseDown
        }
      }, this.genChildren());
    },

    genChildren() {
      return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onSliderMouseDown, this.onFocus, this.onBlur)];
    },

    genInput() {
      return this.$createElement('input', {
        attrs: {
          value: this.internalValue,
          id: this.computedId,
          disabled: true,
          readonly: true,
          tabindex: -1,
          ...this.$attrs
        }
      });
    },

    genTrackContainer() {
      const children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        ref: 'track'
      }, children);
    },

    genSteps() {
      if (!this.step || !this.showTicks) return null;
      const tickSize = parseFloat(this.tickSize);
      const range = Object(helpers["g" /* createRange */])(this.numTicks + 1);
      const direction = this.vertical ? 'bottom' : this.$vuetify.rtl ? 'right' : 'left';
      const offsetDirection = this.vertical ? this.$vuetify.rtl ? 'left' : 'right' : 'top';
      if (this.vertical) range.reverse();
      const ticks = range.map(index => {
        const children = [];

        if (this.tickLabels[index]) {
          children.push(this.$createElement('div', {
            staticClass: 'v-slider__tick-label'
          }, this.tickLabels[index]));
        }

        const width = index * (100 / this.numTicks);
        const filled = this.$vuetify.rtl ? 100 - this.inputWidth < width : width < this.inputWidth;
        return this.$createElement('span', {
          key: index,
          staticClass: 'v-slider__tick',
          class: {
            'v-slider__tick--filled': filled
          },
          style: {
            width: `${tickSize}px`,
            height: `${tickSize}px`,
            [direction]: `calc(${width}% - ${tickSize / 2}px)`,
            [offsetDirection]: `calc(50% - ${tickSize / 2}px)`
          }
        }, children);
      });
      return this.$createElement('div', {
        staticClass: 'v-slider__ticks-container',
        class: {
          'v-slider__ticks-container--always-show': this.ticks === 'always' || this.tickLabels.length > 0
        }
      }, ticks);
    },

    genThumbContainer(value, valueWidth, isActive, isFocused, onDrag, onFocus, onBlur, ref = 'thumb') {
      const children = [this.genThumb()];
      const thumbLabelContent = this.genThumbLabelContent(value);
      this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
      return this.$createElement('div', this.setTextColor(this.computedThumbColor, {
        ref,
        key: ref,
        staticClass: 'v-slider__thumb-container',
        class: {
          'v-slider__thumb-container--active': isActive,
          'v-slider__thumb-container--focused': isFocused,
          'v-slider__thumb-container--show-label': this.showThumbLabel
        },
        style: this.getThumbContainerStyles(valueWidth),
        attrs: {
          role: 'slider',
          tabindex: this.isDisabled ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
          'aria-label': this.label,
          'aria-valuemin': this.min,
          'aria-valuemax': this.max,
          'aria-valuenow': this.internalValue,
          'aria-readonly': String(this.isReadonly),
          'aria-orientation': this.vertical ? 'vertical' : 'horizontal',
          ...this.$attrs
        },
        on: {
          focus: onFocus,
          blur: onBlur,
          keydown: this.onKeyDown,
          keyup: this.onKeyUp,
          touchstart: onDrag,
          mousedown: onDrag
        }
      }), children);
    },

    genThumbLabelContent(value) {
      return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({
        value
      }) : [this.$createElement('span', [String(value)])];
    },

    genThumbLabel(content) {
      const size = Object(helpers["f" /* convertToUnit */])(this.thumbSize);
      const transform = this.vertical ? `translateY(20%) translateY(${Number(this.thumbSize) / 3 - 1}px) translateX(55%) rotate(135deg)` : `translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)`;
      return this.$createElement(transitions["c" /* VScaleTransition */], {
        props: {
          origin: 'bottom center'
        }
      }, [this.$createElement('div', {
        staticClass: 'v-slider__thumb-label-container',
        directives: [{
          name: 'show',
          value: this.isFocused || this.isActive || this.thumbLabel === 'always'
        }]
      }, [this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb-label',
        style: {
          height: size,
          width: size,
          transform
        }
      }), [this.$createElement('div', content)])])]);
    },

    genThumb() {
      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },

    getThumbContainerStyles(width) {
      const direction = this.vertical ? 'top' : 'left';
      let value = this.$vuetify.rtl ? 100 - width : width;
      value = this.vertical ? 100 - value : value;
      return {
        transition: this.trackTransition,
        [direction]: `${value}%`
      };
    },

    onSliderMouseDown(e) {
      e.preventDefault();
      this.oldValue = this.internalValue;
      this.keyPressed = 2;
      this.isActive = true;
      const mouseUpOptions = helpers["u" /* passiveSupported */] ? {
        passive: true,
        capture: true
      } : true;
      const mouseMoveOptions = helpers["u" /* passiveSupported */] ? {
        passive: true
      } : false;

      if ('touches' in e) {
        this.app.addEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
        Object(helpers["a" /* addOnceEventListener */])(this.app, 'touchend', this.onSliderMouseUp, mouseUpOptions);
      } else {
        this.onMouseMove(e);
        this.app.addEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
        Object(helpers["a" /* addOnceEventListener */])(this.app, 'mouseup', this.onSliderMouseUp, mouseUpOptions);
      }

      this.$emit('start', this.internalValue);
    },

    onSliderMouseUp(e) {
      e.stopPropagation();
      this.keyPressed = 0;
      const mouseMoveOptions = helpers["u" /* passiveSupported */] ? {
        passive: true
      } : false;
      this.app.removeEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
      this.app.removeEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
      this.$emit('mouseup', e);
      this.$emit('end', this.internalValue);

      if (!Object(helpers["i" /* deepEqual */])(this.oldValue, this.internalValue)) {
        this.$emit('change', this.internalValue);
        this.noClick = true;
      }

      this.isActive = false;
    },

    onMouseMove(e) {
      const {
        value
      } = this.parseMouseMove(e);
      this.internalValue = value;
    },

    onKeyDown(e) {
      if (!this.isInteractive) return;
      const value = this.parseKeyDown(e, this.internalValue);
      if (value == null || value < this.minValue || value > this.maxValue) return;
      this.internalValue = value;
      this.$emit('change', value);
    },

    onKeyUp() {
      this.keyPressed = 0;
    },

    onSliderClick(e) {
      if (this.noClick) {
        this.noClick = false;
        return;
      }

      const thumb = this.$refs.thumb;
      thumb.focus();
      this.onMouseMove(e);
      this.$emit('change', this.internalValue);
    },

    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },

    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },

    parseMouseMove(e) {
      const start = this.vertical ? 'top' : 'left';
      const length = this.vertical ? 'height' : 'width';
      const click = this.vertical ? 'clientY' : 'clientX';
      const {
        [start]: trackStart,
        [length]: trackLength
      } = this.$refs.track.getBoundingClientRect();
      const clickOffset = 'touches' in e ? e.touches[0][click] : e[click]; // Can we get rid of any here?
      // It is possible for left to be NaN, force to number

      let clickPos = Math.min(Math.max((clickOffset - trackStart) / trackLength, 0), 1) || 0;
      if (this.vertical) clickPos = 1 - clickPos;
      if (this.$vuetify.rtl) clickPos = 1 - clickPos;
      const isInsideTrack = clickOffset >= trackStart && clickOffset <= trackStart + trackLength;
      const value = parseFloat(this.min) + clickPos * (this.maxValue - this.minValue);
      return {
        value,
        isInsideTrack
      };
    },

    parseKeyDown(e, value) {
      if (!this.isInteractive) return;
      const {
        pageup,
        pagedown,
        end,
        home,
        left,
        right,
        down,
        up
      } = helpers["q" /* keyCodes */];
      if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
      e.preventDefault();
      const step = this.stepNumeric || 1;
      const steps = (this.maxValue - this.minValue) / step;

      if ([left, right, down, up].includes(e.keyCode)) {
        this.keyPressed += 1;
        const increase = this.$vuetify.rtl ? [left, up] : [right, up];
        const direction = increase.includes(e.keyCode) ? 1 : -1;
        const multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
        value = value + direction * step * multiplier;
      } else if (e.keyCode === home) {
        value = this.minValue;
      } else if (e.keyCode === end) {
        value = this.maxValue;
      } else {
        const direction = e.keyCode === pagedown ? 1 : -1;
        value = value - direction * step * (steps > 100 ? steps / 10 : 10);
      }

      return value;
    },

    roundValue(value) {
      if (!this.stepNumeric) return value; // Format input value using the same number
      // of decimals places as in the step prop

      const trimmedStep = this.step.toString().trim();
      const decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
      const offset = this.minValue % this.stepNumeric;
      const newValue = Math.round((value - offset) / this.stepNumeric) * this.stepNumeric + offset;
      return parseFloat(Math.min(newValue, this.maxValue).toFixed(decimals));
    }

  }
}));
// CONCATENATED MODULE: ./components/MusicPlayer/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(240)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MusicPlayervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "42919dd2",
  "42e8e1d1"
  
)

/* harmony default export */ var MusicPlayer = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VMenu: VMenu["a" /* default */],VSlider: VSlider_VSlider})


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_42919dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_42919dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_42919dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_42919dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_42919dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vol[data-v-42919dd2]{width:36px}.slider[data-v-42919dd2]{background-color:rgba(0,0,0,.9)}.audio-slider[data-v-42919dd2]{height:200px;scrollbar-width:none;-ms-overflow-style:none;overflow-x:hidden;overflow-y:auto}.audio-slider[data-v-42919dd2]::-webkit-scrollbar{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("c1d8e262", content, true)

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{cursor:default;display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;padding:0;width:100%;display:none}.v-slider__track-container{position:absolute;border-radius:0}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{width:12px;height:12px;left:-6px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb,.v-slider__thumb:before{position:absolute;border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb:before{content:\"\";color:inherit;width:36px;height:36px;background:currentColor;opacity:.3;left:-12px;top:-12px;transform:scale(.1);pointer-events:none}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{opacity:0;background-color:rgba(0,0,0,.5);transition:.3s cubic-bezier(.25,.8,.5,1);border-radius:0}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--horizontal{min-height:32px;margin-left:8px;margin-right:8px}.v-slider--horizontal .v-slider__track-container{width:100%;height:2px;left:0;top:50%;transform:translateY(-50%)}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{left:0;height:2px;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{min-height:150px;margin-top:12px;margin-bottom:12px}.v-slider--vertical .v-slider__track-container{height:100%;width:2px;left:50%;top:0;transform:translateX(-50%)}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{top:0;width:2px;height:100%;left:50%;transform:translateX(-50%)}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);left:12px}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);right:12px}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{width:8px;height:8px;left:-4px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-right:0;margin-left:12px}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(281);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d26ec64e", content, true, context)
};

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7c8b327a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7c8b327a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7c8b327a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7c8b327a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_7c8b327a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".player[data-v-7c8b327a]{position:absolute;right:0;left:0;top:10px;z-index:9}.main-app[data-v-7c8b327a],.player[data-v-7c8b327a]{color:#fff;background-color:rgba(0,0,0,.9)}img[data-v-7c8b327a]{height:300px;width:300px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/share/_id.vue?vue&type=template&id=7c8b327a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-main',{staticClass:"main-app"},[_c('v-container',{attrs:{"fluid":"","fill-height":""}},[_c('client-only',[_c('div',{staticClass:"player"},[_c('music-player',{ref:"player",attrs:{"song-name":_vm.songName,"singer-pic":_vm.singerImg,"src":_vm.listenUrl,"autoplay":true,"mobile":_vm.mobile}})],1),_vm._v(" "),_c('v-row',{attrs:{"align":"center","align-content":"center","justify":"center"}},[(_vm.dt.type === 'android')?_c('div',{staticClass:"text-center"},[_c('v-btn',{attrs:{"x-large":"","color":"primary"}},[_vm._v("\n              下载 APP\n            ")]),_vm._v(" "),_c('div',{staticClass:"mt-5"},[_c('img',{attrs:{"alt":"APP 下载","src":_vm.appQR}})])],1):_vm._e()])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/share/_id.vue?vue&type=template&id=7c8b327a&scoped=true&

// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(200);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);

// EXTERNAL MODULE: ./components/MusicPlayer/index.vue + 5 modules
var MusicPlayer = __webpack_require__(239);

// CONCATENATED MODULE: ./utils/deviceType.js
/**
 *
 * @param {*} UA ,就是userAgent
 * @returns  type: 设备类型
 *           env: 访问环境(微信/微博/qq)
 *           masklayer: 就是给外部拿到判断是否显示遮罩层的,一些特殊环境要引导用户到外部去打开访问
 */
function isWechat(UA) {
  return !!/MicroMessenger/i.test(UA);
}

function isWeibo(UA) {
  return !!/Weibo/i.test(UA);
}

function isQQ(UA) {
  return !!/QQ/i.test(UA);
}

function isMoible(UA) {
  return !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}

function isIOS(UA) {
  return !!/iPhone|iPad|iPod/i.test(UA);
}

function isAndroid(UA) {
  return !!/Android/i.test(UA);
}

function deviceType(UA) {
  if (isMoible(UA)) {
    if (isIOS(UA)) {
      if (isWechat(UA)) {
        return {
          type: 'ios',
          env: 'wechat',
          masklayer: true
        };
      }

      if (isWeibo(UA)) {
        return {
          type: 'ios',
          env: 'weibo',
          masklayer: true
        };
      }

      if (isQQ(UA)) {
        return {
          type: 'ios',
          env: 'qq',
          masklayer: true
        };
      }

      return {
        type: 'ios'
      };
    }

    if (isAndroid(UA)) {
      if (isWechat(UA)) {
        return {
          type: 'android',
          env: 'wechat',
          masklayer: true
        };
      }

      if (isWeibo(UA)) {
        return {
          type: 'android',
          env: 'weibo',
          masklayer: true
        };
      }

      if (isQQ(UA)) {
        return {
          type: 'android',
          env: 'qq',
          masklayer: true
        };
      }

      return {
        type: 'android'
      };
    }

    return {
      type: 'mobile'
    };
  } else {
    return {
      type: 'pc'
    };
  }
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/share/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'none',
  components: {
    MusicPlayer: MusicPlayer["default"]
  },

  validate({
    params
  }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },

  asyncData({
    params,
    $axios,
    req,
    redirect
  }) {
    let userAgent;

    if (true) {
      userAgent = req.headers['user-agent'];
    } else {}

    const dt = deviceType(userAgent);
    const mobile = dt.type !== 'pc';

    if (!mobile) {
      redirect(`/song/${params.id}`);
    }

    return $axios.post(`/getSongDetail`, {
      songId: parseInt(params.id)
    }).then(data => {
      data.lyrics = data.lyric.split('\n');
      data.mobile = mobile;
      data.dt = dt;
      return data;
    });
  },

  data() {
    return {
      listenUrl: undefined,
      mobile: false,
      appUrl: '下载地址',
      appQR: ''
    };
  },

  computed: {
    singerImg() {
      const names = (this.singerName || '').split('、'); // if (this.singerName.includes('、')) {
      //   return `/music/pic/固定2.jpg`
      // }
      // return `/music/pic/${this.singerName}2.jpg`

      if (names.length > 2 || names.length === 0) {
        return 'https://cdn.jsdelivr.net/gh/qianxun666/singer-img@master/固定2.jpg';
      }

      return `https://cdn.jsdelivr.net/gh/qianxun666/singer-img@master/${names[0].trim()}2.jpg`;
    }

  },

  created() {},

  mounted() {
    this.calcAppQR();
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
    }

  }
});
// CONCATENATED MODULE: ./pages/share/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var share_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(210);

// CONCATENATED MODULE: ./pages/share/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(280)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  share_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c8b327a",
  "33236acc"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {MusicPlayer: __webpack_require__(239).default})


/* vuetify-loader */






installComponents_default()(component, {VApp: VApp["a" /* default */],VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */],VMain: VMain["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_id.js.map