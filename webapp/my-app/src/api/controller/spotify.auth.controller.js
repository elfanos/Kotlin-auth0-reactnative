import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import queryString from 'query-string';
import { initialize } from '../../states/actions/user.action';
import { spotifyTokens } from '../services/spotify.services';

const mapStateToProps = ( state ) => {
	console.log( state );
	return{
		username: state.auth.username,
		password: state.auth.password
	};
};

let addTokenToUser = async( parsed ) => {
	let tokens = await spotifyTokens( parsed.code )
		.then(function (response) {
			if(response.accessToken === undefined
                && response.refreshToken === undefined){

				return Promise.reject(
					new Error('accessToken or refresh ' +
                        'token not retrieved')
				);
			}else{
				return response;
			}
		});
	console.log( tokens );
	return tokens;
};

class SpotifyAuth extends React.Component{
	componentDidMount(){
		let parsed = queryString.parse(this.props.location.search);
		this.props.dispatch(
			initialize(
				this.props.username, 'email', addTokenToUser(parsed)
			)
		);
	}
	render() {
		let parsed = queryString.parse(this.props.location.search);
		if(parsed.code !== undefined){
			return( <Redirect to="/home"/> );
		}else{
			return( <Redirect to="/login"/> );
		}
	}
}
SpotifyAuth.propTypes = {
	username: PropTypes.string,
	password: PropTypes.string,
};

export default withRouter(connect(mapStateToProps, null)(SpotifyAuth));