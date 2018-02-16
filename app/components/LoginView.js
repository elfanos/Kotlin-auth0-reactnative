/**
 * Created by Rasmus on 13/02/18.
 */
import React from 'react';
import * as colors from './design/colors.hex'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login, signup, routehandler, register } from '../states/actions/auth';
import {
    View,
    Text
} from 'react-native'
import { Button,FormLabel, FormInput,FormValidationMessage } from 'react-native-elements';

const mapStateToProps = ( state, ownProps ) => {
    return{
        isLoggedIn: state.auth.isLoggedIn,
        route: state.auth.route,
    }
};
const mapDispatchToProps = ( dispatch ) => {
    return {
        onLogin: ( username, password ) => { dispatch( login( username, password ) ) },
        onSignUp: ( username, password ) => { dispatch( signup( username, password ) ) },
        onRoute: ( route ) => { dispatch( routehandler( route ) ) },
        onRegister: ( username, password ) => { dispatch( register( username, password ) ) }
    };
};
class LoginView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: ''
        };
    }
    userLogin = (e) => {
        //this.props.onLogin(this.state.username, this.state.password);
        this.props.onRegister( this.state.username, this.state.password );
        e.preventDefault();
    };
  render() {
      return (
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
      }}>
              <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
                  <FormLabel>Name</FormLabel>
                  <FormInput onChangeText={(text) => this.setState({ username: text})}
                             containerStyle={{ width: 200 }}
                  />
                  <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                  <FormLabel>Password</FormLabel>
                  <FormInput onChangeText={ (text) => this.setState({ password: text})}
                             containerStyle={{ width: 200 }}
                             secureTextEntry={true}
                  />
                  <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                  <Button title={"Login"} onPress={ (e) => this.userLogin( e )}
                          textStyle={{ fontWeight: "700" }}
                          buttonStyle={{
                        width: 200,
                        height: 50,
                        backgroundColor: colors.ORANGE,
                        borderRadius: 50,
                        opacity: 0.7

                      }}
                  >
                  </Button>
              </View>
          </View>
      );
  };
}
LoginView.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired,
    onRoute: PropTypes.func.isRequired,
    onRegister: PropTypes.func.isRequired,
    route: PropTypes.string,
    username: PropTypes.string,
};
LoginView = connect(mapStateToProps,mapDispatchToProps)(LoginView);
export default LoginView;