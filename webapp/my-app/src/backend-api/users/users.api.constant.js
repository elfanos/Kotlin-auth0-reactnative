/**
 * Created by Rasmus on 2018-04-17.
 */

/**
 * API CALLS
 * */
export const get_all_usernames = () => {
    return 'api/users/all';
};
export const get_user_with_name = ( username ) => {
    return 'api/user/' + username
};