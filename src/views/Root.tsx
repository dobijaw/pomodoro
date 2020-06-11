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
import { clearCountdownQueue } from 'actions/timer';
import CycleModal from 'components/organisms/CycleModal/CycleModal';
import ProjectsPage from './ProjectsPage';
import HistoryPage from './HistoryPage';
import SettingsPage from './SettingsPage';

type RootProps = {
  countdownQueue: countdownQueueItem[];
  defaultCountdownQueue: countdownQueueItem[];
  clearCountdownQueue: Function;
};

function Root({
  countdownQueue,
  defaultCountdownQueue,
  clearCountdownQueue,
}: RootProps) {
  const [isModalVisible, toggleModalVisibility] = useState(false);
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
    if (
      countdownQueue.length >= 1 &&
      countdownQueue.length === currentPosition + 1
    ) {
      setNextCount(defaultCountdownQueue[0]);
    } else if (countdownQueue.length >= 1) {
      setNextCount(countdownQueue[nextPosition]);
    } else {
      setNextCount(defaultCountdownQueue[nextPosition]);
    }
  }, [countdownQueue, currentPosition, defaultCountdownQueue, nextPosition]);

  const getQueuePosition = (queue: countdownQueueItem[], position: number) =>
    position === queue.length - 1 ? 0 : position + 1;

  const intervalCountdown = () =>
    setCount((prevCount) => ({ ...prevCount, time: prevCount.time - 1 }));
  const [start, stop] = useInterval(intervalCountdown, 1000, false);

  const onStartCountdow = () => start();
  const onPauseCountdown = () => stop();

  const onStopCountdown = () => {
    if (countdownQueue.length - 1 === currentPosition) {
      clearCountdownQueue();
    }

    const position =
      countdownQueue.length >= 1
        ? getQueuePosition(countdownQueue, currentPosition)
        : getQueuePosition(defaultCountdownQueue, currentPosition);

    if (countdownQueue.length === nextPosition + 1) {
      setNextPosition(0);
    }

    // if (countdownQueue.length >= 1) {
    //   if(countdownQueue.length === nextPosition + 1)
    //   console.log(countdownQueue.length);
    //   const nextCyclePosition = getQueuePosition(countdownQueue, nextPosition);
    //   console.log(nextCyclePosition);
    //   setNextPosition(nextCyclePosition);
    // } else {
    //   const nextCyclePosition = getQueuePosition(
    //     defaultCountdownQueue,
    //     nextPosition
    //   );
    //   setNextPosition(nextCyclePosition);
    // }

    const nextCyclePosition =
      countdownQueue.length >= 1
        ? getQueuePosition(countdownQueue, nextPosition)
        : getQueuePosition(defaultCountdownQueue, nextPosition);

    setCurrentPosition(position);
    setNextPosition(nextCyclePosition);
    stop();
  };

  function handleOpenModal() {
    toggleModalVisibility(true);
  }

  function handleCloseModal() {
    toggleModalVisibility(false);
  }

  const AppContextElements = {
    handleOpenModal,
    handleCloseModal,
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
              <Route exact path={Routes.projects} component={ProjectsPage} />
              <Route exact path={Routes.history} component={HistoryPage} />
              <Route exact path={Routes.settings} component={SettingsPage} />
            </Switch>
            {isModalVisible && <CycleModal onClose={handleCloseModal} />}
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

const mapDispatchToProps = (dispatch: Function) => ({
  clearCountdownQueue: () => dispatch(clearCountdownQueue()),
});

const mapStateToProps = ({ timer }: Props) => ({
  countdownQueue: timer.countdownQueue,
  defaultCountdownQueue: timer.defaultCountdownQueue,
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
