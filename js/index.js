const close = document.querySelector('#iconClose');
const mobileLogin = document.querySelector('#formContainer');
const header = document.querySelector('#header');

close.addEventListener('click', () => {
  mobileLogin.classList.add('hidden');
  header.classList.add('active-header');
})

const email = document.querySelector('#inputEmail');
const password = document.querySelector('#inputPassword');



