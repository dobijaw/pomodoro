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

export type CycleActionTypes =
  | AddToCycleAction
  | ClearAndAddToCycleAction
  | ClearCycleAction
  | SetCurrentTimeAction
  | SetCurrentTypeAction
  | ToggleTimerRunningAction
  | SetCyclePositionAction
  | SetSessionInProgressAction;
