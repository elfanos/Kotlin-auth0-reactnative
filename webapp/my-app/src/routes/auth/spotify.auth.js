/**
 * Created by Rasmus on 2018-04-20.
 */
import React from 'react';
import {ComponentUserView } from '../Components';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = () =>{

};
const mapStateToProps = () =>{

};


const SpotifyAuth = () => {
    return (
        <div>
            bananer
        </div>
    );
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SpotifyAuth));