import { baseUrl } from './utils';

function errorCheck(res) {
  if (res.ok) {
    return res.json();
  } return Promise.reject(`Что-то пошло не так: ${res.status}`);
}

export const register = (email, password) => fetch(`${baseUrl}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
}).then(errorCheck);

export const authorization = (email, password) => fetch(`${baseUrl}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
}).then(errorCheck);

export const checkToken = (token) => fetch(`${baseUrl}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
}).then(errorCheck);
