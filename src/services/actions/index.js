export const GET_API_DATA = 'GET_API_DATA';
export const GET_LIST_DATA = 'GET_LIST_DATA';
export const OPEN_MODAL_DATA = 'ADD_MODAL_DATA';
export const CLOSE_MODAL_DATA = 'DELETE_MODAL_DATA';
export const GET_ORDER = 'GET_ORDER';
export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const addModalItem = (type, data) => ({
    type: OPEN_MODAL_DATA,
    data: data
})

