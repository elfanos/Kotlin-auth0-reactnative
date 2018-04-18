/**
 * Created by Rasmus on 2018-04-13.
 */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login } from '../states/actions/auth.action';
import { checkIfExist } from '../states/actions/validUser.action'
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import * as api from '../backend-api/users/users.api.constant';

import FontAwesome from 'react-fontawesome';


const passwordValidation = new RegExp("^(?=.{8,})(?=.*[0-9])");

const mapDispatchToProps = ( dispatch ) => {
    return {
        onLogin: ( username, password ) => { dispatch( login( username, password ) ) },
        checkIfExist: ( isValid, doesExist ) => { dispatch( checkIfExist( isValid, doesExist) ) }
    };
};
const mapStateToProps = ( state ) => {
    return {
        users: getExistingUserNames(),
        userValid: state.validUser.doesExist,
        userError: state.validUser.reason
    }
};

//Get existing user from the api
let getExistingUserNames = async( ) => {
    return await fetch(api.get_all_usernames())
        .then(handleResponse)
        .catch(function (error) {
            console.log("error " + error);
        });
};
const handleResponse = ( response ) => {
    if(!response.ok){
        return Promise.reject(response.statusText).json()
    }else{
        return response.json()
    }
};
class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorTextPassword: '',
            errorTextUsername: '',
            userFunc: null
        }

    }
    handlePasswordValidation(event, value){
        console.log("password " + value);
        console.log(this.props.users);
        if(value.match(passwordValidation)){
            this.setState({errorTextPassword: ""});
        }else{
            this.setState(
                {errorTextPassword: "Password need to be " +
                "atleast 8 character long and contain a number"}
                );
        }
    }
    async handleUsernameValidation(event, value){
        let checkUserName = this.props.users.then(function ( response ) {
            return response.find(function (responseValue) {
                return  value === responseValue.userName
            });
        }).then(data =>{ return data;});
        let response = await checkUserName;

        if(response !== undefined){ this.props.checkIfExist( true, true );
        }else{ this.props.checkIfExist( true, false ); }
    
    }
    handleClick(e){
        console.log(this.state);

    }
    render() {

        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login">
                        </AppBar>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            errorText={this.props.userError}
                            onChange={
                                (event, newValue) =>
                                this.handleUsernameValidation(event, newValue)
                            }/>
                        <br/>
                        <TextField
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            errorText={this.state.errorTextPassword}
                            onChange={
                                (event, newValue) =>
                                this.handlePasswordValidation(event, newValue)
                            }/>
                        <br/>
                        <RaisedButton
                            target="_blank"
                            label="Login with spotify"
                            secondary={true}
                            icon={<FontAwesome name='spotify'/>}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

}

const style = {
    margin: 15,
};
LoginView.propTypes = {
    onLogin: PropTypes.func.isRequired,
    checkIfExist: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    userValid: PropTypes.bool.isRequired,
    userError: PropTypes.string.isRequired
};
LoginView = withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginView));
export default LoginView;