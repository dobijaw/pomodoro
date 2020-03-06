import React from 'react';
import Title from 'components/atoms/Title/Title';
import Timer from 'components/atoms/Timer/Timer';
import NextTimer from 'components/molecules/NextTimer/NextTimer';
import Button from 'components/atoms/Button/Button';
import TimerDotList from 'components/molecules/TimerDotList/TimerDotList';
import FormItem from 'components/molecules/FormItem/FormItem';
import FormChooseItem from 'components/molecules/FormChooseItem/FormChooseItem';
import Date from 'components/atoms/Date/Date';
import Headline from 'components/atoms/Headline/Headline';

const TimerPage = () => (
  <>
    <Title onlyScreenreader>Pomodoro</Title>
    <NextTimer />
    <Timer active>24:59</Timer>
    <TimerDotList />
    <FormItem />
    <FormChooseItem name="typ" type="radio" id="theSame">
      All session the same time
    </FormChooseItem>
    <FormChooseItem name="typ" type="radio" id="other">
      All custom session
    </FormChooseItem>
    <Headline customWidth="40px" as="h5">
      Hello Wojtula
    </Headline>
    <Date>24-05-2015</Date>
    <Button fillButton>start</Button>
    <Button fillButton>stop</Button>
    <Button fillButton>continue</Button>
  </>
);

export default TimerPage;
