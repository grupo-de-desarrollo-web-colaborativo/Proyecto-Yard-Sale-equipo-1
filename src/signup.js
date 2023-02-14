const formulario = document.querySelector('#form');
const nameAc = document.querySelector('#name');
const emailAc = document.querySelector('#email');
const passAc = document.querySelector('#password');

let accounts = [];

formulario.addEventListener('submit', create);

function create(e) {
  e.preventDefault();

  checkFields([nameAc, emailAc, passAc]);

  let account = {
    id: Date.now(),
    name: nameAc.value,
    email: emailAc.value,
    pass: passAc.value,
  };

  accounts = [...accounts, account];

  const jsonObj = JSON.stringify(accounts);

  localStorage.setItem('accounts', jsonObj);

  console.log(account);
  console.log('account created');
  resetForm();
}

function resetForm() {
  nameAc.value = '';
  emailAc.value = '';
  passAc.value = '';
}

function checkFields(inputArrays) {
  inputArrays.forEach((input) => {
    if (input.value.trim() === '') {
      console.log(`El ${input.value} field is required`);
    } else {
      console.log('success');
    }
  });
}
