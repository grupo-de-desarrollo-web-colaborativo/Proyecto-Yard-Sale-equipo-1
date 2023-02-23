const API = "https://api.escuelajs.co/api/v1/products";
const productsList = null || document.querySelector('#productsSection');
let productsArray = [];

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}


const printProducts = async function () {
  try {
    let products = await fetchData(API);
    
    let card = `
    ${products.map(product => `
      <div class="card" id="product-${product.id}">
        <img src="${product.images[0]}" alt="${product.description}" class="card__images productImage" id="${product.id}" />
          <div class="card__content">
            <div class="card__description">
              <p class="card__price">$ ${product.price}</p>
              <p class="card__text" data-id="1">${product.title}</p>
            </div>
              <img src="./assets/icons/bt_add_to_cart.svg" alt="" class="iconAdd" id="${product.id}" />
          </div>
      </div>
    `).slice(0,5).join('')}
    `; 
    productsList.innerHTML = card;
    products = products.slice(0,5);
    productsArray.push(products);
    showDetails ();
    addToCart();
  } catch(error) {
    console.log(error);
  }
};

printProducts();

console.log(productsArray);

const detailsContainer = document.querySelector('#DetailsContainer');
const detailsCartButton = document.querySelector('#detailsCartButton');
//mostrar detalles del producto 
function showDetails() {
  const productsImages = document.querySelectorAll('.productImage');
  
  productsImages.forEach( image => {
    image.addEventListener('click', (event) =>{
      let idImage = event.target.id;
      let findProduct = productsArray[0].find(product => product.id == idImage);
      console.log(idImage);
      console.log(findProduct);
      
      let detailsContent = `
        <div class="product-details__close-icon-container" id="detailsClose">
          <img src="./assets/icons/icon_close.png" alt="" class="product-details__close-icon" />
        </div>
        <img id="detailsImage" class="product-details__img" src="${findProduct.images[0]}" alt="${findProduct.title}" />
        <div class="product-details__info-container">
          <div class="product-details__info">
            <p id="detailsPrice" class="product-details__price">$ ${findProduct.price}</p>
            <p id="detailsName" class="product-details__name">${findProduct.title}</p>
            <p id="detailsDescription" class="product-details__description">${findProduct.description}</p>
            <button id="detailsCartButton" class="product-details__button">
              <img src="./assets/icons/Shape.svg" alt="" /> Add to cart
            </button>
          </div>
       </div>
      `;
      detailsContainer.innerHTML = detailsContent;
      detailsContainer.classList.remove('hidden');
      
      //cerrando la ventana de detalles 
      const detailsClose = document.getElementById('detailsClose');
      detailsClose.addEventListener('click', ()=> detailsContainer.classList.add('hidden'));
  })
  });
}

//agrega el producto al shopping cart
const cart = document.querySelector('#cardsContainer');
const pTotal = document.querySelector('#totalPrice');
const productsCount = document.querySelector('.carrito_compra_punto');
let iconAdd;
let cartProducts = [];
let total = [];
let deleteIcon;
function addToCart() {
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
}

//suamr precios de todos los productos agregados al shopping cart
function calculateTotalPrice() {
  let totalPrice = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  pTotal.textContent = `$ ${totalPrice.toFixed(2)}`;
}

//conteo de los productos agregados al carrito y mostrar la cantidad en el ícono shopping cart
function countProducts() {
  productsCount.textContent = cartProducts.length;
}
