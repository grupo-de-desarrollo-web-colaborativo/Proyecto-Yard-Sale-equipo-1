//función de expresión que agrega o quita la clase hidden a un elemento de html en específico.// 
const toggleOpenClose = (icon) => {
  icon.classList.toggle('hidden');
}


// //cambio de vista mobil desde el menu categories a la vista login//
// const logInAnchor = document.querySelector('#logInAnchor');

// logInAnchor.addEventListener('click', () => {
//   toggleOpenClose(menuCategories);
//   toggleOpenClose(mobileLogin);
// });

const checkout = document.querySelector('#checkout');
const cartIcon = document.querySelector('#shoppingCartIcon');

cartIcon.addEventListener('click', () => {
  toggleOpenClose(checkout);
});

//funcionalidad del checkout
const paragraphPrice = document.querySelectorAll('#priceProduct');

function name() {
  
  const productsPrices = [...paragraphPrice];
  for (let index = 0; index < productsPrices.length; index++) {
    const element = array[index];
    const Total = element 
  }


}