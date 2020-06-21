export enum SessionEnum {
  ACTION = 'ACTION',
  REST = 'REST',
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

export interface CyclesState {
  currentTime: number;
  currentType: SessionTypes;
  customCycle: Session[];
  defaultCycle: Session[];
}

export enum CyclesTypes {
  ADD_TO_CYCLE = 'ADD_TO_CYCLE',
  CLEAR_CYCLE = 'CLEAR_CYCLE',
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  SET_CURRENT_TYPE = 'SET_CURRENT_TYPE',
}

interface AddToCycleAction {
  type: typeof CyclesTypes.ADD_TO_CYCLE;
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

interface SetCurrentType {
  type: typeof CyclesTypes.SET_CURRENT_TYPE;
  payload: {
    type: SessionTypes;
  };
}

export type CycleActionTypes =
  | AddToCycleAction
  | ClearCycleAction
  | SetCurrentTimeAction
  | SetCurrentType;
