/**
 * Created by Rasmus on 2018-04-17.
 */
import * as type from '../constants/validUser.constant';
export const errorTextDoesExist = ( doesExist) => {
	if(!doesExist){
		return '';
	}else {
		return type.REASON_USERNAME_EXIST;
	}
};

export const errorTextIsValid = ( isValid ) => {
	if(!isValid) {
		return type.REASON_USERNAME_NOT_VALID;
	}else {
		return '';
	}
};