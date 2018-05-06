/**
 * Created by Rasmus on 2018-04-18.
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const mapDispatchToProps = () => {

};

const mapStateToProps = () => {

};


let RegisterView = ({}) => {

	return(
		<div>
			<MuiThemeProvider>
				<div>
					<TextField
						hintText="Enter your email"
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
					<TextField
						hintText="Re-type your Password"
						floatingLabelText="Password"
						errorText={this.state.errorTextPassword}
						onChange={
							(event, newValue) =>
								this.handlePasswordValidation(event, newValue)
						}/>
					<br/>
					<RaisedButton
						label="Sign Up"
						primary={true}
						style={style}
						onClick={
							(event) => this.handleClick(event)
						}
					/>
					<br/>
					<p>Or</p>
					<FlatButton
						target="_blank"
						label="Google +"
						secondary={true}
						icon={<FontIcon className="fab fa-google-plus-g" />}
					/>
				</div>
			</MuiThemeProvider>
		</div>
	);

};

RegisterView =
    withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterView));

export default RegisterView;

