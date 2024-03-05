//jshint esversion: 6

const menuButton = document.querySelector('.top-menu__button');
const menuBackground = document.querySelector('.top-menu__background');
const menu = document.querySelector('.top-menu__menu');

const menuItems = document.querySelectorAll('.top-menu__item, .top-menu__logo');

menuButton.addEventListener('click', (e) => {
    menuButton.classList.toggle('active');
    menuBackground.classList.toggle('active');
    menu.classList.toggle('active');
});

menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        menuButton.classList.remove('active');
        menuBackground.classList.remove('active');
        menu.classList.remove('active');
    });
});