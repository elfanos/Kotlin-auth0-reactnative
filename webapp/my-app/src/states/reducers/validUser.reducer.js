/**
 * Created by Rasmus on 2018-04-17.
 */
import { checkIfValid, checkIfExist } from '../actions/validUser.action';
import * as type from '../constants/validUser.constant';
import * as service from '../services/validUser.service';
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
			reason: service.errorTextDoesExist( action.doesExist )
		};
	case type.CHECK_VALID:
		return {
			...state,
			isValid: action.isValid,
			doesExist: action.doesExist,
			reason: service.errorTextIsValid( action.isValid )
		};
            
	default:
		return {
			...state
		};
	}
    
};

export default reducer;