import {userInitialState, reducer} from '../user';
import USER_ACTIONS from '../../../constants/user';

describe('User reducer tests', () => {
  test('should log in user', () => {
    const expectedState = {
      isLoggedIn: true,
      fetching: false,
    };
    expect(reducer(userInitialState, {type: USER_ACTIONS.SIGN_IN.SUCCESS})).toEqual(expectedState);
  });
});
