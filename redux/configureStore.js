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
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root',
    storage,
    debug: true
}



export const ConfigureStore = () => {
    const store = createStore(
        
        persistCombineReducers(config, {
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

    const persistor = persistStore(store);

    return { persistor, store };
}