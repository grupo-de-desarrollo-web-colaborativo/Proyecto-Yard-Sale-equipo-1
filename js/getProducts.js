const API = "https://api.escuelajs.co/api/v1/products";
const productsList = null || document.querySelector('#productsSection');

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

let productsArray = [];

const printProducts = async function () {
  try {
    let products = await fetchData(API);
    
    let card = `
    ${products.map(product => `
      <div class="card" id="product-${product.id}">
        <img src="${product.images[0]}" alt="${product.description}" class="card__images" />
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
  } catch(error) {
    console.log(error);
  }
};

printProducts();

console.log(productsArray);


const cart = document.querySelector('#cardsContainer');
let total = [];
//agrego un tiempo para que pueda cargar el icono de add to cart
let iconAdd;
setTimeout(() => {
  iconAdd = document.querySelectorAll('.iconAdd');
  iconAdd = [...iconAdd];
  iconAdd.forEach(element => {
    element.addEventListener('click', (event) => { 
    let currentId = parseInt(event.target.id);
    console.log(currentId);
    
    let currentProduct = productsArray[0].find(product => product.id == currentId);
    console.log(currentProduct);


    cart.innerHTML += `
      <div class="product-card">
        <div class="product-card__left-container">
          <img class="product-card__img" src="${currentProduct.images[0]}" alt="${currentProduct.title}" />
          <p class="product-card__name">${currentProduct.title}</p>
        </div>

        <div class="product-card__right-container">
          <p id="priceProduct1">$${currentProduct.price}</p>
          <span class="close-icon"></span>
        </div>
      </div>
    `
    total.push(currentProduct.price);
    calculateTotalPrice();
    });
  });
}, 2000);

const pTotal = document.querySelector('#totalPrice');


function calculateTotalPrice() {
  let totalPrice;
  total.reduce((current, item) => totalPrice = current + item, 0);
  pTotal.textContent = `$ ${totalPrice}`;
}
  
