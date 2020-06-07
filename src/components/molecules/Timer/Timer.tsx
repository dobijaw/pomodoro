import React from 'react';
import styled from 'styled-components';
import Time from 'components/atoms/Time/Time';

const TimerWrapper = styled.div<{ asMain?: boolean }>`
  display: block;
  color: ${({ theme, asMain }) =>
    asMain ? theme.colors.primary : theme.colors.secondary};
  font-size: ${({ asMain }) => (asMain ? '200px' : '48px')};
  font-weight: ${({ asMain }) => (asMain ? '400' : '600')};
  text-align: center;
`;

type TimerProps = {
  hours?: string;
  minutes: string;
  seconds: string;
  asMain?: boolean;
};

const Timer = ({ hours, minutes, seconds, asMain }: TimerProps) => (
  <TimerWrapper asMain={asMain}>
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
