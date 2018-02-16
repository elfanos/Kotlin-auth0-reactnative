/**
 * Created by Rasmus on 14/02/18.
 */
import * as type from '../constants/auth.constants'
import { register } from '../serivces/auth.service'
const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case type.LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
        case type.LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: '',
                password: ''
            });
        case type.REGISTER:
            return Object.assign({},state, {
                isLoggedIn: register(action),
                username: action.username,
                password: action.password
            });
        case type.ROUTE:
            return Object.assign({},state,{
                route: action.route
            });
        default:
            return state;
    }
};
export default reducer;