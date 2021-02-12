import * as ActionTypes from './ActionTypes';

export const things = (state = { errMess: null, things: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_THINGS:
            return { ...state, errMess: null, things: action.payload };

        case ActionTypes.THINGS_FAILED:
            return { ...state, errMess: action.payload };


        default:
            return state;
    }
};