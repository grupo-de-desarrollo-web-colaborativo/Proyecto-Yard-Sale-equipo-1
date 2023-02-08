const listaProducts = document.querySelector('#list-products');
const openDetail = document.querySelector('main div');
const card = document.querySelector('.card-img');

listaProducts.addEventListener('click', selectProduct);
let productSeleccionado = {};

function selectProduct(e) {
  // console.log(e.target.parentElement);
  const elem = e.target.parentElement;
  // console.log(e.target.classList.contains('w-43'));
  if (elem.classList.contains('w-43')) {
    const productSeleccionado = e.target.parentElement;
    leerDatosProducto(productSeleccionado);
  }
}

function leerDatosProducto(producto) {
  // console.log(producto);

  const infoProduc = {
    id: producto.querySelector('.text-sm').getAttribute('data-id'),
    price: producto.querySelector('.text-base').textContent,
    name: producto.querySelector('.text-sm').textContent,
  };
  console.log(infoProduc);
  showProduct(parseInt(infoProduc.id));
}

function showProduct(id) {
  console.log(id);
  // products.forEach((product) => {
  //   if (id === product.id) {
  //     console.log('El producto es ' + id);
  //   }
  // });
  let res = products.find((product) => id === product.id);
  console.log(res);
  productSeleccionado = res;
  console.log(productSeleccionado);
  if (card.classList.contains('card-img')) {
    console.log('contains');
    openDetail.classList.add('active');
    let detail = document.querySelector('#detail');
    const { image, price, name, description } = productSeleccionado;
    detail.innerHTML = `
      <div>
          <img class="rounded-b-3xl w-96 h-96 object-cover object-center" src="${image}" alt="" />
          <div class="mt-3">
            <div class="px-5">
              <p class="text-base font-bold mb-1">${price}</p>
              <p class="font-normal text-sm text-Boulder">${name}</p>
              <p class="mt-5 font-normal text-base text-Boulder">
                ${description}
              </p>
              <button class="bg-mossGreen text-white w-full inline-flex items-center justify-center gap-2 py-4 mt-14 rounded-lg">
                <img src="../assets/images/Shape.svg" alt="" /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="absolute top-0 left-0 bg-white w-10 h-10 rounded-full">
          <img src="../assets/images/icon_close copy 4.svg" alt="" class=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3 h-3" />
        </div>
    `;
  }
}
