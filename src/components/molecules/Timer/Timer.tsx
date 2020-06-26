import React from 'react';
import styled from 'styled-components';
import Time from 'components/atoms/Time/Time';

const TimerWrapper = styled.div<{ asMain?: boolean }>`
  display: block;
  color: ${({ theme, asMain }) =>
    asMain ? theme.colors.primary : theme.colors.secondary};
  font-size: ${({ asMain }) => (asMain ? '80px' : '20px')};
  font-weight: ${({ asMain }) => (asMain ? '400' : '600')};
  text-align: center;

  @media (min-width: 600px) {
    font-size: ${({ asMain }) => (asMain ? '100px' : '36px')};
  }

  @media (min-width: 960px) {
    font-size: ${({ asMain }) => (asMain ? '110px' : '40px')};
  }

  @media (min-width: 1200px) {
    font-size: ${({ asMain }) => (asMain ? '140px' : '48px')};
  }
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
