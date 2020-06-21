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
  };
}

function TimerPanel() {
  const { onStartCountdow, onPauseCountdown, onStopCountdown } = useContext(
    AppContext
  );
  const [isInitialView, setInitialView] = useState<boolean>(true);
  const [isTurnOn, toggleTurn] = useState<boolean>(false);

  const getCurrentTime = (state: RootState) => state.cycle.currentTime;
  const currentTime = useSelector(getCurrentTime);

  const startClickHandler = () => {
    onStartCountdow();
    setInitialView(false);
    toggleTurn(true);
  };

  const pauseClickHandler = () => {
    onPauseCountdown();
    toggleTurn(false);
  };

  const continueClickHandler = () => {
    onStartCountdow();
    toggleTurn(true);
  };

  const stopClickHandler = () => {
    onStopCountdown();
    setInitialView(true);
    toggleTurn(false);
  };

  return (
    <div>
      {/* <TimerBox nextSession={nextSession} /> */}
      <TimerBox isMain isCycle time={currentTime} />
      <Wrapper>
        {isInitialView ? (
          <Button
            asPrimary
            withMargin
            type="button"
            onClick={startClickHandler}
          >
            Start
          </Button>
        ) : isTurnOn ? (
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
