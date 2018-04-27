/**
 * Created by Rasmus on 2018-04-21.
 */
import * as type from '../constants/user.constant';

export const initialize = ( username, email, token ) => {
    return {
        type: type.INITIALIZE,
        username: username,
        email: email,
        token: token
    }
};