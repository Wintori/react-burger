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
const postEmailRequest = (emailToSend) => {
    return fetch(`${BURGER_API_URL}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            email: emailToSend
        })
    })
        .then((res) => checkResponse(res))
}

const resetPassword = (newPassword, currentToken) => {
    return fetch(`${BURGER_API_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            password: newPassword,
            token: currentToken
        })
    })
        .then((res) => checkResponse(res))
}

const registerAccount = (currentEmail, currentPassword, yourName) => {
    return fetch(`${BURGER_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            email: currentEmail,
            password: currentPassword,
            name: yourName
        })
    })
        .then((res) => checkResponse(res))
}

const loginAccount = (currentEmail, currentPassword) => {
    return fetch(`${BURGER_API_URL}/auth/login`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            email: currentEmail,
            password: currentPassword
        })
    })
        .then((res) => checkResponse(res))
}

const logoutAccount = (refreshToken) => {
    return fetch(`${BURGER_API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            token: refreshToken
        })
    })
        .then((res) => checkResponse(res))
}

const updateToken = (refreshToken) => {
    return fetch(`${BURGER_API_URL}/auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            token: refreshToken
        })
    })
        .then((res) => checkResponse(res))
}


const getUserInformation = (accessToken) => {
    return fetch(`${BURGER_API_URL}/auth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'authorization': accessToken
        }
    })
        .then((res) => checkResponse(res))
}

const patchUserInformation = (accessToken, userObject) => {
    return fetch(`${BURGER_API_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'authorization': accessToken
        },
        body: JSON.stringify({
            name: userObject.name,
            email: userObject.email,
            password: userObject.password
        })
    })
        .then((res) => checkResponse(res))
}

export { getData, getOrder, postEmailRequest, resetPassword, registerAccount, loginAccount, logoutAccount, updateToken, getUserInformation, patchUserInformation };