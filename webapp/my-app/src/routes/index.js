/**
 * Created by Rasmus on 2018-04-20.
 */
import React from 'react';
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Switch,
    Route

} from 'react-router-dom';
import SpotifyAuth from './auth/SpotifyAuth';
import { PersistGate } from 'redux-persist/integration/react'
import Modules from './Modules'
import  Store  from '../states/ConfigureStore'
export const ApplicationRouter = () =>{
    return (
        <Provider store ={Store.store} >
            <PersistGate persistor={Store.persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/login" component={Modules.LoginView}/>
                        <Route exact path="/home" component={Modules.HomeView}/>
                        <Route exact path="/auth/spotify/callback" component={SpotifyAuth}/>
                        <Route exact path="/user" component={Modules.UserView}/>
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};
export default ApplicationRouter;