(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _style_screen_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _style_screen_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_screen_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var _style_style_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_style_styl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var current_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(112);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);




var $body = window.opera ? document.compatMode == "CSS1Compat" ? $('html') : $('body') : $('html,body');

window.disableScrolling = function () {
  var x = window.scrollX;
  var y = window.scrollY;

  window.onscroll = function () {
    window.scrollTo(x, y);
  };
};

window.enableScrolling = function () {
  window.onscroll = function () {};
};

window.scrollToId = function (id, headerH) {
  var h = headerH ? headerH : 0;
  $body.stop().animate({
    scrollTop: $(id).offset().top - h
  }, 1000);
};

window.track = function (act, cat, label) {
  gtag('event', act, {
    'event_category': cat,
    'event_label': label
  });
  ga('send', 'event', cat, act, label, '1');
};

window.createCookie = function (name, value, days) {
  var expires;

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }

  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
};

window.readCookie = function (name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }

  return null;
};

window.eraseCookie = function (name) {
  createCookie(name, "", -1);
};

$(function () {}); // 呼叫JS 兩種方法
// 方法1.
// function aa(){
// 	console.log(212)
// }
// window.aa = aa
// 2方法.
// window.aa = function(){
// 	console.log(212)
// }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)))

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _lib_action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);

$(function () {
  $('.slider').slick({
    // dots: true,
    // dots: true, //項目點點，預設為false
    arrows: true,
    //上下箭頭，預設為true
    autoplay: true,
    //自動撥放
    autoplaySpeed: 3000,
    //自動撥放的切換速率，單位毫秒
    // speed: 500, //切換速率，單位毫秒
    // easing: 'linear', //滑動效果頻率，和animate設定值一樣，預設為linear
    // fade: true, //切換改為fadeIn方式，預設為false
    infinite: true,
    //是否要loop，預設為true
    responsive: [{
      breakpoint: 1023,
      // RWD在1024寬度時切換顯示數量
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)))

/***/ })

},[[68,2,0]]]);