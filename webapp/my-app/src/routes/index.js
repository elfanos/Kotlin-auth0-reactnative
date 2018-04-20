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
import HomeRoutes from './HomeRoutes';
import UserRoutes from './UserRoutes';
import  store  from '../states/index'
import UserView from '../Home/UserView';
import HomeView from '../Home/HomeView';
import LoginView from '../Home/LoginView'
import SpotifyAuth from './auth/spotify.auth';

export const ApplicationRouter = () =>{
    return (
        <Provider store = {store} >
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LoginView}/>
                    <Route exact path="/home" component={HomeView}/>
                    <Route exact path="/auth/spotify/callback" component={SpotifyAuth}/>
                    <Route exact path="/user" component={UserView}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};
export default ApplicationRouter;