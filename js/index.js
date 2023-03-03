//función de expresión que agrega o quita la clase hidden a un elemento de html en específico.// 
const toggleOpenClose = (icon) => {
  icon.classList.toggle('hidden');
}

//Alternando la clase hidden en el icono close del menu categories//
const menuBurger = document.querySelector('#menuMobileIcon');
const menuCategories = document.querySelector('#menuMobile');
const closeCategories = document.querySelector('#closeIconCategories');

menuBurger.addEventListener('click', () => toggleOpenClose(menuCategories));

closeCategories.addEventListener('click', () => toggleOpenClose(menuCategories));

//Shopping cart toggle menu desktop
const checkout = document.querySelector('#checkout');
const cartIcon = document.querySelector('#shoppingCartIcon');
const arrowLeft = document.querySelector('#arrowLeft');

cartIcon.addEventListener('click', () => toggleOpenClose(checkout));
arrowLeft.addEventListener('click', () => toggleOpenClose(checkout));

// función de abrir el menu de email en desktop
const signIn = document.querySelector('#signIn');
const menuSignIng = document.querySelector('#menuSignIn');

// signIn.addEventListener('click', () => {
//   toggleOpenClose(menuSignIng);

// });
let user;


document.addEventListener('DOMContentLoaded', () => {
  user = JSON.parse(localStorage.getItem('user'));
  userSession(user)
  const txtEmail = document.querySelector('.header_derecha button')
  txtEmail.addEventListener('click', showSignOut)
});

function userSession(user) {
  const { id, name, email } = user;
  const headerDerecha = document.querySelector('.header_derecha');

  const active = document.querySelector('#signIn')
  active.removeAttribute("href");

  const txtEmail = document.querySelector('.header_derecha button')
  txtEmail.addEventListener('click', showSignOut)

  txtEmail.textContent = email;
  const signOutBtn = document.querySelector('.menu-signIn__item--primary-color')
  signOutBtn.addEventListener('click', signOut);
}

function signOut() {
  const active = document.querySelector('#signIn')
  active.setAttribute("href", './login.html');

  const menuSignIn = document.querySelector('#menuSignIn');
  menuSignIn.classList.add('hidden')

  localStorage.clear();
  const txtEmail = document.querySelector('.header_derecha button')
  txtEmail.textContent = 'Sign In';
  // window.location.href = 'index.html';
}

function showSignOut() {
  const menuSignIn = document.querySelector('#menuSignIn');
  if (menuSignIn.classList.contains('hidden')) {
    menuSignIn.classList.remove('hidden')
  } else {
    menuSignIn.classList.add('hidden')
  }
}