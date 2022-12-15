const url = 'https://norma.nomoreparties.space/api/ingredients'

const checkErrors = (res) => {
    if (res.ok) {
        return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
}

const getData = (stateChanger) => {
    return fetch(url)
      .then((res) => checkErrors(res))
      .then(data => stateChanger(data.data))
      .catch((error) => {
        console.log(error);
      })
  }

export {getData};