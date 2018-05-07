
import React from 'react';
import * as spotify from '../backend.api.constants/spotify.api.constants';
const REGEX_STRING_ARRAY = /["\]']+/gi;

const retrieveStringFromArray = ( stringArray ) => {
	let output = stringArray.replace(REGEX_STRING_ARRAY,'');
	let newStringArray = output.split(',');
	return {
		accessToken: newStringArray[0],
		refreshToken: newStringArray[1]
	};
};

export const spotifyTokens = async( code ) => {
	let responseToString = await fetch(spotify.authenticationToken(code))
		.then(function (response) {
			if (!response.ok) {
				return Promise.reject(response);
			} else {
				return response.text();
			}
		});

	return retrieveStringFromArray(responseToString);
};

export const spotifyCallback = async() => {
    return await fetch(spotify.callBackUri())
        .then(function (response) {
            if(!response.ok){
                return Promise.reject(response.statusText).json();
            }else{
                return Promise.resolve(response.text());
            }
        });
};