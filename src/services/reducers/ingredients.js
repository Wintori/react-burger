import { ADD_ITEM, DELETE_ITEM, CHANGE_PRICE, OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, SWAP_INGREDIENTS, SET_CURRENT_ITEM, DELETE_CURRENT_ITEM, REMOVE_BUN } from "../actions/ingredients";


const initialState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false,
    order: null,
    orderRequest: false,
    orderFailed: false,

    ingredList: [],
    isOpen: false,
    totalPrice: null,
    currentItem: {}
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case DELETE_ITEM: {
        //     return { ...state, ingredList: [] };
        // }
        case ADD_ITEM:
            return {
                ...state,
                ingredList: [
                    ...state.ingredList,
                    action.ingredList
                ]
            }
        // case ADD_ITEM: {
        //     return {
        //         ...state,
        //         ingredList: [...state.ingredList, ...state.items.filter(item => item.id === action.id)]
        //     };
        // }
        case DELETE_ITEM: {
            return { ...state, ingredList: [...state.ingredList].filter(item => item.id !== action.id) };
        }
        case CHANGE_PRICE:
            return {
                ...state,
                totalPrice: state.ingredList.reduce((prev, curr) => {
                    if (curr.type === 'bun') {
                        return prev + curr.price * 2
                    } else {
                        return prev + curr.price
                    }
                }, 0)
            }
        case OPEN_ORDER_MODAL: {
            return { ...state, isOpen: true };
        }
        case CLOSE_ORDER_MODAL: {
            return { ...state, isOpen: false };
        }
        case GET_ITEMS_REQUEST: {
            return {
                ...state,
                itemsRequest: true
            };
        }
        case GET_ITEMS_SUCCESS: {
            return { ...state, itemsFailed: false, items: action.items, itemsRequest: false };
        }
        case GET_ITEMS_FAILED: {
            return { ...state, itemsFailed: true, itemsRequest: false };
        }
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
        case SWAP_INGREDIENTS: {
            return {
                ...state,
                ingredList: action.ingredList
            }
        }
        case SET_CURRENT_ITEM: {
            return {
                ...state,
                currentItem: action.item
            }
        }
        case DELETE_CURRENT_ITEM: {
            return {
                ...state,
                currentItem: {}
            }
        }
        case REMOVE_BUN: {
            return { ...state, ingredList: [...state.ingredList].filter(item => item.type !== 'bun') };
        }
        default: {
            return state;
        }
    }
};