import React from 'react';
import styled, { css } from 'styled-components';
import Timer from 'components/molecules/Timer/Timer';
import CycleProgress from 'components/molecules/CycleProgress/CycleProgress';
import Label from 'components/atoms/Label/Label';

const Wraper = styled.div<{ asMain?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ asMain }) =>
    asMain &&
    css`
      margin: 20px 0;

      @media (min-width: 960px) {
        margin: 30px 0;
      }
    `}
`;

interface NextSession {
  type: 'ACTION' | 'REST';
  time: number;
}

type TimerBox = {
  isMain?: boolean;
  isCycle?: boolean;
  time?: number;
  nextSession?: NextSession;
  cycle?: { released: boolean; key: number }[];
};

const TimerBox = ({
  isMain,
  isCycle,
  time = 0,
  nextSession,
  cycle,
}: TimerBox) => {
  function getSeconds(ms: number): string {
    const seconds = Math.floor((ms % 60000) / 1000);

    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  function getMinutes(ms: number): string {
    const minutes = Math.floor(ms / 60 / 1000);

    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  return (
    <>
      {isMain ? (
        <Wraper asMain>
          <Timer minutes={getMinutes(time)} seconds={getSeconds(time)} asMain />
          {isCycle && <CycleProgress cycle={cycle} />}
        </Wraper>
      ) : (
        <Wraper>
          <Label as="span" asCopy asMedium>
            Next {nextSession?.type}
          </Label>
          <Timer
            minutes={getMinutes(nextSession?.time || 0)}
            seconds={getSeconds(nextSession?.time || 0)}
          />
        </Wraper>
      )}
    </>
  );
};

export default TimerBox;
