/**
 * Created by Rasmus on 2018-04-27.
 */
import React from 'react';
import * as actions from '../../../states/actions/auth.action';
import * as type from '../../../states/constants/auth.constant';
describe('auth redux actions', () => {
    it('should create an action for login', () => {
        const expectedAction = {
            type: type.LOGIN,
            username: 'user',
            password: 'password',
            code: 'code'
        };
        expect(actions.login('user','password','code')).toEqual(expectedAction);
    });
});