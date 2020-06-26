import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'context';
import { connect, ConnectedProps } from 'react-redux';
import { CyclesState } from 'store/cycle/types';
import Button from 'components/atoms/Button/Button';
import TimerBox from 'components/molecules/TimerBox/TimerBox';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

interface RootState {
  cycle: CyclesState;
}

const mapState = ({ cycle }: RootState) => ({
  nextSessionPosition: cycle.nextSessionPosition,
  nextTime: cycle.nextTime,
  currentTime: cycle.currentTime,
  isRunning: cycle.isRunning,
  customCycle: cycle.customCycle.map((_, index) => ({
    released: index <= cycle.cyclePosition,
    key: index,
  })),
});

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

function TimerPanel({
  currentTime,
  isRunning,
  customCycle,
  nextSessionPosition,
  nextTime,
}: PropsFromRedux) {
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
      <TimerBox
        nextSession={{
          type: nextSessionPosition === 0 ? 'ACTION' : 'REST',
          time: nextTime,
        }}
      />
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
