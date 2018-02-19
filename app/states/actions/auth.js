/**
 * Created by Rasmus on 14/02/18.
 */
import * as type from '../constants/auth.constants';

export const login = (username, password) => {
    return {
        type: type.LOGIN,
        username: username,
        password: password
    };
};
export const register = ( username, password ) => {
    return {
        type: type.REGISTER,
        email: email,
        username: username,
        password: password
    }
};
export const logout = () => {
    return {
        type: type.LOGOUT
    };
};
export const routehandler = ( route ) => {
    return {
        type: type.ROUTE,
        route: route
    };
};
export const signup = (username, password) => {
    return (dispatch) => {
    };
};