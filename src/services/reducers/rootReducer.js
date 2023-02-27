import {modalReducer} from './modalData'
import {ingredientsReducer} from './ingredients'
import { draggableAnimalReducer } from "./draggable-animal";
import { dropTargetReducer } from "./drop-target";
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    ingredientsReducer,
    modalReducer,
    animalList: draggableAnimalReducer,
    boardList: dropTargetReducer
})