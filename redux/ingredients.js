import * as ActionTypes from './ActionTypes';

export const ingredients = (state = { errMess: null, ingredients: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INGREDIENTS:
            return { ...state, errMess: null, ingredients: action.payload };

        case ActionTypes.INGREDIENTS_FAILED:
            return { ...state, errMess: action.payload };


        default:
            return state;
    }
};