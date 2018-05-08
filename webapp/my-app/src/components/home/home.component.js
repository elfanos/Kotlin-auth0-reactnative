/**
 * Created by Rasmus on 2018-04-13.
 */
import React from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { initialize } from '../../states/actions/user.action';
const mapStateToProps = (state) => {

	console.log( state );
	return {
		isLoggedIn: state.user.isLoggedIn,
		username: state.user.username,
		email: state.user.email,
		accessToken: state.user.accessToken,
		refreshToken: state.user.refreshToken
	};
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		initializeUser: (username,email, token) => { dispatch( initialize( username, email, token ) ); }
	};
};

class HomeView extends React.Component {
	componentDidMount() {

	}
	render() {
		return (
			<div>
				<p>
                    email?={this.props.email}
					<br/>
                    username?={this.props.username}
					<br/>
                    isLoggedIn?={this.props.isLoggedIn.toString()}
					<br/>
                    refreshToken?={this.props.refreshToken}
					<br/>
                    accessToken?={this.props.accessToken}
				</p>
			</div>
		);
	}
}

HomeView.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	username: PropTypes.string,
	email: PropTypes.string,
	initializeUser: PropTypes.func,
	accessToken: PropTypes.string,
	refreshToken: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeView));

