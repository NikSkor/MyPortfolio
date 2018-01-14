import 'normalize.css';
import '../../style/style.scss';
import './index.pug';
import '../../scripts/sprites.js';
import '../../common/images/night.mp4';
import '../../scripts/parallax.js';


var authorizationButton = document.getElementById('authorization-button');
var introFace = document.getElementById('intro-face');
var introBack = document.getElementById('intro-back');
var backButton = document.getElementById('back-button');

authorizationButton.addEventListener ('click', function() {
  introFace.classList.remove('intro__owner_active');
  introBack.classList.add('intro__owner_active');
  authorizationButton.classList.add('authorization-button_clear');
  
});
backButton.addEventListener ('click', function() {
  introFace.classList.add('intro__owner_active');
  introBack.classList.remove('intro__owner_active');
  authorizationButton.classList.remove('authorization-button_clear');
});