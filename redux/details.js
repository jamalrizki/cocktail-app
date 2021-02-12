import * as ActionTypes from './ActionTypes';

export const details = (state = { errMess: null, details: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DETAILS:
            return { ...state, errMess: null, details: action.payload };

        case ActionTypes.DETAILS_FAILED:
            return { ...state, errMess: action.payload };


        default:
            return state;
    }
};