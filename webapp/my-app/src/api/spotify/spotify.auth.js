/**
 * Created by Rasmus on 2018-04-23.
 */
import React from 'react';
import Modules from '../Modules'
const REGEX_STRING_ARRAY = /[\["\]']+/gi;

export const spotifyTokens = async( code ) => {
    let responseToString = "";
    responseToString = await fetch(Modules.spotify.authenticationToken(code))
        .then(function (response) {
            if (!response.ok) {
                return Promise.reject().json()
            } else {
                return response.text();
            }
        });
        
    return retrieveStringFromArray(responseToString);
};
const retrieveStringFromArray = ( stringArray ) => {
    let output = stringArray.replace(REGEX_STRING_ARRAY,'');
    let newStringArray = output.split(",");
    return {
        accessToken: newStringArray[0],
        refreshToken: newStringArray[1]
    };
};