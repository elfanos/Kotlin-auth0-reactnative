/**
 * Created by Rasmus on 2018-02-18.
 */
import * as type from '../constants/signtextinput.constants'
const defaultState = {
    borderColor: '',
    placeHolder: '',
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case type.ONFOCUS:
            console.log("well onfocus " + state.placeHolder);
            console.log("well onfocus" + state.borderColor);
            return Object.assign({}, state, {
                borderColor: action.borderColor,
                placeHolder: action.placeHolder
            });
        case type.ONBLUR:
            console.log("well onblur " + state.placeHolder);
            console.log("well onblur " + state.borderColor);
            return Object.assign({}, state, {
                borderColor: action.borderColor,
                placeHolder: action.placeHolder,
            });
        default:
            return state;
    }
};
export default reducer;