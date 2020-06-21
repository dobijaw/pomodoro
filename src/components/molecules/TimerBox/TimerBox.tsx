import React from 'react';
import { countdownQueueItem } from 'models/countdownQueueItem.model';
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
      margin: 80px 0;
    `}
`;

type TimerBox = {
  isMain?: boolean;
  isCycle?: boolean;
  time?: number;
  nextSession?: countdownQueueItem;
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
          <Timer minutes={getMinutes(time)} seconds={getSeconds(time)} />
        </Wraper>
      )}
    </>
  );
};

export default TimerBox;
