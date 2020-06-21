import {
  CyclesState,
  CycleActionTypes,
  CyclesTypes,
  SessionEnum,
} from './types';

const initialState: CyclesState = {
  currentTime: 0,
  currentType: SessionEnum.ACTION,
  customCycle: [
    [
      { type: SessionEnum.ACTION, time: 45 * 60 * 1000 },
      { type: SessionEnum.REST, time: 9 * 60 * 1000 },
    ],
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
    case CyclesTypes.SET_CURRENT_TYPE:
      return {
        ...state,
        currentType: action.payload.type,
      };
    default:
      return state;
  }
}
