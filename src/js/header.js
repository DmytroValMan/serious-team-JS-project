'use strict';

const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-button');
const burgerButton = document.querySelector(
  '.burger-button'
);
const navMob = document.querySelector('.nav-mob');
const navLinks = document.querySelectorAll('.nav-mob .nav-link');
const orderButtonMob = document.querySelector('.order-button-mob');

menuButton.addEventListener('click', event => {
  event.preventDefault();
  if (navList.classList.contains('menu-visible')) {
    navList.classList.remove('menu-visible');
    return;
  }
  navList.classList.add('menu-visible');
});

document.addEventListener('click', event => {
  const isClickInsideMenu =
    modalOverlay.contains(event.target) ||
    menuButton.contains(event.target);
  if (!isClickInsideMenu && navList.classList.contains('menu-visible')) {
    navList.classList.remove('menu-visible');
  }
});

burgerButton.addEventListener('click', doOpenMenu);
closeButton.addEventListener('click', doCloseMenu);

function doOpenMenu() {
  modalOverlay.classList.add('is-open');
  document.body.classList.add('modal-body-lock');
}

function doCloseMenu() {
  modalOverlay.classList.remove('is-open');
  document.body.classList.remove('modal-body-lock');
}

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    doCloseMenu();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

orderButtonMob.addEventListener('click', event => {
  doCloseMenu();
  const targetSection = document.querySelector('#work-together');

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});
