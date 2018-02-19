/**
 * Created by Rasmus on 2018-02-18.
 */
import * as type from '../constants/buttonSign.constants'
const defaultState = {
    borderColor: '#FCAA67',
    textColor: '#FCAA67',
    placeHolder: 'signin',
};
const reducer = ( state = defaultState, action ) => {
    switch ( action.type ) {
        case type.ONCLICK:
            return Object.assign({}, state, {
                borderColor: action.borderColor,
                textColor: action.textColor,
                placeHolder: action.placeHolder,
            });
        default:
            return state;
    }
};

export default reducer;