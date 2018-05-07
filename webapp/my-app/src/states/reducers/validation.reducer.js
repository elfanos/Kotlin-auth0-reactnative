/**
 * Created by Rasmus on 2018-04-17.
 */
import { checkIfValid, checkIfExist } from '../actions/validation.action';
import * as type from '../constants/validation.constant';
import * as service from '../services/validation.service';
const defaultState = {
	validationFunc: null,
	validationData: '',
	message: {
        context: '',
       	error: '',
		ok: true
	},
};

const reducer = ( state = defaultState, action ) => {
	switch ( action.type ){
		case type.CHECK_VALIDATION:
			return {
				...state,
                message: service.validation( action )
			};
		case type.NO_VALIDATION:
			return {
				...defaultState
			};
		default:
			return {
				...state
			};
	}
    
};

export default reducer;