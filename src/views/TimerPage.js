import React from 'react';
import Title from 'components/atoms/Title/Title';
import Timer from 'components/atoms/Timer/Timer';
import NextTimer from 'components/molecules/NextTimer/NextTimer';

const TimerPage = () => (
  <>
    <Title onlyScreenreader>Pomodoro</Title>
    <NextTimer />
    <Timer active>24:59</Timer>
  </>
);

export default TimerPage;
