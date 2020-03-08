import React from 'react';
import Title from 'components/atoms/Title/Title';
import UserTemplate from 'templates/UserTemplate';
import TimerTemplate from 'templates/TimerTemplate';

const TimerPage = ({ handleModalButtonClick }) => (
  <UserTemplate handleModalButtonClick={handleModalButtonClick}>
    <Title onlyScreenreader>Pomodoro</Title>
    <TimerTemplate />
  </UserTemplate>
);

export default TimerPage;
