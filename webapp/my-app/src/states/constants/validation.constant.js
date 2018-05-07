/**
 * Created by Rasmus on 2018-04-17.
 */

//ACTION CONSTANTS
export const CHECK_VALIDATION = 'CHECK_VALIDATION';
export const NO_VALIDATION = 'NO_VALIDATION';

export const CONTEXT_USERNAME = 'USERNAME';
export const CONTEXT_PASSWORD = 'PASSWORD';


export const USERNAME_EXIST_MESSAGE_OBJECT = {
    context: 'USERNAME',
    error: 'Username already exist'
};
export const PASSWORD_REGULATION_MESSAGE_OBJECT = {
    context: 'PASSWORD',
    error: 'Password need to be ' +
    'atleast 8 character long and contain a number'
};

