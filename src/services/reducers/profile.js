import { SET_SECTION_PROFILE, SET_SECTION_HISTORY } from '../actions/profile'


const initialState = {
    section: 'profile',
};


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SECTION_PROFILE: {
            return {
                ...state,
                section: 'profile',
            };
        }
        case SET_SECTION_HISTORY: {
            return {
                ...state,
                section: 'history',
            };
        }
        default: {
            return state;
        }
    }
};