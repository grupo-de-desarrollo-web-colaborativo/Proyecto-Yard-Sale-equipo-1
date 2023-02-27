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
let registerAccount;

cartIcon.addEventListener('click', () => {
  toggleOpenClose(checkout);
});

//funcionalidad del checkout
const paragraphPrice = document.querySelectorAll('#priceProduct');

form.addEventListener('submit', logIn);

// Login Functionality
function logIn(e) {
  e.preventDefault();
  const exist = registerAccount.some((account) => account.email === email.value && account.password === pass.value);

  if (exist) {
    const userAc = registerAccount.filter(item => item.email === email.value && item.password === pass.value)
    console.log('Login pass');
    let user = userAc[0];
    const userAccount = JSON.stringify(user);
    localStorage.setItem('user', userAccount);
    window.location.href = 'index.html';
  } else {
    showError('There was a problem logging in. Check your email and password or create an account.');
    // email.value = '';
    // pass.value = '';
  }
}

async function getData() {
  const res = await fetch('https://api.escuelajs.co/api/v1/users');
  const data = await res.json();
  return data;
}

getData().then(data => {
  userList(data);
})

function userList(data) {
  registerAccount = data;
  console.log(registerAccount);
}

function showError(message) {
  const alert = document.querySelector('.alert');
  if (alert) {
    alert.remove();
  }

  const errorMessage = document.createElement('p');
  errorMessage.classList.add('alert');
  errorMessage.textContent = message;

  const logBtn = document.querySelector('#logInButton')
  logBtn.after(errorMessage);
}