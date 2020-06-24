import { Session, CyclesTypes, SessionTypes } from './types';

export const addToCycle = (newSession: Session[]) => ({
  type: CyclesTypes.ADD_TO_CYCLE,
  payload: newSession,
});

export const clearAndAddToCycle = (newSession: Session[]) => ({
  type: CyclesTypes.CLEAR_AND_ADD_TO_CYCLE,
  payload: newSession,
});

export const clearCycle = () => ({
  type: CyclesTypes.CLEAR_CYCLE,
});

export const setCurrentTime = (time: number) => ({
  type: CyclesTypes.SET_CURRENT_TIME,
  payload: {
    time,
  },
});

export const setCurrentType = (type: SessionTypes) => ({
  type: CyclesTypes.SET_CURRENT_TYPE,
  payload: {
    type,
  },
});

export const toggleTimerRunning = (isRunning: boolean) => ({
  type: CyclesTypes.TOGGLE_TIMER_RUNNING,
  payload: {
    isRunning,
  },
});

export const setCyclePosition = (position: number) => ({
  type: CyclesTypes.SET_CYCLE_POSITION,
  payload: {
    position,
  },
});

export const setSessionInProgress = (isInProgress: boolean) => ({
  type: CyclesTypes.SET_SESSION_IN_PROGRESS,
  payload: {
    isInProgress,
  },
});
