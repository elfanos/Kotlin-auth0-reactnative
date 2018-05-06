/**
 * Created by Rasmus on 2018-04-13.
 */
import {
	DEVELOPMENT_USER
} from './api.constant';

let handleResponse = ( response ) => {
	console.log('response ok' + response);
	if( !response.ok ){
		console.log('response ok' + response);
		return Promise.reject(response.statusText);
	}
	console.log('what is response? ' + response);
	return response.json();
};

export const register = ( user ) => {
	console.log(user);
	let newUser = {
		userName: user.username,
		password: user.password
	};
	const requestOption = {
		method: 'POST',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify( newUser )
	};
	return fetch( DEVELOPMENT_USER, requestOption )
		.then( handleResponse )
		.catch(function( err ){
			console.log('error: ' + err);
		});
};

export const loginUserNameValid = async( username ) => {
	let status = false;
	try{
		const response = await fetch('/user/'+username);
		const result = await response.json();
		console.log(result);
		status = false;
	}catch (error){
		console.log('message');
		status = true;
	}
	return status;
};