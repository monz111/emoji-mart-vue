(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory();
	else
		root["EmojiMart"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__.EmojiProps), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  computed: {
    view: function view() {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__.EmojiView(this.emojiObject, this.skin, this.set, this.native, this.fallback, this.tooltip, this.size);
    },
    imageUrl: function imageUrl() {
      return "https://cdnjs.cloudflare.com/ajax/libs/emoji-datasource-apple/7.0.2/img/apple/64/".concat(this.emoji.unified, ".png");
    },
    sanitizedData: function sanitizedData() {
      return this.emojiObject._sanitized;
    },
    title: function title() {
      return this.tooltip ? this.emojiObject.short_name : null;
    },
    emojiObject: function emojiObject() {
      if (typeof this.emoji == 'string') {
        return this.data.findEmoji(this.emoji);
      } else {
        return this.emoji;
      }
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.emojiObject);
    },
    onMouseEnter: function onMouseEnter() {
      this.$emit('mouseenter', this.emojiObject);
    },
    onMouseLeave: function onMouseLeave() {
      this.$emit('mouseleave', this.emojiObject);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/picker */ "./src/utils/picker.js");
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    smileys: 'Smileys & Emotion',
    people: 'People & Body',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__.PickerProps), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  data: function data() {
    return {
      activeSkin: this.skin || _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].get('skin') || this.defaultSkin,
      view: new _utils_picker__WEBPACK_IMPORTED_MODULE_6__.PickerView(this)
    };
  },
  computed: {
    customStyles: function customStyles() {
      return _objectSpread({
        width: this.calculateWidth + 'px'
      }, this.pickerStyles);
    },
    emojiProps: function emojiProps() {
      return {
        native: this.native,
        skin: this.activeSkin,
        set: this.set,
        emojiTooltip: this.emojiTooltip,
        emojiSize: this.emojiSize,
        selectedEmoji: this.view.previewEmoji,
        selectedEmojiCategory: this.view.previewEmojiCategory,
        onEnter: this.onEmojiEnter.bind(this),
        onLeave: this.onEmojiLeave.bind(this),
        onClick: this.onEmojiClick.bind(this)
      };
    },
    skinProps: function skinProps() {
      return {
        skin: this.activeSkin
      };
    },
    calculateWidth: function calculateWidth() {
      return this.perLine * (this.emojiSize + 12) + 12 + 2 + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.measureScrollbar)();
    },
    // emojisPerRow() {
    //   const listEl = this.$refs.scrollContent
    //   const emojiEl = listEl.querySelector('.emoji-mart-emoji')
    //   return Math.floor(listEl.offsetWidth / emojiEl.offsetWidth)
    // },
    filteredCategories: function filteredCategories() {
      return this.view.filteredCategories;
    },
    mergedI18n: function mergedI18n() {
      return Object.freeze((0,_utils__WEBPACK_IMPORTED_MODULE_4__.deepMerge)(I18N, this.i18n));
    },
    idleEmoji: function idleEmoji() {
      try {
        return this.data.emoji(this.emoji);
      } catch (e) {
        console.error('Default preview emoji `' + this.emoji + '` is not available, check the Picker `emoji` property');
        console.error(e);
        return this.data.firstEmoji();
      }
    }
  },
  methods: {
    onScroll: function onScroll() {
      if (this.infiniteScroll && !this.waitingForPaint) {
        this.waitingForPaint = true;
        window.requestAnimationFrame(this.onScrollPaint.bind(this));
      }
    },
    onScrollPaint: function onScrollPaint() {
      this.waitingForPaint = false;
      this.view.onScroll();
    },
    onAnchorClick: function onAnchorClick(category) {
      this.view.onAnchorClick(category);
    },
    onSearch: function onSearch(value) {
      this.view.onSearch(value);
    },
    onEmojiEnter: function onEmojiEnter(emoji) {
      this.view.onEmojiEnter(emoji);
    },
    onEmojiLeave: function onEmojiLeave(emoji) {
      this.view.onEmojiLeave(emoji);
    },
    onArrowLeft: function onArrowLeft($event) {
      var oldIdx = this.view.previewEmojiIdx;
      this.view.onArrowLeft();

      if ($event && this.view.previewEmojiIdx !== oldIdx) {
        // Prevent cursor movement inside the input
        $event.preventDefault();
      }
    },
    onArrowRight: function onArrowRight() {
      this.view.onArrowRight();
    },
    onArrowDown: function onArrowDown() {
      this.view.onArrowDown();
    },
    onArrowUp: function onArrowUp($event) {
      this.view.onArrowUp(); // Prevent cursor movement inside the input

      $event.preventDefault();
    },
    onEnter: function onEnter(emoji) {
      this.$emit('select', this.view.previewEmoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.view.previewEmoji);
    },
    onEmojiClick: function onEmojiClick(emoji) {
      this.$emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(emoji);
    },
    onSkinChange: function onSkinChange(skin) {
      this.activeSkin = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].update({
        skin: skin
      });
      this.$emit('skin-change', skin);
    },
    getCategoryComponent: function getCategoryComponent(index) {
      var component = this.$refs['categories_' + index];

      if (component && '0' in component) {
        // Vue 2 has $refs under v-for as an array.
        return component['0'];
      } // Vue 3 does not support $refs as array.


      return component;
    }
  },
  components: {
    Anchors: _anchors_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Category: _category_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Preview: _preview_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Search: _search_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs */ "./src/svgs/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    i18n: {
      type: Object,
      required: true
    },
    color: {
      type: String
    },
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  created: function created() {
    this.svgs = _svgs__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emojis: {
      type: Array
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    isVisible: function isVisible() {
      return !!this.emojis;
    },
    isSearch: function isSearch() {
      return this.name == 'Search';
    },
    hasResults: function hasResults() {
      return this.emojis.length > 0;
    },
    emojiObjects: function emojiObjects() {
      var _this = this;

      return this.emojis.map(function (emoji) {
        var emojiObject = _this.emojiObject(emoji);

        if (['♀️', '♂️', '⚕️'].includes(emojiObject.native)) return;
        var emojiView = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__.EmojiView(emoji, _this.emojiProps.skin, _this.emojiProps.set, _this.emojiProps.native, _this.emojiProps.fallback, _this.emojiProps.emojiTooltip, _this.emojiProps.emojiSize);
        return {
          emojiObject: emojiObject,
          emojiView: emojiView
        };
      }).filter(function (x) {
        return x;
      });
    }
  },
  components: {
    Emoji: _Emoji_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    imageUrl: function imageUrl(emoji) {
      if (!emoji) return '';
      var image = this.data.findEmoji(emoji).unified;
      return "https://cdnjs.cloudflare.com/ajax/libs/emoji-datasource-apple/7.0.2/img/apple/64/".concat(image, ".png");
    },
    emojiObject: function emojiObject(emoji) {
      if (typeof emoji == 'string') {
        return this.data.findEmoji(emoji);
      } else {
        return emoji;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: [String, Object]
    },
    idleEmoji: {
      type: [String, Object],
      required: true
    },
    showSkinTones: {
      type: Boolean,
      default: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skinProps: {
      type: Object,
      required: true
    },
    onSkinChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    emojiData: function emojiData() {
      if (this.emoji) {
        return this.emoji;
      } else {
        return {};
      }
    },
    emojiShortNames: function emojiShortNames() {
      return this.emojiData.short_names;
    },
    emojiEmoticons: function emojiEmoticons() {
      return this.emojiData.emoticons;
    }
  },
  components: {
    Emoji: _Emoji_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skins: _skins_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    onSearch: {
      type: Function,
      required: true
    },
    onArrowLeft: {
      type: Function,
      required: false
    },
    onArrowRight: {
      type: Function,
      required: false
    },
    onArrowDown: {
      type: Function,
      required: false
    },
    onArrowUp: {
      type: Function,
      required: false
    },
    onEnter: {
      type: Function,
      required: false
    }
  },
  data: function data() {
    return {
      value: ''
    };
  },
  computed: {
    emojiIndex: function emojiIndex() {
      return this.data;
    }
  },
  watch: {
    value: function value() {
      this.$emit('search', this.value);
    }
  },
  methods: {
    clear: function clear() {
      this.value = '';
    }
  },
  mounted: function mounted() {
    var $input = this.$el.querySelector('input');

    if (this.autoFocus) {
      $input.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    skin: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      opened: false
    };
  },
  methods: {
    onClick: function onClick(skinTone) {
      if (this.opened) {
        if (skinTone != this.skin) {
          this.$emit('change', skinTone);
        }
      }

      this.opened = !this.opened;
    }
  }
});

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anchors": function() { return /* reexport safe */ _anchors_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "Category": function() { return /* reexport safe */ _category_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "Emoji": function() { return /* reexport safe */ _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "Picker": function() { return /* reexport safe */ _Picker_vue__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "Preview": function() { return /* reexport safe */ _preview_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "Search": function() { return /* reexport safe */ _search_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "Skins": function() { return /* reexport safe */ _skins_vue__WEBPACK_IMPORTED_MODULE_4__["default"]; }
/* harmony export */ });
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _Picker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker.vue */ "./src/components/Picker.vue");








/***/ }),

/***/ "./src/polyfills/stringFromCodePoint.js":
/*!**********************************************!*\
  !*** ./src/polyfills/stringFromCodePoint.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _String = String;
/* harmony default export */ __webpack_exports__["default"] = (_String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;

  if (!length) {
    return '';
  }

  var result = '';

  while (++index < length) {
    var codePoint = Number(arguments[index]);

    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 || // not a valid Unicode code point
    codePoint > 0x10ffff || // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
      throw RangeError('Invalid code point: ' + codePoint);
    }

    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }

    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }

  return result;
});

/***/ }),

/***/ "./src/svgs/index.js":
/*!***************************!*\
  !*** ./src/svgs/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SVGs = {
  activity: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"/></svg>",
  custom: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><g transform=\"translate(2.000000, 1.000000)\"><rect id=\"Rectangle\" x=\"8\" y=\"0\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect></g></svg>",
  flags: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"/></svg>",
  foods: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"/></svg>",
  nature: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"/><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"/></svg>",
  objects: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"/><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"/></svg>",
  smileys: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"/></svg>",
  people: "<svg xmlns:svg=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"> <path id=\"path3814\" d=\"m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z\" /> <path id=\"path3816\" d=\"M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z \" /> </svg>",
  places: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"/><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"/></svg>",
  recent: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"/><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/></svg>",
  symbols: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"/></svg>"
};
/* harmony default export */ __webpack_exports__["default"] = (SVGs);

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSearch": function() { return /* binding */ buildSearch; },
/* harmony export */   "uncompress": function() { return /* binding */ uncompress; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};

var buildSearch = function buildSearch(emoji) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    ;
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};

function deepFreeze(object) {
  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object); // Freeze properties before freezing self

  var _iterator = _createForOfIteratorHelper(propNames),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      var value = object[name];
      object[name] = value && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' ? deepFreeze(value) : value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Object.freeze(object);
}

var uncompress = function uncompress(data) {
  if (!data.compressed) {
    return data;
  }

  data.compressed = false;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];

    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }

    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }

  data = deepFreeze(data);
  return data;
};



/***/ }),

/***/ "./src/utils/emoji-data.js":
/*!*********************************!*\
  !*** ./src/utils/emoji-data.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiData": function() { return /* binding */ EmojiData; },
/* harmony export */   "EmojiIndex": function() { return /* binding */ EmojiIndex; },
/* harmony export */   "EmojiView": function() { return /* binding */ EmojiView; },
/* harmony export */   "sanitize": function() { return /* binding */ sanitize; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var SHEET_COLUMNS = 57;
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/; // Skin tones

var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
/**
 * Emoji data structure:
 * {
 *    "compressed": false,
 *    "aliases": {
 *      collision: "boom"
 *      cooking: "fried_egg"
 *      envelope: "email"
 *      face_with_finger_covering_closed_lips: "shushing_face"
 *      ...
 *    },
 *    "categories": [ {
 *      id: "people",
 *      name: "Smileys & Emotion",
 *      emojis: [ "grinning", "grin", "joy", ... ]
 *    }, {
 *      id: "nature",
 *      name: "Animals & Nature",
 *      emojis: [ "monkey_face", "money", "gorilla", ... ]
 *    },
 *    ...
 *    ],
 *    "emojis": [
 *      smiley: {
 *        added_in: "6.0",
 *        emoticons: ["=)", "=-)"],
 *        has_img_apple: true,
 *        has_img_facebook: true,
 *        has_img_google: true,
 *        has_img_twitter: true,
 *        keywords: ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
 *        name: "Smiling Face with Open Mouth",
 *        non_qualified: undefined,
 *        search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)",
 *        sheet_x: 30,
 *        sheet_y: 27,
 *        short_names: ["smiley"],
 *        text: ":)",
 *        unified: "1F603",
 *      }, {
 *      +1: {    // emoji with skin_variations
 *          ..., // all the regular fields are present
 *          name: "Thumbs Up Sign",
 *          short_names: (2) ["+1", "thumbsup"],
 *          skin_variations: {
 *            1F3FB:             // each variation has additional set of fields:
 *              added_in: "8.0",
 *              has_img_apple: true,
 *              has_img_facebook: true,
 *              has_img_google: true,
 *              has_img_twitter: true,
 *              image: "1f44d-1f3fb.png",
 *              non_qualified: null,
 *              sheet_x: 14,
 *              sheet_y: 50,
 *              unified: "1F44D-1F3FB",
 *            1F3FB: {…},
 *            1F3FC: {…},
 *            1F3FD: {…},
 *            1F3FE: {…},
 *            1F3FF: {…}
 *            },
 *          ...
 *      },
 *      a: {  // emoji with non_qualified field set
 *        added_in: "6.0",
 *        emoticons: undefined,
 *        has_img_apple: true,
 *        ...
 *        non_qualified: "1F170",
 *        unified: "1F170-FE0F",
 *     },
 *     ...
 *   ]
 * }
 */

/**
 * Wraps raw jason emoji data, serves as data source for
 * emoji picker components.
 *
 * Usage:
 *
 *   import data from '../data/all.json'
 *   let index = new EmojiIndex(data)
 *
 */

var EmojiIndex = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param {object} data - Raw json data, see the structure above.
   * @param {object} options - additional options, as an object:
   * @param {Function} emojisToShowFilter - optional, function to filter out
   *   some emojis, function(emoji) { return true|false }
   *   where `emoji` is an raw emoji object, see data.emojis above.
   * @param {Array} include - optional, a list of category ids to include.
   * @param {Array} exclude - optional, a list of category ids to exclude.
   * @param {Array} custom - optional, a list custom emojis, each emoji is
   *   an object, see data.emojis above for examples.
   */
  function EmojiIndex(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        emojisToShowFilter = _ref.emojisToShowFilter,
        include = _ref.include,
        exclude = _ref.exclude,
        custom = _ref.custom,
        recent = _ref.recent,
        _ref$recentLength = _ref.recentLength,
        recentLength = _ref$recentLength === void 0 ? 20 : _ref$recentLength;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiIndex);

    this._data = (0,_data__WEBPACK_IMPORTED_MODULE_3__.uncompress)(data); // Callback to exclude specific emojis

    this._emojisFilter = emojisToShowFilter || null; // Categories to include / exclude

    this._include = include || null;
    this._exclude = exclude || null; // Custom emojis

    this._custom = custom || []; // Recent emojis
    // TODO: make parameter configurable

    this._recent = recent || _frequently__WEBPACK_IMPORTED_MODULE_4__["default"].get(recentLength);
    this._emojis = {};
    this._nativeEmojis = {};
    this._emoticons = {};
    this._categories = [];
    this._recentCategory = {
      id: 'recent',
      name: 'Recent',
      emojis: []
    };
    this._customCategory = {
      id: 'custom',
      name: 'Custom',
      emojis: []
    };
    this._searchIndex = {};
    this.buildIndex();
    Object.freeze(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;

      var allCategories = this._data.categories;

      if (this._include) {
        // Remove categories that are not in the include list.
        allCategories = allCategories.filter(function (item) {
          return _this._include.includes(item.id);
        }); // Sort categories according to the include list.

        allCategories = allCategories.sort(function (a, b) {
          var indexA = _this._include.indexOf(a.id);

          var indexB = _this._include.indexOf(b.id);

          if (indexA < indexB) {
            return -1;
          }

          if (indexA > indexB) {
            return 1;
          }

          return 0;
        });
      }

      allCategories.forEach(function (categoryData) {
        if (!_this.isCategoryNeeded(categoryData.id)) {
          return;
        }

        var category = {
          id: categoryData.id,
          name: categoryData.name,
          emojis: []
        };
        categoryData.emojis.forEach(function (emojiId) {
          var emoji = _this.addEmoji(emojiId);

          if (emoji) {
            category.emojis.push(emoji);
          }
        });

        if (category.emojis.length) {
          _this._categories.push(category);
        }
      });

      if (this.isCategoryNeeded('custom')) {
        if (this._custom.length > 0) {
          var _iterator = _createForOfIteratorHelper(this._custom),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var customEmoji = _step.value;
              this.addCustomEmoji(customEmoji);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (this._customCategory.emojis.length) {
          this._categories.push(this._customCategory);
        }
      }

      if (this.isCategoryNeeded('recent')) {
        if (this._recent.length) {
          this._recent.map(function (id) {
            var _iterator2 = _createForOfIteratorHelper(_this._customCategory.emojis),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _customEmoji = _step2.value;

                if (_customEmoji.id === id) {
                  _this._recentCategory.emojis.push(_customEmoji);

                  return;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (_this.hasEmoji(id)) {
              _this._recentCategory.emojis.push(_this.emoji(id));
            }

            return;
          });
        } // Add recent category to the top


        if (this._recentCategory.emojis.length) {
          this._categories.unshift(this._recentCategory);
        }
      }
    }
    /**
     * Find the emoji from the string
     */

  }, {
    key: "findEmoji",
    value: function findEmoji(emoji, skin) {
      // 1. Parse as :emoji_name:skin-tone-xx:
      var matches = emoji.match(COLONS_REGEX);

      if (matches) {
        emoji = matches[1];

        if (matches[2]) {
          skin = parseInt(matches[2], 10);
        }
      } // 2. Check if the specified emoji is an alias


      if (this._data.aliases.hasOwnProperty(emoji)) {
        emoji = this._data.aliases[emoji];
      } // 3. Check if we have the specified emoji


      if (this._emojis.hasOwnProperty(emoji)) {
        var emojiObject = this._emojis[emoji];

        if (skin) {
          return emojiObject.getSkin(skin);
        }

        return emojiObject;
      } // 4. Check if we have the specified native emoji


      if (this._nativeEmojis.hasOwnProperty(emoji)) {
        return this._nativeEmojis[emoji];
      }

      return null;
    }
  }, {
    key: "categories",
    value: function categories() {
      return this._categories;
    }
  }, {
    key: "emoji",
    value: function emoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }

      var emoji = this._emojis[emojiId];

      if (!emoji) {
        throw new Error('Can not find emoji by id: ' + emojiId);
      }

      return emoji;
    }
  }, {
    key: "firstEmoji",
    value: function firstEmoji() {
      var emoji = this._emojis[Object.keys(this._emojis)[0]];

      if (!emoji) {
        throw new Error('Can not get first emoji');
      }

      return emoji;
    }
  }, {
    key: "hasEmoji",
    value: function hasEmoji(emojiId) {
      if (this._data.aliases.hasOwnProperty(emojiId)) {
        emojiId = this._data.aliases[emojiId];
      }

      if (this._emojis[emojiId]) {
        return true;
      }

      return false;
    }
  }, {
    key: "nativeEmoji",
    value: function nativeEmoji(unicodeEmoji) {
      if (this._nativeEmojis.hasOwnProperty(unicodeEmoji)) {
        return this._nativeEmojis[unicodeEmoji];
      }

      return null;
    }
  }, {
    key: "search",
    value: function search(value, maxResults) {
      var _this2 = this;

      maxResults || (maxResults = 75);

      if (!value.length) {
        return null;
      }

      if (value == '-' || value == '-1') {
        return [this.emoji('-1')];
      }

      var values = value.toLowerCase().split(/[\s|,|\-|_]+/);
      var allResults = [];

      if (values.length > 2) {
        values = [values[0], values[1]];
      }

      allResults = values.map(function (value) {
        // Start searchin in the global list of emojis
        var emojis = _this2._emojis;
        var currentIndex = _this2._searchIndex;
        var length = 0;

        for (var charIndex = 0; charIndex < value.length; charIndex++) {
          var char = value[charIndex];
          length++;
          currentIndex[char] || (currentIndex[char] = {});
          currentIndex = currentIndex[char];

          if (!currentIndex.results) {
            (function () {
              var scores = {};
              currentIndex.results = [];
              currentIndex.emojis = {};

              for (var emojiId in emojis) {
                var emoji = emojis[emojiId]; // search is a comma-separated string with words, related
                // to the emoji, for example:
                // search: "smiley,smiling,face,joy,haha,:d,:),smile,funny,=),=-)",

                var search = emoji._data.search;
                var sub = value.substr(0, length);
                var subIndex = search.indexOf(sub);

                if (subIndex != -1) {
                  var score = subIndex + 1;
                  if (sub == emojiId) score = 0;
                  currentIndex.results.push(emoji);
                  currentIndex.emojis[emojiId] = emoji;
                  scores[emojiId] = score;
                }
              }

              currentIndex.results.sort(function (a, b) {
                var aScore = scores[a.id],
                    bScore = scores[b.id];
                return aScore - bScore;
              });
            })();
          } // continue search in the reduced set of emojis


          emojis = currentIndex.emojis;
        }

        return currentIndex.results; // The "filter" call removes undefined values from allResults
        // array, for example, if we have "test " (with trailing space),
        // we will get "[Array, undefined]" for allResults and after
        // the "filter" call it will turn into "[Array]"
      }).filter(function (a) {
        return a;
      });
      var results = null;

      if (allResults.length > 1) {
        results = _index__WEBPACK_IMPORTED_MODULE_2__.intersect.apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }

      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }

      return results;
    }
  }, {
    key: "addCustomEmoji",
    value: function addCustomEmoji(customEmoji) {
      var emojiData = Object.assign({}, customEmoji, {
        id: customEmoji.short_names[0],
        custom: true
      });

      if (!emojiData.search) {
        emojiData.search = (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildSearch)(emojiData);
      }

      var emoji = new EmojiData(emojiData);
      this._emojis[emoji.id] = emoji;

      this._customCategory.emojis.push(emoji);

      return emoji;
    }
  }, {
    key: "addEmoji",
    value: function addEmoji(emojiId) {
      var _this3 = this;

      // We expect the correct emoji id that is present in the emojis data.
      var data = this._data.emojis[emojiId];

      if (!this.isEmojiNeeded(data)) {
        return false;
      }

      var emoji = new EmojiData(data);
      this._emojis[emojiId] = emoji;

      if (emoji.native) {
        this._nativeEmojis[emoji.native] = emoji;
      }

      if (emoji._skins) {
        for (var idx in emoji._skins) {
          var skin = emoji._skins[idx];

          if (skin.native) {
            this._nativeEmojis[skin.native] = skin;
          }
        }
      }

      if (emoji.emoticons) {
        emoji.emoticons.forEach(function (emoticon) {
          if (_this3._emoticons[emoticon]) {
            return;
          }

          _this3._emoticons[emoticon] = emojiId;
        });
      }

      return emoji;
    }
    /**
     * Check if we need to include given category.
     *
     * @param {string} category_id - The category id.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isCategoryNeeded",
    value: function isCategoryNeeded(category_id) {
      var isIncluded = this._include && this._include.length ? this._include.indexOf(category_id) > -1 : true;
      var isExcluded = this._exclude && this._exclude.length ? this._exclude.indexOf(category_id) > -1 : false;

      if (!isIncluded || isExcluded) {
        return false;
      }

      return true;
    }
    /**
     * Check if we need to include given emoji.
     *
     * @param {object} emoji - The raw emoji object.
     * @return {boolean} - Whether to include the emoji.
     */

  }, {
    key: "isEmojiNeeded",
    value: function isEmojiNeeded(emoji) {
      if (this._emojisFilter) {
        return this._emojisFilter(emoji);
      }

      return true;
    }
  }]);

  return EmojiIndex;
}();
var EmojiData = /*#__PURE__*/function () {
  function EmojiData(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiData);

    this._data = Object.assign({}, data);
    this._skins = null;

    if (this._data.skin_variations) {
      this._skins = [];

      for (var skinIdx in SKINS) {
        var skinKey = SKINS[skinIdx];
        var variationData = this._data.skin_variations[skinKey];
        var skinData = Object.assign({}, data);

        for (var k in variationData) {
          skinData[k] = variationData[k];
        }

        delete skinData.skin_variations;
        skinData['skin_tone'] = parseInt(skinIdx) + 1;

        this._skins.push(new EmojiData(skinData));
      }
    }

    this._sanitized = sanitize(this._data);

    for (var key in this._sanitized) {
      this[key] = this._sanitized[key];
    }

    this.short_names = this._data.short_names;
    this.short_name = this._data.short_names[0];
    Object.freeze(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiData, [{
    key: "getSkin",
    value: function getSkin(skinIdx) {
      if (skinIdx && skinIdx != 'native' && this._skins) {
        return this._skins[skinIdx - 1];
      }

      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var multiply = 100 / SHEET_COLUMNS,
          x = Math.round(multiply * this._data.sheet_x * 100) / 100,
          y = Math.round(multiply * this._data.sheet_y * 100) / 100;
      return "".concat(x, "% ").concat(y, "%");
    }
  }, {
    key: "ariaLabel",
    value: function ariaLabel() {
      return [this.native].concat(this.short_names).filter(Boolean).join(', ');
    }
  }]);

  return EmojiData;
}();
var EmojiView = /*#__PURE__*/function () {
  /**
   * emoji - Emoji to display
   * set - string, emoji set name
   * native - boolean, whether to render native emoji
   * fallback - fallback function to render missing emoji, optional
   * emojiTooltip - wether we need to show the emoji tooltip, optional
   * emojiSize - emoji size in pixels, optional
   */
  function EmojiView(emoji, skin, set, native, fallback, emojiTooltip, emojiSize) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiView);

    this._emoji = emoji;
    this._native = native;
    this._skin = skin;
    this._set = set;
    this._fallback = fallback;
    this.canRender = this._canRender();
    this.cssClass = this._cssClass();
    this.cssStyle = this._cssStyle(emojiSize);
    this.content = this._content();
    this.title = emojiTooltip === true ? emoji.short_name : null;
    this.ariaLabel = emoji.ariaLabel();
    Object.freeze(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiView, [{
    key: "getEmoji",
    value: function getEmoji() {
      return this._emoji.getSkin(this._skin);
    }
  }, {
    key: "_canRender",
    value: function _canRender() {
      return this._isCustom() || this._isNative() || this._hasEmoji() || this._fallback;
    }
  }, {
    key: "_cssClass",
    value: function _cssClass() {
      return ['emoji-set-' + this._set, 'emoji-type-' + this._emojiType()];
    }
  }, {
    key: "_cssStyle",
    value: function _cssStyle(emojiSize) {
      var cssStyle = {};

      if (this._isCustom()) {
        cssStyle = {
          backgroundImage: 'url(' + this.getEmoji()._data.imageUrl + ')',
          backgroundSize: '100%',
          width: emojiSize + 'px',
          height: emojiSize + 'px'
        };
      } else if (this._hasEmoji() && !this._isNative()) {
        cssStyle = {
          backgroundPosition: this.getEmoji().getPosition()
        };
      }

      if (emojiSize) {
        if (this._isNative()) {
          // Set font-size for native emoji.
          cssStyle = Object.assign(cssStyle, {
            // font-size is used for native emoji which we need
            // to scale with 0.95 factor to have them look approximately
            // the same size as image-based emoji.
            fontSize: Math.round(emojiSize * 0.95 * 10) / 10 + 'px'
          });
        } else {
          // Set width/height for image emoji.
          cssStyle = Object.assign(cssStyle, {
            width: emojiSize + 'px',
            height: emojiSize + 'px'
          });
        }
      }

      return cssStyle;
    }
  }, {
    key: "_content",
    value: function _content() {
      if (this._isCustom()) {
        return '';
      }

      if (this._isNative()) {
        return this.getEmoji().native;
      }

      if (this._hasEmoji()) {
        return '';
      }

      return this._fallback ? this._fallback(this.getEmoji()) : null;
    }
  }, {
    key: "_isNative",
    value: function _isNative() {
      return this._native;
    }
  }, {
    key: "_isCustom",
    value: function _isCustom() {
      return this.getEmoji().custom;
    }
  }, {
    key: "_hasEmoji",
    value: function _hasEmoji() {
      if (!this.getEmoji()._data) {
        // Return false if we have no data.
        return false;
      }

      var hasImage = this.getEmoji()._data['has_img_' + this._set];

      if (hasImage === undefined) {
        // If there is no has_img_xxx in the data, we are working with
        // specific data file, like facebook.json, so we assume all
        // emojis are available (the :set setting for picker should
        // match the data file).
        return true;
      } // Otherwise, we are using all.json and can switch between different
      // sets - in this case the `has_img_{set_name}` is a boolean that
      // indicates if there is such image or not for a given set.


      return hasImage;
    }
  }, {
    key: "_emojiType",
    value: function _emojiType() {
      if (this._isCustom()) {
        return 'custom';
      }

      if (this._isNative()) {
        return 'native';
      }

      if (this._hasEmoji()) {
        return 'image';
      }

      return 'fallback';
    }
  }]);

  return EmojiView;
}();
function sanitize(emoji) {
  var name = emoji.name,
      short_names = emoji.short_names,
      skin_tone = emoji.skin_tone,
      skin_variations = emoji.skin_variations,
      emoticons = emoji.emoticons,
      unified = emoji.unified,
      custom = emoji.custom,
      imageUrl = emoji.imageUrl,
      id = emoji.id || short_names[0],
      colons = ":".concat(id, ":");

  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }

  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: (0,_index__WEBPACK_IMPORTED_MODULE_2__.unifiedToNative)(unified)
  };
}

