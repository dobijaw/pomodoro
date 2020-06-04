import React from 'react';
import TimerView from './TimerView';
import MainTemplate, { ThemeOptions } from '../templates/MainTemplate';

function Root() {
  return (
    <MainTemplate themeColorSelected={ThemeOptions.DARK}>
      <TimerView></TimerView>
    </MainTemplate>
  );
}

export default Root;
