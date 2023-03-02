import { getUser, updateUser, validName, validEmail } from "./provider.js";

let user;
let id;
user = JSON.parse(localStorage.getItem('user'));
id = user.id;

async function printUser() {
  try {
    user = await getUser(id);
    const { name, email, password } = user;

    const contenido = document.querySelector('.contenido');
    let accounts = `
      <div class="Email">
        <p>My account</p>
        <p>Name</p>
        <input type="text" placeholder="Camila Tokoo" id="name" value="${name}">
        <p>Email address</p>
        <input type="text" placeholder="camilayokoo@gmail.com" id="email" value="${email}">
        <p>Passsword</p>
        <input type="password" placeholder="************" id="pass" value="${password}">
      </div>
      <div class="button">
        <button>Save</button>
      </div>
    `
    contenido.innerHTML = accounts;

    const editBtn = document.querySelector('.button button');
    editBtn.addEventListener('click', updatedUser)

  } catch (error) {
    console.log(error);
  }
};

async function updatedUser() {
  const nameInput = document.querySelector('#name').value;
  const emailInput = document.querySelector('#email').value;
  const passInput = document.querySelector('#pass').value;

  if ([nameInput, emailInput, passInput].includes('')) {
    showError('All fields are required');
    return;
  }

  if (!validName(nameInput)) {
    showError('Check your name');
    return;
  }

  if (!validEmail(emailInput)) {
    showError('Your email invalid');
    return;
  }

  if (passInput.length < 6) {
    showError('your password must be at least 6 characters');
    return;
  }

  const userForm = {
    name: nameInput,
    email: emailInput,
    password: passInput,
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
  }
  console.log(userForm);
  const userUpdated = await updateUser(id, userForm);
  console.log(userUpdated);
  showSuccess('account successfully updated')
  setTimeout(() => {
    window.location.href = 'index.html';
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

  const content = document.querySelector('#pass');
  content.after(errorMessage);

}

function showSuccess(message) {
  const alert = document.querySelector('#pass');

  const success = document.createElement('p');
  success.classList.add('success')
  success.textContent = message;

  alert.after(success)
}

document.addEventListener('DOMContentLoaded', () => {
  printUser();
})