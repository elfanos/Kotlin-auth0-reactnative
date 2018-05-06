/**
 * Created by Rasmus on 2018-04-17.
 */
import { checkIfValid, checkIfExist } from '../actions/validuser.action';
import * as type from '../constants/validuser.constant';
import * as service from '../services/validuser.service';
const defaultState = {
	type: '',
	isValid: true,
	doesExist: false,
	reason: ''
};

const reducer = ( state = defaultState, action ) => {
	switch ( action.type ){
	case type.DOES_EXIST:
		return {
			...state,
			isValid: action.isValid,
			doesExist: action.doesExist,
			reason: service.errorText( type.DOES_EXIST, action.doesExist )
		};
	case type.CHECK_VALID:
		return {
			...state,
			isValid: action.isValid,
			doesExist: action.doesExist,
			reason: service.errorText( type.CHECK_VALID, action.isValid)
		};
            
	default:
		return {
			...state
		};
	}
    
};

export default reducer;