import React, { useState, useEffect, useCallback } from 'react';
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
  setSessionInProgress,
  setSessionPosition,
  setNextSessionPosition,
  setNextTime,
} from 'store/cycle/actions';
import { addReport, updateReport } from 'store/reports/actions';
import { Report } from 'store/reports/types';
import { ProjectsState } from 'store/projects/types';
import { generateUnicId } from 'utils';
import { ReportsState } from 'store/reports/types';

interface RootState {
  cycle: CyclesState;
  projects: ProjectsState;
  reports: ReportsState;
}

const mapState = ({ cycle, projects, reports }: RootState) => ({
  customCycle: cycle.customCycle,
  defaultCycle: cycle.defaultCycle,
  currentTime: cycle.currentTime,
  isSessionInProgress: cycle.isSessionInProgress,
  isRunning: cycle.isRunning,
  projectSelected: projects.projectSelected,
  reports: reports.reports,
  nextSessionPosition: cycle.nextSessionPosition,
});

const mapDispatch = {
  clearCycle: () => clearCycle(),
  setCurrentTime: (time: number) => setCurrentTime(time),
  setCurrentType: (type: SessionTypes) => setCurrentType(type),
  toggleTimerRunning: (isRunning: boolean) => toggleTimerRunning(isRunning),
  setCyclePosition: (position: number) => setCyclePosition(position),
  setSessionInProgress: (isInProgress: boolean) =>
    setSessionInProgress(isInProgress),
  addReport: (newReport: Report) => addReport(newReport),
  updateReport: (newReport: Report) => updateReport(newReport),
  setSessionPosition: (position: number) => setSessionPosition(position),
  setNextSessionPosition: (position: number) =>
    setNextSessionPosition(position),
  setNextTime: (nextTime: number) => setNextTime(nextTime),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface CurrentSessionType {
  session: Session;
  sessionId: string;
}

function Root({
  customCycle,
  currentTime,
  defaultCycle,
  isRunning,
  isSessionInProgress,
  projectSelected,
  reports,
  nextSessionPosition,
  clearCycle,
  setCurrentTime,
  setCurrentType,
  toggleTimerRunning,
  setCyclePosition,
  setSessionInProgress,
  addReport,
  updateReport,
  setSessionPosition,
  setNextSessionPosition,
  setNextTime,
}: PropsFromRedux) {
  const [isModalVisible, toggleModalVisibility] = useState<boolean>(false);
  const [currentSession, setCurrentSession] = useState<CurrentSessionType>({
    session: defaultCycle[0],
    sessionId: 'SESSION_ID',
  });

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
    if (isSessionInProgress || isRunning) return;

    setCycle(getCycle(customCycle, defaultCycle));
    setCycleType(getCycleType(customCycle));

    if (curSessionPosition === 0)
      setCurrentSession({
        session: cycle[curCyclePosition],
        sessionId: generateUnicId([]),
      });
  }, [
    curCyclePosition,
    curSessionPosition,
    customCycle,
    cycle,
    defaultCycle,
    isRunning,
    isSessionInProgress,
  ]);

  function getNextTime() {
    if (cycle.length - 1 === curCyclePosition && curSessionPosition === 1) {
      return defaultCycle[0][0].time;
    } else if (curSessionPosition === 1) {
      return cycle[curCyclePosition + 1][0].time;
    } else {
      return cycle[curCyclePosition][1].time;
    }
  }

  const getNextTimeCallback = useCallback(getNextTime, [
    cycle,
    curCyclePosition,
    curSessionPosition,
    defaultCycle,
  ]);

  useEffect(() => {
    setCurrentTime(cycle[curCyclePosition][curSessionPosition].time);
    setCurrentType(cycle[curCyclePosition][curSessionPosition].type);

    setNextTime(getNextTimeCallback());
  }, [
    curCyclePosition,
    curSessionPosition,
    cycle,
    getNextTimeCallback,
    setCurrentTime,
    setCurrentType,
    setNextTime,
  ]);

  useEffect(() => {
    setCyclePosition(curCyclePosition);
  }, [curCyclePosition, setCyclePosition]);

  function countdown() {
    setCurrentTime(currentTime - 10);
  }

  const [start, stop] = useInterval(countdown, 10, false);

  function onStartCountdow() {
    setSessionInProgress(true);
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
    setSessionInProgress(false);
    stop();
    toggleTimerRunning(false);

    if (curSessionPosition === 0) {
      setCurSessionPosition(1);
      setSessionPosition(1);
      setNextSessionPosition(0);

      addReport({
        date: new Date(),
        projectId: projectSelected.id,
        session: {
          sessionId: currentSession?.sessionId,
          actionTime: currentSession?.session[0].time - currentTime + 1000,
          restTime: 0,
        },
      });
    } else if (curSessionPosition === 1) {
      setCurSessionPosition(0);
      setSessionPosition(0);
      setNextSessionPosition(1);

      updateReport({
        date: new Date(),
        projectId: projectSelected.id,
        session: {
          sessionId: currentSession?.sessionId,
          actionTime:
            reports.find(
              (i) => i.session.sessionId === currentSession?.sessionId
            )?.session.actionTime || 0,
          restTime: currentSession?.session[1].time - currentTime + 1000,
        },
      });

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
