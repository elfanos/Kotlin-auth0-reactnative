import React from 'react';
import './App.css';
import  HomeView  from './Home/HomeView'


/*async getUsers = () => {
    try {
        const response = await fetch('/user');
        console.log(response.text());
    }catch (err){
        console.log(err);
    }
}*/

let getUser = (async () => {
    try {
        const response = await fetch('/user');
        return response.text();
    }catch(err){
        console.log(err);
    }
});

const test = () => {
    const requestOption = {
        headers: {'Content-type': 'application/json'}
    };
    return fetch( '/user', requestOption )
        .then( handleResponse )
        .catch(function(err){
            console.log("error: " + err);
        })
};
let handleResponse = ( response ) => {
    console.log("response ok" + response);
    if(!response.ok){
        console.log("response ok" + response);
   //     console.log(response);
        return Promise.reject(response.statusText)
    }
    console.log("what is response? " + response);
    return response.json()
};

class App extends React.Component {
  render() {
    return (
      <HomeView />
    );
  }
}

export default App;
