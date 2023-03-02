import { createUser, getUsers, validName, validEmail } from "./provider.js";
const formulario = document.querySelector('#btn-create');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
let registerAccount;

formulario.addEventListener('click', create);

// create account functionality
function create() {
  if ([name.value, email.value, pass.value].includes('')) {
    showError('All fields are required');
    return;
  }

  if (!validName(name.value)) {
    showError('Check your name');
    return;
  }

  if (!validEmail(email.value)) {
    showError('Your email invalid');
    return;
  }

  if (pass.value.length < 6) {
    showError('your password must be at least 6 characters');
    return;
  }
  accountCreated()
}

async function accountCreated() {
  let account = {
    name: name.value,
    email: email.value,
    password: pass.value,
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
  };

  registerAccount = await getUsers();
  const exist = registerAccount.some((account) => account.email === email.value);
  if(exist) {
    showError('this account with the email already exists')
    return;
  }
  createUser(account);

  showSuccess('account successfully created');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 3000);
}

function showError(message) {
  const alert = document.querySelector('.alert');
  if (alert) {
    alert.remove();
  }

  const errorMessage = document.createElement('p');
  errorMessage.classList.add('alert');
  errorMessage.textContent = message;

  const content = document.querySelector('#form');
  content.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}

function showSuccess(message) {
  const form = document.querySelector('#form');

  const success = document.createElement('p');
  success.classList.add('email', 'success');
  success.textContent = message;

  form.appendChild(success);
}