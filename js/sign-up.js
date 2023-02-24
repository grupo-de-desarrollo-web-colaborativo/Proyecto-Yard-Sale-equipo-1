const formulario = document.querySelector('#btn-create');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
let accounts = [];

formulario.addEventListener('click', create);

document.addEventListener('DOMContentLoaded', () => {
  accounts = JSON.parse(localStorage.getItem('accounts')) || [];
});

// create account functionality
function create() {
  if ([name.value, email.value, pass.value].includes('')) {
    showError('All fields are required');
    return;
  }

  if (!validaName(name.value)) {
    showError('Check your name');
    return;
  }

  if (email.name === 'email' && !validEmail(email.value)) {
    showError('Your email invalid');
    return;
  }

  if (pass.value.length < 6) {
    showError('your password must be at least 6 characters');
    return;
  }

  let account = {
    id: Date.now(),
    name: name.value,
    email: email.value,
    pass: pass.value,
  };

  accounts = [...accounts, account];

  const jsonObj = JSON.stringify(accounts);

  localStorage.setItem('accounts', jsonObj);

  resetForm();
  window.location.href = 'login.html';
}

function resetForm() {
  name.value = '';
  email.value = '';
  pass.value = '';
}

function validEmail(email) {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const res = regex.test(email);
  return res;
}

function validaName(name) {
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const res = regex.test(name);
  return res;
}

function checkFields(inputArrays) {
  inputArrays.forEach((input) => {
    if (input.value.trim() === '') {
      console.log(`El ${input.value} field is required`);
      showError(`El ${input.value} field is required`);
    } else {
      console.log('success');
    }
  });
}

function showError(message) {
  const alert = document.querySelector('.alert');
  if (alert) {
    alert.remove();
  }

  const errorMessage = document.createElement('p');
  errorMessage.classList.add('alert');
  errorMessage.textContent = message;

  const content = document.querySelector('#form p');
  content.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}
