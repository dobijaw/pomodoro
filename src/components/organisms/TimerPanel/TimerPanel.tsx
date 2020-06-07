import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'context';

import Button from 'components/atoms/Button/Button';
import TimerBox from 'components/molecules/TimerBox/TimerBox';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function TimerPanel() {
  const {
    onStartCountdow,
    onPauseCountdown,
    onStopCountdown,
    count,
  } = useContext(AppContext);
  const [isInitialView, setInitialView] = useState<boolean>(true);
  const [isTurnOn, toggleTurn] = useState<boolean>(false);

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
      <TimerBox />
      <TimerBox isMain time={count.time} />
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
