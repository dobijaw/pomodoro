import {
  SettingsState,
  ThemeColorTypes,
  SettingsTypes,
  SettingsActionTypes,
} from './types';

const initialState: SettingsState = {
  colorTheme: ThemeColorTypes.DARK,
};

export function settingsReducer(
  state = initialState,
  action: SettingsActionTypes
): SettingsState {
  switch (action.type) {
    case SettingsTypes.SET_THEME_COLOR:
      return {
        colorTheme: action.payload.option,
      };
    default:
      return state;
  }
}
