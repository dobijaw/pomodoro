export enum ThemeColorTypes {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export type ThemeColor = ThemeColorTypes.DARK | ThemeColorTypes.LIGHT;

export interface SettingsState {
  colorTheme: ThemeColor;
}

export enum SettingsTypes {
  SET_THEME_COLOR = 'SET_THEME_COLOR',
}

export interface SetThemeColorAction {
  type: typeof SettingsTypes.SET_THEME_COLOR;
  payload: {
    option: ThemeColor;
  };
}

export type SettingsActionTypes = SetThemeColorAction;
