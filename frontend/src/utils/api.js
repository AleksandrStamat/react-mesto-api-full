export default class Api {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _erorrCheck(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
    }).then(this._erorrCheck);
  }

  getProfile(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
    }).then(this._erorrCheck);
  }

  getAllNeededData(token) {
    return Promise.all([this.getProfile(token), this.getInitialCards(token)]);
  }

  changeProfile(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._erorrCheck);
  }

  changeAvatar(data, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._erorrCheck);
  }

  addCard({ name, link }, token) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._erorrCheck);
  }

  deleteCard(id, token) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
    }).then(this._erorrCheck);
  }

  toggleLike(id, status, token) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: status ? 'DELETE' : 'PUT',
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
    }).then(this._erorrCheck);
  }
}
