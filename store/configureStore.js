import { createStore, combineReducers } from 'redux';
import listingsReducer from '../reducers/listings';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            listings: listingsReducer,
            filters: filtersReducer,
        })
        );

    return store;
};