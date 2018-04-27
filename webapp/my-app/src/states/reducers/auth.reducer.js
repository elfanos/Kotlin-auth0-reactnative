/**
 * Created by Rasmus on 2018-04-13.
 */

import * as type from '../constants/auth.constant'
import { register, loginUserNameValid } from '../services/auth.service'
const defaultState = {
    isLoggedIn: false,
    username: '',
    password: '',
    code: ''
};
const reducer = ( state = defaultState, action ) => {
    console.log(action);
    switch ( action.type ) {
        case type.LOGIN:
           return {
               ...state,
               isLoggedIn: true,
               username: action.username,
               password: action.password,
               code: action.code

           };
        case type.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                username: action.username,
            };
        case type.REGISTER:
            return {
                ...state,
                isLoggedIn: true,
                username: action.username,
                password: action.password
            };
        default:
            return state;
    }
};

export default reducer;
