const API = `https://api.escuelajs.co/api/v1/users`;

const getUsers = async () => {
  const resp = await fetch(API);
  const data = await resp.json();
  return data;
}

const getUser = async (id) => {
  const resp = await fetch(`${API}/${id}`);
  const data = await resp.json();
  return data;
}

const createUser = async (user) => {
  const resp = await fetch(API, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await resp.json();
  return data;
}

const updateUser = async (id, user) => {
  const resp = await fetch(`${API}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await resp.json();
  console.log(data);
  return data;
}

function validName(name) {
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const res = regex.test(name);
  return res;
}

function validEmail(email) {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const res = regex.test(email);
  return res;
}

export {
  getUsers,
  getUser,
  createUser,
  updateUser,
  validName,
  validEmail
}