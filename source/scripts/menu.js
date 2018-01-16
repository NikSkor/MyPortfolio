var hamburgerButton = document.getElementById('hamburgerButton');
var hamburgerMenu = document.getElementById('hamburger-menu');
var exitIcon = document.getElementById('hamburger-plus');
var hamburgerIcon = document.getElementById('lineBlock');
var isOpen = false; 

hamburgerButton.addEventListener ('click', function() {
    
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