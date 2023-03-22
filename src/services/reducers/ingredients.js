import { ADD_ITEM, DELETE_ITEM, CHANGE_PRICE, OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, SWAP_INGREDIENTS, SET_CURRENT_ITEM, DELETE_CURRENT_ITEM, REMOVE_BUN } from "../actions/ingredients";


const initialState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false,

    ingredList: [],
    totalPrice: null,
    currentItem: null
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                ingredList: [
                    ...state.ingredList,
                    action.ingredList
                ]
            }
        case DELETE_ITEM: {
            const tempItems = [...state.items].map(item => item._id === action._id ? item.__v -= 1 : item.__v = item.__v)
            return {
                ...state,
                ingredList: [...state.ingredList].filter(item => item.id !== action.id),
                items: [...state.items, tempItems]
            };
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
        case SWAP_INGREDIENTS: {
            const newArray = [...state.ingredList]
            newArray.splice(action.dragIndex, 1)
            newArray.splice(action.hoverIndex, 0, state.ingredList[action.dragIndex])
            
            return {
                ...state,
                ingredList: newArray
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
                currentItem: null
            }
        }
        case REMOVE_BUN: {
            const tempItems = [...state.items].map(item => item.type === 'bun' ? item.__v = 0 : item.__v = item.__v)
            return {
                ...state,
                ingredList: [...state.ingredList].filter(item => item.type !== 'bun'),
                items: [...state.items, tempItems]
            };
        }
        default: {
            return state;
        }
    }
};