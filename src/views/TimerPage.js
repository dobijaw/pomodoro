import React from 'react';
import Title from 'components/atoms/Title/Title';
import Timer from 'components/atoms/Timer/Timer';
import NextTimer from 'components/molecules/NextTimer/NextTimer';
import Button from 'components/atoms/Button/Button';
import TimerDotList from 'components/molecules/TimerDotList/TimerDotList';
import FormItem from 'components/molecules/FormItem/FormItem';

const TimerPage = () => (
  <>
    <Title onlyScreenreader>Pomodoro</Title>
    <NextTimer />
    <Timer active>24:59</Timer>
    <TimerDotList />
    <FormItem />
    <Button fillButton>start</Button>
    <Button fillButton>stop</Button>
    <Button fillButton>continue</Button>
  </>
);

export default TimerPage;
