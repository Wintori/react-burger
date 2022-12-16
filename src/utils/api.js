import {url} from './constants'

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
}

const getData = () => {
    return fetch('https://norma.nomoreparties.space/api/ingredients')
      .then((res) => checkResponse(res))
  }

export {getData};