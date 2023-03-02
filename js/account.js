import { getUser } from "./provider.js";

const contenido = document.querySelector('.contenido');
let id;
let user;

user = JSON.parse(localStorage.getItem('user'));
id = user.id;

async function printUser() {
  try {
    user = await getUser(id);
    const { name, email, password } = user;
    let account = `
      <div class="Email">
        <p>My account</p>
        <p>Name</p>
        <input type="text" value="${name}">
        <p>Email address</p>
         <input type="text" value="${email}">
        <p>Passsword</p>
        <input type="password" value="${password}">
      </div>
      <div class="button">
        <button>Edit</button>
      </div>
    `
    contenido.innerHTML = account;

    const editBtn = document.querySelector('.button button');
    editBtn.addEventListener('click', editUser)

  } catch (error) {
    console.log(error);
  }
};

function editUser() {
  window.location.href = 'my_account_edit.html';
}

document.addEventListener('DOMContentLoaded', () => {
  printUser();
})