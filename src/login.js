const form = document.querySelector('#form');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');

let accounts = [];

accounts = JSON.parse(localStorage.getItem('accounts')) || [];
console.log('accounts1', accounts);

form.addEventListener('submit', logIn);

function logIn(e) {
  e.preventDefault();
  const exist = accounts.some((account) => account.email === email.value && account.pass === pass.value);
  console.log(exist);
  if (exist) {
    console.log('Login pass');
    // window.location.replace('./products.html');
    window.location.href = 'products.html';
  } else {
    console.log('Login fail');
    email.value = '';
    pass.value = '';
  }
}
