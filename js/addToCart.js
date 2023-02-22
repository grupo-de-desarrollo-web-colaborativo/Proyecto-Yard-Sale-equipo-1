const cart = document.querySelector('#cardsContainer');
const pTotal = document.querySelector('#totalPrice');
const productsCount = document.querySelector('.carrito_compra_punto');
let iconAdd;
let cartProducts = [];
let total = [];
let deleteIcon;
//agrego un tiempo para que pueda cargar el icono de add to cart
setTimeout(() => {
  iconAdd = document.querySelectorAll('.iconAdd');
  iconAdd = [...iconAdd];
  iconAdd.forEach(element => {
    element.addEventListener('click', (event) => { 
    let currentId = parseInt(event.target.id);
    console.log(currentId);
    
    let currentProduct = productsArray[0].find(product => product.id == currentId);
    console.log(currentProduct);

    cartProducts.push(currentProduct);

    cart.innerHTML += `
      <div class="product-card">
        <div class="product-card__left-container">
          <img class="product-card__img" src="${currentProduct.images[0]}" alt="${currentProduct.title}" />
          <p class="product-card__name">${currentProduct.title}</p>
        </div>

        <div class="product-card__right-container">
          <p id="priceProduct1">$ ${currentProduct.price}</p>
          <span class="close-icon delete-icon" id="${currentProduct.id}"></span>
        </div>
      </div>
    `
    countProducts();
    
    total.push(currentProduct.price);
    
    calculateTotalPrice();
    //cambiando el icono de add to cart a added to cart
      let currentCart = document.getElementById(`${currentProduct.id}`);
      currentCart.src = "./assets/icons/bt_added_to_cart.svg";
      

    //eleminando el producto del shopping cart
    function deleteFromCart() {
      deleteIcon = document.querySelectorAll('.delete-icon');
    deleteIcon = [...deleteIcon];
    deleteIcon.forEach(element => {
      element.addEventListener('click', (event) => {
        let currentItem = event.target.id;
        let findItem = productsArray[0].find(product => product.id == currentItem);
        console.log(findItem);
          // Eliminamos el producto de la variable cartProducts
        let index = cartProducts.indexOf(findItem);
        cartProducts.splice(index, 1);

        // Eliminamos el producto del carrito
        let productCard = event.target.closest('.product-card');
        productCard.remove();

         // Actualizamos el precio total
         countProducts();
         total.splice(index, 1);
         calculateTotalPrice();

          //cambiando el icono de added to cart a add to cart
        let currentCart = document.getElementById(`${currentItem}`);
        currentCart.src = "./assets/icons/bt_add_to_cart.svg";
      })
    });
    }
    deleteFromCart();

    });
  });
}, 2000);

//suamr precios de todos los productos agregados al shopping cart
function calculateTotalPrice() {
  let totalPrice = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  pTotal.textContent = `$ ${totalPrice.toFixed(2)}`;
}

//conteo de los productos agregados al carrito y mostrar la cantidad en el ícono shopping cart
function countProducts() {
  productsCount.textContent = cartProducts.length;
}

//eliminando los productos del shopping cart

