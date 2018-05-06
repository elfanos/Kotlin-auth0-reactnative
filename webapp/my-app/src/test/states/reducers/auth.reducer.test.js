/**
 * Created by Rasmus on 2018-04-27.
 */
import React from 'react';
import auth from '../../../states/reducers/auth.reducer';
import * as type from '../../../states/constants/auth.constant';
import * as mockedData from '../../mock/mock.redux.actions.data';
const defaultState = {
    isLoggedIn: false,
    username: '',
    password: '',
    code: ''
};
describe('reducers in auth', () => {
    it('should have intitialize states', () => {
        expect(auth(undefined,{})).toEqual(defaultState);
    });

    it('should handle login', () => {
        const loginAction = {
            type: type.LOGIN,
            username: 'user',
            password: 'password',
            code: 'code'
        };
        expect(auth({},loginAction)).toEqual(mockedData.mockedLogin());
    });
    it('should handle logout', () => {
        console.log("TODO: Add test");
    })
});
