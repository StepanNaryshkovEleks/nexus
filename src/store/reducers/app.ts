import APP_ACTIONS from "../../constants/app";
import { AppActionsDispatch } from "../actions/app";

export const appInitialState = {
  isDarkMode: true,
};

export interface IAppState {
  isDarkMode: boolean;
}

export const reducer = (
  state: IAppState = appInitialState,
  action: AppActionsDispatch
) => {
  switch (action.type) {
    case APP_ACTIONS.SET_APP_MODE.SUCCESS: {
      return {
        ...state,
        isDarkMode:
          typeof action.payload?.isDarkMode === "boolean"
            ? action.payload.isDarkMode
            : !state.isDarkMode,
      };
    }
    default:
      return state;
  }
};
