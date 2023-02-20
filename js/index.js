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

cartIcon.addEventListener('click', () => {
  toggleOpenClose(checkout);
});

// función de abrir el menu de email en desktop
const signIn = document.querySelector('#signIn');
const menuSignIng = document.querySelector('#menuSignIn');

signIn.addEventListener('click', () => {
  toggleOpenClose(menuSignIng);
  
});
