/**
 * Created by Rasmus on 2018-04-13.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer  } from 'react-router-redux';

const store = createStore(
	reducers
);

export default store;


