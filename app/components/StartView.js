/**
 * Created by Rasmus on 14/02/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../states/actions/auth'
import {
    View,
    Text,
    Button
} from 'react-native'
const mapStateToProps = ( state, ownProps ) => {
    console.log("state", state.auth.username);
    return {
        username: state.auth.username
    }
};
const mapDispatchToProps = ( dispatch ) => {
    return {
        onLogout: () => { dispatch( logout() ) }
    }
};
let StartView = ({username, onLogout}) => {
    return(
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
      }}>
            <Text>Tjoobre { username }</Text>

            <Button title={"title"} onPress={onLogout}>
                LogOut
            </Button>
        </View>
    );
};
StartView.propTypes = {
    username: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired
};
StartView = connect(mapStateToProps, mapDispatchToProps)(StartView);
export default StartView;