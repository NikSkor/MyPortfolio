import 'normalize.css';
import '../../style/style.scss';
import './index.pug';
import '../../scripts/sprites.js';
import '../../common/images/night.mp4';
import '../../scripts/parallax.js';


// var authorizationButton = document.getElementById('authorization-button');
// var introFace = document.getElementById('intro-face');
// var introBack = document.getElementById('intro-back');
// var backButton = document.getElementById('back-button');

// authorizationButton.addEventListener ('click', function() {
//   introFace.classList.remove('intro__owner_active');
//   introBack.classList.add('intro__owner_active');
//   authorizationButton.classList.add('authorization-button_clear');
  
// });
// backButton.addEventListener ('click', function() {
//   introFace.classList.add('intro__owner_active');
//   introBack.classList.remove('intro__owner_active');
//   authorizationButton.classList.remove('authorization-button_clear');
// });

module.exports = $(function () {
  $('.authorization-button').on('click', function(e) {
    e.preventDefault();

    $('.intro__block').css('transform', 'rotateY(180deg)');
    $(this).animate({opacity: 0.0}, 500, function () {
      $(this).css('display', 'none');
    });

    console.log('test');
  });

  $('.menu__link_btn').on('click', function (e) {
    e.preventDefault();

    $('.intro__block').css('transform', 'rotateY(0)');
    $('.authorization-button').css('display', 'block').animate({opacity: 1.0}, 500);


  });
});