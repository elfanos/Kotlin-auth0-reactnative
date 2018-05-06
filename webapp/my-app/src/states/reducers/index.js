/**
 * Created by Rasmus on 2018-04-13.
 */
import { combineReducers } from 'redux';
import auth from './auth.reducer';
import validUser from './validUser.reducer';
import user from './user.reducer';

export default combineReducers({
	auth,
	validUser,
	user
});

