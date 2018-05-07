/**
 * Created by Rasmus on 2018-04-17.
 */
import * as type from '../constants/validation.constant';
export const validationCheck = ( validationFunc, validationData, message ) => {
	return {
		type: type.CHECK_VALIDATION,
        validationFunc: validationFunc,
		validationData: validationData,
		message: {
            context: message.context,
            error: message.error
		}
	};
};
export const noValidation = () => {
	return { type: type.NO_VALIDATION };
};