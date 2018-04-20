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
import Route from 'react-router-dom/Route';

const mapStateToProps = ( state ) => {
    console.log( state.auth.isLoggedIn );
    return{
        isLoggedIn: state.auth.isLoggedIn
    };
};

let HomeView = ({isLoggedIn}) => {
   return(
       <Route exact path="/home/login" component={LoginView}/>
   );

};

HomeView.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default withRouter(connect(mapStateToProps)(HomeView));

