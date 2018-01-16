webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hamburgerButton = document.getElementById('hamburgerButton');
var hamburgerMenu = document.getElementById('hamburger-menu');
var exitIcon = document.getElementById('hamburger-plus');
var hamburgerIcon = document.getElementById('lineBlock');
var isOpen = false;

hamburgerButton.addEventListener('click', function () {

  isOpen = isOpen === true ? false : true;
  if (isOpen) {
    hamburgerMenu.classList.add('greeting__menu-active');
    hamburgerIcon.classList.remove('hamburger-menu__pic_active');
    exitIcon.classList.add('hamburger-menu__pic_active');
  }
  if (!isOpen) {
    hamburgerMenu.classList.remove('greeting__menu-active');
    hamburgerIcon.classList.add('hamburger-menu__pic_active');
    exitIcon.classList.remove('hamburger-menu__pic_active');
  }
});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/images/work-2.png";

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/images/work-1.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/images/work-3.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/images/work-4.png";

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(27);

__webpack_require__(5);

__webpack_require__(0);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ru\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\n    \u003Clink rel=\"icon\" type=\"image\u002Fx-icon\" href=\"common\u002Fimages\u002Ffavicon.ico\"\u003E\n    \u003Ctitle\u003EМои работы\u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003Cdiv class=\"wrapper\"\u003E\n      \u003Cdiv class=\"container large-container\"\u003E\n        \u003Cdiv class=\"greeting__menu\" id=\"hamburger-menu\"\u003E\n          \u003Cul class=\"greeting__menu_list\"\u003E\n            \u003Cli class=\"greeting__menu_item\"\u003E\u003Ca class=\"greeting__menu_link\" href=\".\u002Fmy-works.html\"\u003EМои работы\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"greeting__menu_item\"\u003E\u003Ca class=\"greeting__menu_link\" href=\".\u002Fabout.html\"\u003EОбо мне\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"greeting__menu_item\"\u003E\u003Ca class=\"greeting__menu_link\" href=\".\u002Fblog.html\"\u003EБлог\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"greeting__menu_item\"\u003E\u003Ca class=\"greeting__menu_link\" href=\".\u002Findex.html\"\u003EАвторизоваться\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cheader class=\"header\"\u003E\n          \u003Cdiv class=\"socials\"\u003E\n            \u003Cul class=\"socials__list\"\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-vk\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-github\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-in\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"hamburger-menu\" id=\"hamburgerButton\"\u003E\n            \u003Cdiv class=\"hamburger-menu__picture\"\u003E\n              \u003Csvg class=\"hamburger-menu__pic\" id=\"hamburger-plus\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse xlink:href=\"#icon-plus\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"hamburger__line-block\"\u003E\n              \u003Csvg class=\"hamburger-menu__pic hamburger-menu__pic_active\" id=\"lineBlock\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse xlink:href=\"#icon-hamburger\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"arrow-down works__arrow\"\u003E\u003Ca class=\"arrow__link\" href=\"#\"\u003E\n              \u003Csvg class=\"arrow__svg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse xlink:href=\"#icon-arrow_down\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"owner-block works__owner\"\u003E\n            \u003Cdiv class=\"intro__card\"\u003E\n              \u003Cdiv class=\"intro__photo\"\u003E\u003Cimg" + (" class=\"intro__img\""+pug.attr("src", __webpack_require__(4), true, true)+" alt=\"Веб-разработчик\"") + "\u003E\u003C\u002Fdiv\u003E\n              \u003Csvg class=\"owner__bg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse class=\"owner__stars\" xlink:href=\"#icon-stars1\" style=\"width: 100%; min-height:100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\n              \u003Cdiv class=\"intro__title\"\u003E \n                \u003Ch2 class=\"intro__title\"\u003EСкородумов Никита\u003C\u002Fh2\u003E\u003Cspan class=\"intro__text\"\u003EЛичный сайт веб-разработчика\u003C\u002Fspan\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"down\"\u003E\n            \u003Csvg class=\"down__bg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 1000 85\" preserveAspectRatio=\"none\"\u003E\n              \u003Cpolygon class=\"down__triangle_left\" points=\"0,0 0,86 500.8,86 500.8,75.5\"\u003E\u003C\u002Fpolygon\u003E\n              \u003Cpolygon class=\"down__triangle_right\" points=\"1000,0 1000,86 500,86 500,75.5\"\u003E\u003C\u002Fpolygon\u003E\n            \u003C\u002Fsvg\u003E\n            \u003Cdiv class=\"down-block\"\u003E\n              \u003Ch2 class=\"down__title\"\u003EМои работы\u003C\u002Fh2\u003E\n              \u003Cdiv class=\"title__pic\"\u003E\n                \u003Csvg class=\"title__svg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                  \u003Cuse xlink:href=\"#icon-stars2\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                \u003C\u002Fsvg\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fheader\u003E\n        \u003Csection class=\"works-content\"\u003E\n          \u003Cdiv class=\"works__block\"\u003E\n            \u003Cdiv class=\"works__left\"\u003E\n              \u003Cdiv class=\"works__promotion promotion\"\u003E\n                \u003Ch3 class=\"promotion__title\"\u003EСайт школы онлайн образования\u003C\u002Fh3\u003E\u003Cspan class=\"promotion__tech\"\u003Ehtml, css, javascript\u003C\u002Fspan\u003E\n                \u003Cbutton class=\"promotion__button prombutton\"\u003E\n                  \u003Csvg class=\"prombutton__svg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-link\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003Cspan class=\"prombutton__text\"\u003EПосмотреть сайт\u003C\u002Fspan\u003E\n                \u003C\u002Fbutton\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"works__right slider\"\u003E\n              \u003Cdiv class=\"slider__menu\"\u003E\n                \u003Cdiv class=\"slider__big\"\u003E\n                  \u003Cdiv class=\"slider__pic\"\u003E\u003Cimg" + (" class=\"slider__big_one\""+pug.attr("src", __webpack_require__(7), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"slider__control\"\u003E\n                  \u003Cdiv class=\"slider__down\"\u003E\u003Ca class=\"slider__button slider__button_down\" href=\"#\"\u003E\n                      \u003Csvg class=\"slider__arrow\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-arrow_down\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\n                    \u003Cul class=\"slider__list\"\u003E\n                      \u003Cli class=\"slider__item slider__item_on\"\u003E\u003Cimg" + (" class=\"slider__img\""+pug.attr("src", __webpack_require__(9), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fli\u003E\n                      \u003Cli class=\"slider__item\"\u003E\u003Cimg" + (" class=\"slider__img\""+pug.attr("src", __webpack_require__(7), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fli\u003E\n                      \u003Cli class=\"slider__item\"\u003E\u003Cimg" + (" class=\"slider__img\""+pug.attr("src", __webpack_require__(10), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fli\u003E\n                      \u003Cli class=\"slider__item\"\u003E\u003Cimg" + (" class=\"slider__img\""+pug.attr("src", __webpack_require__(11), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fli\u003E\n                    \u003C\u002Ful\u003E\n                  \u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"slider__up\"\u003E\u003Ca class=\"slider__button slider__button_up\" href=\"#\"\u003E\n                      \u003Csvg class=\"slider__arrow\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-arrow_down\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\n                    \u003Cul class=\"slider__list\"\u003E\n                      \u003Cli class=\"slider__item\"\u003E\u003Cimg" + (" class=\"slider__img\""+pug.attr("src", __webpack_require__(9), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fli\u003E\n                      \u003Cli class=\"slider__item\"\u003E\u003Cimg" + (" class=\"slider__img\""+pug.attr("src", __webpack_require__(7), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fli\u003E\n                      \u003Cli class=\"slider__item\"\u003E\u003Cimg" + (" class=\"slider__img\""+pug.attr("src", __webpack_require__(10), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fli\u003E\n                      \u003Cli class=\"slider__item slider__item_on\"\u003E\u003Cimg" + (" class=\"slider__img\""+pug.attr("src", __webpack_require__(11), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fli\u003E\n                    \u003C\u002Ful\u003E\n                  \u003C\u002Fdiv\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"works__review review\"\u003E\n            \u003Cdiv class=\"review__about-me\"\u003E\n              \u003Ch2 class=\"down__title review__title\"\u003EЧто обо мне говорят\u003C\u002Fh2\u003E\n              \u003Csvg class=\"review__svg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse xlink:href=\"#icon-stars3\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"review_comments comments\"\u003E\n              \u003Cul class=\"comments__list\"\u003E\n                \u003Cli class=\"comments__item\"\u003E\n                  \u003Cdiv class=\"comments__pic\"\u003E\u003Cimg" + (" class=\"comments__img\""+pug.attr("src", __webpack_require__(28), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"comments__text comtext\"\u003E\n                    \u003Cp\u003EЭтот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 5 месяцев только самых тяжелых испытаний и бессонных ночей!\u003C\u002Fp\u003E\u003Cspan class=\"comtext__name\"\u003EКовальчук Дмитрий\u003C\u002Fspan\u003E\u003Cspan class=\"comtext__position\"\u003E- основатель Loftschool\u003C\u002Fspan\u003E\n                  \u003C\u002Fdiv\u003E\n                \u003C\u002Fli\u003E\n                \u003Cli class=\"comments__item\"\u003E\n                  \u003Cdiv class=\"comments__pic\"\u003E\u003Cimg" + (" class=\"comments__img\""+pug.attr("src", __webpack_require__(29), true, true)+" alt=\"Сайт\"") + "\u003E\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"comments__text comtext\"\u003E\n                    \u003Cp\u003EЭтот код выдержит любые испытания. Только пожалуйста, не загружается сайт на слишком старых браузерах!\u003C\u002Fp\u003E\u003Cspan class=\"comtext__name\"\u003EСабанцев Владимир\u003C\u002Fspan\u003E\u003Cspan class=\"comtext__position\"\u003E- преподаватель\u003C\u002Fspan\u003E\n                  \u003C\u002Fdiv\u003E\n                \u003C\u002Fli\u003E\n              \u003C\u002Ful\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"review_form form\"\u003E\n              \u003Cdiv class=\"form__block\"\u003E\n                \u003Cdiv class=\"form__rows\"\u003E\n                  \u003Cdiv class=\"form__up\"\u003E\n                    \u003Ch2 class=\"form__title\"\u003Eсвязаться со мной\u003C\u002Fh2\u003E\n                  \u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"form__input\"\u003E\n                    \u003Cinput class=\"form__input-text\" type=\"text\" id=\"name\" name=\"name\" placeholder=\"Ваше имя\"\u003E\n                  \u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"form__input\"\u003E\n                    \u003Cinput class=\"form__input-text\" type=\"text\" id=\"email\" name=\"email\" placeholder=\"Ваш e-mail\"\u003E\n                  \u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"form__input\"\u003E\n                    \u003Ctextarea class=\"form__input-text form__input-textarea\" type=\"textarea\" id=\"message\" name=\"message\" placeholder=\"Ваше сообщение\"\u003E\u003C\u002Ftextarea\u003E\n                  \u003C\u002Fdiv\u003E\n                \u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"form__buttons\"\u003E\n                  \u003Cbutton class=\"form__btn form__btn_send\" type=\"submit\"\u003EОтправить\u003C\u002Fbutton\u003E\n                  \u003Cbutton class=\"form__btn form__btn_clear\" type=\"reset\"\u003EОчистить\u003C\u002Fbutton\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"rev-arrow\"\u003E\u003Ca class=\"rev-arrow__link\"\u003E\n                \u003Csvg class=\"arrow__svg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                  \u003Cuse xlink:href=\"#icon-arrow_down\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n        \u003Cfooter class=\"footer\"\u003E\n          \u003Cdiv class=\"footer__container\"\u003E\n            \u003Cdiv class=\"footer__col footer__col_left\"\u003E\n              \u003Cp\u003EЭтот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. \u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"footer__col footer__col_center\"\u003E\n              \u003Cdiv class=\"footer__nav nav\"\u003E\n                \u003Cul class=\"nav__list\"\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fmy-works.html\"\u003EМои работы\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fabout.html\"\u003EОбо мне\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fblog.html\"\u003EБлог\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Findex.html\"\u003EАвторизация\u003C\u002Fa\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"footer__socials\"\u003E\n                \u003Cul class=\"socials__list\"\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-vk\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-github\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-in\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"footer__col footer__col_right\"\u003E\n              \u003Cul class=\"footer__contacts\"\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Eskype_floriel1\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Emr-zerx@yandex.ru\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003E+79223057956\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Eг. Пермь        \u003C\u002Fli\u003E\n              \u003C\u002Ful\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cp class=\"footer__copyright copyright\"\u003E© Скородумов Никита | Создано с любовью в LoftSchool | 2018\u003C\u002Fp\u003E\n        \u003C\u002Ffooter\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/images/koval_1.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/images/sab.jpg";

/***/ })
],[26]);