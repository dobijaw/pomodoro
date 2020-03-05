import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import styled from 'styled-components';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

const StyledBackground = styled.div`
  display: block;
  padding: 60px 100px;
  width: 100%;
  height: 100vh;
  background: #192532;
`;

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(story => <StyledBackground>{story()}</StyledBackground>);

configure(loadStories, module);
