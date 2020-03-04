import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import Logo from 'components/atoms/Logo/Logo';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Logo index>pomodoro</Logo>
      </>
    </ThemeProvider>
  </>
);

export default Root;
