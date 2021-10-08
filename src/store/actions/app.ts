import APP_ACTIONS from '../../constants/app';

export interface AppActionsProps {
  isDarkMode?: boolean
}

export interface AppActionsDispatch {
  type: typeof APP_ACTIONS.SET_APP_MODE.SUCCESS;
  payload?: AppActionsProps;
}

type Dispatch = (arg: AppActionsDispatch) => {}

interface ISetAppMode {
  dispatch: Dispatch,
  payload?: AppActionsProps
}

export const setAppMode = ({dispatch, payload}: ISetAppMode) => {
  dispatch({type: APP_ACTIONS.SET_APP_MODE.SUCCESS, payload});
};
