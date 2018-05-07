/**
 * Created by Rasmus on 2018-05-06.
 */
import { responseResolvedAsJson } from '../../../api/controller/api.response.controller';
import * as api from '../../../api/backend.api.constants/users.api.constant';
import * as type from '../../../states/constants/validation.constant'
export const getExistingUserNames = async( ) => {
    return await fetch(api.get_all_usernames())
        .then(responseResolvedAsJson)
        .catch(error =>  console.log('error ' + error));
};
export const validationPassword = ( message ) => {;
    if(message.context === type.CONTEXT_PASSWORD){
        return message.error;
    } else { return ''; }
};
export const validationUsername = ( message ) => {;
    if(message.context === type.CONTEXT_USERNAME){
        return message.error;
    } else { return ''; }
};
