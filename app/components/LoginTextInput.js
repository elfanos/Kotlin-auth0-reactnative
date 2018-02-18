/**
 * Component for textinput change borde style if the user is
 * on has the textinput on focus
 * User placeholder for checking which component that the style
 * is going to change on.
 *
 * @author Rasmus on 2018-02-18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {onblur,onfocus} from '../states/actions/signtextinput.action'
import * as color from './design/colors.hex';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

const getBorderColor = (state,ownProps) => {

    if (state.signtextinput.borderColor === '' ||
        state.signtextinput.placeHolder !== ownProps.placeHolder) {
        return ownProps.borderColor
    } else {
        return state.signtextinput.borderColor
    }
};
const mapStateToProps = ( state, ownProps ) => {
    return {
        borderColor: getBorderColor(state,ownProps),
        placeHolder: ownProps.placeHolder,
    }
};
const mapDispatchToProps = ( dispatch ) => {
    return {
        onBlur: ( borderColor, placeHolder ) => { dispatch( onblur( borderColor, placeHolder ) ) },
        onFocus: ( borderColor, placeHolder ) => { dispatch( onfocus( borderColor, placeHolder) ) }
    }
};
let LoginTextInput = ({ borderColor, onFocus, onBlur, placeHolder }) => {
        return(
            <View style={style.regform}>
                <TextInput style={{
                                width: 200,
                                height: 40,
                                paddingLeft: 30,
                                marginTop: 10,
                                color: color.WHITE,
                                borderColor: borderColor,
                                borderWidth: 1,
                                backgroundColor: color.BLACK,
                                borderRadius: 20,
                            }
                        }
                           placeholder={placeHolder}
                           placeholderTextColor={color.WHITE}
                           selectionColor={color.WHITE}
                           onFocus={() => onFocus(color.WHITE, placeHolder)}
                           onBlur={() => onBlur(color.BLACK, placeHolder)}
         >
                </TextInput>
            </View>
        );
};
const style = StyleSheet.create({
    regform: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
LoginTextInput.propTypes = {
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    borderColor: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
};
LoginTextInput = connect(mapStateToProps, mapDispatchToProps)(LoginTextInput);
export default LoginTextInput;