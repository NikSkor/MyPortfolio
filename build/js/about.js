webpackJsonp([2],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(11);

__webpack_require__(4);

__webpack_require__(15);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(2);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ru\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\n    \u003Clink rel=\"icon\" type=\"image\u002Fx-icon\" href=\"common\u002Fimages\u002Ffavicon.ico\"\u003E\n    \u003Ctitle\u003EОбо мне\u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003Cdiv class=\"wrapper\"\u003E\n      \u003Cdiv class=\"container large-container\"\u003E\n        \u003Cheader class=\"header\"\u003E\n          \u003Cdiv class=\"socials\"\u003E\n            \u003Cul class=\"socials__list\"\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-vk\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-github\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                  \u003Csvg class=\"socials__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                    \u003Cuse xlink:href=\"#icon-in\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                  \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003C\u002Ful\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"hamburger-menu\" id=\"hamburgerButton\"\u003E\n            \u003Cdiv class=\"hamburger__line-block\" id=\"LineBlock\"\u003E\u003Cspan class=\"hamburger-menu__line\" id=\"line_1\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"hamburger-menu__line\" id=\"line_2\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"hamburger-menu__line\" id=\"line_3\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"arrow-down\"\u003E\u003Ca class=\"arrow__link\" href=\"#\"\u003E\n              \u003Csvg class=\"arrow__svg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse xlink:href=\"#icon-arrow_down\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"owner-block\"\u003E\n            \u003Cdiv class=\"intro__card\"\u003E\n              \u003Cdiv class=\"intro__photo\"\u003E\u003Cimg" + (" class=\"intro__img\""+pug.attr("src", __webpack_require__(3), true, true)+" alt=\"Веб-разработчик\"") + "\u003E\u003C\u002Fdiv\u003E\n              \u003Csvg class=\"owner__bg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                \u003Cuse class=\"owner__stars\" xlink:href=\"#icon-stars1\" style=\"width: 100%; min-height:100%;\"\u003E\u003C\u002Fuse\u003E\n              \u003C\u002Fsvg\u003E\n              \u003Cdiv class=\"intro__title\"\u003E \n                \u003Ch2 class=\"intro__title\"\u003EСкородумов Никита\u003C\u002Fh2\u003E\u003Cspan class=\"intro__text\"\u003EЛичный сайт веб-разработчика\u003C\u002Fspan\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"header__down header__down_large\"\u003E\n            \u003Csvg class=\"header__bg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 1000 85\" preserveAspectRatio=\"none\"\u003E\n              \u003Cpolygon class=\"header__triangle_left header-about__triangle_left\" points=\"0,0 0,86 500.8,86 500.8,75.5\"\u003E\u003C\u002Fpolygon\u003E\n              \u003Cpolygon class=\"header__triangle_right header-about__triangle_right\" points=\"1000,0 1000,86 500,86 500,75.5\"\u003E\u003C\u002Fpolygon\u003E\n            \u003C\u002Fsvg\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fheader\u003E\n        \u003Csection class=\"about-content\"\u003E\n          \u003Cdiv class=\"about__block\"\u003E\n            \u003Cdiv class=\"about__left\"\u003E\n              \u003Cdiv class=\"about__left-title\"\u003E\n                \u003Ch1 class=\"about__title\"\u003EОбо мне\u003C\u002Fh1\u003E\n                \u003Csvg class=\"about__title_bg\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                  \u003Cuse class=\"about__stars\" xlink:href=\"#icon-stars2\" style=\"width: 100%; min-height:100%;\"\u003E\u003C\u002Fuse\u003E\n                \u003C\u002Fsvg\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"about__left-content\"\u003E\n                \u003Cdiv class=\"about__left_img\"\u003E\u003Cimg" + (" class=\"about__img\""+pug.attr("src", __webpack_require__(13), true, true)+" alt=\"Веб-разработчик\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"about__left_info\"\u003E\n                  \u003Ch2 class=\"about__title about__left_title\"\u003EКто я\u003C\u002Fh2\u003E\n                \u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"about__left_text\"\u003E\n                  \u003Cp\u003EЯ веб разработчик из Перми. Мне 29 лет. Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.\u003C\u002Fp\u003E\n                  \u003Cp\u003EЭтот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу в нём свой контент. А пока посмотрите,как тут всё классно и красиво!\u003C\u002Fp\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"about__right\"\u003E\n              \u003Cdiv class=\"about__right_own\"\u003E\n                \u003Ch2 class=\"about__right_title\"\u003EЧем я могу быть вам полезен\u003C\u002Fh2\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"about__right_text\"\u003E\n                \u003Cp\u003EБольше всего меня привлекет Frontend разработка, но я также знаком и могу решать не сложные задачи\u0003на Backend. Но давайте по порядку.\u003C\u002Fp\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"about__right-content skills\"\u003E\n                \u003Cul class=\"skills__list\"\u003E\n                  \u003Cli class=\"skills__list_item\"\u003E\n                    \u003Cdiv class=\"skills__block\"\u003E\n                      \u003Ch3 class=\"skills__title\"\u003EFrontend\u003C\u002Fh3\u003E\n                      \u003Cul class=\"skills__block_list circle\"\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-70\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003EHTML 5\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-60\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003ECSS3\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-20\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003EJavaScript & JQuery\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                      \u003C\u002Ful\u003E\n                    \u003C\u002Fdiv\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli class=\"skills__list_item\"\u003E\n                    \u003Cdiv class=\"skills__block\"\u003E\n                      \u003Ch3 class=\"skills__title\"\u003EBackend\u003C\u002Fh3\u003E\n                      \u003Cul class=\"skills__block_list circle\"\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-5\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003EPHP\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-30\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003EmySQL\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-40\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003ENode.js & npm\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-5\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003EMongo.db\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                      \u003C\u002Ful\u003E\n                    \u003C\u002Fdiv\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli class=\"skills__list_item\"\u003E\n                    \u003Cdiv class=\"skills__block\"\u003E\n                      \u003Ch3 class=\"skills__title\"\u003EWorkFlow\u003C\u002Fh3\u003E\n                      \u003Cul class=\"skills__block_list circle\"\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-50\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003EGit\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-40\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003EWebpack\u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                        \u003Cli class=\"circle__item\"\u003E\n                          \u003Csvg class=\"circle__svg\" viewBox=\"0 0 110 110\"\u003E\n                            \u003Ccircle class=\"circle__first\" r=\"45\" cx=\"50%\" cy=\"50%\" fill=\"none\"\u003E\u003C\u002Fcircle\u003E\n                            \u003Ccircle class=\"circle__second circle-5\" r=\"45\" cx=\"50%\" cy=\"50%\" transform=\"rotate(-90 55 55)\"\u003E\u003C\u002Fcircle\u003E\n                          \u003C\u002Fsvg\u003E\u003Cspan class=\"circle__title\"\u003EBower   \u003C\u002Fspan\u003E\n                        \u003C\u002Fli\u003E\n                      \u003C\u002Ful\u003E\n                    \u003C\u002Fdiv\u003E\n                  \u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"about-map map\"\u003E\n            \u003Cdiv class=\"map__contacts\"\u003E\n              \u003Cdiv class=\"map__info\"\u003E\n                \u003Ch2 class=\"about__title map__title\"\u003EКонтакты\u003C\u002Fh2\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"map__info_contacts\"\u003E\n                \u003Cul class=\"map__list\"\u003E\n                  \u003Cli class=\"map__item\"\u003E\n                    \u003Cdiv class=\"map__contact-block\"\u003E\n                      \u003Csvg class=\"map__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-skype_n\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003Ca class=\"map__owner\" href=\"skype:skype_floriel1\"\u003Eskype_floriel1\u003C\u002Fa\u003E\n                    \u003C\u002Fdiv\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli class=\"map__item\"\u003E\n                    \u003Cdiv class=\"map__contact-block\"\u003E\n                      \u003Csvg class=\"map__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-phone_n\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003Ca class=\"map__owner\" href=\"tel: +7 922 30 57 956\"\u003E+7 922 30 57 956\u003C\u002Fa\u003E\n                    \u003C\u002Fdiv\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli class=\"map__item\"\u003E\n                    \u003Cdiv class=\"map__contact-block\"\u003E\n                      \u003Csvg class=\"map__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-envelope_n\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003Ca class=\"map__owner\" href=\"mailto:mr-zerx@yandex.ru\"\u003Emr-zerx@yandex.ru\u003C\u002Fa\u003E\n                    \u003C\u002Fdiv\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli class=\"map__item\"\u003E\n                    \u003Cdiv class=\"map__contact-block\"\u003E\n                      \u003Csvg class=\"map__icon\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-map_n\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003Ca class=\"map__owner\" href=\"#Пермь\"\u003Eг. Пермь\u003C\u002Fa\u003E\n                    \u003C\u002Fdiv\u003E\n                  \u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"map__google\" id=\"map\"\u003E\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n        \u003Cfooter class=\"footer\"\u003E\n          \u003Cdiv class=\"footer__container\"\u003E\n            \u003Cdiv class=\"footer__col footer__col_left\"\u003E\n              \u003Cp\u003EЭтот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. \u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"footer__col footer__col_center\"\u003E\n              \u003Cdiv class=\"footer__nav nav\"\u003E\n                \u003Cul class=\"nav__list\"\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fmy-works.html\"\u003EМои работы\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fabout.html\"\u003EОбо мне\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Fblog.html\"\u003EБлог\u003C\u002Fa\u003E\n                  \u003Cli class=\"nav__item nav__item_footer\"\u003E\u003C\u002Fli\u003E\u003Ca class=\"nav__link\" href=\".\u002Findex.html\"\u003EАвторизация\u003C\u002Fa\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"footer__socials\"\u003E\n                \u003Cul class=\"socials__list\"\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-vk\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-github\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  \u003Cli class=\"socials__item\"\u003E\u003Ca class=\"socials__link\" href=\"https:\u002F\u002Fvk.com\" target=\"_blank\"\u003E\n                      \u003Csvg class=\"socials__icon socials__icon_footer\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n                        \u003Cuse xlink:href=\"#icon-in\" style=\"width: 100%;\"\u003E\u003C\u002Fuse\u003E\n                      \u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"footer__col footer__col_right\"\u003E\n              \u003Cul class=\"footer__contacts\"\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Eskype_floriel1\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Emr-zerx@yandex.ru\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003E+79223057956\u003C\u002Fli\u003E\n                \u003Cli class=\"footer__contacts-item\"\u003Eг. Пермь        \u003C\u002Fli\u003E\n              \u003C\u002Ful\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cp class=\"footer__copyright copyright\"\u003E© Скородумов Никита | Создано с любовью в LoftSchool | 2018\u003C\u002Fp\u003E\n          \u003Cscript src=\"https:\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs?key=AIzaSyBVE2BPmabi29Aw4w3gZmc4pZ8FPw5p5Fs&amp;callback=initMap\" async defer\u003E\u003C\u002Fscript\u003E\n        \u003C\u002Ffooter\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/images/avatar2.jpg";

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initMap() {
  var perm = { lat: 58.00409, lng: 56.247333 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: perm,
    mapTypeControl: false,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({ position: perm, map: map });

  map.setOptions({ styles: styles.forest });
}

var styles = {
  default: null,
  forest: [{
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }]
  }, {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }]
  }, {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }]
  }, {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#f5f5f5' }]
  }, {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#bdbdbd' }]
  }, {
    featureType: 'man_made',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#bdbdbd' }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }]
  }, {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#e5e5e5' }]
  }, {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }]
  }, {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#dadada' }]
  }, {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }]
  }, {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }]
  }, {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#e5e5e5' }]
  }, {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#86A77A' }]
  }, {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }]
  }]
};
window.initMap = initMap;

/***/ })

},[10]);