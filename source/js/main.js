'use strict';

const pageBody = document.querySelector('.page-body');
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--opened')) {
    pageBody.classList.remove('page-body--lock');
    mainNav.classList.remove('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  } else {
    mainNav.classList.add('main-nav--opened');
    pageBody.classList.add('page-body--lock');
    navToggle.classList.remove('main-nav__toggle--closed');
  }
});


//----- local storage для формы

const orderNameInput = document.getElementById('order-name');
const orderPhoneInput = document.getElementById('order-phone');

orderNameInput.value = localStorage.getItem('order-name');
orderPhoneInput.value = localStorage.getItem('order-phone');

orderNameInput.addEventListener('input', () => {
  localStorage.setItem('order-name', orderNameInput.value);
})

orderPhoneInput.addEventListener('input', () => {
  localStorage.setItem('order-phone', orderPhoneInput.value);
})
