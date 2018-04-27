/**
 * Created by Rasmus on 2018-04-20.
 */
import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import queryString from 'query-string';
import Modules from '../Modules';

const mapStateToProps = ( state ) =>{
    console.log( state );
    return{
        username: state.auth.username,
        password: state.auth.password
    }
};


class SpotifyAuth extends React.Component{
    componentDidMount(){
        let parsed = queryString.parse(this.props.location.search);
        this.addTokenToUser(parsed);
    }
    async addTokenToUser(parsed){
        let tokens = await Modules.spotifyTokens(parsed.code)
            .then(function (response) {
                if(response.accessToken === undefined
                    && response.refreshToken === undefined){
                    return Promise.
                    reject(new Error('accessToken or refresh ' +
                        'token not retrieved'));
                }else{
                    return response;
                }
            });
        console.log(tokens);
        this.props.dispatch(Modules.initialize(
            this.props.username, "email", tokens
        ));
    }
    constructor(props) {
        super(props);
    }
    render() {
        let parsed = queryString.parse(this.props.location.search);
        if(parsed.code !== undefined){
            return(
                <Redirect to="/home"/>
            );
        }else{
            return(
                <div/>
            );
        }
    }
}
SpotifyAuth.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
};

export default withRouter(connect(mapStateToProps, null)(SpotifyAuth));