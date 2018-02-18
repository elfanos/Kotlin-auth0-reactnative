/**
 * Created by Rasmus on 13/02/18.
 */
import React from 'react';
import * as colors from './design/colors.hex'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login, signup, routehandler, register } from '../states/actions/auth';
import * as color from './design/colors.hex';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import {Button, FormLabel, FormInput,FormValidationMessage } from 'react-native-elements';

const passwordValidation = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[0-9])");
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
            password: '',
            validationPassword: ''
        };
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
    signUpAndLoginClick = () =>{
        console.log("change page");
    };
  render() {
      function checktext(text){
          console.log("jaman?" + text);
      }
      function tempFunc(){
          console.log("jaman?");
      }
      return (
          <View style={style.container}>
              <View style={style.regform}>
                  <Text style={style.header}>
                      SudoAmp
                  </Text>
              </View>
            <View style={style.buttonForm}>
                <Button title= "Sign In"
                        onPress={(e) => {console.log("lolish")}}
                        buttonStyle={{
                            borderBottomWidth: 2,
                            borderBottomColor: color.ORANGE,
                          }}
                        containerStyle={{
                             borderBottomWidth: 2,
                            borderBottomColor: color.ORANGE,

                        }}
                        textStyle={{
                            color: color.BLACK,
                            fontWeight: "700",
                        }}
                        backgroundColor={color.WHITE}
                />
                <Button title= "Sign Up"
                        onPress={(e) => {console.log("lolish")}}
                        buttonStyle={{
                            borderBottomWidth: 2,
                            borderBottomColor: color.ORANGE,
                          }}
                        containerStyle={{
                             borderBottomWidth: 2,
                            borderBottomColor: color.ORANGE,

                        }}
                        textStyle={{
                            color: color.BLACK,
                            fontWeight: "700",
                        }}
                        backgroundColor={color.WHITE}
                />
            </View>
            <View style={style.regform}>
                  <TextInput style={style.textinput}
                             placeholder={"Name"}
                             placeholderTextColor={color.WHITE}
                  >
                  </TextInput>
                  <TextInput style={style.textinput}
                             placeholder={"Password"}
                             placeholderTextColor={color.WHITE}
                  >
                </TextInput>
                <TouchableOpacity style={style.formButton}>
                    <Text style={style.btnText}>LOG IN</Text>
                </TouchableOpacity>
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
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: color.WHITE,
        flexDirection:'column'
    },
    regform: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonForm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        color: color.BLACK,
        alignContent: 'center',
        textAlign: 'center',
    },
    textinput: {
        width: 200,
        height: 40,
        paddingLeft: 30,
        marginTop: 10,
        color: color.WHITE,
        borderColor: color.BLACK,
        borderWidth: 1,
        backgroundColor: color.BLACK,
        borderRadius: 20,
    },
    formButton: {
        width: 200,
        marginTop: 10,
        height: 40,
        backgroundColor: color.ORANGE,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.ORANGE,
    },
    btnText: {
        color: color.WHITE,
        fontWeight: "700",
        alignItems: 'center',
    }
});
export default LoginView;