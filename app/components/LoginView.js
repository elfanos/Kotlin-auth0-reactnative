/**
 * Created by Rasmus on 13/02/18.
 */
import React from 'react';
import * as colors from './design/colors.hex'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login, signup, routehandler, register } from '../states/actions/auth';
import * as color from './design/colors.hex';
import LoginTextInput from './LoginTextInput';
import ButtonSign from './ButtonSign';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native'
import {Button, FormLabel, FormInput,FormValidationMessage } from 'react-native-elements';

const passwordValidation = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[0-9])");
const mapStateToProps = ( state, ownProps ) => {
    console.log("" + state.buttonSign.placeHolder);
    return{
        isLoggedIn: state.auth.isLoggedIn,
        route: state.auth.route,
        signButtonState: state.buttonSign.placeHolder
    }
};
const mapDispatchToProps = ( dispatch ) => {
    return {
        onLogin: ( username, password ) => { dispatch( login( username, password ) ) },
        onSignUp: ( username, password ) => { dispatch( signup( username, password ) ) },
        onRoute: ( route ) => { dispatch( routehandler( route ) ) },
        onRegister: ( username, password ) => { dispatch( register( username, password ) ) },
    };
};

const defaultButtonSign = {
    buttonStyle: {
        borderBottomWidth: 2,
        borderBottomColor: color.WHITE,
    },
     textStyle: {
         color: color.BLACK,
         fontWeight: "700",
     }

};
class LoginView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: '',
            validationPassword: ''
        };
    }
    componentDidMount(){

    }
    userLogin = (e) => {
        //this.props.onLogin(this.state.username, this.state.password);
       if(this.validationError(this.password) === "SUCCESS") {
            this.props.onLogin(this.state.username, this.state.password);
        }else{
           console.log("here??? in failed? ");
           this.state.validationPassword = "Not a correct password";
       }
        e.preventDefault();
    };
    validationError = (password) => {
      //check if username exist
        console.log("here???  ");
    //check if password match the needed length and chars
        if(passwordValidation.test(password)){
            return "SUCCESS"
        }


    };
  render() {
      function checkSignUpOrSignIn(signState) {
          console.log("wat is da state: " + signState)
          if(signState === 'signin'){
              return (
                  <View style={style.regform}>
                      <LoginTextInput borderColor={color.BLACK} placeHolder="Name"/>
                      <LoginTextInput borderColor={color.BLACK} placeHolder="Password"/>

                      <TouchableOpacity style={style.formButton}>
                          <Text style={style.btnText}>LOG IN</Text>
                      </TouchableOpacity>
                  </View>
              );

          }else if(signState === 'signup'){
              return (
                  <View style={style.regform}>
                    <LoginTextInput borderColor={color.BLACK} placeHolder="Name"/>
                    <LoginTextInput borderColor={color.BLACK} placeHolder="Password"/>
                    <LoginTextInput borderColor={color.BLACK} placeHolder="Re-type Password"/>

                  <TouchableOpacity style={style.formButton}>
                      <Text style={style.btnText}>SIGN UP</Text>
                  </TouchableOpacity>
                  </View>
              );
          }
      }
      return (
              <View style={style.container}>
                  <ImageBackground source={require('../pictures/backgroundamp.png')} style={style.backgroundImage}>
                      <Text style={style.header}>
                          SudoAmp
                      </Text>
                        <View style={style.buttonForm}>
                            <ButtonSign title="Sign In" borderColor={color.WHITE} textColor={color.BLACK} placeHolder="signin"/>
                            <ButtonSign title="Sign Up" borderColor={color.WHITE} textColor={color.BLACK} placeHolder="signup"/>
                        </View>
                        {checkSignUpOrSignIn(this.props.signButtonState)}
                  </ImageBackground>
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
    signButtonState: PropTypes.string,
    route: PropTypes.string,
    username: PropTypes.string,
};
LoginView = connect(mapStateToProps,mapDispatchToProps)(LoginView);
const style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: 'center',
        flexDirection:'column'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: color.WHITE,
        flexDirection:'column',
        marginTop: -200,
    },
    regform: {
        flex: 1,
        alignItems: 'center'
    },
    buttonForm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        maxHeight: 50
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        color: color.BLACK,
        alignContent: 'center',
        textAlign: 'center',
    },
    formButton: {
        width: 200,
        marginTop: 10,
        height: 40,
        backgroundColor: color.ORANGE,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.ORANGE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: color.WHITE,
        fontWeight: '700',
    }
});
export default LoginView;