import { ingredientsReducer } from './ingredients'
import { orderReducer } from './order'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    ingredientsReducer,
    orderReducer
})