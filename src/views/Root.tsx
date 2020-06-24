import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TimerPage from './TimerPage';
import MainTemplate from '../templates/MainTemplate';
import { Routes } from 'routes';
import { AppContext } from 'context';
import { useInterval } from 'hooks/useInterval';
import CycleModal from 'components/organisms/CycleModal/CycleModal';
import ProjectsPage from './ProjectsPage';
import HistoryPage from './HistoryPage';
import SettingsPage from './SettingsPage';
import { CyclesState, Session, SessionTypes } from 'store/cycle/types';
import {
  clearCycle,
  setCurrentTime,
  setCurrentType,
  toggleTimerRunning,
  setCyclePosition,
} from 'store/cycle/actions';

interface RootState {
  cycle: CyclesState;
}

const mapState = ({ cycle }: RootState) => ({
  customCycle: cycle.customCycle,
  defaultCycle: cycle.defaultCycle,
  currentTime: cycle.currentTime,
});

const mapDispatch = {
  clearCycle: () => clearCycle(),
  setCurrentTime: (time: number) => setCurrentTime(time),
  setCurrentType: (type: SessionTypes) => setCurrentType(type),
  toggleTimerRunning: (isRunning: boolean) => toggleTimerRunning(isRunning),
  setCyclePosition: (position: number) => setCyclePosition(position),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Root({
  customCycle,
  currentTime,
  defaultCycle,
  clearCycle,
  setCurrentTime,
  setCurrentType,
  toggleTimerRunning,
  setCyclePosition,
}: PropsFromRedux) {
  const [isModalVisible, toggleModalVisibility] = useState<boolean>(true);

  const getCycle = (customCycle: Session[], defaultCycle: Session[]) =>
    !!customCycle.length ? customCycle : defaultCycle;

  const getCycleType = (customCycle: Session[]) =>
    !!customCycle.length ? 'CUSTOM' : 'DEFAULT';

  const [cycleType, setCycleType] = useState<'CUSTOM' | 'DEFAULT'>(
    getCycleType(customCycle)
  );
  const [cycle, setCycle] = useState<Session[]>(
    getCycle(customCycle, defaultCycle)
  );

  const [curCyclePosition, setCurCyclePosition] = useState<number>(0);
  const [curSessionPosition, setCurSessionPosition] = useState<number>(0);

  useEffect(() => {
    setCycle(getCycle(customCycle, defaultCycle));
    setCycleType(getCycleType(customCycle));
  }, [customCycle, defaultCycle]);

  useEffect(() => {
    setCurrentTime(cycle[curCyclePosition][curSessionPosition].time);
    setCurrentType(cycle[curCyclePosition][curSessionPosition].type);
  }, [
    curCyclePosition,
    curSessionPosition,
    cycle,
    setCurrentTime,
    setCurrentType,
  ]);

  useEffect(() => {
    setCyclePosition(curCyclePosition);
  }, [curCyclePosition, setCyclePosition]);

  function countdown() {
    setCurrentTime(currentTime - 10);
  }

  const [start, stop] = useInterval(countdown, 10, false);

  function onStartCountdow() {
    start();
    toggleTimerRunning(true);
  }

  useEffect(() => {
    if (currentTime - 10 < 0) {
      stop();
      toggleTimerRunning(false);
    }
  }, [currentTime, stop, toggleTimerRunning]);

  function onPauseCountdown() {
    stop();
    toggleTimerRunning(false);
  }

  function onStopCountdown() {
    stop();
    toggleTimerRunning(false);

    if (curSessionPosition === 0) {
      setCurSessionPosition(1);
    } else if (curSessionPosition === 1) {
      setCurSessionPosition(0);

      if (cycleType === 'CUSTOM' && curCyclePosition + 1 > cycle.length - 1)
        clearCycle();

      setCurCyclePosition(
        curCyclePosition + 1 > cycle.length - 1 ? 0 : curCyclePosition + 1
      );
    }
  }

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
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={AppContextElements}>
        <MainTemplate>
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
