import { UPDATE_TYPE } from "../actions/draggable-animal";

const initialState = {
    animals: []
};

export const draggableAnimalReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE: {
            return {
                ...state,
                animals: state.animals.map(animal =>
                    animal.id === action.id ? { ...animal, board: action.board } : animal
                )
            };
        }
        default:
            return state;
    }
}