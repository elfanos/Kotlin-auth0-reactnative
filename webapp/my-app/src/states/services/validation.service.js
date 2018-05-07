/**
 * Created by Rasmus on 2018-04-17.
 */
import { isFunc } from '../../prototypes/helper.functions';

//use case for ok if its true
//error a message for that context
export const validation = ( action ) => {
    if(!isFunc(action.validationFunc)) { throw new TypeError('Expected a function as a argument'); }

    if(action.validationFunc(action.validationData)) {
        return {
            context: action.message.context,
            error: action.message.error,
            ok: false
        };
    }else {
        return {
            context: action.message.context,
            error: '',
            ok: true
        };
    }

};
