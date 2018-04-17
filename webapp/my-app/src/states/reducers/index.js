/**
 * Created by Rasmus on 2018-04-13.
 */
import { combineReducers } from 'redux';
import auth from './auth.reducer';
import validUser from './validUser.reducer'
console.log(combineReducers);
const combineReducer = combineReducers({
    auth,
    validUser
});
export default combineReducer;

