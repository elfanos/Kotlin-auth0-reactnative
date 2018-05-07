/**
 * Created by Rasmus on 2018-05-06.
 */
export const isFunc = (someFunc) => {
    return someFunc && {}.toString.call(someFunc) === '[object Function]';
};