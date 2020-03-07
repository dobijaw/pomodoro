import React from 'react';
import Title from 'components/atoms/Title/Title';
import UserTemplate from 'templates/UserTemplate';
import TimerTemplate from 'templates/TimerTemplate';

const TimerPage = () => (
  <UserTemplate>
    <Title onlyScreenreader>Pomodoro</Title>
    <TimerTemplate />
  </UserTemplate>
);

export default TimerPage;
