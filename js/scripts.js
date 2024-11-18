const rootStyles = document.documentElement.style;
const hamburgerElement = document.getElementById('hamburger');
const closeElement = document.getElementById('close');
const menuElement = document.getElementById('menu');
const allArrowElements = document.querySelectorAll('.accordion-arrow');
const allAccordionTextElements = document.querySelectorAll('.accordion-box');

const showMenu = () => {
  closeElement.classList.toggle('close');
  hamburgerElement.classList.toggle('close');
  menuElement.classList.toggle('menu-show');
};
hamburgerElement.addEventListener('click', showMenu);
closeElement.addEventListener('click', showMenu);

const showAccordion = (event) => {
  event.target.children[1].classList.toggle('arrow-turn');
  event.target.nextElementSibling.classList.toggle('accordion-hide');
};

allAccordionTextElements.forEach((accordionText) => {
  accordionText.addEventListener('click', showAccordion);
});
