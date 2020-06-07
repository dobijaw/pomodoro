import React, { useState, useEffect } from 'react';
import { countdownQueueItem } from 'models/countdownQueueItem.model';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TimerPage from './TimerPage';
import MainTemplate, { ThemeOptions } from '../templates/MainTemplate';
import PageTemplate from 'templates/PageTemplate';
import { Routes } from 'routes';
import { AppContext } from 'context';
import { useInterval } from 'hooks/useInterval';

type RootProps = {
  countdownQueue: countdownQueueItem[];
  defaultCountdownQueue: countdownQueueItem[];
};

function Root({ countdownQueue, defaultCountdownQueue }: RootProps) {
  const [count, setCount] = useState<countdownQueueItem>(countdownQueue[0]);
  const [nextCount, setNextCount] = useState<countdownQueueItem>(
    countdownQueue[1]
  );
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [nextPosition, setNextPosition] = useState<number>(1);

  useEffect(() => {
    countdownQueue.length >= 1
      ? setCount(countdownQueue[currentPosition])
      : setCount(defaultCountdownQueue[currentPosition]);
  }, [countdownQueue, currentPosition, defaultCountdownQueue]);

  useEffect(() => {
    countdownQueue.length >= 1
      ? setNextCount(countdownQueue[nextPosition])
      : setNextCount(defaultCountdownQueue[nextPosition]);
  }, [countdownQueue, defaultCountdownQueue, nextPosition]);

  const getQueuePosition = (queue: countdownQueueItem[], position: number) =>
    position === queue.length - 1 ? 0 : position + 1;

  const intervalCountdown = () =>
    setCount((prevCount) => ({ ...prevCount, time: prevCount.time - 1 }));
  const [start, stop] = useInterval(intervalCountdown, 1000, false);

  const onStartCountdow = () => start();
  const onPauseCountdown = () => stop();

  const onStopCountdown = () => {
    const position =
      countdownQueue.length >= 1
        ? getQueuePosition(countdownQueue, currentPosition)
        : getQueuePosition(defaultCountdownQueue, currentPosition);

    const nextCyclePosition =
      countdownQueue.length >= 1
        ? getQueuePosition(countdownQueue, nextPosition)
        : getQueuePosition(defaultCountdownQueue, nextPosition);

    setCurrentPosition(position);
    setNextPosition(nextCyclePosition);
    stop();
  };

  const AppContextElements = {
    onStartCountdow,
    onPauseCountdown,
    onStopCountdown,
    nextCount,
    count,
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={AppContextElements}>
        <MainTemplate themeColorSelected={ThemeOptions.DARK}>
          <PageTemplate>
            <Switch>
              <Route exact path={Routes.timer} component={TimerPage} />
            </Switch>
          </PageTemplate>
        </MainTemplate>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

type Props = {
  timer: {
    countdownQueue: countdownQueueItem[];
    defaultCountdownQueue: countdownQueueItem[];
  };
};

const mapStateToProps = ({ timer }: Props) => ({
  countdownQueue: timer.countdownQueue,
  defaultCountdownQueue: timer.defaultCountdownQueue,
});

export default connect(mapStateToProps)(Root);
