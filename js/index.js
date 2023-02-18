//función de expresión que agrega o quita la clase hidden a un elemento de html en específico.// 
const toggleOpenClose = (icon) => {
  icon.classList.toggle('hidden');
}

//Alternando la clase hidden en el icono close de mobile login//
const close = document.querySelector('#closeIconLogin');
const mobileLogin = document.querySelector('#formContainer');
const header = document.querySelector('#header');

close.addEventListener('click', () => toggleOpenClose(mobileLogin));

//Alternando la clase hidden en el icono close del menu categories//
const menuBurger = document.querySelector('#menuMobileIcon');
const menuCategories = document.querySelector('#menuMobile');
const closeCategories = document.querySelector('#closeIconCategories');

menuBurger.addEventListener('click', () => toggleOpenClose(menuCategories));

closeCategories.addEventListener('click', () => toggleOpenClose(menuCategories));

//cambio de vista mobil desde el menu categories a la vista login//
const logInAnchor = document.querySelector('#logInAnchor');

logInAnchor.addEventListener('click', () => {
  toggleOpenClose(menuCategories);
  toggleOpenClose(mobileLogin);
});


const checkout = document.querySelector('#checkout');
const cartIcon = document.querySelector('#shoppingCartIcon');

cartIcon.addEventListener('click', () => {
  mobileLogin.classList.add('hidden');
  toggleOpenClose(checkout);
});

// función de abrir el menu de la cuenta en desktop
const signIn = document.querySelector('#signIn');
const menuSignIng = document.querySelector('#menuSignIn');

signIn.addEventListener('click', () => toggleOpenClose(menuSignIng));