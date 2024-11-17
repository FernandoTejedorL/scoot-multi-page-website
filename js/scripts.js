const rootStyles = document.documentElement.style;
const hamburgerElement = document.getElementById('hamburger');
const closeElement = document.getElementById('close');
const menuElement = document.getElementById('menu');
const allArrowElements = document.querySelectorAll('.accordion-arrow');

const showMenu = () => {
  closeElement.classList.toggle('close');
  hamburgerElement.classList.toggle('close');
  menuElement.classList.toggle('menu-show');
};
hamburgerElement.addEventListener('click', showMenu);
closeElement.addEventListener('click', showMenu);

const showAccordion = (event) => {
  event.target.classList.toggle('arrow-turn');
  console.dir(
    event.target.parentElement.parentElement.children[1].classList.toggle(
      'accordion-hide'
    )
  );
};

allArrowElements.forEach((arrow) => {
  arrow.addEventListener('click', showAccordion);
});
