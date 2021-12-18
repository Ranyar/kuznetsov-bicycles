'use strict';

const pageBody = document.querySelector('.page-body');
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--opened')) {
    mainNav.classList.remove('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  } else {
    mainNav.classList.add('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
  }
});
