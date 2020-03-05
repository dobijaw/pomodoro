import React from 'react';
import Title from 'components/atoms/Title/Title';
import Timer from 'components/atoms/Timer/Timer';
import NextTimer from 'components/molecules/NextTimer/NextTimer';
import Button from 'components/atoms/Button/Button';
import TimerDotList from 'components/molecules/TimerDotList/TimerDotList';

const TimerPage = () => (
  <>
    <Title onlyScreenreader>Pomodoro</Title>
    <NextTimer />
    <Timer active>24:59</Timer>
    <TimerDotList />
    <Button fill>start</Button>
    <Button fill>stop</Button>
    <Button fill>continue</Button>
  </>
);

export default TimerPage;
