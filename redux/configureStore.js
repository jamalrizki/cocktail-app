import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from './campsites';
import { comments } from './comments';
import { promotions } from './promotions';
import { favorites } from './favorites';
import { ingredients } from './ingredients';
import { instructions } from './instructions';
import { things } from './things';
import { details } from './details'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites,
            comments,
            promotions,
            favorites,
            ingredients,
            instructions,
            things,
            details
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}