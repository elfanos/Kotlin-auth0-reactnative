/**
 * Created by Rasmus on 2018-05-06.
 */
import { responseResolvedAsJson } from '../../../api/controller/api.response.controller';
import * as api from '../../../api/backend.api.constants/users.api.constant';

const passwordValidation = new RegExp('^(?=.{8,})(?=.*[0-9])');
let doesExist = false;

export const getExistingUserNames = async( ) => {
    return await fetch(api.get_all_usernames())
        .then(responseResolvedAsJson)
        .catch(function (error) {
            console.log('error ' + error);
        });
};

export let handlePasswordValidation = (event, value) => {
    if(value.match(passwordValidation)){
        return {errorTextPassword: ''};
    }else{
        return {errorTextPassword: 'Password need to be ' +
            'atleast 8 character long and contain a number'};
    }
};
//Can be abstracted to find a specific value inside an
//json array
export const getUsersFromPromise = ( currentUser, promiseOfUsers ) => {
    return promiseOfUsers.then(function ( users ) {
        return users.find(function (user) {
            return currentUser === user.userName;
        });
    }).then(userData =>{ return userData; } );
};
export const userNameValidation = async( currentUser, promiseOfUsers ) => {
    let response = await getUsersFromPromise( currentUser, promiseOfUsers );
    if(response !== undefined){
        return doesExist = true;
    } else {
        return doesExist = false;
    }
};