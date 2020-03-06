import React from 'react';
import Title from 'components/atoms/Title/Title';
import UserTemplate from 'templates/UserTemplate';
// eslint-disable-next-line
import TimerTemplate from 'templates/TimerTemplate';
import Select from 'components/organisms/Select/Select';

const TimerPage = () => (
  <UserTemplate>
    <Title onlyScreenreader>Pomodoro</Title>
    {/* <TimerTemplate /> */}
    <Select />
  </UserTemplate>
);

export default TimerPage;
