import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { themeDark, themeLight } from '../theme/mainTheme';

export enum ThemeOptions {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

type MainTemplateProps = {
  children: ReactNode;
  themeColorSelected: string;
};

function MainTemplate({ children, themeColorSelected }: MainTemplateProps) {
  function whichThemeIsInUse(themeColorSelected: string) {
    switch (themeColorSelected) {
      case ThemeOptions.DARK:
        return themeDark;
      case ThemeOptions.LIGHT:
        return themeLight;
      default:
        return themeDark;
    }
  }

  return (
    <ThemeProvider theme={whichThemeIsInUse(themeColorSelected)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default MainTemplate;
