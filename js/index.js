// Interacción para ocultar la vista mobil del Login agregando una clase 'hidden' al elemento contenedor del formulario del login.
const close = document.querySelector('#iconClose');
const mobileLogin = document.querySelector('#formContainer');
const header = document.querySelector('#header');

close.addEventListener('click', () => {
  mobileLogin.classList.add('hidden');
})