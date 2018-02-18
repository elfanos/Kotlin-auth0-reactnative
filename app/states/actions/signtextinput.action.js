/**
 * Created by Rasmus on 2018-02-18.
 */
import * as type from '../constants/signtextinput.constants';

export const onfocus = ( borderColor, placeHolder ) => {
    console.log("border color?" + borderColor);
    console.log("border color?" + placeHolder);
    return {
        type: type.ONFOCUS,
        borderColor: borderColor,
        placeHolder: placeHolder,
    };
};
export const onblur = (borderColor, placeHolder) => {
    return {
        type: type.ONBLUR,
        borderColor: borderColor,
        placeHolder: placeHolder,
    };
};