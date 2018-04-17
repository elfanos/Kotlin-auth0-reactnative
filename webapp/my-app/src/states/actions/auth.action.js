/**
 * Created by Rasmus on 2018-04-13.
 */

import * as type from '../constants/auth.constant';

export const login = ( username, password ) => {
    console.log(username,password);
    return {
        type: type.LOGIN,
        username: username,
        password: password
    }
};
export const logout = ( username ) => {
    return {
        type: type.LOGOUT,
        username: username
    }
};
export const register = ( username, password ) => {
  return {
      type: type.REGISTER,
      username: username,
      password: password
  }
};