/***/ }),

/***/ "./src/utils/frequently.js":
/*!*********************************!*\
  !*** ./src/utils/frequently.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'hankey'];
var frequently, initialized;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('frequently', frequently);
}

function get(maxNumber) {
  if (!initialized) init();

  if (!frequently) {
    defaults = {};
    var result = [];
    var defaultLength = Math.min(maxNumber, DEFAULTS.length);

    for (var i = 0; i < defaultLength; i++) {
      defaults[DEFAULTS[i]] = parseInt((defaultLength - i) / 4, 10) + 1;
      result.push(DEFAULTS[i]);
    }

    return result;
  }

  var quantity = maxNumber;
  var frequentlyKeys = [];

  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }

  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);
  var last = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepMerge": function() { return /* binding */ deepMerge; },
/* harmony export */   "intersect": function() { return /* binding */ intersect; },
/* harmony export */   "measureScrollbar": function() { return /* binding */ measureScrollbar; },
/* harmony export */   "unifiedToNative": function() { return /* binding */ unifiedToNative; },
/* harmony export */   "uniq": function() { return /* binding */ uniq; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./src/polyfills/stringFromCodePoint.js");



function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return "0x".concat(u);
  });
  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__["default"].apply(null, codePoints);
}

function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }

    return acc;
  }, []);
}

function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
} // https://github.com/sonicdoe/measure-scrollbar


function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}



/***/ }),

/***/ "./src/utils/picker.js":
/*!*****************************!*\
  !*** ./src/utils/picker.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickerView": function() { return /* binding */ PickerView; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var PickerView = /*#__PURE__*/function () {
  function PickerView(pickerComponent) {
    var _this$_categories;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PickerView);

    this._vm = pickerComponent;
    this._data = pickerComponent.data;
    this._perLine = pickerComponent.perLine;
    this._categories = [];

    (_this$_categories = this._categories).push.apply(_this$_categories, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._data.categories()));

    this._categories = this._categories.filter(function (category) {
      return category.emojis.length > 0;
    });
    this._categories[0].first = true;
    Object.freeze(this._categories);
    this.activeCategory = this._categories[0];
    this.searchEmojis = null; // Preview emoji, shown on mouse over or when we move
    // with arrow keys.

    this.previewEmoji = null; // Indexes are used to keep the position when moving
    // with arrows: current category and current emoji
    // inside the category.

    this.previewEmojiCategoryIdx = 0;
    this.previewEmojiIdx = -1;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PickerView, [{
    key: "onScroll",
    value: function onScroll() {
      var scrollElement = this._vm.$refs.scroll;
      var scrollTop = scrollElement.scrollTop;
      var activeCategory = this.filteredCategories[0];

      for (var i = 0, l = this.filteredCategories.length; i < l; i++) {
        var category = this.filteredCategories[i];

        var component = this._vm.getCategoryComponent(i); // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.


        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break;
        }

        activeCategory = category;
      }

      this.activeCategory = activeCategory;
    }
  }, {
    key: "allCategories",
    get: function get() {
      return this._categories;
    }
  }, {
    key: "filteredCategories",
    get: function get() {
      if (this.searchEmojis) {
        return [{
          id: 'search',
          name: 'Search',
          emojis: this.searchEmojis
        }];
      }

      return this._categories.filter(function (category) {
        var hasEmojis = category.emojis.length > 0;
        return hasEmojis;
      });
    }
  }, {
    key: "previewEmojiCategory",
    get: function get() {
      if (this.previewEmojiCategoryIdx >= 0) {
        return this.filteredCategories[this.previewEmojiCategoryIdx];
      }

      return null;
    }
  }, {
    key: "onAnchorClick",
    value: function onAnchorClick(category) {
      var _this = this;

      if (this.searchEmojis) {
        // No categories are shown when search is active.
        return;
      }

      var i = this.filteredCategories.indexOf(category);

      var component = this._vm.getCategoryComponent(i);

      var scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.$el.offsetTop;

          if (category.first) {
            top = 0;
          }

          _this._vm.$refs.scroll.scrollTop = top;
        }
      };

      if (this._vm.infiniteScroll) {
        scrollToComponent();
      } else {
        this.activeCategory = this.filteredCategories[i];
      }
    }
  }, {
    key: "onSearch",
    value: function onSearch(value) {
      var emojis = this._data.search(value, this.maxSearchResults);

      this.searchEmojis = emojis;
      this.previewEmojiCategoryIdx = 0;
      this.previewEmojiIdx = 0;
      this.updatePreviewEmoji();
    }
  }, {
    key: "onEmojiEnter",
    value: function onEmojiEnter(emoji) {
      this.previewEmoji = emoji;
      this.previewEmojiIdx = -1;
      this.previewEmojiCategoryIdx = -1;
    }
  }, {
    key: "onEmojiLeave",
    value: function onEmojiLeave(emoji) {
      this.previewEmoji = null;
    }
  }, {
    key: "onArrowLeft",
    value: function onArrowLeft() {
      // Moving left, decrease emoji index.
      if (this.previewEmojiIdx > 0) {
        this.previewEmojiIdx -= 1;
      } else {
        // If emoji index is zero, go to the previous category.
        this.previewEmojiCategoryIdx -= 1;

        if (this.previewEmojiCategoryIdx < 0) {
          // If we reached first category, keep it.
          this.previewEmojiCategoryIdx = 0;
        } else {
          // Update emoji index - we moved to the previous category,
          // get the last emoji in it.
          this.previewEmojiIdx = this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length - 1;
        }
      }

      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowRight",
    value: function onArrowRight() {
      if (this.previewEmojiIdx < this.emojisLength(this.previewEmojiCategoryIdx) - 1) {
        // Moving right within category, increase emoji index.
        this.previewEmojiIdx += 1;
      } else {
        // Go to the next category.
        this.previewEmojiCategoryIdx += 1;

        if (this.previewEmojiCategoryIdx >= this.filteredCategories.length) {
          // If we reached the last category - keep it.
          this.previewEmojiCategoryIdx = this.filteredCategories.length - 1;
        } else {
          // If we moved to the next category, update emoji index to the
          // first emoji in the new category.
          this.previewEmojiIdx = 0;
        }
      }

      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowDown",
    value: function onArrowDown() {
      // If we are out of the emoji control (index is -1), select the first
      // emoji in the first category by calling `onArrowRight`.
      if (this.previewEmojiIdx == -1) {
        return this.onArrowRight();
      }

      var categoryLength = this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length; // When moving down, we can move `_perLine` icons right to
      // jump to the same position in the next row.

      var diff = this._perLine; // TODO: previewCategory should match activeCategory
      // (so it would be both highlighted in UI and used
      // when we start moving with arrows after clicking
      // the category).
      // Note: probably we can alwasy take current row length
      // as a `diff` - it will fit both case of any row and
      // special case of the last row.
      // Note: it can be also easier to update indexes
      // directly here instead of calling onArrowRight.
      // Same is true for `onArrowUp`.
      // Unless if we are on the last row of the category and
      // there are less then `_perLine` emojis in it.
      // In this case we use the last row length as diff
      // so we go straight down, for example:
      //
      //   1 2 3 4 5 6
      //   7 8 9
      //   A B C D E F
      //
      // If we go down from `8`, we need to move 3 emojis right
      // to lend at `B` (and 3 is the length of the last row of
      // this category).
      // And if we used 6 instead (row length, `_perLine`), we would
      // lend up at `E`.

      if (this.previewEmojiIdx + diff > categoryLength) {
        // Calculate the last row length.
        diff = categoryLength % this._perLine;
      }

      for (var i = 0; i < diff; i++) {
        this.onArrowRight();
      }

      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowUp",
    value: function onArrowUp() {
      // Similar to `onArrowDown`, to move up we can move left
      // by `_perLine` number of emojis.
      var diff = this._perLine;

      if (this.previewEmojiIdx - diff < 0) {
        if (this.previewEmojiCategoryIdx > 0) {
          // Unless if we are on the first line of the category and
          // the last line in the previous category is shorter than
          // `_perLine`.
          // In this case we use the last row length as diff, so
          // we go straight up, for example:
          //
          //   1 2 3 4 5
          //   6 7 8
          //   9 A B C D
          //
          // If we go up from `A`, we need to move 3 emojis left to get
          // to `7` (and 3 is the length of the last row of the previous
          // category).
          var prevCategoryLastRowLength = this.filteredCategories[this.previewEmojiCategoryIdx - 1].emojis.length % this._perLine; // diff = this.previewEmojiIdx + prevCategoryLastRowLength

          diff = prevCategoryLastRowLength;
        } else {
          diff = 0;
        }
      }

      for (var i = 0; i < diff; i++) {
        this.onArrowLeft();
      }

      this.updatePreviewEmoji();
    }
  }, {
    key: "updatePreviewEmoji",
    value: function updatePreviewEmoji() {
      var _this2 = this;

      this.previewEmoji = this.filteredCategories[this.previewEmojiCategoryIdx].emojis[this.previewEmojiIdx];

      this._vm.$nextTick(function () {
        // Scroll the view if the `previewEmoji` goes out of the visible area.
        var scrollEl = _this2._vm.$refs.scroll; // Note: it would be more Vue-ish to mark all emojis with `ref`s
        // and then do something similar here to what we do in the
        // `getCategories` instead of using `querySelector` directly,
        // but I am not sure if having many refs would affect the performance
        // (it might, so I use `querySelector` for now).

        var emojiEl = scrollEl.querySelector('.emoji-mart-emoji-selected');
        var scrollHeight = scrollEl.offsetTop - scrollEl.offsetHeight;

        if (emojiEl && emojiEl.offsetTop + emojiEl.offsetHeight > scrollHeight + scrollEl.scrollTop) {
          scrollEl.scrollTop += emojiEl.offsetHeight;
        }

        if (emojiEl && emojiEl.offsetTop < scrollEl.scrollTop) {
          scrollEl.scrollTop -= emojiEl.offsetHeight;
        }
      });
    }
  }, {
    key: "emojisLength",
    value: function emojisLength(categoryIdx) {
      if (categoryIdx == -1) {
        return 0;
      }

      return this.filteredCategories[categoryIdx].emojis.length;
    }
  }]);

  return PickerView;
}();

/***/ }),

/***/ "./src/utils/shared-props.js":
/*!***********************************!*\
  !*** ./src/utils/shared-props.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiProps": function() { return /* binding */ EmojiProps; },
/* harmony export */   "PickerProps": function() { return /* binding */ PickerProps; }
/* harmony export */ });
var EmojiProps = {
  native: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  fallback: {
    type: Function
  },
  skin: {
    type: Number,
    default: 1
  },
  set: {
    type: String,
    default: 'apple'
  },
  emoji: {
    type: [String, Object],
    required: true
  },
  size: {
    type: Number,
    default: null
  },
  tag: {
    type: String,
    default: 'span'
  }
};
var PickerProps = {
  perLine: {
    type: Number,
    default: 9
  },
  maxSearchResults: {
    type: Number,
    default: 75
  },
  emojiSize: {
    type: Number,
    default: 24
  },
  title: {
    type: String,
    default: 'Emoji Mart™'
  },
  emoji: {
    type: String,
    default: 'department_store'
  },
  color: {
    type: String,
    default: '#ae65c5'
  },
  set: {
    type: String,
    default: 'apple'
  },
  skin: {
    type: Number,
    default: null
  },
  defaultSkin: {
    type: Number,
    default: 1
  },
  native: {
    type: Boolean,
    default: false
  },
  emojiTooltip: {
    type: Boolean,
    default: false
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  i18n: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  showPreview: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showCategories: {
    type: Boolean,
    default: true
  },
  showSkinTones: {
    type: Boolean,
    default: true
  },
  infiniteScroll: {
    type: Boolean,
    default: true
  },
  pickerStyles: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};


/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NAMESPACE = 'emoji-mart';
var _JSON = JSON;
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;

function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = _JSON.stringify(value);
    } catch (e) {}
  }
}

function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];
    } catch (e) {
      return;
    }

    if (value) {
      return JSON.parse(value);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
});

/***/ }),

/***/ "./src/vendor/raf-polyfill.js":
/*!************************************!*\
  !*** ./src/vendor/raf-polyfill.js ***!
  \************************************/
/***/ (function() {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
var isWindowAvailable = typeof window !== 'undefined';
isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();

/***/ }),

/***/ "./src/components/Emoji.vue":
/*!**********************************!*\
  !*** ./src/components/Emoji.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue?vue&type=template&id=534ad946& */ "./src/components/Emoji.vue?vue&type=template&id=534ad946&");
/* harmony import */ var _Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue?vue&type=script&lang=js& */ "./src/components/Emoji.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.render,
  _Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Emoji.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Picker.vue":
/*!***********************************!*\
  !*** ./src/components/Picker.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.vue?vue&type=template&id=d16e9084& */ "./src/components/Picker.vue?vue&type=template&id=d16e9084&");
/* harmony import */ var _Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker.vue?vue&type=script&lang=js& */ "./src/components/Picker.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.render,
  _Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/anchors.vue":
/*!************************************!*\
  !*** ./src/components/anchors.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue?vue&type=template&id=51188104& */ "./src/components/anchors.vue?vue&type=template&id=51188104&");
/* harmony import */ var _anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchors.vue?vue&type=script&lang=js& */ "./src/components/anchors.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.render,
  _anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/anchors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/category.vue":
/*!*************************************!*\
  !*** ./src/components/category.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=376cda0e& */ "./src/components/category.vue?vue&type=template&id=376cda0e&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./src/components/category.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/preview.vue":
/*!************************************!*\
  !*** ./src/components/preview.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=35056c30& */ "./src/components/preview.vue?vue&type=template&id=35056c30&");
/* harmony import */ var _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js& */ "./src/components/preview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.render,
  _preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/search.vue":
/*!***********************************!*\
  !*** ./src/components/search.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4ad41bb8& */ "./src/components/search.vue?vue&type=template&id=4ad41bb8&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./src/components/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.render,
  _search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/skins.vue":
/*!**********************************!*\
  !*** ./src/components/skins.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins.vue?vue&type=template&id=1c614894& */ "./src/components/skins.vue?vue&type=template&id=1c614894&");
/* harmony import */ var _skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue?vue&type=script&lang=js& */ "./src/components/skins.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.render,
  _skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/skins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emoji.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anchors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/category.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/preview.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/search.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/search.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/skins.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/skins.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./skins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=template&id=534ad946&":
/*!*****************************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=template&id=534ad946& ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emoji.vue?vue&type=template&id=534ad946& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946&");


/***/ }),

/***/ "./src/components/Picker.vue?vue&type=template&id=d16e9084&":
/*!******************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=template&id=d16e9084& ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picker.vue?vue&type=template&id=d16e9084& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084&");


/***/ }),

/***/ "./src/components/anchors.vue?vue&type=template&id=51188104&":
/*!*******************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=template&id=51188104& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anchors.vue?vue&type=template&id=51188104& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104&");


/***/ }),

/***/ "./src/components/category.vue?vue&type=template&id=376cda0e&":
/*!********************************************************************!*\
  !*** ./src/components/category.vue?vue&type=template&id=376cda0e& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=template&id=376cda0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e&");


/***/ }),

/***/ "./src/components/preview.vue?vue&type=template&id=35056c30&":
/*!*******************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=template&id=35056c30& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=template&id=35056c30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30&");


/***/ }),

/***/ "./src/components/search.vue?vue&type=template&id=4ad41bb8&":
/*!******************************************************************!*\
  !*** ./src/components/search.vue?vue&type=template&id=4ad41bb8& ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=template&id=4ad41bb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8&");


/***/ }),

