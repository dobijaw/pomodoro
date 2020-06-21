import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'context';
import { useSelector } from 'react-redux';

import Button from 'components/atoms/Button/Button';
import TimerBox from 'components/molecules/TimerBox/TimerBox';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface RootState {
  cycle: {
    currentTime: number;
    isRunning: boolean;
  };
}

function TimerPanel() {
  const { onStartCountdow, onPauseCountdown, onStopCountdown } = useContext(
    AppContext
  );
  const [isInitialView, setInitialView] = useState<boolean>(true);

  const getCurrentTime = (state: RootState) => state.cycle.currentTime;
  const checkIsRunning = (state: RootState) => state.cycle.isRunning;
  const currentTime = useSelector(getCurrentTime);
  const isRunning = useSelector(checkIsRunning);

  const startClickHandler = () => {
    onStartCountdow();
    setInitialView(false);
  };

  const pauseClickHandler = () => {
    onPauseCountdown();
  };

  const continueClickHandler = () => {
    onStartCountdow();
  };

  const stopClickHandler = () => {
    onStopCountdown();
    setInitialView(true);
  };

  return (
    <div>
      {/* <TimerBox nextSession={nextSession} /> */}
      <TimerBox isMain isCycle time={currentTime} />
      <Wrapper>
        {!isRunning && isInitialView ? (
          <Button
            asPrimary
            withMargin
            type="button"
            onClick={startClickHandler}
          >
            Start
          </Button>
        ) : isRunning ? (
          <>
            <Button
              asPrimary
              withMargin
              type="button"
              onClick={stopClickHandler}
            >
              Stop
            </Button>
            <Button
              asPrimary
              withMargin
              type="button"
              onClick={pauseClickHandler}
            >
              Pause
            </Button>
          </>
        ) : (
          <>
            <Button
              asPrimary
              withMargin
              type="button"
              onClick={stopClickHandler}
            >
              Stop
            </Button>
            <Button
              asPrimary
              withMargin
              type="button"
              onClick={continueClickHandler}
            >
              Continue
            </Button>
          </>
        )}
      </Wrapper>
    </div>
  );
}

export default TimerPanel;
