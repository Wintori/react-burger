import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, DELETE_ORDER } from '../actions/order'


const initialState = {
    order: null,
    orderRequest: false,
    orderFailed: false,
};


export const orderReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true
            };
        }
        case GET_ORDER_SUCCESS: {
            return { ...state, orderFailed: false, order: action.order, orderRequest: false };
        }
        case GET_ORDER_FAILED: {
            return { ...state, orderFailed: true, orderRequest: false };
        }
        case DELETE_ORDER: {
            return { ...state, order: null }
        }
        default: {
            return state;
        }
    }
};