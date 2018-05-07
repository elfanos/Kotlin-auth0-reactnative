import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login } from '../../../states/actions/auth.action';
import { validationCheck,noValidation } from '../../../states/actions/validation.action';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { spotifyCallback } from '../../../api/services/spotify.services';
import FontAwesome from 'react-fontawesome';
import * as validation from '../../../states/constants/validation.constant';
import { getSpecificValueFromPromise } from '../../../prototypes/api.data.prototype';
import {validationUsername, validationPassword, getExistingUserNames } from '../controller/login.controller';

const passwordValidation = new RegExp('^(?=.{8,})(?=.*[0-9])');

const mapDispatchToProps = ( dispatch ) => {
	return {
		onLogin: ( username, password, code ) => { dispatch( login( username, password, code ) ); },
		validationCheck: ( validationFunc, validationData, message ) =>
		{ dispatch( validationCheck( validationFunc, validationData, message ) ); },
		noValidation: () => { dispatch( noValidation() );  }
	};
};
const mapStateToProps = ( state ) => {
	console.log( state );
	return {
		userError:  validationUsername(state.validUser.message),
        passwordError: validationPassword(state.validUser.message)
	};
};
class LoginView extends React.Component {
    previousLocation = this.props.location;
    constructor(props) {
    	super(props);
    	this.state = {
    		userNameState: '',
    		passwordState: '',
    	};
    }
    componentWillUpdate(nextProps) {
    	const { location } = this.props;
    	if (
    		nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
    	) {
    		this.previousLocation = this.props.location;
    	}
    }

    handlePasswordValidation(event, value){
    	this.setState({passwordState: value});
        this.props.validationCheck(
			value => !value.match(passwordValidation),
			value, validation.PASSWORD_REGULATION_MESSAGE_OBJECT
        );
    }
    handleUsernameValidation( value ) {
    	this.setState({userNameState:value});
    	let {} = this.userNameValidation(value);
    }
    async userNameValidation( value ){
    	let username = await getSpecificValueFromPromise(
			data => value === data.userName,
			getExistingUserNames(), value
		);
        this.props.validationCheck(
			value => value !== undefined,
			username, validation.USERNAME_EXIST_MESSAGE_OBJECT
        );
    }
    handleLogin(){
        spotifyCallback().then(res => window.location.href = res);
    	this.props.onLogin('aw','dad','adw');
    }
    //Reset error text and other stuffs
    handleBlurUserName(){
    	this.props.noValidation();
    }
    handleFocusUserName(){
    	this.handleUsernameValidation( this.state.userNameState );
    }

    handleBlurPassword(){
        this.props.noValidation();
    }
    handleFocusPassword(event){
    	this.handlePasswordValidation(event, this.state.passwordState);
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
    						onBlur={ () => this.handleBlurUserName() }
    						onFocus={ () => this.handleFocusUserName() }
    						onChange={
    							(event, newValue) =>
    								this.handleUsernameValidation( newValue )
    						}
    					/>
    					<br/>
    					<TextField
    						hintText="Enter your Password"
    						floatingLabelText="Password"
    						errorText={this.props.passwordError}
    						onBlur={ () => this.handleBlurPassword() }
    						onFocus={ ( event ) => this.handleFocusPassword( event ) }
    						onChange={
    							(event, newValue) =>
    								this.handlePasswordValidation( event, newValue )
    						}/>
    					<br/>
    					<RaisedButton
    						target="_blank"
    						label="Login with spotify"
    						secondary={true}
    						icon={<FontAwesome name='spotify'/>}
    						onClick={() => this.handleLogin()}
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
    validationCheck: PropTypes.func.isRequired,
    noValidation: PropTypes.func,
	userError: PropTypes.string.isRequired,
    passwordError: PropTypes.string.isRequired
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginView));