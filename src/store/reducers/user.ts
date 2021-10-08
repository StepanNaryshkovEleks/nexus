import USER_ACTIONS from '../../constants/user';

export const userInitialState = {
  isLoggedIn: false,
  fetching: false,
};

export interface IUserState {
  isLoggedIn: boolean,
  fetching: boolean,
}

export const reducer = (state: IUserState = userInitialState, action: any) => {
  switch (action.type) {
    case USER_ACTIONS.SIGN_IN.FETCH: {
      return {
        ...state,
        fetching: true,
      };
    }
    case USER_ACTIONS.SIGN_IN.ERROR:
    case USER_ACTIONS.SIGN_IN.SUCCESS: {
      return {
        ...state,
        fetching: false,
      };
    }
    default:
      return state;
  }
};
