import { SettingsActionTypes, SettingsTypes, ThemeColor } from './types';

export const setThemeColor = (option: ThemeColor): SettingsActionTypes => ({
  type: SettingsTypes.SET_THEME_COLOR,
  payload: {
    option,
  },
});
