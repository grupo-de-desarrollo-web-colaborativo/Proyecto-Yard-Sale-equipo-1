//función de expresión que agrega o quita la clase hidden a un elemento de html en específico.//
const toggleOpenClose = (icon) => {
  icon.classList.toggle('hidden');
};

// //cambio de vista mobil desde el menu categories a la vista login//
// const logInAnchor = document.querySelector('#logInAnchor');

// logInAnchor.addEventListener('click', () => {
//   toggleOpenClose(menuCategories);
//   toggleOpenClose(mobileLogin);
// });

const checkout = document.querySelector('#checkout');
const cartIcon = document.querySelector('#shoppingCartIcon');

const form = document.querySelector('#loginForm');
const email = document.querySelector('#loginEmail');
const pass = document.querySelector('#loginPassword');
let registerAccount = [];

cartIcon.addEventListener('click', () => {
  toggleOpenClose(checkout);
});

//funcionalidad del checkout
const paragraphPrice = document.querySelectorAll('#priceProduct');

form.addEventListener('submit', logIn);
document.addEventListener('DOMContentLoaded', () => {
  registerAccount = JSON.parse(localStorage.getItem('accounts')) || [];
});

// Login Functionality
function logIn(e) {
  e.preventDefault();
  // console.log(array);
  const exist = array.some((account) => account.email === email.value && account.password === pass.value);

  if (exist) {
    const userAc = array.filter(item => item.email === email.value && item.password === pass.value)
    console.log(userAc[0]);
    console.log('Login pass');
    let user = userAc[0];
    // let user = {
    //   email: email.value,
    //   pass: pass.value,
    //   // active: 'true'
    // };
    const userAccount = JSON.stringify(user);
    localStorage.setItem('user', userAccount);
    // window.location.href = 'index/users/1.html';
  } else {
    console.log('Login fail');
    email.value = '';
    pass.value = '';
  }
}


async function getData() {
  const res = await fetch('https://api.escuelajs.co/api/v1/users');
  const data = await res.json();
  // console.log(res);
  return data;
}

let array;

getData().then(data => {
  userList(data);
})

function userList(data) {
  console.log(data);
  array = data;
  console.log(array);
}
