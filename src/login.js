const form = document.querySelector('#form');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');

form.addEventListener('submit', logIn);

function logIn(e) {
  e.preventDefault();
  if (email.value === 'yard@gmail.com' && pass.value === 'prueba') {
    console.log('Login pass');
    // window.location.replace('./products.html');
    window.location.href = 'products.html';
  } else {
    console.log('Login fail');
    email.value = '';
    pass.value = '';
  }
}
