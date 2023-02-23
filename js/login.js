//función de expresión que agrega o quita la clase hidden a un elemento de html en específico.//
const toggleOpenClose = (icon) => {
  icon.classList.toggle('hidden');
};

// //cambio de vista mobil desde el menu categories a la vista login//
// const logInAnchor = document.querySelector('#logInAnchor');

// logInAnchor.addEventListener('click', () => {
//   toggleOpenClose(menuCategories);
//   toggleOpenClose(mobileLogin);
// });

const checkout = document.querySelector('#checkout');
const cartIcon = document.querySelector('#shoppingCartIcon');

const form = document.querySelector('#loginForm');
const email = document.querySelector('#loginEmail');
const pass = document.querySelector('#loginPassword');
let registerAccount = [];

cartIcon.addEventListener('click', () => {
  toggleOpenClose(checkout);
});

//funcionalidad del checkout
const paragraphPrice = document.querySelectorAll('#priceProduct');

form.addEventListener('submit', logIn);
document.addEventListener('DOMContentLoaded', () => {
  registerAccount = JSON.parse(localStorage.getItem('accounts')) || [];
});

// Login Functionality
function logIn(e) {
  e.preventDefault();
  const exist = registerAccount.some((account) => account.email === email.value && account.pass === pass.value);
  if (exist) {
    console.log('Login pass');
    window.location.href = 'index.html';
  } else {
    console.log('Login fail');
    email.value = '';
    pass.value = '';
  }
}


