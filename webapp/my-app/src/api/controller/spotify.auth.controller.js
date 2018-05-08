import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import queryString from 'query-string';
import { initialize } from '../../states/actions/user.action';
import { spotifyTokens, getCurrentUserData } from '../services/spotify.services';
import { getSpecificValueFromPromise } from '../../prototypes/api.data.prototype';

const mapStateToProps = ( state ) => {
	console.log( state );
	return{
		username: state.auth.username,
		password: state.auth.password
	};
};
let initializeUserData = async( parsed ) => {
	let userData = {};
	userData.token = await spotifyTokens( parsed.code )
        .then(function (response) {
            if(response.accessToken === undefined
                && response.refreshToken === undefined){

                return Promise.reject(
                    new Error('accessToken or refresh ' +
                        'token not retrieved')
                );
            }else{
                return Promise.resolve(response);
            }
        });

	userData.token.accessToken = userData.token.accessToken.slice(1);
	let currentUser = await getCurrentUserData( userData.token.accessToken )
		.then(data => data).catch(error => error);
	userData.email = currentUser.email;
	userData.name = currentUser.displayName;
	return userData;

};
class SpotifyAuth extends React.Component{
	componentDidMount(){
		let parsed = queryString.parse(this.props.location.search);
        initializeUserData(parsed).then(data =>
			this.props.dispatch(
                initialize(
                    data.name, data.email, data.token
                )
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