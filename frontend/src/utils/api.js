class Api {
  constructor({url, headers})  { 
    this._url = url; 
    this._headers = headers; 
}

//проверка ответа
_checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`)
}

// загрузка данных о пользователе
getUserInfo() {
  return fetch(`${this._url}/users/me`, {
    credentials: "include",
    headers: this._headers
  })
  .then(this._checkResponse)
}

//загрузка первоначальных карточек
getInitialCard() {
  return fetch(`${this._url}/cards`, {
    credentials: "include",
    headers: this._headers
  })
  .then(this._checkResponse)
}

//изменение информации профиля
editProfile(data) {
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    credentials: "include",
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
  .then(this._checkResponse)
}

//смена аватара
changeAvatar(data) {
  return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    credentials: "include",
    body: JSON.stringify({
      avatar: data.avatar
    }),
    headers: this._headers
  })
  .then(this._checkResponse)
}

//добавление карточки
addNewCard(data) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    credentials: "include",
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
  .then(this._checkResponse)
}

//проверка лайка
/* changeLikeCardStatus(cardId, isLiked) {
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: isLiked ? "PUT" : "DELETE",
    credentials: "include",
    headers: this._headers,
  }).then(this._checkResponse);
} */

addLike(cardId) {
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: "PUT",
    credentials: "include",
    headers: this._headers,
  }).then(this._checkResponse);
}

deleteLike(cardId) {
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: "DELETE",
    credentials: "include",
    headers: this._headers,
  }).then(this._checkResponse);
}

//удаление карточки
deleteCard(cardId) {
  return fetch(`${this._url}/cards/${cardId}`, {
    method: 'DELETE',
    credentials: "include",
    headers: this._headers
  })
  .then(this._checkResponse)
}
}

const api = new Api({
  url: 'https://api.lastproject.students.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;