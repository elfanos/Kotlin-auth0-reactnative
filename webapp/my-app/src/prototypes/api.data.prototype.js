/**
 * Created by Rasmus on 2018-05-06.
 */
import { isFunc } from '../prototypes/helper.functions';

export const getSpecificValueFromPromise = ( valueFunc, promise ) => {
    if(!isFunc(valueFunc)) { throw new TypeError('Expected a function as a argument'); }
    return promise.then(
        values => values.find( value => valueFunc(value) )
    );
};