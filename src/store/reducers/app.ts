import APP_ACTIONS from '../../../constants/app';
import {AppActions} from '../actions/app';

export const appInitialState = {
  isDarkMode: true,
};

export interface IAppState {
  isDarkMode: boolean,
}

export const reducer = (state: IAppState = appInitialState, action: AppActions) => {
  switch (action.type) {
    case APP_ACTIONS.SET_APP_MODE: {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }
    default:
      return state;
  }
};
