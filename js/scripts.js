const rootStyles = document.documentElement.style;
const hamburgerElement = document.getElementById('hamburger');
const closeElement = document.getElementById('close');
const menuElement = document.getElementById('menu');

const showMenu = () => {
  closeElement.classList.toggle('close');
  hamburgerElement.classList.toggle('close');
  menuElement.classList.toggle('menu-show');
};
hamburgerElement.addEventListener('click', showMenu);
closeElement.addEventListener('click', showMenu);
