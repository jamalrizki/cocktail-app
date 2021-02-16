import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from './campsites';
import { comments } from './comments';
import { favorites } from './favorites';
import { ingredients } from './ingredients';
import { instructions } from './instructions';
import { things } from './things';
import { details } from './details';
import { populars } from './populars';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites,
            comments,
            favorites,
            ingredients,
            instructions,
            things,
            details,
            populars,
        
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}