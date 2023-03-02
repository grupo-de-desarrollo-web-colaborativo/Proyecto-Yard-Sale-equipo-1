const contenido = document.querySelector('.contenido');
let id;
let user;

user = JSON.parse(localStorage.getItem('user'));
id = user.id;

const API = `https://api.escuelajs.co/api/v1/users`;

const getUser = async(id) => {
  const response = await fetch(`${ API}/${ id }`);
  const data = await response.json();
  return data;
}

async function printUser() {
  try {
    user = await getUser(id);
    const { name, email, password } = user;
    let pass = '';
    for (let index = 0; index < password.length; index++) {
      pass += '*'
    }
    let account = `
      <div class="Email">
        <p>My account</p>
        <p>Name</p>
        <p>${name}</p>
        <p>Email address</p>
        <p>${email}</p>
        <p>Passsword</p>
        <p type="password">${pass}</p>
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

export {
  getUser,
}