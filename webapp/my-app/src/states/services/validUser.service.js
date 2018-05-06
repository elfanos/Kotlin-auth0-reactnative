/**
 * Created by Rasmus on 2018-04-17.
 */
import * as type from '../constants/validuser.constant';

export const errorText = ( reason, errorType ) => {
		switch ( reason ){
			case type.DOES_EXIST:
				return errorTextDoesExist( errorType );
			case type.CHECK_VALID:
				return errorTextIsValid( errorType );
			default:
				return '';
		}
};

const errorTextDoesExist = ( doesExist) => {
	if(!doesExist){
		return '';
	}else {
		return type.REASON_USERNAME_EXIST;
	}
};

const errorTextIsValid = ( isValid ) => {
	if(!isValid) {
		return type.REASON_USERNAME_NOT_VALID;
	}else {
		return '';
	}
};