/***/ "./src/components/skins.vue?vue&type=template&id=1c614894&":
/*!*****************************************************************!*\
  !*** ./src/components/skins.vue?vue&type=template&id=1c614894& ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./skins.vue?vue&type=template&id=1c614894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.view.canRender
    ? _c(
        _vm.tag,
        {
          tag: "component",
          staticClass: "emoji-mart-emoji",
          attrs: {
            title: _vm.view.title,
            "aria-label": _vm.view.ariaLabel,
            "data-title": _vm.title,
          },
          on: {
            mouseenter: _vm.onMouseEnter,
            mouseleave: _vm.onMouseLeave,
            click: _vm.onClick,
          },
        },
        [_c("img", { attrs: { src: this.imageUrl, width: "40" } })]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "emoji-mart emoji-mart-static", style: _vm.customStyles },
    [
      _vm.showCategories
        ? _c(
            "div",
            { staticClass: "emoji-mart-bar emoji-mart-bar-anchors" },
            [
              _c("anchors", {
                attrs: {
                  data: _vm.data,
                  i18n: _vm.mergedI18n,
                  color: _vm.color,
                  categories: _vm.view.allCategories,
                  "active-category": _vm.view.activeCategory,
                },
                on: { click: _vm.onAnchorClick },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t(
        "searchTemplate",
        function () {
          return [
            _vm.showSearch
              ? _c("search", {
                  ref: "search",
                  attrs: {
                    data: _vm.data,
                    i18n: _vm.mergedI18n,
                    "auto-focus": _vm.autoFocus,
                    "on-search": _vm.onSearch,
                  },
                  on: {
                    search: _vm.onSearch,
                    arrowLeft: _vm.onArrowLeft,
                    arrowRight: _vm.onArrowRight,
                    arrowDown: _vm.onArrowDown,
                    arrowUp: _vm.onArrowUp,
                    enter: _vm.onEnter,
                  },
                })
              : _vm._e(),
          ]
        },
        {
          data: _vm.data,
          i18n: _vm.i18n,
          autoFocus: _vm.autoFocus,
          onSearch: _vm.onSearch,
        }
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "scroll",
          staticClass: "emoji-mart-scroll",
          attrs: { role: "tabpanel" },
          on: { scroll: _vm.onScroll },
        },
        [
          _c(
            "div",
            {
              ref: "scrollContent",
              attrs: {
                id: "emoji-mart-list",
                role: "listbox",
                "aria-expanded": "true",
              },
            },
            _vm._l(_vm.view.filteredCategories, function (category, idx) {
              return _c("category", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      _vm.infiniteScroll || category == _vm.view.activeCategory,
                    expression:
                      "infiniteScroll || category == view.activeCategory",
                  },
                ],
                key: category.id,
                ref: "categories_" + idx,
                refInFor: true,
                attrs: {
                  data: _vm.data,
                  i18n: _vm.mergedI18n,
                  id: category.id,
                  name: category.name,
                  emojis: category.emojis,
                  "emoji-props": _vm.emojiProps,
                },
              })
            }),
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm._t(
        "previewTemplate",
        function () {
          return [
            _vm.showPreview
              ? _c(
                  "div",
                  { staticClass: "emoji-mart-bar emoji-mart-bar-preview" },
                  [
                    _c("preview", {
                      attrs: {
                        data: _vm.data,
                        title: _vm.title,
                        emoji: _vm.view.previewEmoji,
                        "idle-emoji": _vm.idleEmoji,
                        "show-skin-tones": _vm.showSkinTones,
                        "emoji-props": _vm.emojiProps,
                        "skin-props": _vm.skinProps,
                        "on-skin-change": _vm.onSkinChange,
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
          ]
        },
        {
          data: _vm.data,
          title: _vm.title,
          emoji: _vm.view.previewEmoji,
          idleEmoji: _vm.idleEmoji,
          showSkinTones: _vm.showSkinTones,
          emojiProps: _vm.emojiProps,
          skinProps: _vm.skinProps,
          onSkinChange: _vm.onSkinChange,
        }
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart-anchors", attrs: { role: "tablist" } },
    _vm._l(_vm.categories, function (category) {
      return _c(
        "button",
        {
          key: category.id,
          class: {
            "emoji-mart-anchor": true,
            "emoji-mart-anchor-selected": category.id == _vm.activeCategory.id,
          },
          style: {
            color: category.id == _vm.activeCategory.id ? _vm.color : "",
          },
          attrs: {
            role: "tab",
            "aria-label": category.name,
            "aria-selected": category.id == _vm.activeCategory.id,
            "data-title": _vm.i18n.categories[category.id],
          },
          on: {
            click: function ($event) {
              return _vm.$emit("click", category)
            },
          },
        },
        [
          _c("div", {
            attrs: { "aria-hidden": "true" },
            domProps: { innerHTML: _vm._s(_vm.svgs[category.id]) },
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "emoji-mart-anchor-bar",
            style: { backgroundColor: _vm.color },
            attrs: { "aria-hidden": "true" },
          }),
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isVisible && (_vm.isSearch || _vm.hasResults)
    ? _c(
        "section",
        {
          class: {
            "emoji-mart-category": true,
            "emoji-mart-no-results": !_vm.hasResults,
          },
          attrs: { "aria-label": _vm.i18n.categories[_vm.id] },
        },
        [
          _c("div", { staticClass: "emoji-mart-category-label" }, [
            _c("h3", { staticClass: "emoji-mart-category-label" }, [
              _vm._v(_vm._s(_vm.i18n.categories[_vm.id])),
            ]),
          ]),
          _vm._v(" "),
          _vm._l(_vm.emojiObjects, function (ref) {
            var emojiObject = ref.emojiObject
            var emojiView = ref.emojiView
            return [
              emojiView.canRender
                ? _c(
                    "button",
                    {
                      key: emojiObject.id,
                      staticClass: "emoji-mart-emoji",
                      attrs: {
                        "aria-label": emojiView.ariaLabel,
                        role: "option",
                        "aria-selected": "false",
                        "aria-posinset": "1",
                        "aria-setsize": "1812",
                        type: "button",
                        "data-title": emojiObject.short_name,
                        title: emojiView.title,
                      },
                      on: {
                        mouseenter: function ($event) {
                          _vm.emojiProps.onEnter(emojiView.getEmoji())
                        },
                        mouseleave: function ($event) {
                          _vm.emojiProps.onLeave(emojiView.getEmoji())
                        },
                        click: function ($event) {
                          _vm.emojiProps.onClick(emojiView.getEmoji())
                        },
                      },
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: _vm.imageUrl(emojiView.content),
                          width: "27",
                          height: "27",
                        },
                      }),
                    ]
                  )
                : _vm._e(),
            ]
          }),
          _vm._v(" "),
          !_vm.hasResults
            ? _c(
                "div",
                [
                  _c("emoji", {
                    attrs: {
                      data: _vm.data,
                      emoji: "sleuth_or_spy",
                      native: _vm.emojiProps.native,
                      skin: _vm.emojiProps.skin,
                      set: _vm.emojiProps.set,
                    },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "emoji-mart-no-results-label" }, [
                    _vm._v(_vm._s(_vm.i18n.notfound)),
                  ]),
                ],
                1
              )
            : _vm._e(),
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "emoji-mart-preview" },
    [
      _vm.emoji
        ? [
            _c(
              "div",
              { staticClass: "emoji-mart-preview-emoji" },
              [
                _c("emoji", {
                  attrs: {
                    data: _vm.data,
                    emoji: _vm.emoji,
                    native: _vm.emojiProps.native,
                    skin: _vm.emojiProps.skin,
                    set: _vm.emojiProps.set,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "emoji-mart-preview-data" }, [
              _c("div", { staticClass: "emoji-mart-preview-name" }, [
                _vm._v(_vm._s(_vm.emoji.name)),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "emoji-mart-preview-shortnames" },
                _vm._l(_vm.emojiShortNames, function (shortName) {
                  return _c(
                    "span",
                    {
                      key: shortName,
                      staticClass: "emoji-mart-preview-shortname",
                    },
                    [_vm._v(":" + _vm._s(shortName) + ":")]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "emoji-mart-preview-emoticons" },
                _vm._l(_vm.emojiEmoticons, function (emoticon) {
                  return _c(
                    "span",
                    {
                      key: emoticon,
                      staticClass: "emoji-mart-preview-emoticon",
                    },
                    [_vm._v(_vm._s(emoticon))]
                  )
                }),
                0
              ),
            ]),
          ]
        : [
            _c(
              "div",
              { staticClass: "emoji-mart-preview-emoji" },
              [
                _c("emoji", {
                  attrs: {
                    data: _vm.data,
                    emoji: _vm.idleEmoji,
                    native: _vm.emojiProps.native,
                    skin: _vm.emojiProps.skin,
                    set: _vm.emojiProps.set,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "emoji-mart-preview-data" }, [
              _c("span", { staticClass: "emoji-mart-title-label" }, [
                _vm._v(_vm._s(_vm.title)),
              ]),
            ]),
            _vm._v(" "),
            _vm.showSkinTones
              ? _c(
                  "div",
                  { staticClass: "emoji-mart-preview-skins" },
                  [
                    _c("skins", {
                      attrs: { skin: _vm.skinProps.skin },
                      on: {
                        change: function ($event) {
                          return _vm.onSkinChange($event)
                        },
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
          ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "emoji-mart-search" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.value,
          expression: "value",
        },
      ],
      attrs: {
        type: "text",
        placeholder: _vm.i18n.search,
        role: "textbox",
        "aria-autocomplete": "list",
        "aria-owns": "emoji-mart-list",
        "aria-label": "Search for an emoji",
        "aria-describedby": "emoji-mart-search-description",
      },
      domProps: { value: _vm.value },
      on: {
        keydown: [
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "left", 37, $event.key, [
                "Left",
                "ArrowLeft",
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 0) {
              return null
            }
            return function ($event) {
              return _vm.$emit("arrowLeft", $event)
            }.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "right", 39, $event.key, [
                "Right",
                "ArrowRight",
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 2) {
              return null
            }
            return function () {
              return _vm.$emit("arrowRight")
            }.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown",
              ])
            ) {
              return null
            }
            return function () {
              return _vm.$emit("arrowDown")
            }.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            return function ($event) {
              return _vm.$emit("arrowUp", $event)
            }.apply(null, arguments)
          },
          function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return function () {
              return _vm.$emit("enter")
            }.apply(null, arguments)
          },
        ],
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "hidden",
        attrs: { id: "emoji-picker-search-description" },
      },
      [
        _vm._v(
          "Use the left, right, up and down arrow keys to navigate the emoji search\n    results."
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        "emoji-mart-skin-swatches": true,
        "emoji-mart-skin-swatches-opened": _vm.opened,
      },
    },
    _vm._l(6, function (skinTone) {
      return _c(
        "span",
        {
          key: skinTone,
          class: {
            "emoji-mart-skin-swatch": true,
            "emoji-mart-skin-swatch-selected": _vm.skin == skinTone,
          },
        },
        [
          _c("span", {
            class: "emoji-mart-skin emoji-mart-skin-tone-" + skinTone,
            on: {
              click: function ($event) {
                return _vm.onClick(skinTone)
              },
            },
          }),
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anchors": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Anchors; },
/* harmony export */   "Category": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Category; },
/* harmony export */   "Emoji": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Emoji; },
/* harmony export */   "EmojiData": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiData; },
/* harmony export */   "EmojiIndex": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiIndex; },
/* harmony export */   "EmojiView": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiView; },
/* harmony export */   "Picker": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Picker; },
/* harmony export */   "Preview": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Preview; },
/* harmony export */   "Search": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Search; },
/* harmony export */   "Skins": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Skins; },
/* harmony export */   "frequently": function() { return /* reexport safe */ _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "sanitize": function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.sanitize; },
/* harmony export */   "store": function() { return /* reexport safe */ _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "uncompress": function() { return /* reexport safe */ _utils_data__WEBPACK_IMPORTED_MODULE_1__.uncompress; }
/* harmony export */ });
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emoji-data */ "./src/utils/emoji-data.js");






}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQVVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvRW1vamkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9wb2x5ZmlsbHMvc3RyaW5nRnJvbUNvZGVQb2ludC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvc3Zncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZGF0YS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZW1vamktZGF0YS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvZnJlcXVlbnRseS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3BpY2tlci5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvc2hhcmVkLXByb3BzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdmVuZG9yL3JhZi1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlP2FkODQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT80OTcwIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2JiOTYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzNjN2EiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/MGM1ZiIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzEwNWEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzBjMGUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlPzliOWQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT9lZGE1Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlPzRlNTciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzYwMTIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/MDJiNSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzBmZDgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzE2YTEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlPzZhMTQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT84ZjZjIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlP2RjZWYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzc0ZDUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/YjU0YSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzc3ZGQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzU2OWIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCI8dGVtcGxhdGU+XG4gIDxjb21wb25lbnRcbiAgICA6aXM9XCJ0YWdcIlxuICAgIHYtaWY9XCJ2aWV3LmNhblJlbmRlclwiXG4gICAgOnRpdGxlPVwidmlldy50aXRsZVwiXG4gICAgOmFyaWEtbGFiZWw9XCJ2aWV3LmFyaWFMYWJlbFwiXG4gICAgOmRhdGEtdGl0bGU9XCJ0aXRsZVwiXG4gICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICBAbW91c2VlbnRlcj1cIm9uTW91c2VFbnRlclwiXG4gICAgQG1vdXNlbGVhdmU9XCJvbk1vdXNlTGVhdmVcIlxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxuICA+XG4gICAgPGltZyA6c3JjPVwidGhpcy5pbWFnZVVybFwiIHdpZHRoPVwiNDBcIiAvPlxuICA8L2NvbXBvbmVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBFbW9qaVByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIC4uLkVtb2ppUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB2aWV3KCkge1xuICAgICAgcmV0dXJuIG5ldyBFbW9qaVZpZXcoXG4gICAgICAgIHRoaXMuZW1vamlPYmplY3QsXG4gICAgICAgIHRoaXMuc2tpbixcbiAgICAgICAgdGhpcy5zZXQsXG4gICAgICAgIHRoaXMubmF0aXZlLFxuICAgICAgICB0aGlzLmZhbGxiYWNrLFxuICAgICAgICB0aGlzLnRvb2x0aXAsXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgIClcbiAgICB9LFxuICAgIGltYWdlVXJsKCkge1xuICAgICAgcmV0dXJuIGBodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9lbW9qaS1kYXRhc291cmNlLWFwcGxlLzcuMC4yL2ltZy9hcHBsZS82NC8ke3RoaXMuZW1vamkudW5pZmllZH0ucG5nYFxuICAgIH0sXG4gICAgc2FuaXRpemVkRGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppT2JqZWN0Ll9zYW5pdGl6ZWRcbiAgICB9LFxuICAgIHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcCA/IHRoaXMuZW1vamlPYmplY3Quc2hvcnRfbmFtZSA6IG51bGxcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0KCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmVtb2ppID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmluZEVtb2ppKHRoaXMuZW1vamkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5lbW9qaVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB0aGlzLmVtb2ppT2JqZWN0KVxuICAgIH0sXG4gICAgb25Nb3VzZUVudGVyKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbW91c2VlbnRlcicsIHRoaXMuZW1vamlPYmplY3QpXG4gICAgfSxcbiAgICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdtb3VzZWxlYXZlJywgdGhpcy5lbW9qaU9iamVjdClcbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uIGNsYXNzPVwiZW1vamktbWFydCBlbW9qaS1tYXJ0LXN0YXRpY1wiIDpzdHlsZT1cImN1c3RvbVN0eWxlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgdi1pZj1cInNob3dDYXRlZ29yaWVzXCI+XG4gICAgICA8YW5jaG9yc1xuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxuICAgICAgICA6Y29sb3I9XCJjb2xvclwiXG4gICAgICAgIDpjYXRlZ29yaWVzPVwidmlldy5hbGxDYXRlZ29yaWVzXCJcbiAgICAgICAgOmFjdGl2ZS1jYXRlZ29yeT1cInZpZXcuYWN0aXZlQ2F0ZWdvcnlcIlxuICAgICAgICBAY2xpY2s9XCJvbkFuY2hvckNsaWNrXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdFxuICAgICAgbmFtZT1cInNlYXJjaFRlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgOm9uLXNlYXJjaD1cIm9uU2VhcmNoXCJcbiAgICA+XG4gICAgICA8c2VhcmNoXG4gICAgICAgIHYtaWY9XCJzaG93U2VhcmNoXCJcbiAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcbiAgICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxuICAgICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAc2VhcmNoPVwib25TZWFyY2hcIlxuICAgICAgICBAYXJyb3dMZWZ0PVwib25BcnJvd0xlZnRcIlxuICAgICAgICBAYXJyb3dSaWdodD1cIm9uQXJyb3dSaWdodFwiXG4gICAgICAgIEBhcnJvd0Rvd249XCJvbkFycm93RG93blwiXG4gICAgICAgIEBhcnJvd1VwPVwib25BcnJvd1VwXCJcbiAgICAgICAgQGVudGVyPVwib25FbnRlclwiXG4gICAgICAvPlxuICAgIDwvc2xvdD5cblxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICBjbGFzcz1cImVtb2ppLW1hcnQtc2Nyb2xsXCJcbiAgICAgIHJlZj1cInNjcm9sbFwiXG4gICAgICBAc2Nyb2xsPVwib25TY3JvbGxcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJlbW9qaS1tYXJ0LWxpc3RcIlxuICAgICAgICByZWY9XCJzY3JvbGxDb250ZW50XCJcbiAgICAgICAgcm9sZT1cImxpc3Rib3hcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxjYXRlZ29yeVxuICAgICAgICAgIHYtZm9yPVwiKGNhdGVnb3J5LCBpZHgpIGluIHZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzXCJcbiAgICAgICAgICB2LXNob3c9XCJpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSB2aWV3LmFjdGl2ZUNhdGVnb3J5XCJcbiAgICAgICAgICA6cmVmPVwiJ2NhdGVnb3JpZXNfJyArIGlkeFwiXG4gICAgICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDppMThuPVwibWVyZ2VkSTE4blwiXG4gICAgICAgICAgOmlkPVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgIDpuYW1lPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICAgICAgOmVtb2ppcz1cImNhdGVnb3J5LmVtb2ppc1wiXG4gICAgICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90XG4gICAgICBuYW1lPVwicHJldmlld1RlbXBsYXRlXCJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICA6dGl0bGU9XCJ0aXRsZVwiXG4gICAgICA6ZW1vamk9XCJ2aWV3LnByZXZpZXdFbW9qaVwiXG4gICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICA6c2hvdy1za2luLXRvbmVzPVwic2hvd1NraW5Ub25lc1wiXG4gICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcbiAgICAgIDpvbi1za2luLWNoYW5nZT1cIm9uU2tpbkNoYW5nZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB2LWlmPVwic2hvd1ByZXZpZXdcIj5cbiAgICAgICAgPHByZXZpZXdcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICAgIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICA6ZW1vamk9XCJ2aWV3LnByZXZpZXdFbW9qaVwiXG4gICAgICAgICAgOmlkbGUtZW1vamk9XCJpZGxlRW1vamlcIlxuICAgICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcbiAgICAgICAgICA6ZW1vamktcHJvcHM9XCJlbW9qaVByb3BzXCJcbiAgICAgICAgICA6c2tpbi1wcm9wcz1cInNraW5Qcm9wc1wiXG4gICAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2xvdD5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAnLi4vdmVuZG9yL3JhZi1wb2x5ZmlsbCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi91dGlscy9zdG9yZSdcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4uL3V0aWxzL2ZyZXF1ZW50bHknXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFBpY2tlclByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xuaW1wb3J0IHsgUGlja2VyVmlldyB9IGZyb20gJy4uL3V0aWxzL3BpY2tlcidcbmltcG9ydCBBbmNob3JzIGZyb20gJy4vYW5jaG9ycy52dWUnXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeS52dWUnXG5pbXBvcnQgUHJldmlldyBmcm9tICcuL3ByZXZpZXcudnVlJ1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaC52dWUnXG5cbmNvbnN0IEkxOE4gPSB7XG4gIHNlYXJjaDogJ1NlYXJjaCcsXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXG4gICAgc21pbGV5czogJ1NtaWxleXMgJiBFbW90aW9uJyxcbiAgICBwZW9wbGU6ICdQZW9wbGUgJiBCb2R5JyxcbiAgICBuYXR1cmU6ICdBbmltYWxzICYgTmF0dXJlJyxcbiAgICBmb29kczogJ0Zvb2QgJiBEcmluaycsXG4gICAgYWN0aXZpdHk6ICdBY3Rpdml0eScsXG4gICAgcGxhY2VzOiAnVHJhdmVsICYgUGxhY2VzJyxcbiAgICBvYmplY3RzOiAnT2JqZWN0cycsXG4gICAgc3ltYm9sczogJ1N5bWJvbHMnLFxuICAgIGZsYWdzOiAnRmxhZ3MnLFxuICAgIGN1c3RvbTogJ0N1c3RvbScsXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICAuLi5QaWNrZXJQcm9wcyxcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVTa2luOiB0aGlzLnNraW4gfHwgc3RvcmUuZ2V0KCdza2luJykgfHwgdGhpcy5kZWZhdWx0U2tpbixcbiAgICAgIHZpZXc6IG5ldyBQaWNrZXJWaWV3KHRoaXMpLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjdXN0b21TdHlsZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogdGhpcy5jYWxjdWxhdGVXaWR0aCArICdweCcsXG4gICAgICAgIC4uLnRoaXMucGlja2VyU3R5bGVzLFxuICAgICAgfVxuICAgIH0sXG4gICAgZW1vamlQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hdGl2ZTogdGhpcy5uYXRpdmUsXG4gICAgICAgIHNraW46IHRoaXMuYWN0aXZlU2tpbixcbiAgICAgICAgc2V0OiB0aGlzLnNldCxcbiAgICAgICAgZW1vamlUb29sdGlwOiB0aGlzLmVtb2ppVG9vbHRpcCxcbiAgICAgICAgZW1vamlTaXplOiB0aGlzLmVtb2ppU2l6ZSxcbiAgICAgICAgc2VsZWN0ZWRFbW9qaTogdGhpcy52aWV3LnByZXZpZXdFbW9qaSxcbiAgICAgICAgc2VsZWN0ZWRFbW9qaUNhdGVnb3J5OiB0aGlzLnZpZXcucHJldmlld0Vtb2ppQ2F0ZWdvcnksXG4gICAgICAgIG9uRW50ZXI6IHRoaXMub25FbW9qaUVudGVyLmJpbmQodGhpcyksXG4gICAgICAgIG9uTGVhdmU6IHRoaXMub25FbW9qaUxlYXZlLmJpbmQodGhpcyksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25FbW9qaUNsaWNrLmJpbmQodGhpcyksXG4gICAgICB9XG4gICAgfSxcbiAgICBza2luUHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBza2luOiB0aGlzLmFjdGl2ZVNraW4sXG4gICAgICB9XG4gICAgfSxcbiAgICBjYWxjdWxhdGVXaWR0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBlckxpbmUgKiAodGhpcy5lbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyKClcbiAgICB9LFxuICAgIC8vIGVtb2ppc1BlclJvdygpIHtcbiAgICAvLyAgIGNvbnN0IGxpc3RFbCA9IHRoaXMuJHJlZnMuc2Nyb2xsQ29udGVudFxuICAgIC8vICAgY29uc3QgZW1vamlFbCA9IGxpc3RFbC5xdWVyeVNlbGVjdG9yKCcuZW1vamktbWFydC1lbW9qaScpXG4gICAgLy8gICByZXR1cm4gTWF0aC5mbG9vcihsaXN0RWwub2Zmc2V0V2lkdGggLyBlbW9qaUVsLm9mZnNldFdpZHRoKVxuICAgIC8vIH0sXG4gICAgZmlsdGVyZWRDYXRlZ29yaWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlldy5maWx0ZXJlZENhdGVnb3JpZXNcbiAgICB9LFxuICAgIG1lcmdlZEkxOG4oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShkZWVwTWVyZ2UoSTE4TiwgdGhpcy5pMThuKSlcbiAgICB9LFxuICAgIGlkbGVFbW9qaSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZW1vamkodGhpcy5lbW9qaSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnRGVmYXVsdCBwcmV2aWV3IGVtb2ppIGAnICtcbiAgICAgICAgICAgIHRoaXMuZW1vamkgK1xuICAgICAgICAgICAgJ2AgaXMgbm90IGF2YWlsYWJsZSwgY2hlY2sgdGhlIFBpY2tlciBgZW1vamlgIHByb3BlcnR5JyxcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlyc3RFbW9qaSgpXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU2Nyb2xsKCkge1xuICAgICAgaWYgKHRoaXMuaW5maW5pdGVTY3JvbGwgJiYgIXRoaXMud2FpdGluZ0ZvclBhaW50KSB7XG4gICAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gdHJ1ZVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGxQYWludC5iaW5kKHRoaXMpKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TY3JvbGxQYWludCgpIHtcbiAgICAgIHRoaXMud2FpdGluZ0ZvclBhaW50ID0gZmFsc2VcbiAgICAgIHRoaXMudmlldy5vblNjcm9sbCgpXG4gICAgfSxcbiAgICBvbkFuY2hvckNsaWNrKGNhdGVnb3J5KSB7XG4gICAgICB0aGlzLnZpZXcub25BbmNob3JDbGljayhjYXRlZ29yeSlcbiAgICB9LFxuICAgIG9uU2VhcmNoKHZhbHVlKSB7XG4gICAgICB0aGlzLnZpZXcub25TZWFyY2godmFsdWUpXG4gICAgfSxcbiAgICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcbiAgICAgIHRoaXMudmlldy5vbkVtb2ppRW50ZXIoZW1vamkpXG4gICAgfSxcbiAgICBvbkVtb2ppTGVhdmUoZW1vamkpIHtcbiAgICAgIHRoaXMudmlldy5vbkVtb2ppTGVhdmUoZW1vamkpXG4gICAgfSxcbiAgICBvbkFycm93TGVmdCgkZXZlbnQpIHtcbiAgICAgIGNvbnN0IG9sZElkeCA9IHRoaXMudmlldy5wcmV2aWV3RW1vamlJZHhcbiAgICAgIHRoaXMudmlldy5vbkFycm93TGVmdCgpXG4gICAgICBpZiAoJGV2ZW50ICYmIHRoaXMudmlldy5wcmV2aWV3RW1vamlJZHggIT09IG9sZElkeCkge1xuICAgICAgICAvLyBQcmV2ZW50IGN1cnNvciBtb3ZlbWVudCBpbnNpZGUgdGhlIGlucHV0XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkFycm93UmlnaHQoKSB7XG4gICAgICB0aGlzLnZpZXcub25BcnJvd1JpZ2h0KClcbiAgICB9LFxuICAgIG9uQXJyb3dEb3duKCkge1xuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dEb3duKClcbiAgICB9LFxuICAgIG9uQXJyb3dVcCgkZXZlbnQpIHtcbiAgICAgIHRoaXMudmlldy5vbkFycm93VXAoKVxuICAgICAgLy8gUHJldmVudCBjdXJzb3IgbW92ZW1lbnQgaW5zaWRlIHRoZSBpbnB1dFxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9LFxuICAgIG9uRW50ZXIoZW1vamkpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHRoaXMudmlldy5wcmV2aWV3RW1vamkpXG4gICAgICBmcmVxdWVudGx5LmFkZCh0aGlzLnZpZXcucHJldmlld0Vtb2ppKVxuICAgIH0sXG4gICAgb25FbW9qaUNsaWNrKGVtb2ppKSB7XG4gICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBlbW9qaSlcbiAgICAgIGZyZXF1ZW50bHkuYWRkKGVtb2ppKVxuICAgIH0sXG4gICAgb25Ta2luQ2hhbmdlKHNraW4pIHtcbiAgICAgIHRoaXMuYWN0aXZlU2tpbiA9IHNraW5cbiAgICAgIHN0b3JlLnVwZGF0ZSh7IHNraW4gfSlcblxuICAgICAgdGhpcy4kZW1pdCgnc2tpbi1jaGFuZ2UnLCBza2luKVxuICAgIH0sXG4gICAgZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaW5kZXgpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLiRyZWZzWydjYXRlZ29yaWVzXycgKyBpbmRleF1cbiAgICAgIGlmIChjb21wb25lbnQgJiYgJzAnIGluIGNvbXBvbmVudCkge1xuICAgICAgICAvLyBWdWUgMiBoYXMgJHJlZnMgdW5kZXIgdi1mb3IgYXMgYW4gYXJyYXkuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRbJzAnXVxuICAgICAgfVxuICAgICAgLy8gVnVlIDMgZG9lcyBub3Qgc3VwcG9ydCAkcmVmcyBhcyBhcnJheS5cbiAgICAgIHJldHVybiBjb21wb25lbnRcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQW5jaG9ycyxcbiAgICBDYXRlZ29yeSxcbiAgICBQcmV2aWV3LFxuICAgIFNlYXJjaCxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJvbGU9XCJ0YWJsaXN0XCIgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvcnNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIlxuICAgICAgcm9sZT1cInRhYlwiXG4gICAgICA6YXJpYS1sYWJlbD1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZFwiXG4gICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnZW1vamktbWFydC1hbmNob3InOiB0cnVlLFxuICAgICAgICAnZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWQnOiBjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZCxcbiAgICAgIH1cIlxuICAgICAgOnN0eWxlPVwieyBjb2xvcjogY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWQgPyBjb2xvciA6ICcnIH1cIlxuICAgICAgOmRhdGEtdGl0bGU9XCJpMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdXCJcbiAgICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsIGNhdGVnb3J5KVwiXG4gICAgPlxuICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiB2LWh0bWw9XCJzdmdzW2NhdGVnb3J5LmlkXVwiIC8+XG4gICAgICA8c3BhblxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiXG4gICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9XCJcbiAgICAgID48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzdmdzIGZyb20gJy4uL3N2Z3MnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBjYXRlZ29yaWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYWN0aXZlQ2F0ZWdvcnk6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuc3ZncyA9IHN2Z3NcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c2VjdGlvblxuICAgIDpjbGFzcz1cIntcbiAgICAgICdlbW9qaS1tYXJ0LWNhdGVnb3J5JzogdHJ1ZSxcbiAgICAgICdlbW9qaS1tYXJ0LW5vLXJlc3VsdHMnOiAhaGFzUmVzdWx0cyxcbiAgICB9XCJcbiAgICA6YXJpYS1sYWJlbD1cImkxOG4uY2F0ZWdvcmllc1tpZF1cIlxuICAgIHYtaWY9XCJpc1Zpc2libGUgJiYgKGlzU2VhcmNoIHx8IGhhc1Jlc3VsdHMpXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+XG4gICAgICA8aDMgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+e3sgaTE4bi5jYXRlZ29yaWVzW2lkXSB9fTwvaDM+XG4gICAgPC9kaXY+XG5cbiAgICA8dGVtcGxhdGUgdi1mb3I9XCJ7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfSBpbiBlbW9qaU9iamVjdHNcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdi1pZj1cImVtb2ppVmlldy5jYW5SZW5kZXJcIlxuICAgICAgICA6YXJpYS1sYWJlbD1cImVtb2ppVmlldy5hcmlhTGFiZWxcIlxuICAgICAgICByb2xlPVwib3B0aW9uXCJcbiAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1wb3NpbnNldD1cIjFcIlxuICAgICAgICBhcmlhLXNldHNpemU9XCIxODEyXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIDpkYXRhLXRpdGxlPVwiZW1vamlPYmplY3Quc2hvcnRfbmFtZVwiXG4gICAgICAgIDprZXk9XCJlbW9qaU9iamVjdC5pZFwiXG4gICAgICAgIDp0aXRsZT1cImVtb2ppVmlldy50aXRsZVwiXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXG4gICAgICAgIEBtb3VzZWVudGVyPVwiZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICAgIEBtb3VzZWxlYXZlPVwiZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXG4gICAgICAgIEBjbGljaz1cImVtb2ppUHJvcHMub25DbGljayhlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxuICAgICAgPlxuICAgICAgICAgPGltZyA6c3JjPVwiaW1hZ2VVcmwoZW1vamlWaWV3LmNvbnRlbnQpXCIgd2lkdGg9XCIyN1wiIGhlaWdodD1cIjI3XCI+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPGRpdiB2LWlmPVwiIWhhc1Jlc3VsdHNcIj5cbiAgICAgIDxlbW9qaVxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICBlbW9qaT1cInNsZXV0aF9vcl9zcHlcIlxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxuICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgIDpzZXQ9XCJlbW9qaVByb3BzLnNldFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiPnt7IGkxOG4ubm90Zm91bmQgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGkxOG46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBlbW9qaXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmVtb2ppc1xuICAgIH0sXG4gICAgaXNTZWFyY2goKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lID09ICdTZWFyY2gnXG4gICAgfSxcbiAgICBoYXNSZXN1bHRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGVtb2ppT2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppcy5tYXAoKGVtb2ppKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaU9iamVjdCA9IHRoaXMuZW1vamlPYmplY3QoZW1vamkpXG4gICAgICAgIGlmIChbJ+KZgO+4jycsJ+KZgu+4jycsICfimpXvuI8nXS5pbmNsdWRlcyhlbW9qaU9iamVjdC5uYXRpdmUpKSByZXR1cm5cbiAgICAgICAgbGV0IGVtb2ppVmlldyA9IG5ldyBFbW9qaVZpZXcoXG4gICAgICAgICAgZW1vamksXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5mYWxsYmFjayxcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuZW1vamlUb29sdGlwLFxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5lbW9qaVNpemUsXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHsgZW1vamlPYmplY3QsIGVtb2ppVmlldyB9XG4gICAgICB9KS5maWx0ZXIoeCA9PiB4KVxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbW9qaSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGltYWdlVXJsKGVtb2ppKSB7XG4gICAgICBpZiAoIWVtb2ppKSByZXR1cm4gJydcbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kYXRhLmZpbmRFbW9qaShlbW9qaSkudW5pZmllZFxuICAgICAgcmV0dXJuIGBodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9lbW9qaS1kYXRhc291cmNlLWFwcGxlLzcuMC4yL2ltZy9hcHBsZS82NC8ke2ltYWdlfS5wbmdgXG4gICAgfSxcbiAgICBlbW9qaU9iamVjdChlbW9qaSkge1xuICAgICAgaWYgKHR5cGVvZiBlbW9qaSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbmRFbW9qaShlbW9qaSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbW9qaVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCI+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwiZW1vamlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgICAgPGVtb2ppXG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICA6ZW1vamk9XCJlbW9qaVwiXG4gICAgICAgICAgOm5hdGl2ZT1cImVtb2ppUHJvcHMubmF0aXZlXCJcbiAgICAgICAgICA6c2tpbj1cImVtb2ppUHJvcHMuc2tpblwiXG4gICAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCI+e3sgZW1vamkubmFtZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIj5cbiAgICAgICAgICA8c3BhbiB2LWZvcj1cInNob3J0TmFtZSBpbiBlbW9qaVNob3J0TmFtZXNcIiA6a2V5PVwic2hvcnROYW1lXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lXCI+Ont7IHNob3J0TmFtZSB9fTo8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiPlxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwiZW1vdGljb24gaW4gZW1vamlFbW90aWNvbnNcIiA6a2V5PVwiZW1vdGljb25cIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiPnt7IGVtb3RpY29uIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgPGVtb2ppXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXG4gICAgICAgIDplbW9qaT1cImlkbGVFbW9qaVwiXG4gICAgICAgIDpuYXRpdmU9XCJlbW9qaVByb3BzLm5hdGl2ZVwiXG4gICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcbiAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiB2LWlmPVwic2hvd1NraW5Ub25lc1wiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCI+XG4gICAgICA8c2tpbnMgOnNraW49XCJza2luUHJvcHMuc2tpblwiIEBjaGFuZ2U9XCJvblNraW5DaGFuZ2UoJGV2ZW50KVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IEVtb2ppIGZyb20gJy4vRW1vamkudnVlJ1xuaW1wb3J0IFNraW5zIGZyb20gJy4vc2tpbnMudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cbiAgICB9LFxuICAgIGlkbGVFbW9qaToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBzaG93U2tpblRvbmVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgZW1vamlQcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNraW5Qcm9wczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG9uU2tpbkNoYW5nZToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBlbW9qaURhdGEoKSB7XG4gICAgICBpZiAodGhpcy5lbW9qaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbW9qaVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG4gICAgfSxcbiAgICBlbW9qaVNob3J0TmFtZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbW9qaURhdGEuc2hvcnRfbmFtZXNcbiAgICB9LFxuICAgIGVtb2ppRW1vdGljb25zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1vamlEYXRhLmVtb3RpY29uc1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEVtb2ppLFxuICAgIFNraW5zXG4gIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXNlYXJjaFwiPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgOnBsYWNlaG9sZGVyPVwiaTE4bi5zZWFyY2hcIlxuICAgICAgcm9sZT1cInRleHRib3hcIlxuICAgICAgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcbiAgICAgIGFyaWEtb3ducz1cImVtb2ppLW1hcnQtbGlzdFwiXG4gICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoIGZvciBhbiBlbW9qaVwiXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1vamktbWFydC1zZWFyY2gtZGVzY3JpcHRpb25cIlxuICAgICAgQGtleWRvd24ubGVmdD1cIigkZXZlbnQpID0+ICRlbWl0KCdhcnJvd0xlZnQnLCAkZXZlbnQpXCJcbiAgICAgIEBrZXlkb3duLnJpZ2h0PVwiKCkgPT4gJGVtaXQoJ2Fycm93UmlnaHQnKVwiXG4gICAgICBAa2V5ZG93bi5kb3duPVwiKCkgPT4gJGVtaXQoJ2Fycm93RG93bicpXCJcbiAgICAgIEBrZXlkb3duLnVwPVwiKCRldmVudCkgPT4gJGVtaXQoJ2Fycm93VXAnLCAkZXZlbnQpXCJcbiAgICAgIEBrZXlkb3duLmVudGVyPVwiKCkgPT4gJGVtaXQoJ2VudGVyJylcIlxuICAgICAgdi1tb2RlbD1cInZhbHVlXCJcbiAgICAvPlxuICAgIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJlbW9qaS1waWNrZXItc2VhcmNoLWRlc2NyaXB0aW9uXCJcbiAgICAgID5Vc2UgdGhlIGxlZnQsIHJpZ2h0LCB1cCBhbmQgZG93biBhcnJvdyBrZXlzIHRvIG5hdmlnYXRlIHRoZSBlbW9qaSBzZWFyY2hcbiAgICAgIHJlc3VsdHMuPC9zcGFuXG4gICAgPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBpMThuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGF1dG9Gb2N1czoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25TZWFyY2g6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBvbkFycm93TGVmdDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBvbkFycm93UmlnaHQ6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25BcnJvd0Rvd246IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgb25BcnJvd1VwOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uRW50ZXI6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZW1vamlJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlKCkge1xuICAgICAgdGhpcy4kZW1pdCgnc2VhcmNoJywgdGhpcy52YWx1ZSlcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJydcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCAkaW5wdXQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgICRpbnB1dC5mb2N1cygpXG4gICAgfVxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbjxkaXYgOmNsYXNzPVwieyAnZW1vamktbWFydC1za2luLXN3YXRjaGVzJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWQnOiBvcGVuZWQgfVwiPlxuICA8c3BhbiB2LWZvcj1cInNraW5Ub25lIGluIDZcIiA6a2V5PVwic2tpblRvbmVcIiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWQnOiBza2luID09IHNraW5Ub25lIH1cIj5cbiAgICA8c3BhbiA6Y2xhc3M9XCInZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLScgKyBza2luVG9uZVwiIEBjbGljaz1cIm9uQ2xpY2soc2tpblRvbmUpXCI+PC9zcGFuPlxuICA8L3NwYW4+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNraW46IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljayhza2luVG9uZSkge1xuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIGlmIChza2luVG9uZSAhPSB0aGlzLnNraW4pIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBza2luVG9uZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZFxuICAgIH1cbiAgfVxufVxuXG48L3NjcmlwdD5cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeS52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXZpZXcgfSBmcm9tICcuL3ByZXZpZXcudnVlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaC52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNraW5zIH0gZnJvbSAnLi9za2lucy52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtb2ppIH0gZnJvbSAnLi9FbW9qaS52dWUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLnZ1ZSdcbiIsImNvbnN0IF9TdHJpbmcgPSBTdHJpbmdcblxuZXhwb3J0IGRlZmF1bHQgX1N0cmluZy5mcm9tQ29kZVBvaW50IHx8XG4gIGZ1bmN0aW9uIHN0cmluZ0Zyb21Db2RlUG9pbnQoKSB7XG4gICAgdmFyIE1BWF9TSVpFID0gMHg0MDAwXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdXG4gICAgdmFyIGhpZ2hTdXJyb2dhdGVcbiAgICB2YXIgbG93U3Vycm9nYXRlXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBjb2RlUG9pbnQgPSBOdW1iZXIoYXJndW1lbnRzW2luZGV4XSlcbiAgICAgIGlmIChcbiAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxuICAgICAgICBjb2RlUG9pbnQgPCAwIHx8IC8vIG5vdCBhIHZhbGlkIFVuaWNvZGUgY29kZSBwb2ludFxuICAgICAgICBjb2RlUG9pbnQgPiAweDEwZmZmZiB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgTWF0aC5mbG9vcihjb2RlUG9pbnQpICE9IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxuICAgICAgKSB7XG4gICAgICAgIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludDogJyArIGNvZGVQb2ludClcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgIC8vIEJNUCBjb2RlIHBvaW50XG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFzdHJhbCBjb2RlIHBvaW50OyBzcGxpdCBpbiBzdXJyb2dhdGUgaGFsdmVzXG4gICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4ZDgwMFxuICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhkYzAwXG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGhpZ2hTdXJyb2dhdGUsIGxvd1N1cnJvZ2F0ZSlcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcbiAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY29kZVVuaXRzKVxuICAgICAgICBjb2RlVW5pdHMubGVuZ3RoID0gMFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiIsImNvbnN0IFNWR3MgPSB7XG4gIGFjdGl2aXR5OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzIgMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyIDYuNjI4IDAgMTItNS4zNzMgMTItMTIgMC02LjYyOC01LjM3Mi0xMi0xMi0xMm05Ljk0OSAxMUgxNy4wNWMuMjI0LTIuNTI3IDEuMjMyLTQuNzczIDEuOTY4LTYuMTEzQTkuOTY2IDkuOTY2IDAgMCAxIDIxLjk0OSAxMU0xMyAxMVYyLjA1MWE5Ljk0NSA5Ljk0NSAwIDAgMSA0LjQzMiAxLjU2NGMtLjg1OCAxLjQ5MS0yLjE1NiA0LjIyLTIuMzkyIDcuMzg1SDEzem0tMiAwSDguOTYxYy0uMjM4LTMuMTY1LTEuNTM2LTUuODk0LTIuMzkzLTcuMzg1QTkuOTUgOS45NSAwIDAgMSAxMSAyLjA1MVYxMXptMCAydjguOTQ5YTkuOTM3IDkuOTM3IDAgMCAxLTQuNDMyLTEuNTY0Yy44NTctMS40OTIgMi4xNTUtNC4yMjEgMi4zOTMtNy4zODVIMTF6bTQuMDQgMGMuMjM2IDMuMTY0IDEuNTM0IDUuODkzIDIuMzkyIDcuMzg1QTkuOTIgOS45MiAwIDAgMSAxMyAyMS45NDlWMTNoMi4wNHpNNC45ODIgNC44ODdDNS43MTggNi4yMjcgNi43MjYgOC40NzMgNi45NTEgMTFoLTQuOWE5Ljk3NyA5Ljk3NyAwIDAgMSAyLjkzMS02LjExM00yLjA1MSAxM2g0LjljLS4yMjYgMi41MjctMS4yMzMgNC43NzEtMS45NjkgNi4xMTNBOS45NzIgOS45NzIgMCAwIDEgMi4wNTEgMTNtMTYuOTY3IDYuMTEzYy0uNzM1LTEuMzQyLTEuNzQ0LTMuNTg2LTEuOTY4LTYuMTEzaDQuODk5YTkuOTYxIDkuOTYxIDAgMCAxLTIuOTMxIDYuMTEzXCIvPjwvc3ZnPmAsXG5cbiAgY3VzdG9tOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApXCI+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB4PVwiOFwiIHk9XCIwXCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoNjApIHRyYW5zbGF0ZSgtOS44NDMsIC0xMC41NDkpIFwiIHg9XCI4LjM0M1wiIHk9XCIwLjA0OVwiIHdpZHRoPVwiM1wiIGhlaWdodD1cIjIxXCIgcng9XCIxLjVcIj48L3JlY3Q+PHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOS44NDMsIDEwLjU0OSkgcm90YXRlKC02MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48L2c+PC9zdmc+YCxcblxuICBmbGFnczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGw2LjA4NCAyNEg4TDEuOTE2IDB6TTIxIDVoLTRsLTEtNEg0bDMgMTJoM2wxIDRoMTNMMjEgNXpNNi41NjMgM2g3Ljg3NWwyIDhIOC41NjNsLTItOHptOC44MzIgMTBsLTIuODU2IDEuOTA0TDEyLjA2MyAxM2gzLjMzMnpNMTkgMTNsLTEuNS02aDEuOTM4bDIgOEgxNmwzLTJ6XCIvPjwvc3ZnPmAsXG5cbiAgZm9vZHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNyA0Ljk3OGMtMS44MzggMC0yLjg3Ni4zOTYtMy42OC45MzQuNTEzLTEuMTcyIDEuNzY4LTIuOTM0IDQuNjgtMi45MzRhMSAxIDAgMCAwIDAtMmMtMi45MjEgMC00LjYyOSAxLjM2NS01LjU0NyAyLjUxMi0uMDY0LjA3OC0uMTE5LjE2Mi0uMTguMjQ0QzExLjczIDEuODM4IDEwLjc5OC4wMjMgOS4yMDcuMDIzIDguNTc5LjAyMiA3Ljg1LjMwNiA3IC45NzggNS4wMjcgMi41NCA1LjMyOSAzLjkwMiA2LjQ5MiA0Ljk5OSAzLjYwOSA1LjIyMiAwIDcuMzUyIDAgMTIuOTY5YzAgNC41ODIgNC45NjEgMTEuMDA5IDkgMTEuMDA5IDEuOTc1IDAgMi4zNzEtLjQ4NiAzLTEgLjYyOS41MTQgMS4wMjUgMSAzIDEgNC4wMzkgMCA5LTYuNDE4IDktMTEgMC01Ljk1My00LjA1NS04LTctOE04LjI0MiAyLjU0NmMuNjQxLS41MDguOTQzLS41MjMuOTY1LS41MjMuNDI2LjE2OS45NzUgMS40MDUgMS4zNTcgMy4wNTUtMS41MjctLjYyOS0yLjc0MS0xLjM1Mi0yLjk4LTEuODQ2LjA1OS0uMTEyLjI0MS0uMzU2LjY1OC0uNjg2TTE1IDIxLjk3OGMtMS4wOCAwLTEuMjEtLjEwOS0xLjU1OS0uNDAybC0uMTc2LS4xNDZjLS4zNjctLjMwMi0uODE2LS40NTItMS4yNjYtLjQ1MnMtLjg5OC4xNS0xLjI2Ni40NTJsLS4xNzYuMTQ2Yy0uMzQ3LjI5Mi0uNDc3LjQwMi0xLjU1Ny40MDItMi44MTMgMC03LTUuMzg5LTctOS4wMDkgMC01LjgyMyA0LjQ4OC01Ljk5MSA1LTUuOTkxIDEuOTM5IDAgMi40ODQuNDcxIDMuMzg3IDEuMjUxbC4zMjMuMjc2YTEuOTk1IDEuOTk1IDAgMCAwIDIuNTggMGwuMzIzLS4yNzZjLjkwMi0uNzggMS40NDctMS4yNTEgMy4zODctMS4yNTEuNTEyIDAgNSAuMTY4IDUgNiAwIDMuNjE3LTQuMTg3IDktNyA5XCIvPjwvc3ZnPmAsXG5cbiAgbmF0dXJlOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTUuNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDE1LjUgOE04LjUgOGExLjUgMS41IDAgMSAwIC4wMDEgMy4wMDFBMS41IDEuNSAwIDAgMCA4LjUgOFwiLz48cGF0aCBkPVwiTTE4LjkzMyAwaC0uMDI3Yy0uOTcgMC0yLjEzOC43ODctMy4wMTggMS40OTctMS4yNzQtLjM3NC0yLjYxMi0uNTEtMy44ODctLjUxLTEuMjg1IDAtMi42MTYuMTMzLTMuODc0LjUxN0M3LjI0NS43OSA2LjA2OSAwIDUuMDkzIDBoLS4wMjdDMy4zNTIgMCAuMDcgMi42Ny4wMDIgNy4wMjZjLS4wMzkgMi40NzkuMjc2IDQuMjM4IDEuMDQgNS4wMTMuMjU0LjI1OC44ODIuNjc3IDEuMjk1Ljg4Mi4xOTEgMy4xNzcuOTIyIDUuMjM4IDIuNTM2IDYuMzguODk3LjYzNyAyLjE4Ny45NDkgMy4yIDEuMTAyQzguMDQgMjAuNiA4IDIwLjc5NSA4IDIxYzAgMS43NzMgMi4zNSAzIDQgMyAxLjY0OCAwIDQtMS4yMjcgNC0zIDAtLjIwMS0uMDM4LS4zOTMtLjA3Mi0uNTg2IDIuNTczLS4zODUgNS40MzUtMS44NzcgNS45MjUtNy41ODcuMzk2LS4yMi44ODctLjU2OCAxLjEwNC0uNzg4Ljc2My0uNzc0IDEuMDc5LTIuNTM0IDEuMDQtNS4wMTNDMjMuOTI5IDIuNjcgMjAuNjQ2IDAgMTguOTMzIDBNMy4yMjMgOS4xMzVjLS4yMzcuMjgxLS44MzcgMS4xNTUtLjg4NCAxLjIzOC0uMTUtLjQxLS4zNjgtMS4zNDktLjMzNy0zLjI5MS4wNTEtMy4yODEgMi40NzgtNC45NzIgMy4wOTEtNS4wMzEuMjU2LjAxNS43MzEuMjcgMS4yNjUuNjQ2LTEuMTEgMS4xNzEtMi4yNzUgMi45MTUtMi4zNTIgNS4xMjUtLjEzMy41NDYtLjM5OC44NTgtLjc4MyAxLjMxM00xMiAyMmMtLjkwMSAwLTEuOTU0LS42OTMtMi0xIDAtLjY1NC40NzUtMS4yMzYgMS0xLjYwMlYyMGExIDEgMCAxIDAgMiAwdi0uNjAyYy41MjQuMzY1IDEgLjk0NyAxIDEuNjAyLS4wNDYuMzA3LTEuMDk5IDEtMiAxbTMtMy40OHYuMDJhNC43NTIgNC43NTIgMCAwIDAtMS4yNjItMS4wMmMxLjA5Mi0uNTE2IDIuMjM5LTEuMzM0IDIuMjM5LTIuMjE3IDAtMS44NDItMS43ODEtMi4xOTUtMy45NzctMi4xOTUtMi4xOTYgMC0zLjk3OC4zNTQtMy45NzggMi4xOTUgMCAuODgzIDEuMTQ4IDEuNzAxIDIuMjM4IDIuMjE3QTQuOCA0LjggMCAwIDAgOSAxOC41Mzl2LS4wMjVjLTEtLjA3Ni0yLjE4Mi0uMjgxLTIuOTczLS44NDItMS4zMDEtLjkyLTEuODM4LTMuMDQ1LTEuODUzLTYuNDc4bC4wMjMtLjA0MWMuNDk2LS44MjYgMS40OS0xLjQ1IDEuODA0LTMuMTAyIDAtMi4wNDcgMS4zNTctMy42MzEgMi4zNjItNC41MjJDOS4zNyAzLjE3OCAxMC41NTUgMyAxMS45NDggM2MxLjQ0NyAwIDIuNjg1LjE5MiAzLjczMy41NyAxIC45IDIuMzE2IDIuNDY1IDIuMzE2IDQuNDguMzEzIDEuNjUxIDEuMzA3IDIuMjc1IDEuODAzIDMuMTAyLjAzNS4wNTguMDY4LjExNy4xMDIuMTc4LS4wNTkgNS45NjctMS45NDkgNy4wMS00LjkwMiA3LjE5bTYuNjI4LTguMjAyYy0uMDM3LS4wNjUtLjA3NC0uMTMtLjExMy0uMTk1YTcuNTg3IDcuNTg3IDAgMCAwLS43MzktLjk4N2MtLjM4NS0uNDU1LS42NDgtLjc2OC0uNzgyLTEuMzEzLS4wNzYtMi4yMDktMS4yNDEtMy45NTQtMi4zNTMtNS4xMjQuNTMxLS4zNzYgMS4wMDQtLjYzIDEuMjYxLS42NDcuNjM2LjA3MSAzLjA0NCAxLjc2NCAzLjA5NiA1LjAzMS4wMjcgMS44MS0uMzQ3IDMuMjE4LS4zNyAzLjIzNVwiLz48L3N2Zz5gLFxuXG4gIG9iamVjdHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwYTkgOSAwIDAgMC01IDE2LjQ4MlYyMXMyLjAzNSAzIDUgMyA1LTMgNS0zdi00LjUxOEE5IDkgMCAwIDAgMTIgMHptMCAyYzMuODYgMCA3IDMuMTQxIDcgN3MtMy4xNCA3LTcgNy03LTMuMTQxLTctNyAzLjE0LTcgNy03ek05IDE3LjQ3N2MuOTQuMzMyIDEuOTQ2LjUyMyAzIC41MjNzMi4wNi0uMTkgMy0uNTIzdi44MzRjLS45MS40MzYtMS45MjUuNjg5LTMgLjY4OWE2LjkyNCA2LjkyNCAwIDAgMS0zLS42OXYtLjgzM3ptLjIzNiAzLjA3QTguODU0IDguODU0IDAgMCAwIDEyIDIxYy45NjUgMCAxLjg4OC0uMTY3IDIuNzU4LS40NTFDMTQuMTU1IDIxLjE3MyAxMy4xNTMgMjIgMTIgMjJjLTEuMTAyIDAtMi4xMTctLjc4OS0yLjc2NC0xLjQ1M3pcIi8+PHBhdGggZD1cIk0xNC43NDUgMTIuNDQ5aC0uMDA0Yy0uODUyLS4wMjQtMS4xODgtLjg1OC0xLjU3Ny0xLjgyNC0uNDIxLTEuMDYxLS43MDMtMS41NjEtMS4xODItMS41NjZoLS4wMDljLS40ODEgMC0uNzgzLjQ5Ny0xLjIzNSAxLjUzNy0uNDM2Ljk4Mi0uODAxIDEuODExLTEuNjM2IDEuNzkxbC0uMjc2LS4wNDNjLS41NjUtLjE3MS0uODUzLS42OTEtMS4yODQtMS43OTQtLjEyNS0uMzEzLS4yMDItLjYzMi0uMjctLjkxMy0uMDUxLS4yMTMtLjEyNy0uNTMtLjE5NS0uNjM0QzcuMDY3IDkuMDA0IDcuMDM5IDkgNi45OSA5QTEgMSAwIDAgMSA3IDdoLjAxYzEuNjYyLjAxNyAyLjAxNSAxLjM3MyAyLjE5OCAyLjEzNC40ODYtLjk4MSAxLjMwNC0yLjA1OCAyLjc5Ny0yLjA3NSAxLjUzMS4wMTggMi4yOCAxLjE1MyAyLjczMSAyLjE0MWwuMDAyLS4wMDhDMTQuOTQ0IDguNDI0IDE1LjMyNyA3IDE2Ljk3OSA3aC4wMzJBMSAxIDAgMSAxIDE3IDloLS4wMTFjLS4xNDkuMDc2LS4yNTYuNDc0LS4zMTkuNzA5YTYuNDg0IDYuNDg0IDAgMCAxLS4zMTEuOTUxYy0uNDI5Ljk3My0uNzkgMS43ODktMS42MTQgMS43ODlcIi8+PC9zdmc+YCxcblxuICBzbWlsZXlzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwbTAgMjJDNi40ODYgMjIgMiAxNy41MTQgMiAxMlM2LjQ4NiAyIDEyIDJzMTAgNC40ODYgMTAgMTAtNC40ODYgMTAtMTAgMTBcIi8+PHBhdGggZD1cIk04IDdhMiAyIDAgMSAwLS4wMDEgMy45OTlBMiAyIDAgMCAwIDggN00xNiA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCAxNiA3TTE1LjIzMiAxNWMtLjY5MyAxLjE5NS0xLjg3IDItMy4zNDkgMi0xLjQ3NyAwLTIuNjU1LS44MDUtMy4zNDctMkgxNW0zLTJINmE2IDYgMCAxIDAgMTIgMFwiLz48L3N2Zz5gLFxuXG4gIHBlb3BsZTogYDxzdmcgeG1sbnM6c3ZnPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHdpZHRoPVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+IDxwYXRoIGlkPVwicGF0aDM4MTRcIiBkPVwibSAzLjM1OTEwODksMjEuMTc3MjYgYyAwLjE3MjAzNiwwLjA5Mzg1IDQuMjY1OTk0LDIuMjk4MzcgOC44MTQ0NDUxLDIuMjk4MzcgNC45Mjc3NjcsMCA4LjY3MDg5NCwtMi4yMTE4ODMgOC44Mjc4MiwtMi4zMDYwMTkgMC4xMTMwNzksLTAuMDY3ODUgMC4xODIyNjgsLTAuMTkwMDUxIDAuMTgyMjY3LC0wLjMyMTkyMyAwLC0zLjAzMTE5IC0wLjkyOTQ5NCwtNS44MDQ5MzYgLTIuNjE3MTk2LC03LjgxMDcxMiAtMS4xODA2MDMsLTEuNDAzMTM0IC0yLjY2MTkxOCwtMi4zNTk1MTYgLTQuMjk1Njk5LC0yLjc5OTc5MSA0LjY5OTExOCwtMi4yMzYyNTggMy4xMDIzMDYsLTkuMjg2MTcxNjIgLTIuMDk3MTkxLC05LjI4NjE3MTYyIC01LjE5OTQ5NzgsMCAtNi43OTYzMTAzLDcuMDQ5OTEzNjIgLTIuMDk3MTkyLDkuMjg2MTcxNjIgLTEuNjMzNzgyMSwwLjQ0MDI3NSAtMy4xMTUwOTcxLDEuMzk2Nzk4IC00LjI5NTY5OTEsMi43OTk3OTEgLTEuNjg3NzAzLDIuMDA1Nzc2IC0yLjYxNzE5Niw0Ljc3OTUyMiAtMi42MTcxOTYsNy44MTA3MTIgMS4yZS02LDAuMTM3Mzc4IDAuMDc1MDM5LDAuMjYzNzg1IDAuMTk1NjQxLDAuMzI5NTcyIHogTSA4LjA0MzkzMTksNS44MzA4NzgzIEMgOC4wNDM5MzA5LDIuMTUxNTIxIDEyLjQ5MjEwNywwLjMwOTU1ODExIDE1LjA5MzQ5MSwyLjkxMDk0MTEgMTcuNjk0ODc0LDUuNTEyMzI0MSAxNS44NTI5MTEsOS45NjA1MDA2IDEyLjE3MzU1NCw5Ljk2MDUgOS44OTM4OTkxLDkuOTU3OTEzNSA4LjA0NjUxODYsOC4xMTA1MzMyIDguMDQzOTMxOSw1LjgzMDg3ODMgWiBtIC0xLjY4ODc4Miw3LjY4OTQ5NzcgYyAxLjUyNDUzNSwtMS44MTE0NDkgMy41OTA2NjAxLC0yLjgwOTAzNSA1LjgxODQwNDEsLTIuODA5MDM1IDIuMjI3NzQ0LDAgNC4yOTM4NjksMC45OTc1ODYgNS44MTg0MDQsMi44MDkwMzUgMS41MzM2MzksMS44MjI1NzEgMi4zOTU5MzIsNC4zMzk4NTggMi40MzkxNTIsNy4xMDgzMDEgLTAuODAzMzUyLDAuNDM0ODc3IC00LjE0MTYzNiwyLjA5NjExMiAtOC4yNTc1NTYsMi4wOTYxMTIgLTMuODA2MjkyMSwwIC03LjM5MTA4NjEsLTEuNjcxMDQzIC04LjI1NzM2ODEsLTIuMTA0OTgxIDAuMDQ1MDUsLTIuNzY1MDE3IDAuOTA2OTY4LC01LjI3ODc4NSAyLjQzODk2NCwtNy4wOTk0MzIgelwiIC8+IDxwYXRoIGlkPVwicGF0aDM4MTZcIiBkPVwiTSAxMi4xNzM4MjggMC4zODg2NzE4OCBDIDkuMzE5ODUxMyAwLjM4ODY3MTg3IDcuMzc3MDk4OCAyLjM2NzIyODUgNi44NjUyMzQ0IDQuNjMwODU5NCBDIDYuNDIxODYwOCA2LjU5MTYwMTUgNy4xMTUzNTYyIDguNzY3NjExNyA4Ljk2NDg0MzggMTAuMTI2OTUzIEMgNy42MTQxMjQ5IDEwLjY3NzM3NiA2LjM1NTA1MTEgMTEuNDgwOTQ0IDUuMzQ5NjA5NCAxMi42NzU3ODEgQyAzLjU2MjkzMTcgMTQuNzk5MTg1IDIuNjAxNTYyNSAxNy43MDE0NzUgMi42MDE1NjI1IDIwLjg0NzY1NiBDIDIuNjAxNTY1NCAyMS4xODk4NjEgMi43ODk0Mjc2IDIxLjUwODAwMiAzLjA4OTg0MzggMjEuNjcxODc1IEMgMy4zMDQ0MDY4IDIxLjc4ODkyNSA3LjQ0MzYyMzkgMjQuMDM5MDYyIDEyLjE3MzgyOCAyNC4wMzkwNjIgQyAxNy4yNjk5MTggMjQuMDM5MDYyIDIxLjA4MzU2OCAyMS43NzY3ODYgMjEuMjkxMDE2IDIxLjY1MjM0NCBDIDIxLjU3MjgxIDIxLjQ4MzI2NiAyMS43NDYwOTcgMjEuMTc2MjgyIDIxLjc0NjA5NCAyMC44NDc2NTYgQyAyMS43NDYwOTQgMTcuNzAxNDc1IDIwLjc4Mjc3IDE0Ljc5OTE4NSAxOC45OTYwOTQgMTIuNjc1NzgxIEMgMTcuOTkwNDU1IDExLjQ4MDU5MSAxNi43MzM4MTggMTAuNjc1MzYyIDE1LjM4MjgxMiAxMC4xMjUgQyAxNy4yMzExMzIgOC43NjU1NTUyIDE3LjkyNTY3NSA2LjU5MTA3MDEgMTcuNDgyNDIyIDQuNjMwODU5NCBDIDE2Ljk3MDU1NyAyLjM2NzIyODUgMTUuMDI3ODA1IDAuMzg4NjcxODggMTIuMTczODI4IDAuMzg4NjcxODggeiBNIDEyLjc5Mjk2OSAyLjMwMDc4MTIgQyAxMy40NjYyNTMgMi40MTYxNzkyIDE0LjEyNTExMyAyLjczODM5NDEgMTQuNjk1MzEyIDMuMzA4NTkzOCBDIDE1LjgzNTcxMiA0LjQ0ODk5MzEgMTUuOTg1NjA0IDUuOTQ3MzU0OSAxNS40Njg3NSA3LjE5NTMxMjUgQyAxNC45NTE4OTYgOC40NDMyNzAxIDEzLjc4NjgyOCA5LjM5ODQzNzggMTIuMTczODI4IDkuMzk4NDM3NSBDIDEwLjE5NzcxOSA5LjM5NjE5NTQgOC42MDc3MTEgNy44MDYxODcgOC42MDU0Njg4IDUuODMwMDc4MSBDIDguNjA1NDY4MyA0LjIxNzA3ODUgOS41NjA2MzYyIDMuMDUyMDEwMiAxMC44MDg1OTQgMi41MzUxNTYyIEMgMTEuNDMyNTczIDIuMjc2NzI5MyAxMi4xMTk2ODUgMi4xODUzODMzIDEyLjc5Mjk2OSAyLjMwMDc4MTIgeiBNIDEyLjE3MzgyOCAxMS4yNzM0MzggQyAxNC4yMzM2NDcgMTEuMjczNDM4IDE2LjEzMzY3NCAxMi4xODUwODQgMTcuNTYyNSAxMy44ODI4MTIgQyAxOC45MzA2OSAxNS41MDg3NjUgMTkuNjk4MzQ3IDE3Ljc3Njk2OSAxOS44MDg1OTQgMjAuMjgzMjAzIEMgMTguODA3Mzk1IDIwLjgwMDIzNSAxNS44ODYxNTcgMjIuMTYyMTA5IDEyLjE3MzgyOCAyMi4xNjIxMDkgQyA4Ljc2MTQ2MzIgMjIuMTYyMTA5IDUuNjI0NTc1NCAyMC43ODcwNjkgNC41MzkwNjI1IDIwLjI2NTYyNSBDIDQuNjUyNTg5NiAxNy43NjY3MTcgNS40MjAzMzE1IDE1LjUwNDc5MSA2Ljc4NTE1NjIgMTMuODgyODEyIEMgOC4yMTM5ODI3IDEyLjE4NTA4NCAxMC4xMTQwMSAxMS4yNzM0MzggMTIuMTczODI4IDExLjI3MzQzOCB6IFwiIC8+IDwvc3ZnPmAsXG5cbiAgcGxhY2VzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNNi41IDEyQzUuMTIyIDEyIDQgMTMuMTIxIDQgMTQuNVM1LjEyMiAxNyA2LjUgMTcgOSAxNS44NzkgOSAxNC41IDcuODc4IDEyIDYuNSAxMm0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVNMTcuNSAxMmMtMS4zNzggMC0yLjUgMS4xMjEtMi41IDIuNXMxLjEyMiAyLjUgMi41IDIuNSAyLjUtMS4xMjEgMi41LTIuNS0xLjEyMi0yLjUtMi41LTIuNW0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVcIi8+PHBhdGggZD1cIk0yMi40ODIgOS40OTRsLTEuMDM5LS4zNDZMMjEuNCA5aC42Yy41NTIgMCAxLS40MzkgMS0uOTkyIDAtLjAwNi0uMDAzLS4wMDgtLjAwMy0uMDA4SDIzYzAtMS0uODg5LTItMS45ODQtMmgtLjY0MmwtLjczMS0xLjcxN0MxOS4yNjIgMy4wMTIgMTguMDkxIDIgMTYuNzY0IDJINy4yMzZDNS45MDkgMiA0LjczOCAzLjAxMiA0LjM1NyA0LjI4M0wzLjYyNiA2aC0uNjQyQzEuODg5IDYgMSA3IDEgOGguMDAzUzEgOC4wMDIgMSA4LjAwOEMxIDguNTYxIDEuNDQ4IDkgMiA5aC42bC0uMDQzLjE0OC0xLjAzOS4zNDZhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTkgMi4wOTdsLjc1MSA3LjUwOGExIDEgMCAwIDAgLjk5NC45MDFIM3YxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDZ2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWgxLjA5NmEuOTk5Ljk5OSAwIDAgMCAuOTk0LS45MDFsLjc1MS03LjUwOGEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OS0yLjA5N002LjI3MyA0Ljg1N0M2LjQwMiA0LjQzIDYuNzg4IDQgNy4yMzYgNGg5LjUyN2MuNDQ4IDAgLjgzNC40My45NjMuODU3TDE5LjMxMyA5SDQuNjg4bDEuNTg1LTQuMTQzek03IDIxSDV2LTFoMnYxem0xMiAwaC0ydi0xaDJ2MXptMi4xODktM0gyLjgxMWwtLjY2Mi02LjYwN0wzIDExaDE4bC44NTIuMzkzTDIxLjE4OSAxOHpcIi8+PC9zdmc+YCxcblxuICByZWNlbnQ6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMyA0aC0ybC0uMDAxIDdIOXYyaDJ2Mmgydi0yaDR2LTJoLTR6XCIvPjxwYXRoIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwbTAgMjJDNi40ODYgMjIgMiAxNy41MTQgMiAxMlM2LjQ4NiAyIDEyIDJzMTAgNC40ODYgMTAgMTAtNC40ODYgMTAtMTAgMTBcIi8+PC9zdmc+YCxcblxuICBzeW1ib2xzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMCAwaDExdjJIMHpNNCAxMWgzVjZoNFY0SDB2Mmg0ek0xNS41IDE3YzEuMzgxIDAgMi41LTEuMTE2IDIuNS0yLjQ5M3MtMS4xMTktMi40OTMtMi41LTIuNDkzUzEzIDEzLjEzIDEzIDE0LjUwNyAxNC4xMTkgMTcgMTUuNSAxN20wLTIuOTg2Yy4yNzYgMCAuNS4yMjIuNS40OTMgMCAuMjcyLS4yMjQuNDkzLS41LjQ5M3MtLjUtLjIyMS0uNS0uNDkzLjIyNC0uNDkzLjUtLjQ5M00yMS41IDE5LjAxNGMtMS4zODEgMC0yLjUgMS4xMTYtMi41IDIuNDkzUzIwLjExOSAyNCAyMS41IDI0czIuNS0xLjExNiAyLjUtMi40OTMtMS4xMTktMi40OTMtMi41LTIuNDkzbTAgMi45ODZhLjQ5Ny40OTcgMCAwIDEtLjUtLjQ5M2MwLS4yNzEuMjI0LS40OTMuNS0uNDkzcy41LjIyMi41LjQ5M2EuNDk3LjQ5NyAwIDAgMS0uNS40OTNNMjIgMTNsLTkgOSAxLjUxMyAxLjUgOC45OS05LjAwOXpNMTcgMTFjMi4yMDkgMCA0LTEuMTE5IDQtMi41VjJzLjk4NS0uMTYxIDEuNDk4Ljk0OUMyMy4wMSA0LjA1NSAyMyA2IDIzIDZzMS0xLjExOSAxLTMuMTM1QzI0LS4wMiAyMSAwIDIxIDBoLTJ2Ni4zNDdBNS44NTMgNS44NTMgMCAwIDAgMTcgNmMtMi4yMDkgMC00IDEuMTE5LTQgMi41czEuNzkxIDIuNSA0IDIuNU0xMC4yOTcgMjAuNDgybC0xLjQ3NS0xLjU4NWE0Ny41NCA0Ny41NCAwIDAgMS0xLjQ0MiAxLjEyOWMtLjMwNy0uMjg4LS45ODktMS4wMTYtMi4wNDUtMi4xODMuOTAyLS44MzYgMS40NzktMS40NjYgMS43MjktMS44OTJzLjM3Ni0uODcxLjM3Ni0xLjMzNmMwLS41OTItLjI3My0xLjE3OC0uODE4LTEuNzU5LS41NDYtLjU4MS0xLjMyOS0uODcxLTIuMzQ5LS44NzEtMS4wMDggMC0xLjc5LjI5My0yLjM0NC44NzktLjU1Ni41ODctLjgzMiAxLjE4MS0uODMyIDEuNzg0IDAgLjgxMy40MTkgMS43NDggMS4yNTYgMi44MDUtLjg0Ny42MTQtMS40NDQgMS4yMDgtMS43OTQgMS43ODRhMy40NjUgMy40NjUgMCAwIDAtLjUyMyAxLjgzM2MwIC44NTcuMzA4IDEuNTYuOTI0IDIuMTA3LjYxNi41NDkgMS40MjMuODIzIDIuNDIuODIzIDEuMTczIDAgMi40NDQtLjM3OSAzLjgxMy0xLjEzN0w4LjIzNSAyNGgyLjgxOWwtMi4wOS0yLjM4MyAxLjMzMy0xLjEzNXptLTYuNzM2LTYuMzg5YTEuMDIgMS4wMiAwIDAgMSAuNzMtLjI4NmMuMzEgMCAuNTU5LjA4NS43NDcuMjU0YS44NDkuODQ5IDAgMCAxIC4yODMuNjU5YzAgLjUxOC0uNDE5IDEuMTEyLTEuMjU3IDEuNzg0LS41MzYtLjY1MS0uODA1LTEuMjMxLS44MDUtMS43NDJhLjkwMS45MDEgMCAwIDEgLjMwMi0uNjY5TTMuNzQgMjJjLS40MjcgMC0uNzc4LS4xMTYtMS4wNTctLjM0OS0uMjc5LS4yMzItLjQxOC0uNDg3LS40MTgtLjc2NiAwLS41OTQuNTA5LTEuMjg4IDEuNTI3LTIuMDgzLjk2OCAxLjEzNCAxLjcxNyAxLjk0NiAyLjI0OCAyLjQzOC0uOTIxLjUwNy0xLjY4Ni43Ni0yLjMuNzZcIi8+PC9zdmc+YCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU1ZHc1xuIiwiY29uc3QgbWFwcGluZyA9IHtcbiAgbmFtZTogJ2EnLFxuICB1bmlmaWVkOiAnYicsXG4gIG5vbl9xdWFsaWZpZWQ6ICdjJyxcbiAgaGFzX2ltZ19hcHBsZTogJ2QnLFxuICBoYXNfaW1nX2dvb2dsZTogJ2UnLFxuICBoYXNfaW1nX3R3aXR0ZXI6ICdmJyxcbiAgaGFzX2ltZ19mYWNlYm9vazogJ2gnLFxuICBrZXl3b3JkczogJ2onLFxuICBzaGVldDogJ2snLFxuICBlbW90aWNvbnM6ICdsJyxcbiAgdGV4dDogJ20nLFxuICBzaG9ydF9uYW1lczogJ24nLFxuICBhZGRlZF9pbjogJ28nLFxufVxuXG5jb25zdCBidWlsZFNlYXJjaCA9IChlbW9qaSkgPT4ge1xuICBjb25zdCBzZWFyY2ggPSBbXVxuXG4gIHZhciBhZGRUb1NlYXJjaCA9IChzdHJpbmdzLCBzcGxpdCkgPT4ge1xuICAgIGlmICghc3RyaW5ncykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgOyhBcnJheS5pc0FycmF5KHN0cmluZ3MpID8gc3RyaW5ncyA6IFtzdHJpbmdzXSkuZm9yRWFjaCgoc3RyaW5nKSA9PiB7XG4gICAgICA7KHNwbGl0ID8gc3RyaW5nLnNwbGl0KC9bLXxffFxcc10rLykgOiBbc3RyaW5nXSkuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICBzID0gcy50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKHMpID09IC0xKSB7XG4gICAgICAgICAgc2VhcmNoLnB1c2gocylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVG9TZWFyY2goZW1vamkuc2hvcnRfbmFtZXMsIHRydWUpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLm5hbWUsIHRydWUpXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmtleXdvcmRzLCBmYWxzZSlcbiAgYWRkVG9TZWFyY2goZW1vamkuZW1vdGljb25zLCBmYWxzZSlcblxuICByZXR1cm4gc2VhcmNoLmpvaW4oJywnKVxufVxuXG5mdW5jdGlvbiBkZWVwRnJlZXplKG9iamVjdCkge1xuICAvLyBSZXRyaWV2ZSB0aGUgcHJvcGVydHkgbmFtZXMgZGVmaW5lZCBvbiBvYmplY3RcbiAgdmFyIHByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdClcblxuICAvLyBGcmVlemUgcHJvcGVydGllcyBiZWZvcmUgZnJlZXppbmcgc2VsZlxuICBmb3IgKGxldCBuYW1lIG9mIHByb3BOYW1lcykge1xuICAgIGxldCB2YWx1ZSA9IG9iamVjdFtuYW1lXVxuICAgIG9iamVjdFtuYW1lXSA9XG4gICAgICB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gZGVlcEZyZWV6ZSh2YWx1ZSkgOiB2YWx1ZVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG9iamVjdClcbn1cblxuY29uc3QgdW5jb21wcmVzcyA9IChkYXRhKSA9PiB7XG4gIGlmICghZGF0YS5jb21wcmVzc2VkKSB7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuICBkYXRhLmNvbXByZXNzZWQgPSBmYWxzZVxuXG4gIGZvciAobGV0IGlkIGluIGRhdGEuZW1vamlzKSB7XG4gICAgbGV0IGVtb2ppID0gZGF0YS5lbW9qaXNbaWRdXG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbWFwcGluZykge1xuICAgICAgZW1vamlba2V5XSA9IGVtb2ppW21hcHBpbmdba2V5XV1cbiAgICAgIGRlbGV0ZSBlbW9qaVttYXBwaW5nW2tleV1dXG4gICAgfVxuXG4gICAgaWYgKCFlbW9qaS5zaG9ydF9uYW1lcykgZW1vamkuc2hvcnRfbmFtZXMgPSBbXVxuICAgIGVtb2ppLnNob3J0X25hbWVzLnVuc2hpZnQoaWQpXG5cbiAgICBlbW9qaS5zaGVldF94ID0gZW1vamkuc2hlZXRbMF1cbiAgICBlbW9qaS5zaGVldF95ID0gZW1vamkuc2hlZXRbMV1cbiAgICBkZWxldGUgZW1vamkuc2hlZXRcblxuICAgIGlmICghZW1vamkudGV4dCkgZW1vamkudGV4dCA9ICcnXG5cbiAgICBpZiAoIWVtb2ppLmFkZGVkX2luKSBlbW9qaS5hZGRlZF9pbiA9IDZcbiAgICBlbW9qaS5hZGRlZF9pbiA9IGVtb2ppLmFkZGVkX2luLnRvRml4ZWQoMSlcblxuICAgIGVtb2ppLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppKVxuICB9XG4gIGRhdGEgPSBkZWVwRnJlZXplKGRhdGEpXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCB7IGJ1aWxkU2VhcmNoLCB1bmNvbXByZXNzIH1cbiIsImltcG9ydCB7IGludGVyc2VjdCwgdW5pZmllZFRvTmF0aXZlIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IHVuY29tcHJlc3MsIGJ1aWxkU2VhcmNoIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi9mcmVxdWVudGx5J1xuXG5jb25zdCBTSEVFVF9DT0xVTU5TID0gNTdcbmNvbnN0IENPTE9OU19SRUdFWCA9IC9eKD86XFw6KFteXFw6XSspXFw6KSg/OlxcOnNraW4tdG9uZS0oXFxkKVxcOik/JC9cbi8vIFNraW4gdG9uZXNcbmNvbnN0IFNLSU5TID0gWycxRjNGQScsICcxRjNGQicsICcxRjNGQycsICcxRjNGRCcsICcxRjNGRScsICcxRjNGRiddXG5cbi8qKlxuICogRW1vamkgZGF0YSBzdHJ1Y3R1cmU6XG4gKiB7XG4gKiAgICBcImNvbXByZXNzZWRcIjogZmFsc2UsXG4gKiAgICBcImFsaWFzZXNcIjoge1xuICogICAgICBjb2xsaXNpb246IFwiYm9vbVwiXG4gKiAgICAgIGNvb2tpbmc6IFwiZnJpZWRfZWdnXCJcbiAqICAgICAgZW52ZWxvcGU6IFwiZW1haWxcIlxuICogICAgICBmYWNlX3dpdGhfZmluZ2VyX2NvdmVyaW5nX2Nsb3NlZF9saXBzOiBcInNodXNoaW5nX2ZhY2VcIlxuICogICAgICAuLi5cbiAqICAgIH0sXG4gKiAgICBcImNhdGVnb3JpZXNcIjogWyB7XG4gKiAgICAgIGlkOiBcInBlb3BsZVwiLFxuICogICAgICBuYW1lOiBcIlNtaWxleXMgJiBFbW90aW9uXCIsXG4gKiAgICAgIGVtb2ppczogWyBcImdyaW5uaW5nXCIsIFwiZ3JpblwiLCBcImpveVwiLCAuLi4gXVxuICogICAgfSwge1xuICogICAgICBpZDogXCJuYXR1cmVcIixcbiAqICAgICAgbmFtZTogXCJBbmltYWxzICYgTmF0dXJlXCIsXG4gKiAgICAgIGVtb2ppczogWyBcIm1vbmtleV9mYWNlXCIsIFwibW9uZXlcIiwgXCJnb3JpbGxhXCIsIC4uLiBdXG4gKiAgICB9LFxuICogICAgLi4uXG4gKiAgICBdLFxuICogICAgXCJlbW9qaXNcIjogW1xuICogICAgICBzbWlsZXk6IHtcbiAqICAgICAgICBhZGRlZF9pbjogXCI2LjBcIixcbiAqICAgICAgICBlbW90aWNvbnM6IFtcIj0pXCIsIFwiPS0pXCJdLFxuICogICAgICAgIGhhc19pbWdfYXBwbGU6IHRydWUsXG4gKiAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcbiAqICAgICAgICBoYXNfaW1nX3R3aXR0ZXI6IHRydWUsXG4gKiAgICAgICAga2V5d29yZHM6IFtcImZhY2VcIiwgXCJoYXBweVwiLCBcImpveVwiLCBcImhhaGFcIiwgXCI6RFwiLCBcIjopXCIsIFwic21pbGVcIiwgXCJmdW5ueVwiXSxcbiAqICAgICAgICBuYW1lOiBcIlNtaWxpbmcgRmFjZSB3aXRoIE9wZW4gTW91dGhcIixcbiAqICAgICAgICBub25fcXVhbGlmaWVkOiB1bmRlZmluZWQsXG4gKiAgICAgICAgc2VhcmNoOiBcInNtaWxleSxzbWlsaW5nLGZhY2Usd2l0aCxvcGVuLG1vdXRoLGhhcHB5LGpveSxoYWhhLDpkLDopLHNtaWxlLGZ1bm55LD0pLD0tKVwiLFxuICogICAgICAgIHNoZWV0X3g6IDMwLFxuICogICAgICAgIHNoZWV0X3k6IDI3LFxuICogICAgICAgIHNob3J0X25hbWVzOiBbXCJzbWlsZXlcIl0sXG4gKiAgICAgICAgdGV4dDogXCI6KVwiLFxuICogICAgICAgIHVuaWZpZWQ6IFwiMUY2MDNcIixcbiAqICAgICAgfSwge1xuICogICAgICArMTogeyAgICAvLyBlbW9qaSB3aXRoIHNraW5fdmFyaWF0aW9uc1xuICogICAgICAgICAgLi4uLCAvLyBhbGwgdGhlIHJlZ3VsYXIgZmllbGRzIGFyZSBwcmVzZW50XG4gKiAgICAgICAgICBuYW1lOiBcIlRodW1icyBVcCBTaWduXCIsXG4gKiAgICAgICAgICBzaG9ydF9uYW1lczogKDIpIFtcIisxXCIsIFwidGh1bWJzdXBcIl0sXG4gKiAgICAgICAgICBza2luX3ZhcmlhdGlvbnM6IHtcbiAqICAgICAgICAgICAgMUYzRkI6ICAgICAgICAgICAgIC8vIGVhY2ggdmFyaWF0aW9uIGhhcyBhZGRpdGlvbmFsIHNldCBvZiBmaWVsZHM6XG4gKiAgICAgICAgICAgICAgYWRkZWRfaW46IFwiOC4wXCIsXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2ZhY2Vib29rOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfZ29vZ2xlOiB0cnVlLFxuICogICAgICAgICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcbiAqICAgICAgICAgICAgICBpbWFnZTogXCIxZjQ0ZC0xZjNmYi5wbmdcIixcbiAqICAgICAgICAgICAgICBub25fcXVhbGlmaWVkOiBudWxsLFxuICogICAgICAgICAgICAgIHNoZWV0X3g6IDE0LFxuICogICAgICAgICAgICAgIHNoZWV0X3k6IDUwLFxuICogICAgICAgICAgICAgIHVuaWZpZWQ6IFwiMUY0NEQtMUYzRkJcIixcbiAqICAgICAgICAgICAgMUYzRkI6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGQzoge+KApn0sXG4gKiAgICAgICAgICAgIDFGM0ZEOiB74oCmfSxcbiAqICAgICAgICAgICAgMUYzRkU6IHvigKZ9LFxuICogICAgICAgICAgICAxRjNGRjoge+KApn1cbiAqICAgICAgICAgICAgfSxcbiAqICAgICAgICAgIC4uLlxuICogICAgICB9LFxuICogICAgICBhOiB7ICAvLyBlbW9qaSB3aXRoIG5vbl9xdWFsaWZpZWQgZmllbGQgc2V0XG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXG4gKiAgICAgICAgZW1vdGljb25zOiB1bmRlZmluZWQsXG4gKiAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcbiAqICAgICAgICAuLi5cbiAqICAgICAgICBub25fcXVhbGlmaWVkOiBcIjFGMTcwXCIsXG4gKiAgICAgICAgdW5pZmllZDogXCIxRjE3MC1GRTBGXCIsXG4gKiAgICAgfSxcbiAqICAgICAuLi5cbiAqICAgXVxuICogfVxuICovXG5cbi8qKlxuICogV3JhcHMgcmF3IGphc29uIGVtb2ppIGRhdGEsIHNlcnZlcyBhcyBkYXRhIHNvdXJjZSBmb3JcbiAqIGVtb2ppIHBpY2tlciBjb21wb25lbnRzLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9hbGwuanNvbidcbiAqICAgbGV0IGluZGV4ID0gbmV3IEVtb2ppSW5kZXgoZGF0YSlcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBFbW9qaUluZGV4IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFJhdyBqc29uIGRhdGEsIHNlZSB0aGUgc3RydWN0dXJlIGFib3ZlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGFkZGl0aW9uYWwgb3B0aW9ucywgYXMgYW4gb2JqZWN0OlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbW9qaXNUb1Nob3dGaWx0ZXIgLSBvcHRpb25hbCwgZnVuY3Rpb24gdG8gZmlsdGVyIG91dFxuICAgKiAgIHNvbWUgZW1vamlzLCBmdW5jdGlvbihlbW9qaSkgeyByZXR1cm4gdHJ1ZXxmYWxzZSB9XG4gICAqICAgd2hlcmUgYGVtb2ppYCBpcyBhbiByYXcgZW1vamkgb2JqZWN0LCBzZWUgZGF0YS5lbW9qaXMgYWJvdmUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGluY2x1ZGUgLSBvcHRpb25hbCwgYSBsaXN0IG9mIGNhdGVnb3J5IGlkcyB0byBpbmNsdWRlLlxuICAgKiBAcGFyYW0ge0FycmF5fSBleGNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gZXhjbHVkZS5cbiAgICogQHBhcmFtIHtBcnJheX0gY3VzdG9tIC0gb3B0aW9uYWwsIGEgbGlzdCBjdXN0b20gZW1vamlzLCBlYWNoIGVtb2ppIGlzXG4gICAqICAgYW4gb2JqZWN0LCBzZWUgZGF0YS5lbW9qaXMgYWJvdmUgZm9yIGV4YW1wbGVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgZGF0YSxcbiAgICB7XG4gICAgICBlbW9qaXNUb1Nob3dGaWx0ZXIsXG4gICAgICBpbmNsdWRlLFxuICAgICAgZXhjbHVkZSxcbiAgICAgIGN1c3RvbSxcbiAgICAgIHJlY2VudCxcbiAgICAgIHJlY2VudExlbmd0aCA9IDIwLFxuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5fZGF0YSA9IHVuY29tcHJlc3MoZGF0YSlcbiAgICAvLyBDYWxsYmFjayB0byBleGNsdWRlIHNwZWNpZmljIGVtb2ppc1xuICAgIHRoaXMuX2Vtb2ppc0ZpbHRlciA9IGVtb2ppc1RvU2hvd0ZpbHRlciB8fCBudWxsXG4gICAgLy8gQ2F0ZWdvcmllcyB0byBpbmNsdWRlIC8gZXhjbHVkZVxuICAgIHRoaXMuX2luY2x1ZGUgPSBpbmNsdWRlIHx8IG51bGxcbiAgICB0aGlzLl9leGNsdWRlID0gZXhjbHVkZSB8fCBudWxsXG4gICAgLy8gQ3VzdG9tIGVtb2ppc1xuICAgIHRoaXMuX2N1c3RvbSA9IGN1c3RvbSB8fCBbXVxuICAgIC8vIFJlY2VudCBlbW9qaXNcbiAgICAvLyBUT0RPOiBtYWtlIHBhcmFtZXRlciBjb25maWd1cmFibGVcbiAgICB0aGlzLl9yZWNlbnQgPSByZWNlbnQgfHwgZnJlcXVlbnRseS5nZXQocmVjZW50TGVuZ3RoKVxuXG4gICAgdGhpcy5fZW1vamlzID0ge31cbiAgICB0aGlzLl9uYXRpdmVFbW9qaXMgPSB7fVxuICAgIHRoaXMuX2Vtb3RpY29ucyA9IHt9XG5cbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gW11cbiAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeSA9IHsgaWQ6ICdyZWNlbnQnLCBuYW1lOiAnUmVjZW50JywgZW1vamlzOiBbXSB9XG4gICAgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkgPSB7IGlkOiAnY3VzdG9tJywgbmFtZTogJ0N1c3RvbScsIGVtb2ppczogW10gfVxuICAgIHRoaXMuX3NlYXJjaEluZGV4ID0ge31cbiAgICB0aGlzLmJ1aWxkSW5kZXgoKVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGJ1aWxkSW5kZXgoKSB7XG4gICAgbGV0IGFsbENhdGVnb3JpZXMgPSB0aGlzLl9kYXRhLmNhdGVnb3JpZXNcblxuICAgIGlmICh0aGlzLl9pbmNsdWRlKSB7XG4gICAgICAvLyBSZW1vdmUgY2F0ZWdvcmllcyB0aGF0IGFyZSBub3QgaW4gdGhlIGluY2x1ZGUgbGlzdC5cbiAgICAgIGFsbENhdGVnb3JpZXMgPSBhbGxDYXRlZ29yaWVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZS5pbmNsdWRlcyhpdGVtLmlkKVxuICAgICAgfSlcbiAgICAgIC8vIFNvcnQgY2F0ZWdvcmllcyBhY2NvcmRpbmcgdG8gdGhlIGluY2x1ZGUgbGlzdC5cbiAgICAgIGFsbENhdGVnb3JpZXMgPSBhbGxDYXRlZ29yaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhBID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGEuaWQpXG4gICAgICAgIGNvbnN0IGluZGV4QiA9IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihiLmlkKVxuICAgICAgICBpZiAoaW5kZXhBIDwgaW5kZXhCKSB7XG4gICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4QSA+IGluZGV4Qikge1xuICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYWxsQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5RGF0YS5pZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgY2F0ZWdvcnkgPSB7XG4gICAgICAgIGlkOiBjYXRlZ29yeURhdGEuaWQsXG4gICAgICAgIG5hbWU6IGNhdGVnb3J5RGF0YS5uYW1lLFxuICAgICAgICBlbW9qaXM6IFtdLFxuICAgICAgfVxuICAgICAgY2F0ZWdvcnlEYXRhLmVtb2ppcy5mb3JFYWNoKChlbW9qaUlkKSA9PiB7XG4gICAgICAgIGxldCBlbW9qaSA9IHRoaXMuYWRkRW1vamkoZW1vamlJZClcbiAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgY2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAoY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ2N1c3RvbScpKSB7XG4gICAgICBpZiAodGhpcy5fY3VzdG9tLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tKSB7XG4gICAgICAgICAgdGhpcy5hZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKHRoaXMuX2N1c3RvbUNhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoJ3JlY2VudCcpKSB7XG4gICAgICBpZiAodGhpcy5fcmVjZW50Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZWNlbnQubWFwKChpZCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGN1c3RvbUVtb2ppIG9mIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcykge1xuICAgICAgICAgICAgaWYgKGN1c3RvbUVtb2ppLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaChjdXN0b21FbW9qaSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmhhc0Vtb2ppKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLnB1c2godGhpcy5lbW9qaShpZCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gQWRkIHJlY2VudCBjYXRlZ29yeSB0byB0aGUgdG9wXG4gICAgICBpZiAodGhpcy5fcmVjZW50Q2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5fcmVjZW50Q2F0ZWdvcnkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGVtb2ppIGZyb20gdGhlIHN0cmluZ1xuICAgKi9cbiAgZmluZEVtb2ppKGVtb2ppLCBza2luKSB7XG4gICAgLy8gMS4gUGFyc2UgYXMgOmVtb2ppX25hbWU6c2tpbi10b25lLXh4OlxuICAgIGxldCBtYXRjaGVzID0gZW1vamkubWF0Y2goQ09MT05TX1JFR0VYKVxuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGVtb2ppID0gbWF0Y2hlc1sxXVxuICAgICAgaWYgKG1hdGNoZXNbMl0pIHtcbiAgICAgICAgc2tpbiA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgZW1vamkgaXMgYW4gYWxpYXNcbiAgICBpZiAodGhpcy5fZGF0YS5hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgZW1vamkgPSB0aGlzLl9kYXRhLmFsaWFzZXNbZW1vamldXG4gICAgfVxuXG4gICAgLy8gMy4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIGVtb2ppXG4gICAgaWYgKHRoaXMuX2Vtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIGxldCBlbW9qaU9iamVjdCA9IHRoaXMuX2Vtb2ppc1tlbW9qaV1cbiAgICAgIGlmIChza2luKSB7XG4gICAgICAgIHJldHVybiBlbW9qaU9iamVjdC5nZXRTa2luKHNraW4pXG4gICAgICB9XG4gICAgICByZXR1cm4gZW1vamlPYmplY3RcbiAgICB9XG5cbiAgICAvLyA0LiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgbmF0aXZlIGVtb2ppXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVtb2ppcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVFbW9qaXNbZW1vamldXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzXG4gIH1cblxuICBlbW9qaShlbW9qaUlkKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xuICAgICAgZW1vamlJZCA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaUlkXVxuICAgIH1cbiAgICBsZXQgZW1vamkgPSB0aGlzLl9lbW9qaXNbZW1vamlJZF1cbiAgICBpZiAoIWVtb2ppKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCBlbW9qaSBieSBpZDogJyArIGVtb2ppSWQpXG4gICAgfVxuICAgIHJldHVybiBlbW9qaVxuICB9XG5cbiAgZmlyc3RFbW9qaSgpIHtcbiAgICBsZXQgZW1vamkgPSB0aGlzLl9lbW9qaXNbT2JqZWN0LmtleXModGhpcy5fZW1vamlzKVswXV1cbiAgICBpZiAoIWVtb2ppKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZ2V0IGZpcnN0IGVtb2ppJylcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBoYXNFbW9qaShlbW9qaUlkKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xuICAgICAgZW1vamlJZCA9IHRoaXMuX2RhdGEuYWxpYXNlc1tlbW9qaUlkXVxuICAgIH1cbiAgICBpZiAodGhpcy5fZW1vamlzW2Vtb2ppSWRdKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5hdGl2ZUVtb2ppKHVuaWNvZGVFbW9qaSkge1xuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkodW5pY29kZUVtb2ppKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUVtb2ppc1t1bmljb2RlRW1vamldXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzZWFyY2godmFsdWUsIG1heFJlc3VsdHMpIHtcbiAgICBtYXhSZXN1bHRzIHx8IChtYXhSZXN1bHRzID0gNzUpXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSAnLScgfHwgdmFsdWUgPT0gJy0xJykge1xuICAgICAgcmV0dXJuIFt0aGlzLmVtb2ppKCctMScpXVxuICAgIH1cblxuICAgIGxldCB2YWx1ZXMgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzfCx8XFwtfF9dKy8pXG4gICAgbGV0IGFsbFJlc3VsdHMgPSBbXVxuXG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiAyKSB7XG4gICAgICB2YWx1ZXMgPSBbdmFsdWVzWzBdLCB2YWx1ZXNbMV1dXG4gICAgfVxuXG4gICAgYWxsUmVzdWx0cyA9IHZhbHVlc1xuICAgICAgLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU3RhcnQgc2VhcmNoaW4gaW4gdGhlIGdsb2JhbCBsaXN0IG9mIGVtb2ppc1xuICAgICAgICBsZXQgZW1vamlzID0gdGhpcy5fZW1vamlzXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLl9zZWFyY2hJbmRleFxuICAgICAgICBsZXQgbGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGNoYXJJbmRleCA9IDA7IGNoYXJJbmRleCA8IHZhbHVlLmxlbmd0aDsgY2hhckluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBjaGFyID0gdmFsdWVbY2hhckluZGV4XVxuICAgICAgICAgIGxlbmd0aCsrXG5cbiAgICAgICAgICBjdXJyZW50SW5kZXhbY2hhcl0gfHwgKGN1cnJlbnRJbmRleFtjaGFyXSA9IHt9KVxuICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGN1cnJlbnRJbmRleFtjaGFyXVxuXG4gICAgICAgICAgaWYgKCFjdXJyZW50SW5kZXgucmVzdWx0cykge1xuICAgICAgICAgICAgbGV0IHNjb3JlcyA9IHt9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cyA9IFtdXG4gICAgICAgICAgICBjdXJyZW50SW5kZXguZW1vamlzID0ge31cblxuICAgICAgICAgICAgZm9yIChsZXQgZW1vamlJZCBpbiBlbW9qaXMpIHtcbiAgICAgICAgICAgICAgbGV0IGVtb2ppID0gZW1vamlzW2Vtb2ppSWRdXG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBpcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcgd2l0aCB3b3JkcywgcmVsYXRlZFxuICAgICAgICAgICAgICAvLyB0byB0aGUgZW1vamksIGZvciBleGFtcGxlOlxuICAgICAgICAgICAgICAvLyBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcbiAgICAgICAgICAgICAgbGV0IHNlYXJjaCA9IGVtb2ppLl9kYXRhLnNlYXJjaFxuICAgICAgICAgICAgICBsZXQgc3ViID0gdmFsdWUuc3Vic3RyKDAsIGxlbmd0aClcbiAgICAgICAgICAgICAgbGV0IHN1YkluZGV4ID0gc2VhcmNoLmluZGV4T2Yoc3ViKVxuICAgICAgICAgICAgICBpZiAoc3ViSW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSBzdWJJbmRleCArIDFcbiAgICAgICAgICAgICAgICBpZiAoc3ViID09IGVtb2ppSWQpIHNjb3JlID0gMFxuXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMucHVzaChlbW9qaSlcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXguZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcblxuICAgICAgICAgICAgICAgIHNjb3Jlc1tlbW9qaUlkXSA9IHNjb3JlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGFTY29yZSA9IHNjb3Jlc1thLmlkXSxcbiAgICAgICAgICAgICAgICBiU2NvcmUgPSBzY29yZXNbYi5pZF1cbiAgICAgICAgICAgICAgcmV0dXJuIGFTY29yZSAtIGJTY29yZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb250aW51ZSBzZWFyY2ggaW4gdGhlIHJlZHVjZWQgc2V0IG9mIGVtb2ppc1xuICAgICAgICAgIGVtb2ppcyA9IGN1cnJlbnRJbmRleC5lbW9qaXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudEluZGV4LnJlc3VsdHNcbiAgICAgICAgLy8gVGhlIFwiZmlsdGVyXCIgY2FsbCByZW1vdmVzIHVuZGVmaW5lZCB2YWx1ZXMgZnJvbSBhbGxSZXN1bHRzXG4gICAgICAgIC8vIGFycmF5LCBmb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSBcInRlc3QgXCIgKHdpdGggdHJhaWxpbmcgc3BhY2UpLFxuICAgICAgICAvLyB3ZSB3aWxsIGdldCBcIltBcnJheSwgdW5kZWZpbmVkXVwiIGZvciBhbGxSZXN1bHRzIGFuZCBhZnRlclxuICAgICAgICAvLyB0aGUgXCJmaWx0ZXJcIiBjYWxsIGl0IHdpbGwgdHVybiBpbnRvIFwiW0FycmF5XVwiXG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYSkgPT4gYSlcblxuICAgIHZhciByZXN1bHRzID0gbnVsbFxuICAgIGlmIChhbGxSZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJlc3VsdHMgPSBpbnRlcnNlY3QuYXBwbHkobnVsbCwgYWxsUmVzdWx0cylcbiAgICB9IGVsc2UgaWYgKGFsbFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHRzID0gYWxsUmVzdWx0c1swXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRzID0gW11cbiAgICB9XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiBtYXhSZXN1bHRzKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBtYXhSZXN1bHRzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpIHtcbiAgICBsZXQgZW1vamlEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tRW1vamksIHtcbiAgICAgIGlkOiBjdXN0b21FbW9qaS5zaG9ydF9uYW1lc1swXSxcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICB9KVxuICAgIGlmICghZW1vamlEYXRhLnNlYXJjaCkge1xuICAgICAgZW1vamlEYXRhLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppRGF0YSlcbiAgICB9XG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShlbW9qaURhdGEpXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppLmlkXSA9IGVtb2ppXG4gICAgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICBhZGRFbW9qaShlbW9qaUlkKSB7XG4gICAgLy8gV2UgZXhwZWN0IHRoZSBjb3JyZWN0IGVtb2ppIGlkIHRoYXQgaXMgcHJlc2VudCBpbiB0aGUgZW1vamlzIGRhdGEuXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhLmVtb2ppc1tlbW9qaUlkXVxuXG4gICAgaWYgKCF0aGlzLmlzRW1vamlOZWVkZWQoZGF0YSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBlbW9qaSA9IG5ldyBFbW9qaURhdGEoZGF0YSlcbiAgICB0aGlzLl9lbW9qaXNbZW1vamlJZF0gPSBlbW9qaVxuICAgIGlmIChlbW9qaS5uYXRpdmUpIHtcbiAgICAgIHRoaXMuX25hdGl2ZUVtb2ppc1tlbW9qaS5uYXRpdmVdID0gZW1vamlcbiAgICB9XG4gICAgaWYgKGVtb2ppLl9za2lucykge1xuICAgICAgZm9yIChsZXQgaWR4IGluIGVtb2ppLl9za2lucykge1xuICAgICAgICBsZXQgc2tpbiA9IGVtb2ppLl9za2luc1tpZHhdXG4gICAgICAgIGlmIChza2luLm5hdGl2ZSkge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUVtb2ppc1tza2luLm5hdGl2ZV0gPSBza2luXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW1vamkuZW1vdGljb25zKSB7XG4gICAgICBlbW9qaS5lbW90aWNvbnMuZm9yRWFjaCgoZW1vdGljb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2Vtb3RpY29uc1tlbW90aWNvbl0pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dID0gZW1vamlJZFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGNhdGVnb3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlfaWQgLSBUaGUgY2F0ZWdvcnkgaWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cbiAgICovXG4gIGlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnlfaWQpIHtcbiAgICBsZXQgaXNJbmNsdWRlZCA9XG4gICAgICB0aGlzLl9pbmNsdWRlICYmIHRoaXMuX2luY2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5faW5jbHVkZS5pbmRleE9mKGNhdGVnb3J5X2lkKSA+IC0xXG4gICAgICAgIDogdHJ1ZVxuICAgIGxldCBpc0V4Y2x1ZGVkID1cbiAgICAgIHRoaXMuX2V4Y2x1ZGUgJiYgdGhpcy5fZXhjbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLl9leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcbiAgICAgICAgOiBmYWxzZVxuICAgIGlmICghaXNJbmNsdWRlZCB8fCBpc0V4Y2x1ZGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gZW1vamkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbW9qaSAtIFRoZSByYXcgZW1vamkgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXG4gICAqL1xuICBpc0Vtb2ppTmVlZGVkKGVtb2ppKSB7XG4gICAgaWYgKHRoaXMuX2Vtb2ppc0ZpbHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Vtb2ppc0ZpbHRlcihlbW9qaSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1vamlEYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgIHRoaXMuX3NraW5zID0gbnVsbFxuICAgIGlmICh0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9ucykge1xuICAgICAgdGhpcy5fc2tpbnMgPSBbXVxuICAgICAgZm9yICh2YXIgc2tpbklkeCBpbiBTS0lOUykge1xuICAgICAgICBsZXQgc2tpbktleSA9IFNLSU5TW3NraW5JZHhdXG4gICAgICAgIGxldCB2YXJpYXRpb25EYXRhID0gdGhpcy5fZGF0YS5za2luX3ZhcmlhdGlvbnNbc2tpbktleV1cbiAgICAgICAgbGV0IHNraW5EYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgc2tpbkRhdGFba10gPSB2YXJpYXRpb25EYXRhW2tdXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHNraW5EYXRhLnNraW5fdmFyaWF0aW9uc1xuICAgICAgICBza2luRGF0YVsnc2tpbl90b25lJ10gPSBwYXJzZUludChza2luSWR4KSArIDFcbiAgICAgICAgdGhpcy5fc2tpbnMucHVzaChuZXcgRW1vamlEYXRhKHNraW5EYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2FuaXRpemVkID0gc2FuaXRpemUodGhpcy5fZGF0YSlcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fc2FuaXRpemVkKSB7XG4gICAgICB0aGlzW2tleV0gPSB0aGlzLl9zYW5pdGl6ZWRba2V5XVxuICAgIH1cbiAgICB0aGlzLnNob3J0X25hbWVzID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1xuICAgIHRoaXMuc2hvcnRfbmFtZSA9IHRoaXMuX2RhdGEuc2hvcnRfbmFtZXNbMF1cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXRTa2luKHNraW5JZHgpIHtcbiAgICBpZiAoc2tpbklkeCAmJiBza2luSWR4ICE9ICduYXRpdmUnICYmIHRoaXMuX3NraW5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2tpbnNbc2tpbklkeCAtIDFdXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBsZXQgbXVsdGlwbHkgPSAxMDAgLyBTSEVFVF9DT0xVTU5TLFxuICAgICAgeCA9IE1hdGgucm91bmQobXVsdGlwbHkgKiB0aGlzLl9kYXRhLnNoZWV0X3ggKiAxMDApIC8gMTAwLFxuICAgICAgeSA9IE1hdGgucm91bmQobXVsdGlwbHkgKiB0aGlzLl9kYXRhLnNoZWV0X3kgKiAxMDApIC8gMTAwXG4gICAgcmV0dXJuIGAke3h9JSAke3l9JWBcbiAgfVxuXG4gIGFyaWFMYWJlbCgpIHtcbiAgICByZXR1cm4gW3RoaXMubmF0aXZlXS5jb25jYXQodGhpcy5zaG9ydF9uYW1lcykuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1vamlWaWV3IHtcbiAgLyoqXG4gICAqIGVtb2ppIC0gRW1vamkgdG8gZGlzcGxheVxuICAgKiBzZXQgLSBzdHJpbmcsIGVtb2ppIHNldCBuYW1lXG4gICAqIG5hdGl2ZSAtIGJvb2xlYW4sIHdoZXRoZXIgdG8gcmVuZGVyIG5hdGl2ZSBlbW9qaVxuICAgKiBmYWxsYmFjayAtIGZhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlbmRlciBtaXNzaW5nIGVtb2ppLCBvcHRpb25hbFxuICAgKiBlbW9qaVRvb2x0aXAgLSB3ZXRoZXIgd2UgbmVlZCB0byBzaG93IHRoZSBlbW9qaSB0b29sdGlwLCBvcHRpb25hbFxuICAgKiBlbW9qaVNpemUgLSBlbW9qaSBzaXplIGluIHBpeGVscywgb3B0aW9uYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVtb2ppLCBza2luLCBzZXQsIG5hdGl2ZSwgZmFsbGJhY2ssIGVtb2ppVG9vbHRpcCwgZW1vamlTaXplKSB7XG4gICAgdGhpcy5fZW1vamkgPSBlbW9qaVxuICAgIHRoaXMuX25hdGl2ZSA9IG5hdGl2ZVxuICAgIHRoaXMuX3NraW4gPSBza2luXG4gICAgdGhpcy5fc2V0ID0gc2V0XG4gICAgdGhpcy5fZmFsbGJhY2sgPSBmYWxsYmFja1xuXG4gICAgdGhpcy5jYW5SZW5kZXIgPSB0aGlzLl9jYW5SZW5kZXIoKVxuICAgIHRoaXMuY3NzQ2xhc3MgPSB0aGlzLl9jc3NDbGFzcygpXG4gICAgdGhpcy5jc3NTdHlsZSA9IHRoaXMuX2Nzc1N0eWxlKGVtb2ppU2l6ZSlcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLl9jb250ZW50KClcbiAgICB0aGlzLnRpdGxlID0gZW1vamlUb29sdGlwID09PSB0cnVlID8gZW1vamkuc2hvcnRfbmFtZSA6IG51bGxcbiAgICB0aGlzLmFyaWFMYWJlbCA9IGVtb2ppLmFyaWFMYWJlbCgpXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXRFbW9qaSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1vamkuZ2V0U2tpbih0aGlzLl9za2luKVxuICB9XG5cbiAgX2NhblJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5faXNDdXN0b20oKSB8fCB0aGlzLl9pc05hdGl2ZSgpIHx8IHRoaXMuX2hhc0Vtb2ppKCkgfHwgdGhpcy5fZmFsbGJhY2tcbiAgICApXG4gIH1cblxuICBfY3NzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIFsnZW1vamktc2V0LScgKyB0aGlzLl9zZXQsICdlbW9qaS10eXBlLScgKyB0aGlzLl9lbW9qaVR5cGUoKV1cbiAgfVxuXG4gIF9jc3NTdHlsZShlbW9qaVNpemUpIHtcbiAgICBsZXQgY3NzU3R5bGUgPSB7fVxuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICBjc3NTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyB0aGlzLmdldEVtb2ppKCkuX2RhdGEuaW1hZ2VVcmwgKyAnKScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9oYXNFbW9qaSgpICYmICF0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICBjc3NTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB0aGlzLmdldEVtb2ppKCkuZ2V0UG9zaXRpb24oKSxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVtb2ppU2l6ZSkge1xuICAgICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgICAgLy8gU2V0IGZvbnQtc2l6ZSBmb3IgbmF0aXZlIGVtb2ppLlxuICAgICAgICBjc3NTdHlsZSA9IE9iamVjdC5hc3NpZ24oY3NzU3R5bGUsIHtcbiAgICAgICAgICAvLyBmb250LXNpemUgaXMgdXNlZCBmb3IgbmF0aXZlIGVtb2ppIHdoaWNoIHdlIG5lZWRcbiAgICAgICAgICAvLyB0byBzY2FsZSB3aXRoIDAuOTUgZmFjdG9yIHRvIGhhdmUgdGhlbSBsb29rIGFwcHJveGltYXRlbHlcbiAgICAgICAgICAvLyB0aGUgc2FtZSBzaXplIGFzIGltYWdlLWJhc2VkIGVtb2ppLlxuICAgICAgICAgIGZvbnRTaXplOiBNYXRoLnJvdW5kKGVtb2ppU2l6ZSAqIDAuOTUgKiAxMCkgLyAxMCArICdweCcsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgd2lkdGgvaGVpZ2h0IGZvciBpbWFnZSBlbW9qaS5cbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XG4gICAgICAgICAgd2lkdGg6IGVtb2ppU2l6ZSArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiBlbW9qaVNpemUgKyAncHgnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3NzU3R5bGVcbiAgfVxuXG4gIF9jb250ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc0N1c3RvbSgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEVtb2ppKCkubmF0aXZlXG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZhbGxiYWNrID8gdGhpcy5fZmFsbGJhY2sodGhpcy5nZXRFbW9qaSgpKSA6IG51bGxcbiAgfVxuXG4gIF9pc05hdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF0aXZlXG4gIH1cblxuICBfaXNDdXN0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5jdXN0b21cbiAgfVxuXG4gIF9oYXNFbW9qaSgpIHtcbiAgICBpZiAoIXRoaXMuZ2V0RW1vamkoKS5fZGF0YSkge1xuICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIHdlIGhhdmUgbm8gZGF0YS5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBoYXNJbWFnZSA9IHRoaXMuZ2V0RW1vamkoKS5fZGF0YVsnaGFzX2ltZ18nICsgdGhpcy5fc2V0XVxuICAgIGlmIChoYXNJbWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBoYXNfaW1nX3h4eCBpbiB0aGUgZGF0YSwgd2UgYXJlIHdvcmtpbmcgd2l0aFxuICAgICAgLy8gc3BlY2lmaWMgZGF0YSBmaWxlLCBsaWtlIGZhY2Vib29rLmpzb24sIHNvIHdlIGFzc3VtZSBhbGxcbiAgICAgIC8vIGVtb2ppcyBhcmUgYXZhaWxhYmxlICh0aGUgOnNldCBzZXR0aW5nIGZvciBwaWNrZXIgc2hvdWxkXG4gICAgICAvLyBtYXRjaCB0aGUgZGF0YSBmaWxlKS5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIHVzaW5nIGFsbC5qc29uIGFuZCBjYW4gc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50XG4gICAgLy8gc2V0cyAtIGluIHRoaXMgY2FzZSB0aGUgYGhhc19pbWdfe3NldF9uYW1lfWAgaXMgYSBib29sZWFuIHRoYXRcbiAgICAvLyBpbmRpY2F0ZXMgaWYgdGhlcmUgaXMgc3VjaCBpbWFnZSBvciBub3QgZm9yIGEgZ2l2ZW4gc2V0LlxuICAgIHJldHVybiBoYXNJbWFnZVxuICB9XG5cbiAgX2Vtb2ppVHlwZSgpIHtcbiAgICBpZiAodGhpcy5faXNDdXN0b20oKSkge1xuICAgICAgcmV0dXJuICdjdXN0b20nXG4gICAgfVxuICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gJ25hdGl2ZSdcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcbiAgICAgIHJldHVybiAnaW1hZ2UnXG4gICAgfVxuICAgIHJldHVybiAnZmFsbGJhY2snXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplKGVtb2ppKSB7XG4gIHZhciB7XG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRfbmFtZXMsXG4gICAgICBza2luX3RvbmUsXG4gICAgICBza2luX3ZhcmlhdGlvbnMsXG4gICAgICBlbW90aWNvbnMsXG4gICAgICB1bmlmaWVkLFxuICAgICAgY3VzdG9tLFxuICAgICAgaW1hZ2VVcmwsXG4gICAgfSA9IGVtb2ppLFxuICAgIGlkID0gZW1vamkuaWQgfHwgc2hvcnRfbmFtZXNbMF0sXG4gICAgY29sb25zID0gYDoke2lkfTpgXG5cbiAgaWYgKGN1c3RvbSkge1xuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBjb2xvbnMsXG4gICAgICBlbW90aWNvbnMsXG4gICAgICBjdXN0b20sXG4gICAgICBpbWFnZVVybCxcbiAgICB9XG4gIH1cblxuICBpZiAoc2tpbl90b25lKSB7XG4gICAgY29sb25zICs9IGA6c2tpbi10b25lLSR7c2tpbl90b25lfTpgXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgY29sb25zLFxuICAgIGVtb3RpY29ucyxcbiAgICB1bmlmaWVkOiB1bmlmaWVkLnRvTG93ZXJDYXNlKCksXG4gICAgc2tpbjogc2tpbl90b25lIHx8IChza2luX3ZhcmlhdGlvbnMgPyAxIDogbnVsbCksXG4gICAgbmF0aXZlOiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCksXG4gIH1cbn1cbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBERUZBVUxUUyA9IFtcbiAgJysxJyxcbiAgJ2dyaW5uaW5nJyxcbiAgJ2tpc3NpbmdfaGVhcnQnLFxuICAnaGVhcnRfZXllcycsXG4gICdsYXVnaGluZycsXG4gICdzdHVja19vdXRfdG9uZ3VlX3dpbmtpbmdfZXllJyxcbiAgJ3N3ZWF0X3NtaWxlJyxcbiAgJ2pveScsXG4gICdzY3JlYW0nLFxuICAnZGlzYXBwb2ludGVkJyxcbiAgJ3VuYW11c2VkJyxcbiAgJ3dlYXJ5JyxcbiAgJ3NvYicsXG4gICdzdW5nbGFzc2VzJyxcbiAgJ2hlYXJ0JyxcbiAgJ2hhbmtleScsXG5dXG5cbmxldCBmcmVxdWVudGx5LCBpbml0aWFsaXplZFxubGV0IGRlZmF1bHRzID0ge31cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gIGZyZXF1ZW50bHkgPSBzdG9yZS5nZXQoJ2ZyZXF1ZW50bHknKVxufVxuXG5mdW5jdGlvbiBhZGQoZW1vamkpIHtcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXG4gIHZhciB7IGlkIH0gPSBlbW9qaVxuXG4gIGZyZXF1ZW50bHkgfHwgKGZyZXF1ZW50bHkgPSBkZWZhdWx0cylcbiAgZnJlcXVlbnRseVtpZF0gfHwgKGZyZXF1ZW50bHlbaWRdID0gMClcbiAgZnJlcXVlbnRseVtpZF0gKz0gMVxuXG4gIHN0b3JlLnNldCgnbGFzdCcsIGlkKVxuICBzdG9yZS5zZXQoJ2ZyZXF1ZW50bHknLCBmcmVxdWVudGx5KVxufVxuXG5mdW5jdGlvbiBnZXQobWF4TnVtYmVyKSB7XG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxuICBpZiAoIWZyZXF1ZW50bHkpIHtcbiAgICBkZWZhdWx0cyA9IHt9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXVxuXG4gICAgbGV0IGRlZmF1bHRMZW5ndGggPSBNYXRoLm1pbihtYXhOdW1iZXIsIERFRkFVTFRTLmxlbmd0aClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHRMZW5ndGg7IGkrKykge1xuICAgICAgZGVmYXVsdHNbREVGQVVMVFNbaV1dID0gcGFyc2VJbnQoKGRlZmF1bHRMZW5ndGggLSBpKSAvIDQsIDEwKSArIDFcbiAgICAgIHJlc3VsdC5wdXNoKERFRkFVTFRTW2ldKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IHF1YW50aXR5ID0gbWF4TnVtYmVyXG4gIGNvbnN0IGZyZXF1ZW50bHlLZXlzID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gZnJlcXVlbnRseSkge1xuICAgIGlmIChmcmVxdWVudGx5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGZyZXF1ZW50bHlLZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNvcnRlZCA9IGZyZXF1ZW50bHlLZXlzXG4gICAgLnNvcnQoKGEsIGIpID0+IGZyZXF1ZW50bHlbYV0gLSBmcmVxdWVudGx5W2JdKVxuICAgIC5yZXZlcnNlKClcbiAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KVxuXG4gIGNvbnN0IGxhc3QgPSBzdG9yZS5nZXQoJ2xhc3QnKVxuXG4gIGlmIChsYXN0ICYmIHNsaWNlZC5pbmRleE9mKGxhc3QpID09IC0xKSB7XG4gICAgc2xpY2VkLnBvcCgpXG4gICAgc2xpY2VkLnB1c2gobGFzdClcbiAgfVxuXG4gIHJldHVybiBzbGljZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBhZGQsIGdldCB9XG4iLCJpbXBvcnQgc3RyaW5nRnJvbUNvZGVQb2ludCBmcm9tICcuLi9wb2x5ZmlsbHMvc3RyaW5nRnJvbUNvZGVQb2ludCdcblxuZnVuY3Rpb24gdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpIHtcbiAgdmFyIHVuaWNvZGVzID0gdW5pZmllZC5zcGxpdCgnLScpLFxuICAgIGNvZGVQb2ludHMgPSB1bmljb2Rlcy5tYXAoKHUpID0+IGAweCR7dX1gKVxuXG4gIHJldHVybiBzdHJpbmdGcm9tQ29kZVBvaW50LmFwcGx5KG51bGwsIGNvZGVQb2ludHMpXG59XG5cbmZ1bmN0aW9uIHVuaXEoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICBpZiAoYWNjLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG4gICAgICBhY2MucHVzaChpdGVtKVxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoYSwgYikge1xuICBjb25zdCB1bmlxQSA9IHVuaXEoYSlcbiAgY29uc3QgdW5pcUIgPSB1bmlxKGIpXG5cbiAgcmV0dXJuIHVuaXFBLmZpbHRlcigoaXRlbSkgPT4gdW5pcUIuaW5kZXhPZihpdGVtKSA+PSAwKVxufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UoYSwgYikge1xuICB2YXIgbyA9IHt9XG5cbiAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IGFba2V5XSxcbiAgICAgIHZhbHVlID0gb3JpZ2luYWxWYWx1ZVxuXG4gICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFsdWUgPSBiW2tleV1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWUgPSBkZWVwTWVyZ2Uob3JpZ2luYWxWYWx1ZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgb1trZXldID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiBvXG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb25pY2RvZS9tZWFzdXJlLXNjcm9sbGJhclxuZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PSAndW5kZWZpbmVkJykgcmV0dXJuIDBcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBkaXYuc3R5bGUud2lkdGggPSAnMTAwcHgnXG4gIGRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnXG4gIGRpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnXG4gIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4J1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aFxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdilcblxuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbn1cblxuZXhwb3J0IHsgdW5pcSwgaW50ZXJzZWN0LCBkZWVwTWVyZ2UsIHVuaWZpZWRUb05hdGl2ZSwgbWVhc3VyZVNjcm9sbGJhciB9XG4iLCJleHBvcnQgY2xhc3MgUGlja2VyVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlckNvbXBvbmVudCkge1xuICAgIHRoaXMuX3ZtID0gcGlja2VyQ29tcG9uZW50XG4gICAgdGhpcy5fZGF0YSA9IHBpY2tlckNvbXBvbmVudC5kYXRhXG4gICAgdGhpcy5fcGVyTGluZSA9IHBpY2tlckNvbXBvbmVudC5wZXJMaW5lXG5cbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gW11cbiAgICB0aGlzLl9jYXRlZ29yaWVzLnB1c2goLi4udGhpcy5fZGF0YS5jYXRlZ29yaWVzKCkpXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IHRoaXMuX2NhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggPiAwXG4gICAgfSlcblxuICAgIHRoaXMuX2NhdGVnb3JpZXNbMF0uZmlyc3QgPSB0cnVlXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzLl9jYXRlZ29yaWVzKVxuXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHRoaXMuX2NhdGVnb3JpZXNbMF1cbiAgICB0aGlzLnNlYXJjaEVtb2ppcyA9IG51bGxcblxuICAgIC8vIFByZXZpZXcgZW1vamksIHNob3duIG9uIG1vdXNlIG92ZXIgb3Igd2hlbiB3ZSBtb3ZlXG4gICAgLy8gd2l0aCBhcnJvdyBrZXlzLlxuICAgIHRoaXMucHJldmlld0Vtb2ppID0gbnVsbFxuICAgIC8vIEluZGV4ZXMgYXJlIHVzZWQgdG8ga2VlcCB0aGUgcG9zaXRpb24gd2hlbiBtb3ZpbmdcbiAgICAvLyB3aXRoIGFycm93czogY3VycmVudCBjYXRlZ29yeSBhbmQgY3VycmVudCBlbW9qaVxuICAgIC8vIGluc2lkZSB0aGUgY2F0ZWdvcnkuXG4gICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IDBcbiAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IC0xXG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gdGhpcy5fdm0uJHJlZnMuc2Nyb2xsXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcblxuICAgIGxldCBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzWzBdXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2ldXG4gICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5fdm0uZ2V0Q2F0ZWdvcnlDb21wb25lbnQoaSlcbiAgICAgIC8vIFRoZSBgLTUwYCBvZmZzZXQgc3dpdGNoZXMgYWN0aXZlIGNhdGVnb3J5IChzZWxlY3RlZCBpbiB0aGVcbiAgICAgIC8vIGFuY2hvcnMgYmFyKSBhIGJpdCBlYXJpbGVyLCBiZWZvcmUgaXQgYWN0dWFsbHkgcmVhY2hlcyB0aGUgdG9wLlxuICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuJGVsLm9mZnNldFRvcCAtIDUwID4gc2Nyb2xsVG9wKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBhY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBhY3RpdmVDYXRlZ29yeVxuICB9XG5cbiAgZ2V0IGFsbENhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXNcbiAgfVxuXG4gIGdldCBmaWx0ZXJlZENhdGVnb3JpZXMoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRW1vamlzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdzZWFyY2gnLFxuICAgICAgICAgIG5hbWU6ICdTZWFyY2gnLFxuICAgICAgICAgIGVtb2ppczogdGhpcy5zZWFyY2hFbW9qaXMsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIGxldCBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxuICAgICAgcmV0dXJuIGhhc0Vtb2ppc1xuICAgIH0pXG4gIH1cblxuICBnZXQgcHJldmlld0Vtb2ppQ2F0ZWdvcnkoKSB7XG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBvbkFuY2hvckNsaWNrKGNhdGVnb3J5KSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRW1vamlzKSB7XG4gICAgICAvLyBObyBjYXRlZ29yaWVzIGFyZSBzaG93biB3aGVuIHNlYXJjaCBpcyBhY3RpdmUuXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KVxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLl92bS5nZXRDYXRlZ29yeUNvbXBvbmVudChpKVxuICAgIGxldCBzY3JvbGxUb0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHRvcCA9IGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wXG4gICAgICAgIGlmIChjYXRlZ29yeS5maXJzdCkge1xuICAgICAgICAgIHRvcCA9IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92bS4kcmVmcy5zY3JvbGwuc2Nyb2xsVG9wID0gdG9wXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl92bS5pbmZpbml0ZVNjcm9sbCkge1xuICAgICAgc2Nyb2xsVG9Db21wb25lbnQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbaV1cbiAgICB9XG4gIH1cblxuICBvblNlYXJjaCh2YWx1ZSkge1xuICAgIGxldCBlbW9qaXMgPSB0aGlzLl9kYXRhLnNlYXJjaCh2YWx1ZSwgdGhpcy5tYXhTZWFyY2hSZXN1bHRzKVxuICAgIHRoaXMuc2VhcmNoRW1vamlzID0gZW1vamlzXG5cbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxuICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gMFxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uRW1vamlFbnRlcihlbW9qaSkge1xuICAgIHRoaXMucHJldmlld0Vtb2ppID0gZW1vamlcbiAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IC0xXG4gICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA9IC0xXG4gIH1cblxuICBvbkVtb2ppTGVhdmUoZW1vamkpIHtcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGxcbiAgfVxuXG4gIG9uQXJyb3dMZWZ0KCkge1xuICAgIC8vIE1vdmluZyBsZWZ0LCBkZWNyZWFzZSBlbW9qaSBpbmRleC5cbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggPiAwKSB7XG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCAtPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIGVtb2ppIGluZGV4IGlzIHplcm8sIGdvIHRvIHRoZSBwcmV2aW91cyBjYXRlZ29yeS5cbiAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggLT0gMVxuICAgICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPCAwKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgZmlyc3QgY2F0ZWdvcnksIGtlZXAgaXQuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVcGRhdGUgZW1vamkgaW5kZXggLSB3ZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgY2F0ZWdvcnksXG4gICAgICAgIC8vIGdldCB0aGUgbGFzdCBlbW9qaSBpbiBpdC5cbiAgICAgICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPVxuICAgICAgICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdLmVtb2ppcy5sZW5ndGggLVxuICAgICAgICAgIDFcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxuICB9XG5cbiAgb25BcnJvd1JpZ2h0KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4IDxcbiAgICAgIHRoaXMuZW1vamlzTGVuZ3RoKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHgpIC0gMVxuICAgICkge1xuICAgICAgLy8gTW92aW5nIHJpZ2h0IHdpdGhpbiBjYXRlZ29yeSwgaW5jcmVhc2UgZW1vamkgaW5kZXguXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCArPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEdvIHRvIHRoZSBuZXh0IGNhdGVnb3J5LlxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCArPSAxXG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+PSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgbGFzdCBjYXRlZ29yeSAtIGtlZXAgaXQuXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGggLSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB3ZSBtb3ZlZCB0byB0aGUgbmV4dCBjYXRlZ29yeSwgdXBkYXRlIGVtb2ppIGluZGV4IHRvIHRoZVxuICAgICAgICAvLyBmaXJzdCBlbW9qaSBpbiB0aGUgbmV3IGNhdGVnb3J5LlxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxuICB9XG5cbiAgb25BcnJvd0Rvd24oKSB7XG4gICAgLy8gSWYgd2UgYXJlIG91dCBvZiB0aGUgZW1vamkgY29udHJvbCAoaW5kZXggaXMgLTEpLCBzZWxlY3QgdGhlIGZpcnN0XG4gICAgLy8gZW1vamkgaW4gdGhlIGZpcnN0IGNhdGVnb3J5IGJ5IGNhbGxpbmcgYG9uQXJyb3dSaWdodGAuXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ID09IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbkFycm93UmlnaHQoKVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5TGVuZ3RoID1cbiAgICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdLmVtb2ppcy5sZW5ndGhcblxuICAgIC8vIFdoZW4gbW92aW5nIGRvd24sIHdlIGNhbiBtb3ZlIGBfcGVyTGluZWAgaWNvbnMgcmlnaHQgdG9cbiAgICAvLyBqdW1wIHRvIHRoZSBzYW1lIHBvc2l0aW9uIGluIHRoZSBuZXh0IHJvdy5cbiAgICBsZXQgZGlmZiA9IHRoaXMuX3BlckxpbmVcblxuICAgIC8vIFRPRE86IHByZXZpZXdDYXRlZ29yeSBzaG91bGQgbWF0Y2ggYWN0aXZlQ2F0ZWdvcnlcbiAgICAvLyAoc28gaXQgd291bGQgYmUgYm90aCBoaWdobGlnaHRlZCBpbiBVSSBhbmQgdXNlZFxuICAgIC8vIHdoZW4gd2Ugc3RhcnQgbW92aW5nIHdpdGggYXJyb3dzIGFmdGVyIGNsaWNraW5nXG4gICAgLy8gdGhlIGNhdGVnb3J5KS5cblxuICAgIC8vIE5vdGU6IHByb2JhYmx5IHdlIGNhbiBhbHdhc3kgdGFrZSBjdXJyZW50IHJvdyBsZW5ndGhcbiAgICAvLyBhcyBhIGBkaWZmYCAtIGl0IHdpbGwgZml0IGJvdGggY2FzZSBvZiBhbnkgcm93IGFuZFxuICAgIC8vIHNwZWNpYWwgY2FzZSBvZiB0aGUgbGFzdCByb3cuXG4gICAgLy8gTm90ZTogaXQgY2FuIGJlIGFsc28gZWFzaWVyIHRvIHVwZGF0ZSBpbmRleGVzXG4gICAgLy8gZGlyZWN0bHkgaGVyZSBpbnN0ZWFkIG9mIGNhbGxpbmcgb25BcnJvd1JpZ2h0LlxuICAgIC8vIFNhbWUgaXMgdHJ1ZSBmb3IgYG9uQXJyb3dVcGAuXG5cbiAgICAvLyBVbmxlc3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHJvdyBvZiB0aGUgY2F0ZWdvcnkgYW5kXG4gICAgLy8gdGhlcmUgYXJlIGxlc3MgdGhlbiBgX3BlckxpbmVgIGVtb2ppcyBpbiBpdC5cbiAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgdXNlIHRoZSBsYXN0IHJvdyBsZW5ndGggYXMgZGlmZlxuICAgIC8vIHNvIHdlIGdvIHN0cmFpZ2h0IGRvd24sIGZvciBleGFtcGxlOlxuICAgIC8vXG4gICAgLy8gICAxIDIgMyA0IDUgNlxuICAgIC8vICAgNyA4IDlcbiAgICAvLyAgIEEgQiBDIEQgRSBGXG4gICAgLy9cbiAgICAvLyBJZiB3ZSBnbyBkb3duIGZyb20gYDhgLCB3ZSBuZWVkIHRvIG1vdmUgMyBlbW9qaXMgcmlnaHRcbiAgICAvLyB0byBsZW5kIGF0IGBCYCAoYW5kIDMgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGFzdCByb3cgb2ZcbiAgICAvLyB0aGlzIGNhdGVnb3J5KS5cbiAgICAvLyBBbmQgaWYgd2UgdXNlZCA2IGluc3RlYWQgKHJvdyBsZW5ndGgsIGBfcGVyTGluZWApLCB3ZSB3b3VsZFxuICAgIC8vIGxlbmQgdXAgYXQgYEVgLlxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCArIGRpZmYgPiBjYXRlZ29yeUxlbmd0aCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBsYXN0IHJvdyBsZW5ndGguXG4gICAgICBkaWZmID0gY2F0ZWdvcnlMZW5ndGggJSB0aGlzLl9wZXJMaW5lXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XG4gICAgICB0aGlzLm9uQXJyb3dSaWdodCgpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIG9uQXJyb3dVcCgpIHtcbiAgICAvLyBTaW1pbGFyIHRvIGBvbkFycm93RG93bmAsIHRvIG1vdmUgdXAgd2UgY2FuIG1vdmUgbGVmdFxuICAgIC8vIGJ5IGBfcGVyTGluZWAgbnVtYmVyIG9mIGVtb2ppcy5cbiAgICBsZXQgZGlmZiA9IHRoaXMuX3BlckxpbmVcblxuICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUlkeCAtIGRpZmYgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+IDApIHtcbiAgICAgICAgLy8gVW5sZXNzIGlmIHdlIGFyZSBvbiB0aGUgZmlyc3QgbGluZSBvZiB0aGUgY2F0ZWdvcnkgYW5kXG4gICAgICAgIC8vIHRoZSBsYXN0IGxpbmUgaW4gdGhlIHByZXZpb3VzIGNhdGVnb3J5IGlzIHNob3J0ZXIgdGhhblxuICAgICAgICAvLyBgX3BlckxpbmVgLlxuICAgICAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgdXNlIHRoZSBsYXN0IHJvdyBsZW5ndGggYXMgZGlmZiwgc29cbiAgICAgICAgLy8gd2UgZ28gc3RyYWlnaHQgdXAsIGZvciBleGFtcGxlOlxuICAgICAgICAvL1xuICAgICAgICAvLyAgIDEgMiAzIDQgNVxuICAgICAgICAvLyAgIDYgNyA4XG4gICAgICAgIC8vICAgOSBBIEIgQyBEXG4gICAgICAgIC8vXG4gICAgICAgIC8vIElmIHdlIGdvIHVwIGZyb20gYEFgLCB3ZSBuZWVkIHRvIG1vdmUgMyBlbW9qaXMgbGVmdCB0byBnZXRcbiAgICAgICAgLy8gdG8gYDdgIChhbmQgMyBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsYXN0IHJvdyBvZiB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gY2F0ZWdvcnkpLlxuICAgICAgICBjb25zdCBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoID1cbiAgICAgICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IC0gMV0uZW1vamlzXG4gICAgICAgICAgICAubGVuZ3RoICUgdGhpcy5fcGVyTGluZVxuICAgICAgICAvLyBkaWZmID0gdGhpcy5wcmV2aWV3RW1vamlJZHggKyBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoXG4gICAgICAgIGRpZmYgPSBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaWZmID0gMFxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgdGhpcy5vbkFycm93TGVmdCgpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcbiAgfVxuXG4gIHVwZGF0ZVByZXZpZXdFbW9qaSgpIHtcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9XG4gICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXNbXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4XG4gICAgICBdXG5cbiAgICB0aGlzLl92bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgLy8gU2Nyb2xsIHRoZSB2aWV3IGlmIHRoZSBgcHJldmlld0Vtb2ppYCBnb2VzIG91dCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLl92bS4kcmVmcy5zY3JvbGxcblxuICAgICAgLy8gTm90ZTogaXQgd291bGQgYmUgbW9yZSBWdWUtaXNoIHRvIG1hcmsgYWxsIGVtb2ppcyB3aXRoIGByZWZgc1xuICAgICAgLy8gYW5kIHRoZW4gZG8gc29tZXRoaW5nIHNpbWlsYXIgaGVyZSB0byB3aGF0IHdlIGRvIGluIHRoZVxuICAgICAgLy8gYGdldENhdGVnb3JpZXNgIGluc3RlYWQgb2YgdXNpbmcgYHF1ZXJ5U2VsZWN0b3JgIGRpcmVjdGx5LFxuICAgICAgLy8gYnV0IEkgYW0gbm90IHN1cmUgaWYgaGF2aW5nIG1hbnkgcmVmcyB3b3VsZCBhZmZlY3QgdGhlIHBlcmZvcm1hbmNlXG4gICAgICAvLyAoaXQgbWlnaHQsIHNvIEkgdXNlIGBxdWVyeVNlbGVjdG9yYCBmb3Igbm93KS5cbiAgICAgIGNvbnN0IGVtb2ppRWwgPSBzY3JvbGxFbC5xdWVyeVNlbGVjdG9yKCcuZW1vamktbWFydC1lbW9qaS1zZWxlY3RlZCcpXG5cbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHNjcm9sbEVsLm9mZnNldFRvcCAtIHNjcm9sbEVsLm9mZnNldEhlaWdodFxuICAgICAgaWYgKFxuICAgICAgICBlbW9qaUVsICYmXG4gICAgICAgIGVtb2ppRWwub2Zmc2V0VG9wICsgZW1vamlFbC5vZmZzZXRIZWlnaHQgPlxuICAgICAgICAgIHNjcm9sbEhlaWdodCArIHNjcm9sbEVsLnNjcm9sbFRvcFxuICAgICAgKSB7XG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCArPSBlbW9qaUVsLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgICAgaWYgKGVtb2ppRWwgJiYgZW1vamlFbC5vZmZzZXRUb3AgPCBzY3JvbGxFbC5zY3JvbGxUb3ApIHtcbiAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wIC09IGVtb2ppRWwub2Zmc2V0SGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGVtb2ppc0xlbmd0aChjYXRlZ29yeUlkeCkge1xuICAgIGlmIChjYXRlZ29yeUlkeCA9PSAtMSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2NhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoXG4gIH1cbn1cbiIsImNvbnN0IEVtb2ppUHJvcHMgPSB7XG4gIG5hdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBmYWxsYmFjazoge1xuICAgIHR5cGU6IEZ1bmN0aW9uLFxuICB9LFxuICBza2luOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gIH0sXG4gIHNldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnYXBwbGUnLFxuICB9LFxuICBlbW9qaToge1xuICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHNpemU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgfSxcbiAgdGFnOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdzcGFuJyxcbiAgfSxcbn1cblxuY29uc3QgUGlja2VyUHJvcHMgPSB7XG4gIHBlckxpbmU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogOSxcbiAgfSxcbiAgbWF4U2VhcmNoUmVzdWx0czoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiA3NSxcbiAgfSxcbiAgZW1vamlTaXplOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDI0LFxuICB9LFxuICB0aXRsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnRW1vamkgTWFydOKEoicsXG4gIH0sXG4gIGVtb2ppOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdkZXBhcnRtZW50X3N0b3JlJyxcbiAgfSxcbiAgY29sb3I6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJyNhZTY1YzUnLFxuICB9LFxuICBzZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ2FwcGxlJyxcbiAgfSxcbiAgc2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxuICBkZWZhdWx0U2tpbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICB9LFxuICBuYXRpdmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBlbW9qaVRvb2x0aXA6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBhdXRvRm9jdXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBpMThuOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICAgIGRlZmF1bHQoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICB9LFxuICBzaG93UHJldmlldzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd1NlYXJjaDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgc2hvd0NhdGVnb3JpZXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIHNob3dTa2luVG9uZXM6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gIGluZmluaXRlU2Nyb2xsOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBwaWNrZXJTdHlsZXM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgZGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCB7IEVtb2ppUHJvcHMsIFBpY2tlclByb3BzIH1cbiIsInZhciBOQU1FU1BBQ0UgPSAnZW1vamktbWFydCdcblxuY29uc3QgX0pTT04gPSBKU09OXG5cbnZhciBpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvd1xuXG5sZXQgZ2V0dGVyXG5sZXQgc2V0dGVyXG5cbmZ1bmN0aW9uIHNldEhhbmRsZXJzKGhhbmRsZXJzKSB7XG4gIGhhbmRsZXJzIHx8IChoYW5kbGVycyA9IHt9KVxuXG4gIGdldHRlciA9IGhhbmRsZXJzLmdldHRlclxuICBzZXR0ZXIgPSBoYW5kbGVycy5zZXR0ZXJcbn1cblxuZnVuY3Rpb24gc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICBOQU1FU1BBQ0UgPSBuYW1lc3BhY2Vcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHN0YXRlKSB7XG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGxldCB2YWx1ZSA9IHN0YXRlW2tleV1cbiAgICBzZXQoa2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICBpZiAoc2V0dGVyKSB7XG4gICAgc2V0dGVyKGtleSwgdmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXSA9IF9KU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldChrZXkpIHtcbiAgaWYgKGdldHRlcikge1xuICAgIHJldHVybiBnZXR0ZXIoa2V5KVxuICB9IGVsc2Uge1xuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICB2YXIgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlW2Ake05BTUVTUEFDRX0uJHtrZXl9YF1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHVwZGF0ZSwgc2V0LCBnZXQsIHNldE5hbWVzcGFjZSwgc2V0SGFuZGxlcnMgfVxuIiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcblxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuXG4vLyBNSVQgbGljZW5zZVxuXG52YXIgaXNXaW5kb3dBdmFpbGFibGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXG5pc1dpbmRvd0F2YWlsYWJsZSAmJlxuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDBcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ11cblxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddXG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKVxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKVxuICAgICAgICB9LCB0aW1lVG9DYWxsKVxuXG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsXG4gICAgICAgIHJldHVybiBpZFxuICAgICAgfVxuXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKVxuICAgICAgfVxuICB9KSgpXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21vbnovUHJvamVjdHMvbWluZS9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MzRhZDk0NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MzRhZDk0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MzRhZDk0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUzNGFkOTQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9FbW9qaS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21vbnovUHJvamVjdHMvbWluZS9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkMTZlOTA4NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkMTZlOTA4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkMTZlOTA4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbW9uei9Qcm9qZWN0cy9taW5lL2Vtb2ppLW1hcnQtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxMTg4MTA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxMTg4MTA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxMTg4MTA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MTE4ODEwNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21vbnovUHJvamVjdHMvbWluZS9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNzZjZGEwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3NmNkYTBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21vbnovUHJvamVjdHMvbWluZS9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNTA1NmMzMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzUwNTZjMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9tb256L1Byb2plY3RzL21pbmUvZW1vamktbWFydC12dWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGFkNDFiYjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFkNDFiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFkNDFiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGFkNDFiYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NlYXJjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21vbnovUHJvamVjdHMvbWluZS9lbW9qaS1tYXJ0LXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzYxNDg5NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzYxNDg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNjE0ODk0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjNjE0ODk0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9za2lucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5jaG9ycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzRhZDk0NiZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxNmU5MDg0JlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0JlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzZjZGEwZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4JlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NCZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS52aWV3LmNhblJlbmRlclxuICAgID8gX2MoXG4gICAgICAgIF92bS50YWcsXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1lbW9qaVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogX3ZtLnZpZXcudGl0bGUsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogX3ZtLnZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IF92bS50aXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiBfdm0ub25Nb3VzZUVudGVyLFxuICAgICAgICAgICAgbW91c2VsZWF2ZTogX3ZtLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICAgIGNsaWNrOiBfdm0ub25DbGljayxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHRoaXMuaW1hZ2VVcmwsIHdpZHRoOiBcIjQwXCIgfSB9KV1cbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0IGVtb2ppLW1hcnQtc3RhdGljXCIsIHN0eWxlOiBfdm0uY3VzdG9tU3R5bGVzIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dDYXRlZ29yaWVzXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJhbmNob3JzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uY29sb3IsXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBfdm0udmlldy5hbGxDYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2F0ZWdvcnlcIjogX3ZtLnZpZXcuYWN0aXZlQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQW5jaG9yQ2xpY2sgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwic2VhcmNoVGVtcGxhdGVcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0uc2hvd1NlYXJjaFxuICAgICAgICAgICAgICA/IF9jKFwic2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRvLWZvY3VzXCI6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IF92bS5vblNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5vblNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dMZWZ0OiBfdm0ub25BcnJvd0xlZnQsXG4gICAgICAgICAgICAgICAgICAgIGFycm93UmlnaHQ6IF92bS5vbkFycm93UmlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGFycm93RG93bjogX3ZtLm9uQXJyb3dEb3duLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd1VwOiBfdm0ub25BcnJvd1VwLFxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogX3ZtLm9uRW50ZXIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgYXV0b0ZvY3VzOiBfdm0uYXV0b0ZvY3VzLFxuICAgICAgICAgIG9uU2VhcmNoOiBfdm0ub25TZWFyY2gsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zY3JvbGxcIixcbiAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIgfSxcbiAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vblNjcm9sbCB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwic2Nyb2xsQ29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImVtb2ppLW1hcnQtbGlzdFwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwibGlzdGJveFwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnZpZXcuZmlsdGVyZWRDYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnksIGlkeCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJjYXRlZ29yeVwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZmluaXRlU2Nyb2xsIHx8IGNhdGVnb3J5ID09IF92bS52aWV3LmFjdGl2ZUNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgIFwiaW5maW5pdGVTY3JvbGwgfHwgY2F0ZWdvcnkgPT0gdmlldy5hY3RpdmVDYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgcmVmOiBcImNhdGVnb3JpZXNfXCIgKyBpZHgsXG4gICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBjYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZW1vamlzOiBjYXRlZ29yeS5lbW9qaXMsXG4gICAgICAgICAgICAgICAgICBcImVtb2ppLXByb3BzXCI6IF92bS5lbW9qaVByb3BzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcbiAgICAgICAgXCJwcmV2aWV3VGVtcGxhdGVcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0uc2hvd1ByZXZpZXdcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInByZXZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZGxlLWVtb2ppXCI6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctc2tpbi10b25lc1wiOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1vamktcHJvcHNcIjogX3ZtLmVtb2ppUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNraW4tcHJvcHNcIjogX3ZtLnNraW5Qcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib24tc2tpbi1jaGFuZ2VcIjogX3ZtLm9uU2tpbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGUsXG4gICAgICAgICAgZW1vamk6IF92bS52aWV3LnByZXZpZXdFbW9qaSxcbiAgICAgICAgICBpZGxlRW1vamk6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgc2hvd1NraW5Ub25lczogX3ZtLnNob3dTa2luVG9uZXMsXG4gICAgICAgICAgZW1vamlQcm9wczogX3ZtLmVtb2ppUHJvcHMsXG4gICAgICAgICAgc2tpblByb3BzOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgIG9uU2tpbkNoYW5nZTogX3ZtLm9uU2tpbkNoYW5nZSxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWFuY2hvcnNcIiwgYXR0cnM6IHsgcm9sZTogXCJ0YWJsaXN0XCIgfSB9LFxuICAgIF92bS5fbChfdm0uY2F0ZWdvcmllcywgZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtYW5jaG9yXCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkXCI6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBjb2xvcjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkID8gX3ZtLmNvbG9yIDogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogY2F0ZWdvcnkuaWQgPT0gX3ZtLmFjdGl2ZUNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgXCJkYXRhLXRpdGxlXCI6IF92bS5pMThuLmNhdGVnb3JpZXNbY2F0ZWdvcnkuaWRdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbGlja1wiLCBjYXRlZ29yeSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdmdzW2NhdGVnb3J5LmlkXSkgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogX3ZtLmNvbG9yIH0sXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaXNWaXNpYmxlICYmIChfdm0uaXNTZWFyY2ggfHwgX3ZtLmhhc1Jlc3VsdHMpXG4gICAgPyBfYyhcbiAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWNhdGVnb3J5XCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtbm8tcmVzdWx0c1wiOiAhX3ZtLmhhc1Jlc3VsdHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogX3ZtLmkxOG4uY2F0ZWdvcmllc1tfdm0uaWRdIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0pKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaU9iamVjdHMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgIHZhciBlbW9qaU9iamVjdCA9IHJlZi5lbW9qaU9iamVjdFxuICAgICAgICAgICAgdmFyIGVtb2ppVmlldyA9IHJlZi5lbW9qaVZpZXdcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGVtb2ppVmlldy5jYW5SZW5kZXJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW9qaU9iamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlbW9qaVZpZXcuYXJpYUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtcG9zaW5zZXRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2V0c2l6ZVwiOiBcIjE4MTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogZW1vamlPYmplY3Quc2hvcnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbW9qaVZpZXcudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkVudGVyKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtb2ppUHJvcHMub25MZWF2ZShlbW9qaVZpZXcuZ2V0RW1vamkoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uaW1hZ2VVcmwoZW1vamlWaWV3LmNvbnRlbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5oYXNSZXN1bHRzXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJlbW9qaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgZW1vamk6IFwic2xldXRoX29yX3NweVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgIHNraW46IF92bS5lbW9qaVByb3BzLnNraW4sXG4gICAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5ub3Rmb3VuZCkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlld1wiIH0sXG4gICAgW1xuICAgICAgX3ZtLmVtb2ppXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uZW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lbW9qaS5uYW1lKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZW1vamlTaG9ydE5hbWVzLCBmdW5jdGlvbiAoc2hvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzaG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiOlwiICsgX3ZtLl9zKHNob3J0TmFtZSkgKyBcIjpcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaUVtb3RpY29ucywgZnVuY3Rpb24gKGVtb3RpY29uKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW90aWNvbixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vdGljb24pKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmU6IF92bS5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2hvd1NraW5Ub25lc1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJza2luc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2tpbjogX3ZtLnNraW5Qcm9wcy5za2luIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU2tpbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1zZWFyY2hcIiB9LCBbXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uaTE4bi5zZWFyY2gsXG4gICAgICAgIHJvbGU6IFwidGV4dGJveFwiLFxuICAgICAgICBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibGlzdFwiLFxuICAgICAgICBcImFyaWEtb3duc1wiOiBcImVtb2ppLW1hcnQtbGlzdFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2ggZm9yIGFuIGVtb2ppXCIsXG4gICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBcImVtb2ppLW1hcnQtc2VhcmNoLWRlc2NyaXB0aW9uXCIsXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LFxuICAgICAgb246IHtcbiAgICAgICAga2V5ZG93bjogW1xuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImxlZnRcIiwgMzcsICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93TGVmdFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInJpZ2h0XCIsIDM5LCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93UmlnaHRcIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZG93blwiLCA0MCwgJGV2ZW50LmtleSwgW1xuICAgICAgICAgICAgICAgIFwiRG93blwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dEb3duXCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhcnJvd0Rvd25cIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwidXBcIiwgMzgsICRldmVudC5rZXksIFtcIlVwXCIsIFwiQXJyb3dVcFwiXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFycm93VXBcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZW50ZXJcIilcbiAgICAgICAgICAgIH0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGRlblwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJlbW9qaS1waWNrZXItc2VhcmNoLWRlc2NyaXB0aW9uXCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUgdGhlIGVtb2ppIHNlYXJjaFxcbiAgICByZXN1bHRzLlwiXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCI6IHRydWUsXG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZFwiOiBfdm0ub3BlbmVkLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF92bS5fbCg2LCBmdW5jdGlvbiAoc2tpblRvbmUpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHNraW5Ub25lLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZFwiOiBfdm0uc2tpbiA9PSBza2luVG9uZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImVtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS1cIiArIHNraW5Ub25lLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2soc2tpblRvbmUpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi91dGlscy9zdG9yZSdcbmltcG9ydCB7IHVuY29tcHJlc3MgfSBmcm9tICcuL3V0aWxzL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL3V0aWxzL2ZyZXF1ZW50bHknXG5cbmV4cG9ydCB7XG4gIFBpY2tlcixcbiAgRW1vamksXG4gIEFuY2hvcnMsXG4gIFByZXZpZXcsXG4gIFNlYXJjaCxcbiAgQ2F0ZWdvcnksXG4gIFNraW5zLFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmV4cG9ydCB7IEVtb2ppSW5kZXgsIEVtb2ppVmlldywgRW1vamlEYXRhLCBzYW5pdGl6ZSB9IGZyb20gJy4vdXRpbHMvZW1vamktZGF0YSdcbmV4cG9ydCB7IHVuY29tcHJlc3MsIHN0b3JlLCBmcmVxdWVudGx5IH1cbiJdLCJuYW1lcyI6WyJwcm9wcyIsIkVtb2ppUHJvcHMiLCJkYXRhIiwidHlwZSIsInJlcXVpcmVkIiwiY29tcHV0ZWQiLCJ2aWV3IiwiaW1hZ2VVcmwiLCJzYW5pdGl6ZWREYXRhIiwidGl0bGUiLCJlbW9qaU9iamVjdCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic2VhcmNoIiwibm90Zm91bmQiLCJjYXRlZ29yaWVzIiwicmVjZW50Iiwic21pbGV5cyIsInBlb3BsZSIsIm5hdHVyZSIsImZvb2RzIiwiYWN0aXZpdHkiLCJwbGFjZXMiLCJvYmplY3RzIiwic3ltYm9scyIsImZsYWdzIiwiY3VzdG9tIiwiUGlja2VyUHJvcHMiLCJhY3RpdmVTa2luIiwiY3VzdG9tU3R5bGVzIiwid2lkdGgiLCJlbW9qaVByb3BzIiwibmF0aXZlIiwic2tpbiIsInNldCIsImVtb2ppVG9vbHRpcCIsImVtb2ppU2l6ZSIsInNlbGVjdGVkRW1vamkiLCJzZWxlY3RlZEVtb2ppQ2F0ZWdvcnkiLCJvbkVudGVyIiwib25MZWF2ZSIsInNraW5Qcm9wcyIsImNhbGN1bGF0ZVdpZHRoIiwiZmlsdGVyZWRDYXRlZ29yaWVzIiwibWVyZ2VkSTE4biIsImlkbGVFbW9qaSIsImNvbnNvbGUiLCJvblNjcm9sbCIsIndpbmRvdyIsIm9uU2Nyb2xsUGFpbnQiLCJvbkFuY2hvckNsaWNrIiwiY2F0ZWdvcnkiLCJvblNlYXJjaCIsInZhbHVlIiwib25FbW9qaUVudGVyIiwiZW1vamkiLCJvbkVtb2ppTGVhdmUiLCJvbkFycm93TGVmdCIsIiRldmVudCIsIm9uQXJyb3dSaWdodCIsIm9uQXJyb3dEb3duIiwib25BcnJvd1VwIiwiZnJlcXVlbnRseSIsIm9uRW1vamlDbGljayIsIm9uU2tpbkNoYW5nZSIsInN0b3JlIiwiZ2V0Q2F0ZWdvcnlDb21wb25lbnQiLCJpbmRleCIsImNvbXBvbmVudHMiLCJBbmNob3JzIiwiQ2F0ZWdvcnkiLCJQcmV2aWV3IiwiU2VhcmNoIiwiaTE4biIsImNvbG9yIiwiYWN0aXZlQ2F0ZWdvcnkiLCJkZWZhdWx0IiwiY3JlYXRlZCIsImlkIiwibmFtZSIsImVtb2ppcyIsImlzVmlzaWJsZSIsImlzU2VhcmNoIiwiaGFzUmVzdWx0cyIsImVtb2ppT2JqZWN0cyIsImVtb2ppVmlldyIsImZpbHRlciIsIkVtb2ppIiwic2hvd1NraW5Ub25lcyIsImVtb2ppRGF0YSIsImVtb2ppU2hvcnROYW1lcyIsImVtb2ppRW1vdGljb25zIiwiU2tpbnMiLCJhdXRvRm9jdXMiLCJlbW9qaUluZGV4Iiwid2F0Y2giLCJjbGVhciIsIm1vdW50ZWQiLCIkaW5wdXQiLCJvcGVuZWQiLCJza2luVG9uZSIsIlBpY2tlciIsIl9TdHJpbmciLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50Iiwic3RyaW5nRnJvbUNvZGVQb2ludCIsIk1BWF9TSVpFIiwiY29kZVVuaXRzIiwiaGlnaFN1cnJvZ2F0ZSIsImxvd1N1cnJvZ2F0ZSIsImxlbmd0aCIsImFyZ3VtZW50cyIsInJlc3VsdCIsImNvZGVQb2ludCIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiUmFuZ2VFcnJvciIsInB1c2giLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsIlNWR3MiLCJtYXBwaW5nIiwidW5pZmllZCIsIm5vbl9xdWFsaWZpZWQiLCJoYXNfaW1nX2FwcGxlIiwiaGFzX2ltZ19nb29nbGUiLCJoYXNfaW1nX3R3aXR0ZXIiLCJoYXNfaW1nX2ZhY2Vib29rIiwia2V5d29yZHMiLCJzaGVldCIsImVtb3RpY29ucyIsInRleHQiLCJzaG9ydF9uYW1lcyIsImFkZGVkX2luIiwiYnVpbGRTZWFyY2giLCJhZGRUb1NlYXJjaCIsInN0cmluZ3MiLCJzcGxpdCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJzdHJpbmciLCJzIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiam9pbiIsImRlZXBGcmVlemUiLCJvYmplY3QiLCJwcm9wTmFtZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZnJlZXplIiwidW5jb21wcmVzcyIsImNvbXByZXNzZWQiLCJrZXkiLCJ1bnNoaWZ0Iiwic2hlZXRfeCIsInNoZWV0X3kiLCJ0b0ZpeGVkIiwiaW50ZXJzZWN0IiwidW5pZmllZFRvTmF0aXZlIiwiU0hFRVRfQ09MVU1OUyIsIkNPTE9OU19SRUdFWCIsIlNLSU5TIiwiRW1vamlJbmRleCIsImVtb2ppc1RvU2hvd0ZpbHRlciIsImluY2x1ZGUiLCJleGNsdWRlIiwicmVjZW50TGVuZ3RoIiwiX2RhdGEiLCJfZW1vamlzRmlsdGVyIiwiX2luY2x1ZGUiLCJfZXhjbHVkZSIsIl9jdXN0b20iLCJfcmVjZW50IiwiZ2V0IiwiX2Vtb2ppcyIsIl9uYXRpdmVFbW9qaXMiLCJfZW1vdGljb25zIiwiX2NhdGVnb3JpZXMiLCJfcmVjZW50Q2F0ZWdvcnkiLCJfY3VzdG9tQ2F0ZWdvcnkiLCJfc2VhcmNoSW5kZXgiLCJidWlsZEluZGV4IiwiYWxsQ2F0ZWdvcmllcyIsIml0ZW0iLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiIsImluZGV4QSIsImluZGV4QiIsImNhdGVnb3J5RGF0YSIsImlzQ2F0ZWdvcnlOZWVkZWQiLCJlbW9qaUlkIiwiYWRkRW1vamkiLCJjdXN0b21FbW9qaSIsImFkZEN1c3RvbUVtb2ppIiwibWFwIiwiaGFzRW1vamkiLCJtYXRjaGVzIiwibWF0Y2giLCJwYXJzZUludCIsImFsaWFzZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFNraW4iLCJFcnJvciIsImtleXMiLCJ1bmljb2RlRW1vamkiLCJtYXhSZXN1bHRzIiwidmFsdWVzIiwiYWxsUmVzdWx0cyIsImN1cnJlbnRJbmRleCIsImNoYXJJbmRleCIsImNoYXIiLCJyZXN1bHRzIiwic2NvcmVzIiwic3ViIiwic3Vic3RyIiwic3ViSW5kZXgiLCJzY29yZSIsImFTY29yZSIsImJTY29yZSIsInNsaWNlIiwiYXNzaWduIiwiRW1vamlEYXRhIiwiaXNFbW9qaU5lZWRlZCIsIl9za2lucyIsImlkeCIsImVtb3RpY29uIiwiY2F0ZWdvcnlfaWQiLCJpc0luY2x1ZGVkIiwiaXNFeGNsdWRlZCIsInNraW5fdmFyaWF0aW9ucyIsInNraW5JZHgiLCJza2luS2V5IiwidmFyaWF0aW9uRGF0YSIsInNraW5EYXRhIiwiayIsIl9zYW5pdGl6ZWQiLCJzYW5pdGl6ZSIsInNob3J0X25hbWUiLCJtdWx0aXBseSIsIngiLCJyb3VuZCIsInkiLCJjb25jYXQiLCJCb29sZWFuIiwiRW1vamlWaWV3IiwiZmFsbGJhY2siLCJfZW1vamkiLCJfbmF0aXZlIiwiX3NraW4iLCJfc2V0IiwiX2ZhbGxiYWNrIiwiY2FuUmVuZGVyIiwiX2NhblJlbmRlciIsImNzc0NsYXNzIiwiX2Nzc0NsYXNzIiwiY3NzU3R5bGUiLCJfY3NzU3R5bGUiLCJjb250ZW50IiwiX2NvbnRlbnQiLCJhcmlhTGFiZWwiLCJfaXNDdXN0b20iLCJfaXNOYXRpdmUiLCJfaGFzRW1vamkiLCJfZW1vamlUeXBlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0RW1vamkiLCJiYWNrZ3JvdW5kU2l6ZSIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZm9udFNpemUiLCJoYXNJbWFnZSIsInVuZGVmaW5lZCIsInNraW5fdG9uZSIsImNvbG9ucyIsIkRFRkFVTFRTIiwiaW5pdGlhbGl6ZWQiLCJkZWZhdWx0cyIsImluaXQiLCJhZGQiLCJtYXhOdW1iZXIiLCJkZWZhdWx0TGVuZ3RoIiwibWluIiwiaSIsInF1YW50aXR5IiwiZnJlcXVlbnRseUtleXMiLCJzb3J0ZWQiLCJyZXZlcnNlIiwic2xpY2VkIiwibGFzdCIsInBvcCIsInVuaWNvZGVzIiwiY29kZVBvaW50cyIsInUiLCJ1bmlxIiwiYXJyIiwicmVkdWNlIiwiYWNjIiwidW5pcUEiLCJ1bmlxQiIsImRlZXBNZXJnZSIsIm8iLCJvcmlnaW5hbFZhbHVlIiwibWVhc3VyZVNjcm9sbGJhciIsImRvY3VtZW50IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRvcCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjcm9sbGJhcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNoaWxkIiwiUGlja2VyVmlldyIsInBpY2tlckNvbXBvbmVudCIsIl92bSIsIl9wZXJMaW5lIiwicGVyTGluZSIsImZpcnN0Iiwic2VhcmNoRW1vamlzIiwicHJldmlld0Vtb2ppIiwicHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHgiLCJwcmV2aWV3RW1vamlJZHgiLCJzY3JvbGxFbGVtZW50IiwiJHJlZnMiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJsIiwiY29tcG9uZW50IiwiJGVsIiwib2Zmc2V0VG9wIiwiaGFzRW1vamlzIiwic2Nyb2xsVG9Db21wb25lbnQiLCJpbmZpbml0ZVNjcm9sbCIsIm1heFNlYXJjaFJlc3VsdHMiLCJ1cGRhdGVQcmV2aWV3RW1vamkiLCJlbW9qaXNMZW5ndGgiLCJjYXRlZ29yeUxlbmd0aCIsImRpZmYiLCJwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoIiwiJG5leHRUaWNrIiwic2Nyb2xsRWwiLCJlbW9qaUVsIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNhdGVnb3J5SWR4IiwidG9vbHRpcCIsIkZ1bmN0aW9uIiwic2l6ZSIsInRhZyIsImRlZmF1bHRTa2luIiwic2hvd1ByZXZpZXciLCJzaG93U2VhcmNoIiwic2hvd0NhdGVnb3JpZXMiLCJwaWNrZXJTdHlsZXMiLCJOQU1FU1BBQ0UiLCJfSlNPTiIsIkpTT04iLCJpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCIsImdldHRlciIsInNldHRlciIsInNldEhhbmRsZXJzIiwiaGFuZGxlcnMiLCJzZXROYW1lc3BhY2UiLCJuYW1lc3BhY2UiLCJ1cGRhdGUiLCJzdGF0ZSIsImxvY2FsU3RvcmFnZSIsInN0cmluZ2lmeSIsImUiLCJwYXJzZSIsImlzV2luZG93QXZhaWxhYmxlIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIm1heCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9