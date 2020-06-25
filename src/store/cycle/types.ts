export enum SessionEnum {
  ACTION = 'ACTION',
  REST = 'REST',
}

export enum CycleEnum {
  CUSTOM = 'CUSTOM',
  DEFAULT = 'DEFAULT',
}

export interface Action {
  type: SessionEnum.ACTION;
  time: number;
}

export interface Rest {
  type: SessionEnum.REST;
  time: number;
}

export type Session = [Action, Rest];
export type SessionTypes = SessionEnum.ACTION | SessionEnum.REST;
export type CycleTypes = CycleEnum.CUSTOM | CycleEnum.DEFAULT;

export interface CyclesState {
  sessionPosition: number;
  nextSessionPosition: number;
  cyclePosition: number;
  isRunning: boolean;
  isSessionInProgress: boolean;
  currentTime: number;
  nextTime: number;
  currentType: SessionTypes;
  nextType: SessionTypes;
  customCycle: Session[];
  defaultCycle: Session[];
}

export enum CyclesTypes {
  ADD_TO_CYCLE = 'ADD_TO_CYCLE',
  CLEAR_CYCLE = 'CLEAR_CYCLE',
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  SET_CURRENT_TYPE = 'SET_CURRENT_TYPE',
  TOGGLE_TIMER_RUNNING = 'TOGGLE_TIMER_RUNNING',
  SET_CYCLE_POSITION = 'SET_CYCLE_POSITION',
  CLEAR_AND_ADD_TO_CYCLE = 'CLEAR_AND_ADD_TO_CYCLE',
  SET_SESSION_IN_PROGRESS = 'SET_SESSION_IN_PROGRESS',
  SET_DEFAULT_CYCLE = 'SET_DEFAULT_CYCLE',
  SET_SESSION_POSITION = 'SET_SESSION_POSITION',
  SET_NEXT_SESSION_POSITION = 'SET_NEXT_SESSION_POSITION',
  SET_NEXT_TIME = 'SET_NEXT_TIME',
}

interface AddToCycleAction {
  type: typeof CyclesTypes.ADD_TO_CYCLE;
  payload: Session;
}

interface ClearAndAddToCycleAction {
  type: typeof CyclesTypes.CLEAR_AND_ADD_TO_CYCLE;
  payload: Session;
}

interface ClearCycleAction {
  type: typeof CyclesTypes.CLEAR_CYCLE;
}

interface SetCurrentTimeAction {
  type: typeof CyclesTypes.SET_CURRENT_TIME;
  payload: {
    time: number;
  };
}

interface SetDefaultCycleAction {
  type: typeof CyclesTypes.SET_DEFAULT_CYCLE;
  payload: Session;
}

interface SetCurrentTypeAction {
  type: typeof CyclesTypes.SET_CURRENT_TYPE;
  payload: {
    type: SessionTypes;
  };
}

interface ToggleTimerRunningAction {
  type: typeof CyclesTypes.TOGGLE_TIMER_RUNNING;
  payload: {
    isRunning: boolean;
  };
}

interface SetCyclePositionAction {
  type: typeof CyclesTypes.SET_CYCLE_POSITION;
  payload: {
    position: number;
  };
}

interface SetSessionInProgressAction {
  type: typeof CyclesTypes.SET_SESSION_IN_PROGRESS;
  payload: {
    isInProgress: boolean;
  };
}

interface SetSessionPositionAction {
  type: typeof CyclesTypes.SET_SESSION_POSITION;
  payload: {
    position: number;
  };
}

interface SetNextSessionPositionAction {
  type: typeof CyclesTypes.SET_NEXT_SESSION_POSITION;
  payload: {
    position: number;
  };
}

interface SetNextTimeAction {
  type: typeof CyclesTypes.SET_NEXT_TIME;
  payload: {
    nextTime: number;
  };
}

export type CycleActionTypes =
  | AddToCycleAction
  | ClearAndAddToCycleAction
  | ClearCycleAction
  | SetCurrentTimeAction
  | SetDefaultCycleAction
  | SetCurrentTypeAction
  | ToggleTimerRunningAction
  | SetCyclePositionAction
  | SetSessionInProgressAction
  | SetSessionPositionAction
  | SetNextSessionPositionAction
  | SetNextTimeAction;
