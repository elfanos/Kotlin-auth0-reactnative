/**
 * Created by Rasmus on 2018-04-17.
 */
import * as type from '../constants/validUser.constant';
export const checkIfValid = ( isValid , doesExist ) => {
	return {
		type: type.CHECK_VALID,
		isValid: isValid,
		doesExist: doesExist
	};
};
export const checkIfExist = ( isValid, doesExist ) => {
	return {
		type: type.DOES_EXIST,
		isValid: isValid,
		doesExist: doesExist
	};
};