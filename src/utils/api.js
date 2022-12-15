const url = 'https://norma.nomoreparties.space/api/ingredients'

const checkErrors = (res) => {
    if (res.ok) {
        return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
}

const getData = (fn) => {
    return fetch(url)
      .then((res) => checkErrors(res))
      .then(data => fn(data.data))
      .catch((error) => {
        console.log(error);
      })
  }

export {getData};