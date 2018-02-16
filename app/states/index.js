/**
 * Created by Rasmus on 14/02/18.
 */
import { createStore } from 'redux';
import combinedReducers from './reducers/index';

let store = createStore(combinedReducers);

export default store;