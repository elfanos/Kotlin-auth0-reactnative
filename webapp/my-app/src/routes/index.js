/**
 * Created by Rasmus on 2018-04-20.
 */
import React from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter,
	Switch,
	Route

} from 'react-router-dom';
import HomeView from '../components/home/home.component';
import LoginView from '../components/login/view/login.view';
import SpotIfy from '.././api/controller/spotify.auth.controller';
import { PersistGate } from 'redux-persist/integration/react';
import  Store  from '../states/store';
export const ApplicationRouter = () =>{
	return (
		<Provider store ={Store.store} >
			<PersistGate persistor={Store.persistor}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/login" component={LoginView}/>
						<Route exact path="/home" component={HomeView}/>
						<Route exact path="/auth/spotify/callback" component={SpotIfy}/>
						<Route exact path="/user"/>
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};
export default ApplicationRouter;