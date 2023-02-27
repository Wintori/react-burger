import { OPEN_MODAL_DATA, CLOSE_MODAL_DATA } from "../actions/modalData";

const initialState = {
    isOpen: false
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL_DATA: {
            return { ...state, isOpen: true };
        }
        case CLOSE_MODAL_DATA: {
            return { ...state, isOpen: false};
        }
        default: {
            return state;
        }
    }
};