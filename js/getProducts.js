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

