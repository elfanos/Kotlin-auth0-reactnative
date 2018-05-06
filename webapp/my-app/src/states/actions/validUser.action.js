/**
 * Created by Rasmus on 2018-04-17.
 */
import * as type from '../constants/validuser.constant';
export const checkIfValid = ( isValid ) => {
	return {
		type: type.CHECK_VALID,
		isValid: isValid
	};
};
export const checkIfExist = ( doesExist ) => {
	return {
		type: type.DOES_EXIST,
		doesExist: doesExist
	};
};