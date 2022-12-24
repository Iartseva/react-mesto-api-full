export const BASE_URL = "https://api.lastproject.students.nomoredomains.club";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data) => {
    throw new Error(data.message);
  });
}

function register(password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkResponse);
}

function login(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkResponse);
}

function getMail(jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${jwt}`
    }
}).then(checkResponse);
}

export { register, login, getMail };
