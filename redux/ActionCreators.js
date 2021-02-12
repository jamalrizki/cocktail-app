import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { ingredients } from './ingredients';
import { instructions } from './instructions';

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

export const fetchPromotions = () => dispatch => {
    
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});


export const postFavorite = campsiteId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(campsiteId));
    }, 2000);
};

export const addFavorite = campsiteId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: campsiteId
});

export const postComment = (campsiteId, rating, author) => dispatch => {
    const newComment = {
        campsiteId,
        rating,
        author
    };
    setTimeout(() => {
        dispatch(addComment(newComment));
    }, 2000);
};


export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const deleteFavorite = campsiteId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: campsiteId
}); 


export const fetchIngredients = () => dispatch => {
    return fetch(baseUrl + 'ingredients')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(ingredients => dispatch(addIngredients(ingredients)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const ingredientsFailed = errMess => ({
    type: ActionTypes.INGREDIENTS_FAILED,
    payload: errMess
});

export const addIngredients = ingredients => ({
    type: ActionTypes.ADD_INGREDIENTS,
    payload: ingredients
});

export const fetchInstructions = () => dispatch => {
    return fetch(baseUrl + 'instructions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(instructions => dispatch(addInstructions(instructions)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const instructionsFailed = errMess => ({
    type: ActionTypes.INSTRUCTIONS_FAILED,
    payload: errMess
});

export const addInstructions = instructions => ({
    type: ActionTypes.ADD_INSTRUCTIONS,
    payload: instructions
});

export const fetchThings = () => dispatch => {
    return fetch(baseUrl + 'things')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(things => dispatch(addThings(things)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const thingsFailed = errMess => ({
    type: ActionTypes.THINGS_FAILED,
    payload: errMess
});

export const addThings = things => ({
    type: ActionTypes.ADD_THINGS,
    payload: things
});

export const fetchDetails = () => dispatch => {
    return fetch(baseUrl + 'details')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(details => dispatch(addDetails(details)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const detailsFailed = errMess => ({
    type: ActionTypes.DETAILS_FAILED,
    payload: errMess
});

export const addDetails = details => ({
    type: ActionTypes.ADD_DETAILS,
    payload: details
});