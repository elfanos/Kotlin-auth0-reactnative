/**
 * Created by Rasmus on 14/02/18.
 */
import { combineReducers } from 'redux';
import auth from './auth';

const combinedReducer = combineReducers({
    auth
});

export default combinedReducer;