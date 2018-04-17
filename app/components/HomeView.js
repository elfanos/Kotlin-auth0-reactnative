/**
 * Created by Rasmus on 13/02/18.
 */
import React from 'react';
import LoginView from './LoginView'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import StartView from './StartView'
import {
    View,
    Button,
    Text
} from 'react-native'

const mapStateToProps = ( state ) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};
//TODO Check if logged in or not using session
//Check if pressed signUp or login
let HomeView = ({isLoggedIn}) => {
    if(isLoggedIn){
        return(
            <StartView/>
        );
    }else {
        return(
            <LoginView/>
        );
    }
};

HomeView.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};


HomeView = connect(mapStateToProps)(HomeView);
export default HomeView;