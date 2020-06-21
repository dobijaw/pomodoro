import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { themeDark, themeLight } from '../theme/mainTheme';
import { useSelector } from 'react-redux';
import { ThemeColor, ThemeColorTypes } from 'store/settings/types';

export enum ThemeOptions {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

type MainTemplateProps = {
  children: ReactNode;
};

interface RootState {
  settings: {
    colorTheme: ThemeColor;
  };
}

function MainTemplate({ children }: MainTemplateProps) {
  const getThemeColor = (state: RootState) => state.settings.colorTheme;
  const themeColor = useSelector(getThemeColor);

  return (
    <ThemeProvider
      theme={themeColor === ThemeColorTypes.DARK ? themeDark : themeLight}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default MainTemplate;
