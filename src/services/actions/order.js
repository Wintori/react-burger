import { getOrder } from "../../utils/api";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const DELETE_ORDER = 'DELETE_ORDER'

export function getOrderRequest(list) {
    return function (dispatch) {
        // Проставим флаг в хранилище о том, что мы начали выполнять запрос
        // Это нужно, чтоб отрисовать в интерфейсе лоадер или заблокировать 
        // ввод на время выполнения запроса
        dispatch({
            type: GET_ORDER_REQUEST
        })
        // Запрашиваем данные у сервера
        getOrder(list)
            .then(res => {
                if (res && res.success) {
                    // В случае успешного получения данных вызываем экшен
                    // для записи полученных данных в хранилище
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        order: res.order.number
                    })
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .catch(() => {
                // Если произошла ошибка, отправляем соответствующий экшен
                dispatch({
                    type: GET_ORDER_FAILED
                })
            })
    }
}