/**
 * //TODO fix background to nothing
 * @author Rasmus on 2018-02-18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { onclick } from '../states/actions/buttonSign.action'
import * as color from './design/colors.hex';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import {Button, FormLabel, FormInput,FormValidationMessage } from 'react-native-elements';

const getBorderColor = ( state, ownProps ) => {
    if (state.buttonSign.borderColor === '' ||
        state.buttonSign.placeHolder !== ownProps.placeHolder) {
        return ownProps.borderColor
    } else {
        return state.buttonSign.borderColor
    }
};
const getTextColor = ( state, ownProps ) => {
    if (state.buttonSign.textColor === '' ||
        state.buttonSign.placeHolder !== ownProps.placeHolder) {
        return ownProps.textColor
    } else {
        return state.buttonSign.textColor
    }
};

const mapStateToProps = ( state, ownProps ) => {
    return {
        borderColor: getBorderColor( state, ownProps ),
        textColor: getTextColor( state, ownProps ),
        placeHolder: ownProps.placeHolder,
        title: ownProps.title
    }
};
const mapDispatchToProps = ( dispatch ) => {
    return {
        onClick: ( borderColor, textColor ,placeHolder ) => {
            dispatch( onclick( borderColor, textColor,  placeHolder ) );
        }
    }
};
let ButtonSign = ({ borderColor, onClick, placeHolder, title}) => {
    return (
        <View style={style.buttonForm}>
            <Button title= {title}
                    onPress={(e) => {onClick(color.ORANGE, color.ORANGE, placeHolder)}}
                    buttonStyle={{
                            borderBottomWidth: 2,
                            borderBottomColor: borderColor,
                            backgroundColor: "rgba(92, 99,216, 0)",
                          }}
                    textStyle={{
                            color: color.BLACK,
                            fontWeight: "700",
                        }}
            />
        </View>
    );
};
ButtonSign.propTypes = {
  title: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
const style = StyleSheet.create({
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
    }
});
ButtonSign = connect(mapStateToProps, mapDispatchToProps)(ButtonSign);
export default ButtonSign;