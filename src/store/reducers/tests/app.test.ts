import {appInitialState, reducer} from '../app';
import APP_ACTIONS from '../../../constants/app';

describe('App reducer tests', () => {
  test('should set dark mode', () => {
    const expectedState = {
      isDarkMode: true,
    };
    expect(reducer(appInitialState, {type: APP_ACTIONS.SET_APP_MODE.SUCCESS})).toEqual(expectedState);
  });
});
