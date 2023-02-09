const productList = document.querySelector('#list-products');
const openDetail = document.querySelector('main div');
const card = document.querySelector('.card-img');
const detail = document.querySelector('#detail');

let selectedProduct = {};

cargarEventListener();

function cargarEventListener() {
  productList.addEventListener('click', selectProduct);
}

function selectProduct(e) {
  const elem = e.target.parentElement;
  if (elem.classList.contains('w-43')) {
    const productSeleccionado = e.target.parentElement;
    leerDatosProducto(productSeleccionado);
  }
}

function leerDatosProducto(producto) {
  const infoProduc = {
    id: producto.querySelector('.text-sm').getAttribute('data-id'),
    price: producto.querySelector('.text-base').textContent,
    name: producto.querySelector('.text-sm').textContent,
  };
  showProduct(parseInt(infoProduc.id));
}

function showProduct(id) {
  let res = products.find((product) => id === product.id);
  selectedProduct = res;
  if (card.classList.contains('card-img')) {
    openDetail.classList.add('active');
    mostrarHTML(selectedProduct);
  }
}
function mostrarHTML(product) {
  console.log(product);
  const { image, price, name, description } = product;
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  detail.innerHTML = `
    <div>
      <img class="rounded-b-3xl w-96 h-96 object-cover object-center" src="${image}" alt="" />
      <div class="mt-3">
        <div class="px-5">
          <p class="text-base font-bold mb-1">$ ${price.toFixed(2)}</p>
          <p class="font-normal text-sm text-Boulder">${name}</p>
          <p class="mt-5 font-normal text-base text-Boulder">
            ${description}
          </p>
          <button class="bg-mossGreen text-white w-full inline-flex items-center justify-center gap-2 py-4 mt-14 rounded-lg">
            <img src="./images/Shape.svg" alt="" /> Add to cart
          </button>
        </div>
      </div>
    </div>
    <div class="absolute top-4  left-3 bg-white w-10 h-10 rounded-full cursor-pointer" id="close">
      <img src="./images/icon_close copy 4.svg" alt="" class=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3 h-3" />
    </div>
  `;

  const close = document.querySelector('#close');
  close.addEventListener('click', () => {
    if (detail.classList.contains('active')) {
      detail.classList.remove('active');
    }
  });
}
