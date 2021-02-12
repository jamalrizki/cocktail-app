import * as ActionTypes from './ActionTypes';

export const instructions = (state = { errMess: null, instructions: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INSTRUCTIONS:
            return { ...state, errMess: null, instructions: action.payload };

        case ActionTypes.INSTRUCTIONS_FAILED:
            return { ...state, errMess: action.payload };


        default:
            return state;
    }
};