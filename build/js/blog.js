webpackJsonp([3],{

/***/ 0:
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(25);

__webpack_require__(5);

__webpack_require__(0);

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ru\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\n    \u003Clink rel=\"icon\" type=\"image\u002Fx-icon\" href=\"common\u002Fimages\u002Ffavicon.ico\"\u003E\n    \u003Ctitle\u003EБлог\u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003Cdiv class=\"wrapper\"\u003E\n      \u003Cdiv class=\"container blog-container\"\u003E\n        \u003Cdiv class=\"greeting__menu\" id=\"hamburger-menu\"\u003E\n          \u003Cul class=\"greeting__menu_list\"\u003E\n            \u003Cli class=\"greeting__menu_item\"\u003E\u003Ca class=\"greeting__menu_link\" href=\".\u002Fmy-works.html\"\u003EМои работы\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"greeting__menu_item\"\u003E\u003Ca class=\"greeting__menu_link\" href=\".\u002Fabout.html\"\u003EОбо мне\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"greeting__menu_item\"\u003E\u003Ca class=\"greeting__menu_link\" href=\".\u002Fblog.html\"\u003EБлог\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"greeting__menu_item\"\u003E\u003Ca class=\"greeting__menu_link\" href=\".\u002Findex.html\"\u003EАвторизоваться\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cheader class=\"header blog-header\"\u003E\n          \u003Cdiv class=\"socials\"\u003E\n            \u003Cul class=\"socials__list\"\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-vk\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-github\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-in\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"hamburger-menu\" id=\"hamburgerButton\"\u003E\n            \u003Cdiv class=\"hamburger-menu__picture\"\u003E\n              \u003Csvg class=\"hamburger-menu__pic\" id=\"hamburger-plus\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse xlink:href=\"#icon-plus\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"hamburger__line-block\"\u003E\n              \u003Csvg class=\"hamburger-menu__pic hamburger-menu__pic_active\" id=\"lineBlock\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse xlink:href=\"#icon-hamburger\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"owner-block\"\u003E\n            \u003Cdiv class=\"intro__card\"\u003E\n              \u003Cdiv class=\"intro__photo\"\u003E\u003Cimg" + (" class=\"intro__img\""+pug.attr("src", __webpack_require__(4), true, true)+" alt=\"Веб-разработчик\"") + "\u003E\u003C\u002Fdiv\u003E\n              \u003Csvg class=\"owner__bg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse class=\"owner__stars\" xlink:href=\"#icon-stars1\" style=\"width: 100%; min-height:100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\n              \u003Cdiv class=\"intro__title\"\u003E \n                \u003Ch2 class=\"title-owner\"\u003EБлог\u003C\u002Fh2\u003E\u003Cspan class=\"intro__text\"\u003EСтатьи, которые я написал\u003C\u002Fspan\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fheader\u003E\n        \u003Csection class=\"content blog-content\"\u003E\n          \u003Cdiv class=\"header__down\"\u003E\n            \u003Csvg class=\"header__bg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 1000 85\" preserveAspectRatio=\"none\"\u003E\n              \u003Cpolygon class=\"header__triangle_left\" points=\"0,0 0,86 500.8,86 500.8,75.5\"\u003E\u003C\u002Fpolygon\u003E\n              \u003Cpolygon class=\"header__triangle_right\" points=\"1000,0 1000,86 500,86 500,75.5\"\u003E\u003C\u002Fpolygon\u003E\n            \u003C\u002Fsvg\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"aside content__aside\"\u003E\n            \u003Cul class=\"aside__list\"\u003E\n              \u003Cli class=\"aside__item aside__item_fix\"\u003E\u003Ca class=\"aside__link aside__link_fix\" href=\"#\"\u003EСамое важное в SASS\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli class=\"aside__item\"\u003E\u003Ca class=\"aside__link\" href=\"#\"\u003EПриёмы в вёрстке, без которых не обходится ни один сайт\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"article content__article\"\u003E\n            \u003Cul class=\"article__list\"\u003E\n              \u003Cli class=\"article__item\"\u003E\n                \u003Ch3 class=\"article__title\"\u003EСамое важное в SASS\u003C\u002Fh3\u003E\u003Cspan class=\"article__date\"\u003E22 ноября 2016\u003C\u002Fspan\u003E\n                \u003Cp\u003EТаким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.\u003C\u002Fp\u003E\n                \u003Cp\u003EНе следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.\u003C\u002Fp\u003E\n              \u003C\u002Fli\u003E\n              \u003Cli class=\"article__item\"\u003E\n                \u003Ch3 class=\"article__title\"\u003EПриёмы в вёрстке, без которых не обходится ни один сайт\u003C\u002Fh3\u003E\u003Cspan class=\"article__date\"\u003E22 ноября 2016\u003C\u002Fspan\u003E\n                \u003Cp\u003EТаким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.\u003C\u002Fp\u003E\n                \u003Cp\u003EНе следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.\u003C\u002Fp\u003E\n              \u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n        \u003Cfooter class=\"footer blog-footer\"\u003E\n          \u003Cdiv class=\"footer__container\"\u003E\n            \u003Cdiv class=\"footer__col footer__col_left\"\u003E\n              \u003Cp\u003EЭтот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. \u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"footer__col footer__col_center\"\u003E\n              \u003Cdiv class=\"footer__nav nav\"\u003E\n                \u003Cul class=\"nav__list\"\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fmy-works.html\"\u003EМои работы\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fabout.html\"\u003EОбо мне\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fblog.html\"\u003EБлог\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Findex.html\"\u003EАвторизация\u003C\u002Fa\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"footer__socials\"\u003E\n                \u003Cul class=\"socials__list\"\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-vk\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-github\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-in\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"footer__col footer__col_right\"\u003E\n              \u003Cul class=\"footer__contacts\"\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Eskype_floriel1\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Emr-zerx@yandex.ru\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003E+79223057956\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Eг. Пермь        \u003C\u002Fli\u003E\n              \u003C\u002Ful\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cp class=\"footer__copyright copyright\"\u003E© Скородумов Никита | Создано с любовью в LoftSchool | 2018\u003C\u002Fp\u003E\n        \u003C\u002Ffooter\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ })

},[24]);