webpackJsonp([2],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(16);

__webpack_require__(4);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(2);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ru\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\n    \u003Clink rel=\"icon\" type=\"image\u002Fx-icon\" href=\"common\u002Fimages\u002Ffavicon.ico\"\u003E\n    \u003Ctitle\u003Eindex page\u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003Cdiv class=\"wrapper\"\u003E\n      \u003Cdiv class=\"greeting\"\u003E\n        \u003Csection class=\"greeting__section section\"\u003E\n          \u003Cdiv class=\"greeting__button\"\u003E\n            \u003Cbutton class=\"authorization-button\"\u003EАвторизоваться\u003C\u002Fbutton\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"intro greeting__intro\"\u003E\n            \u003Cdiv class=\"intro__owner\"\u003E\n              \u003Cdiv class=\"intro__card\"\u003E\n                \u003Cdiv class=\"intro__photo\"\u003E\u003Cimg" + (" class=\"intro__img\""+pug.attr("src", __webpack_require__(3), true, true)+" alt=\"Веб-разработчик\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"intro__about\"\u003E \n                  \u003Ch2 class=\"intro__title\"\u003EНикита Скородумов\u003C\u002Fh2\u003E\u003Cspan class=\"intro__text\"\u003EЛичный сайт веб-разработчика\u003C\u002Fspan\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"intro__socials\"\u003E\n                \u003Cdiv class=\"socials__intro\"\u003E\n                  \u003Cul class=\"socials__list\"\u003E\n                    \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                        \u003Csvg class=\"socials__icon socials__icon-intro\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                          \u003Cuse xlink:href=\"#icon-vk\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                        \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                    \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                        \u003Csvg class=\"socials__icon socials__icon-intro\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                          \u003Cuse xlink:href=\"#icon-github\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                        \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                    \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                        \u003Csvg class=\"socials__icon socials__icon-intro\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                          \u003Cuse xlink:href=\"#icon-in\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                        \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003C\u002Ful\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"intro__nav\"\u003E\n              \u003Cdiv class=\"menu intro__menu\"\u003E\n                \u003Cul class=\"menu__list\"\u003E\n                  \u003Cli class=\"menu__item menu__item_works\"\u003E \u003Ca class=\"menu__link\" href=\".\u002Fmy-works.html\"\u003EМои работы\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003Cli class=\"menu__item menu__item_about\"\u003E \u003Ca class=\"menu__link\" href=\".\u002Fabout.html\"\u003EОбо мне\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003Cli class=\"menu__item menu__item blog\"\u003E \u003Ca class=\"menu__link\" href=\".\u002Fblog.html\"\u003EБлог\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"greeting__about\"\u003E\u003Cspan class=\"greeting__text\"\u003E© Скородумов Никита | Создано с любовью в LoftSchool | 2018\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ })

},[15]);