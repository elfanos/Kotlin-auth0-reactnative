/**
 * Created by Rasmus on 2018-04-13.
 */
import { createStore } from 'redux';
import combineReducer from './reducers/index';

let store = createStore(combineReducer);

export default store;


