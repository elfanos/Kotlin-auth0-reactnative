/**
 * Created by Rasmus on 2018-02-18.
 */
import * as type from '../constants/buttonSign.constants';

export const onclick = ( borderColor, textColor,  placeHolder ) => {
    return {
        type: type.ONCLICK,
        borderColor: borderColor,
        textColor: textColor,
        placeHolder: placeHolder,
    }
};