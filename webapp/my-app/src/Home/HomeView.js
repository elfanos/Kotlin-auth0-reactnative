/**
 * Created by Rasmus on 2018-04-13.
 */
import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import  LoginView  from './LoginView';
import UserView from './UserView';

const mapStateToProps = ( state ) => {
    console.log( state.auth.isLoggedIn );
    return{
        isLoggedIn: state.auth.isLoggedIn
    };
};

let HomeView = ({isLoggedIn}) => {
    if( !isLoggedIn ) { return( <LoginView/> ); }
    else{ return( <UserView/> ); }

};

HomeView.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};


HomeView = withRouter(connect(mapStateToProps)(HomeView));
export default HomeView;

