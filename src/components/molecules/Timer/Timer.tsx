import React from 'react';
import styled from 'styled-components';
import Time from 'components/atoms/Time/Time';

const TimerWrapper = styled.div`
  display: block;
  text-align: center;
`;

type TimerProps = {
  hours?: string;
  minutes: string;
  seconds: string;
};

const Timer = ({ hours, minutes, seconds }: TimerProps) => (
  <TimerWrapper>
    {hours && (
      <>
        <Time>{hours}</Time>
        <Time>:</Time>
      </>
    )}
    <Time>{minutes}</Time>
    <Time>:</Time>
    <Time>{seconds}</Time>
  </TimerWrapper>
);

export default Timer;
