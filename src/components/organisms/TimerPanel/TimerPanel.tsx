import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "context";
import { connect, ConnectedProps } from "react-redux";
import { CyclesState } from "store/cycle/types";
import Button from "components/atoms/Button/Button";
import TimerBox from "components/molecules/TimerBox/TimerBox";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface RootState {
  cycle: CyclesState;
}

const mapState = ({ cycle }: RootState) => ({
  currentTime: cycle.currentTime,
  isRunning: cycle.isRunning,
  customCycle: cycle.customCycle.map((_, index) => ({
    released: index <= cycle.cyclePosition,
    key: index,
  })),
});

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

function TimerPanel({ currentTime, isRunning, customCycle }: PropsFromRedux) {
  const { onStartCountdow, onPauseCountdown, onStopCountdown } = useContext(
    AppContext
  );
  const [isInitialView, setInitialView] = useState<boolean>(true);

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
      <TimerBox isMain isCycle time={currentTime} cycle={customCycle} />
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

export default connector(TimerPanel);
