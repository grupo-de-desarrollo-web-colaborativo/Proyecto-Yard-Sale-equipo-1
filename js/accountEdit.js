import { getUser } from "./account.js";
let user;
let id;
user = JSON.parse(localStorage.getItem('user'));
id = user.id;

const API = `https://api.escuelajs.co/api/v1/users`

const updateUser = async(id, user) => {
  const resp = await fetch(`${ API }/${ id }`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await resp.json();
  console.log(data);
  return data;
}


async function printUserHTML() {
  try {
    user = await getUser(id);
    console.log(user);
    const { name, email, password } = user;

    const contenido = document.querySelector('.contenido');
    let account = `
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
    contenido.innerHTML = account;

    const editBtn = document.querySelector('.button button');
    editBtn.addEventListener('click', updatedUser)
    

  } catch (error) {
    console.log(error);
  }
};

async function updatedUser() {
  console.log('click');
  const userForm = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    password: document.querySelector('#pass').value,
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

function showSuccess(message) {
  const alert = document.querySelector('#pass');

  const success = document.createElement('p');
  success.classList.add('success')
  success.textContent = message;

  alert.after(success)
}

document.addEventListener('DOMContentLoaded', () => {
  printUserHTML();
})