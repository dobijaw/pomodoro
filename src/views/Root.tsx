import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TimerPage from './TimerPage';
import MainTemplate, { ThemeOptions } from '../templates/MainTemplate';
import { Routes } from 'routes';
import { AppContext } from 'context';
import { useInterval } from 'hooks/useInterval';
import CycleModal from 'components/organisms/CycleModal/CycleModal';
import ProjectsPage from './ProjectsPage';
import HistoryPage from './HistoryPage';
import SettingsPage from './SettingsPage';
import { countdownQueueItem } from 'store/timer/types';
import { clearCountdownQueue } from 'store/timer/actions';

interface RootState {
  timer: {
    customCountdownQueue: countdownQueueItem[];
    defaultCountdownQueue: countdownQueueItem[];
  };
}

const mapState = (state: RootState) => ({
  customCountdownQueue: state.timer.customCountdownQueue,
  defaultCountdownQueue: state.timer.defaultCountdownQueue,
});

const mapDispatch = {
  clearCountdownQueue: () => clearCountdownQueue(),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function Root({
  customCountdownQueue,
  defaultCountdownQueue,
  clearCountdownQueue,
}: Props) {
  const [isModalVisible, toggleModalVisibility] = useState(false);
  const [count, setCount] = useState<countdownQueueItem>(
    customCountdownQueue[0]
  );
  const [nextCount, setNextCount] = useState<countdownQueueItem>(
    customCountdownQueue[1]
  );
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [nextPosition, setNextPosition] = useState<number>(1);

  useEffect(() => {
    customCountdownQueue.length >= 1
      ? setCount(customCountdownQueue[currentPosition])
      : setCount(defaultCountdownQueue[currentPosition]);
  }, [customCountdownQueue, currentPosition, defaultCountdownQueue]);

  useEffect(() => {
    if (
      customCountdownQueue.length >= 1 &&
      customCountdownQueue.length === currentPosition + 1
    ) {
      setNextCount(defaultCountdownQueue[0]);
    } else if (customCountdownQueue.length >= 1) {
      setNextCount(customCountdownQueue[nextPosition]);
    } else {
      setNextCount(defaultCountdownQueue[nextPosition]);
    }
  }, [
    customCountdownQueue,
    currentPosition,
    defaultCountdownQueue,
    nextPosition,
  ]);

  const getQueuePosition = (queue: countdownQueueItem[], position: number) =>
    position === queue.length - 1 ? 0 : position + 1;

  const intervalCountdown = () =>
    setCount((prevCount) => ({ ...prevCount, time: prevCount.time - 1 }));
  const [start, stop] = useInterval(intervalCountdown, 1000, false);

  const onStartCountdow = () => start();
  const onPauseCountdown = () => stop();

  const onStopCountdown = () => {
    if (customCountdownQueue.length - 1 === currentPosition) {
      clearCountdownQueue();
    }

    const position =
      customCountdownQueue.length >= 1
        ? getQueuePosition(customCountdownQueue, currentPosition)
        : getQueuePosition(defaultCountdownQueue, currentPosition);

    if (customCountdownQueue.length === nextPosition + 1) {
      setNextPosition(0);
    }

    const nextCyclePosition =
      customCountdownQueue.length >= 1
        ? getQueuePosition(customCountdownQueue, nextPosition)
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
          <Switch>
            <Route exact path={Routes.timer} component={TimerPage} />
            <Route exact path={Routes.projects} component={ProjectsPage} />
            <Route exact path={Routes.history} component={HistoryPage} />
            <Route exact path={Routes.settings} component={SettingsPage} />
          </Switch>
          {isModalVisible && <CycleModal onClose={handleCloseModal} />}
        </MainTemplate>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default connector(Root);
