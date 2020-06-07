import React, { useState, useEffect } from 'react';
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
  nextCount?: countdownQueueItem;
};

type currentTimeInterface = {
  stringMinutes: string;
  stringSeconds: string;
};

const TimerBox = ({ isMain, isCycle, time = 0, nextCount }: TimerBox) => {
  const [currentTime, setCurrentTime] = useState<currentTimeInterface>({
    stringMinutes: '00',
    stringSeconds: '00',
  });
  const [nextTime, setNextTime] = useState<currentTimeInterface>({
    stringMinutes: '00',
    stringSeconds: '00',
  });

  const generateOutputTime = (timeInput: number) => {
    const minutes = Math.floor(timeInput / 60);
    const seconds = Math.floor(timeInput % 60);

    const stringMinutes = minutes <= 9 ? `0${minutes}` : `${minutes}`;
    const stringSeconds = seconds <= 9 ? `0${seconds}` : `${seconds}`;

    return {
      stringMinutes,
      stringSeconds,
    };
  };

  useEffect(() => {
    const curTimeOutput = generateOutputTime(time);
    setCurrentTime(curTimeOutput);
  }, [time]);

  useEffect(() => {
    if (nextCount) {
      const curTimeOutput = generateOutputTime(nextCount?.time);
      setNextTime(curTimeOutput);
    }
  }, [nextCount]);

  return (
    <>
      {isMain ? (
        <Wraper asMain>
          <Timer
            minutes={currentTime.stringMinutes}
            seconds={currentTime.stringSeconds}
            asMain
          />
          {/* {isCycle && <CycleProgress />} */}
        </Wraper>
      ) : (
        <Wraper>
          <Label as="span" asCopy asMedium>
            Next {nextCount?.type}
          </Label>
          <Timer
            minutes={nextTime.stringMinutes}
            seconds={nextTime.stringSeconds}
          />
        </Wraper>
      )}
    </>
  );
};

export default TimerBox;
