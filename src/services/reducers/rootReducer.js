import { ingredientsReducer } from './ingredients'
import { orderReducer } from './order'
import { profileReducer } from './profile'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    ingredientsReducer,
    orderReducer,
    profileReducer
})