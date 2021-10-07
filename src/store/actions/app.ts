import APP_ACTIONS from '../../constants/app';

export interface AppActions {
  type: typeof APP_ACTIONS.SET_APP_MODE;
  payload?: {};
}

type ISetAppMode = (arg: AppActions) => {}

export const setAppMode = (dispatch: ISetAppMode) => {
  dispatch({type: APP_ACTIONS.SET_APP_MODE});
};
