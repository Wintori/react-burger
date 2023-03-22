import { BURGER_API_URL } from './constants'

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
}

const getData = () => {
    return fetch(`${BURGER_API_URL}/ingredients`)
        .then((res) => checkResponse(res))
}
const getOrder = (list) => {
    return fetch(`${BURGER_API_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            ingredients: list
        })
    })
        .then((res) => checkResponse(res))
}
export { getData, getOrder };