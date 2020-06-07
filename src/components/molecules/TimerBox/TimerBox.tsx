import React, { useState, useEffect } from 'react';
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
};

type currentTimeInterface = {
  stringMinutes: string;
  stringSeconds: string;
};

const TimerBox = ({ isMain, isCycle, time = 0 }: TimerBox) => {
  const [currentTime, setCurrentTime] = useState<currentTimeInterface>({
    stringMinutes: '00',
    stringSeconds: '00',
  });

  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const stringMinutes = minutes <= 9 ? `0${minutes}` : `${minutes}`;
    const stringSeconds = seconds <= 9 ? `0${seconds}` : `${seconds}`;

    setCurrentTime({
      stringMinutes,
      stringSeconds,
    });
  }, [time]);

  return (
    <>
      {isMain ? (
        <Wraper asMain>
          <Timer
            minutes={currentTime.stringMinutes}
            seconds={currentTime.stringSeconds}
            asMain
          />
          {isCycle && <CycleProgress />}
        </Wraper>
      ) : (
        <Wraper>
          <Label as="span" asCopy asMedium>
            Next break
          </Label>
          <Timer minutes="05" seconds="00" />
        </Wraper>
      )}
    </>
  );
};

export default TimerBox;
