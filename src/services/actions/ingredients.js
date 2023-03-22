import { getData } from '../../utils/api';

export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_PRICE = 'CHANGE_PRICE';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const SWAP_INGREDIENTS = 'SORT_INGREDIENTS';

export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export const DELETE_CURRENT_ITEM = 'DELETE_CURRENT_ITEM';

export const REMOVE_BUN = 'REMOVE_BUN';

let nextIngredId = 1

export const addItem = (ingredList) => {
    const id = nextIngredId++

    return {
        type: ADD_ITEM,
        ingredList: { ...ingredList, id }
    }
}

// export const swapIngredients = (ingredList) => {

//     return {
//         type: SWAP_INGREDIENTS,
//         ingredList
//     }
// }
export const swapIngredients = (dragIndex, hoverIndex) => {

    return {
        type: SWAP_INGREDIENTS,
        dragIndex,
        hoverIndex
    }
}

export const setCurrentItem = (item) => {
    return ({
        type: SET_CURRENT_ITEM,
        item
    })
}

export function getItemsRequest() {
    return function (dispatch) {
        // Проставим флаг в хранилище о том, что мы начали выполнять запрос
        // Это нужно, чтоб отрисовать в интерфейсе лоадер или заблокировать 
        // ввод на время выполнения запроса
        dispatch({
            type: GET_ITEMS_REQUEST
        })
        // Запрашиваем данные у сервера
        getData()
            .then(res => {
                if (res && res.success) {
                    // В случае успешного получения данных вызываем экшен
                    // для записи полученных данных в хранилище
                    dispatch({
                        type: GET_ITEMS_SUCCESS,
                        items: res.data
                    })
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .catch(() => {
                // Если произошла ошибка, отправляем соответствующий экшен
                dispatch({
                    type: GET_ITEMS_FAILED
                })
            })
    }
}