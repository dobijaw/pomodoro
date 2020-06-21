import { Session, CyclesTypes, SessionTypes } from './types';

export const addToCycle = (newSession: Session) => ({
  type: CyclesTypes.ADD_TO_CYCLE,
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
