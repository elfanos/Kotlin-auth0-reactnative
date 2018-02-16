/**
 * Created by Rasmus on 2018-02-16.
 */
import {
    DEVELOPMENT_USER
} from './api.constants'
import axios from 'axios'

export const register = ( user ) => {
    console.log("user-------> user name: " + user.username);
    console.log("user-------> password: " + user.password);
    let newUser = {
        userName: user.username,
        password: user.password
    };
  const requestOption = {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify( newUser )
  };
  return fetch( DEVELOPMENT_USER, requestOption)
      .then( handleResponse )
      .catch(function(err){
            console.log("error: " + err);
      })
};

let handleResponse = ( response ) => {
    console.log("response ok" + response);
    if(!response.ok){
        console.log("response ok" + response);
        return Promise.reject(response.statusText)
    }
    console.log("what is response? " + response);
    return response.json()
};