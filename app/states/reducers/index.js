/**
 * Created by Rasmus on 14/02/18.
 */
import { combineReducers } from 'redux';
import auth from './auth';
import signtextinput from './signtextinput';
import buttonSign from './buttonSign'
const combinedReducer = combineReducers({
    auth,
    signtextinput,
    buttonSign
});

export default combinedReducer;