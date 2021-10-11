import APP_ACTIONS from '../../../constants/app';
import {setAppMode} from '../app';

describe('App actions tests', () => {
  test('should set up app mode', async () => {
    const dispatch = jest.fn();
    setAppMode({dispatch});
    expect(dispatch).nthCalledWith(1, {type: APP_ACTIONS.SET_APP_MODE.SUCCESS});
  });

  test('should set up app mode with payload', async () => {
    const dispatch = jest.fn();
    setAppMode({dispatch, payload: {
      isDarkMode: true,
    }});
    expect(dispatch).nthCalledWith(1, {type: APP_ACTIONS.SET_APP_MODE.SUCCESS, payload: {
      isDarkMode: true,
    }});
  });
});
