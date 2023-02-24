const API = "https://api.escuelajs.co/api/v1/products";
const productsList = null || document.querySelector('#productsSection');
let products; 
let productsArray = [];
let iconsAdd;
let productsImages;
let cartProducts = [];

const productsCount = document.querySelector('.carrito_compra_punto');

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}


async function printProducts() {
  try {
    products = await fetchData(API);
    let card = `
    ${products.map(product => `
      <div class="card">
        <img src="${product.images[0]}" alt="${product.title}" class="card__images productImage" id="${product.id}" />
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
  } catch(error) {
    console.log(error);
  }

  productsArray.push(products.slice(0,5));
  productsArray = productsArray.flat();
  console.log(productsArray);

  //listener del click a la imagen de cada producto
  productsImages = document.querySelectorAll('.productImage');
  productsImages = [...productsImages];
  productsImages.forEach( image => 
    image.addEventListener('click', (event) =>{
      showDetails(event);
    })
  );

  //listener del icono add to cart
  iconsAdd = document.querySelectorAll('.iconAdd');
  iconsAdd = [...iconsAdd];
  iconsAdd.forEach(element => {
    element.addEventListener('click', (event) => {
      productsCount.classList.remove('hidden');
      addToCart(event);
    })
  });
};

printProducts();


console.log(productsArray);

const detailsContainer = document.querySelector('#DetailsContainer');
const detailsCartButton = document.querySelector('#detailsCartButton');

//mostrar detalles del producto 
function showDetails(e) {
  let imageId = parseInt(e.target.id);
  let findProduct = productsArray.find((product) => product.id == imageId);
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
  detailsContainer.classList.remove("hidden");

  //cerrando la ventana de detalles
  const detailsClose = document.getElementById("detailsClose");
  detailsClose.addEventListener("click", () =>
    detailsContainer.classList.add("hidden")
  );
}

//agrega el producto al shopping cart
const cart = document.querySelector('#cardsContainer');
const pTotal = document.querySelector('#totalPrice');


let pricesArray = [];
let deleteIcons;
let eventAdd = [];



function addToCart(e) {
  eventAdd.push(e);
  //cambiando el icono de add to cart a added to cart
  e.target.src = "./assets/icons/bt_added_to_cart.svg";
  
  let currentId = parseInt(e.target.id);
  let currentProduct = productsArray.find((product) => product.id == currentId);

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
  `;
  countProducts();
  pricesArray.push(currentProduct.price);
  calculateTotalPrice();

  deleteIcons = document.querySelectorAll(".delete-icon");
  deleteIcons = [...deleteIcons];
  deleteIcons.forEach((item) => {
    item.addEventListener("click", (event) =>
      deleteFromCart(event))
  });
}

//eleminando el producto del shopping cart
function deleteFromCart(e) {
  
  let currentItem = parseInt(e.target.id);
  let findItem = productsArray.find((product) => product.id == currentItem);
  
  // Eliminamos el producto de la variable cartProducts
  let index = cartProducts.indexOf(findItem);
  cartProducts.splice(index, 1);
  
  // Eliminamos el producto del carrito
  let productCard = e.target.closest(".product-card");
  productCard.remove();
  
  // Actualizamos el precio total
  countProducts();
  pricesArray.splice(index, 1);
  calculateTotalPrice();

  //cambiando el icono de added to cart a add to cart
  eventAdd.forEach((item) => {
    if (item.target.id ==  e.target.id) {

      item.target.src = "./assets/icons/bt_add_to_cart.svg";
      // if (!findEqual) {
      // } else {
      //   console.log("aun esta el producto en el carrito!");
      // }
    } 
  });
}

//sumar precios de todos los productos agregados al shopping cart
function calculateTotalPrice() {
  let totalPrice = pricesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  pTotal.textContent = `$ ${totalPrice.toFixed(2)}`;
}

//conteo de los productos agregados al carrito y mostrar la cantidad en el ícono shopping cart
function countProducts() {
  productsCount.textContent = cartProducts.length;
}
