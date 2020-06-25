import {
  CyclesState,
  CycleActionTypes,
  CyclesTypes,
  SessionEnum,
} from './types';

const initialState: CyclesState = {
  sessionPosition: 0,
  cyclePosition: 0,
  isRunning: false,
  isSessionInProgress: false,
  currentTime: 0,
  nextTime: 0,
  currentType: SessionEnum.ACTION,
  nextType: SessionEnum.REST,
  customCycle: [
    [
      { type: SessionEnum.ACTION, time: 40 * 60 * 1000 },
      { type: SessionEnum.REST, time: 8 * 60 * 1000 },
    ],
    [
      { type: SessionEnum.ACTION, time: 35 * 60 * 1000 },
      { type: SessionEnum.REST, time: 7 * 60 * 1000 },
    ],
    [
      { type: SessionEnum.ACTION, time: 30 * 60 * 1000 },
      { type: SessionEnum.REST, time: 6 * 60 * 1000 },
    ],
  ],
  defaultCycle: [
    [
      { type: SessionEnum.ACTION, time: 25 * 60 * 1000 },
      { type: SessionEnum.REST, time: 5 * 60 * 1000 },
    ],
  ],
};

export function cycleReducer(state = initialState, action: CycleActionTypes) {
  switch (action.type) {
    case CyclesTypes.ADD_TO_CYCLE:
      return {
        ...state,
        customCycle: [...state.customCycle, ...action.payload],
      };
    case CyclesTypes.CLEAR_AND_ADD_TO_CYCLE:
      return {
        ...state,
        customCycle: [...action.payload],
      };
    case CyclesTypes.CLEAR_CYCLE:
      return {
        ...state,
        customCycle: [],
      };
    case CyclesTypes.SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload.time,
      };
    case CyclesTypes.SET_DEFAULT_CYCLE:
      return {
        ...state,
        defaultCycle: [...action.payload],
      };
    case CyclesTypes.SET_CURRENT_TYPE:
      return {
        ...state,
        currentType: action.payload.type,
      };
    case CyclesTypes.TOGGLE_TIMER_RUNNING:
      return {
        ...state,
        isRunning: action.payload.isRunning,
      };
    case CyclesTypes.SET_CYCLE_POSITION:
      return {
        ...state,
        cyclePosition: action.payload.position,
      };
    case CyclesTypes.SET_SESSION_IN_PROGRESS:
      return {
        ...state,
        isSessionInProgress: action.payload.isInProgress,
      };
    default:
      return state;
  }
}
