import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login } from '../states/actions/auth.action';
import { checkIfExist } from '../states/actions/validUser.action';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import * as api from '../api/backend.api.constants/users.api.constant';
import * as spotIfyApi from '../api/backend.api.constants/spotify.api.constants';
import FontAwesome from 'react-fontawesome';

const passwordValidation = new RegExp('^(?=.{8,})(?=.*[0-9])');
const handleResponse = ( response ) => {
	if(!response.ok){
		return Promise.reject(response.statusText).json();
	}else{
		return response.json();
	}
};
//Get existing user from the api
let getExistingUserNames = async( ) => {
	return await fetch(api.get_all_usernames())
		.then(handleResponse)
		.catch(function (error) {
			console.log('error ' + error);
		});
};
const mapDispatchToProps = ( dispatch ) => {
	return {
		onLogin: ( username, password, code ) => { dispatch( login( username, password, code ) ); },
		checkIfExist: ( isValid, doesExist ) => { dispatch( checkIfExist( isValid, doesExist) ); }
	};
};
const mapStateToProps = ( state ) => {
	return {
		users: getExistingUserNames(),
		userValid: state.validUser.doesExist,
		userError: state.validUser.reason
	};
};
class LoginView extends React.Component {
    previousLocation = this.props.location;
    constructor(props) {
    	super(props);
    	this.state = {
    		username: '',
    		password: '',
    		userNameState: '',
    		passwordState: '',
    		errorTextPassword: '',
    		errorTextUsername: '',
    		userFunc: null
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
    	if(value.match(passwordValidation)){
    		this.setState({errorTextPassword: ''});
    	}else{
    		this.setState(
    			{errorTextPassword: 'Password need to be ' +
                'atleast 8 character long and contain a number'}
    		);
    	}
    }
    handleUsernameValidation(event, value){
    	this.setState({userNameState:value});
    	this.userNameValidation(value);
    
    }
    async userNameValidation(value){
    	let checkUserName = this.props.users.then(function ( response ) {
    		return response.find(function (responseValue) {
    			return  value === responseValue.userName;
    		});
    	}).then(data =>{ return data;});
    	let response = await checkUserName;

    	if(response !== undefined){ 
    		this.props.checkIfExist( true, true );
    	} else { 
    		this.props.checkIfExist( true, false ); 
    	}
    }
    async spotifyCallback() {
    	window.location.href = await fetch(spotIfyApi.callBackUri())
    		.then(function (response) {
    			if(!response.ok){
    				return Promise.reject(response.statusText).json();
    			}else{
    				return response.text();
    			}
    		});
    }

    handleLogin(){
    	this.spotifyCallback();
    	this.props.onLogin('aw','dad','adw');
    }
    //Reset error text and other stuffs
    handleBlurUserName(){
    	this.props.checkIfExist( true, false );
    }
    handleFocusUserName(event){
    	this.handleUsernameValidation(event,this.state.userNameState);
    }

    handleBlurPassword(){
    	this.setState( {errorTextPassword: '' } );
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
    						onFocus={ ( event ) => this.handleFocusUserName( event ) }
    						onChange={
    							(event, newValue) =>
    								this.handleUsernameValidation(event, newValue)
    						}
    					/>
    					<br/>
    					<TextField
    						hintText="Enter your Password"
    						floatingLabelText="Password"
    						errorText={this.state.errorTextPassword}
    						onBlur={ () => this.handleBlurPassword() }
    						onFocus={ ( event ) => this.handleFocusPassword( event ) }
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
	checkIfExist: PropTypes.func.isRequired,
	users: PropTypes.object.isRequired,
	userValid: PropTypes.bool.isRequired,
	userError: PropTypes.string.isRequired
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginView));