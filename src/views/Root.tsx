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
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  useEffect(() => {
    if (countdownQueue.length >= 1) {
      setCount(countdownQueue[currentPosition]);
    } else {
      setCount(defaultCountdownQueue[currentPosition]);
    }
  }, [countdownQueue, currentPosition, defaultCountdownQueue]);

  const getQueuePosition = (queue: countdownQueueItem[], position: number) =>
    position === queue.length - 1 ? 0 : position + 1;

  const intervalCountdown = () =>
    setCount((prevCount) => ({ ...prevCount, time: prevCount.time - 1 }));
  const [start, stop] = useInterval(intervalCountdown, 1000, false);

  const onStartCountdow = () => start();
  const onPauseCountdown = () => stop();

  const onStopCountdown = () => {
    let position =
      countdownQueue.length >= 1
        ? getQueuePosition(countdownQueue, currentPosition)
        : getQueuePosition(defaultCountdownQueue, currentPosition);

    setCurrentPosition(position);
    stop();
  };

  const AppContextElements = {
    onStartCountdow,
    onPauseCountdown,
    onStopCountdown,
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
