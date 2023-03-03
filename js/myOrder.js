
(function myOrderContent() {  
  const products = JSON.parse(localStorage.getItem('cartProducts'));
  console.log(products);
  pricesArray = JSON.parse(localStorage.getItem('priceProducts'));
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${month}.${day}.${year}`;
  const paragraphDate = document.querySelector('#date');
  paragraphDate.textContent = formattedDate;
  calculateTotalPrice();

  let card = `${products.map(product =>
    `<div class="Item">

      <div class="CajitaFoto">
        <img class="image"
        src="${product.images[0]}"
        alt="${product.title}">
    </div>

      <p class="TextItem">${product.title}</p>
      <p class="PriceItem">$ ${product.price}</p>

    </div>`).join('')}`
  cart.innerHTML = card;

})();