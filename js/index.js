const close = document.querySelector('#iconClose');
const mobileLogin = document.querySelector('#formContainer');

close.addEventListener('click', () => {
  mobileLogin.classList.add('hidden');
})

const email = document.querySelector('#inputEmail');
const password = document.querySelector('#inputPassword');


class Account {
  constructor({
    email, 
    password,
    nickname
  }) {
    this.email = email;
    this.password = password;
    this.nickname = nickname;
  }

  comprobarAcount(email, password) {

  } 
}

let admin = new Account({
  email:  "camilayokoo@gmail.com",
  nickname: "yokoo",
  password: "lseflsjfe"
});

const cuentas = [];

const logIn = document.querySelector('#logInButton');

logIn.addEventListener('click', () => {
  if (email.value && password.value) {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    
    const account = {
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password')
    }
    cuentas.push(account);
    console.log(cuentas);
  } else {
    console.log('escribe el email y contraseña');
  }
})


