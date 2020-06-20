import { TimerState, TimerActionTypes } from './types';

const initialState: TimerState = {
  customCountdownQueue: [
    { type: 'SESSION', time: 45 * 60 },
    { type: 'BREAK', time: 9 * 60 },
    { type: 'SESSION', time: 40 * 60 },
    { type: 'BREAK', time: 8 * 60 },
    { type: 'SESSION', time: 35 * 60 },
    { type: 'BREAK', time: 7 * 60 },
    { type: 'SESSION', time: 30 * 60 },
    { type: 'BREAK', time: 6 * 60 },
  ],
  defaultCountdownQueue: [
    { type: 'SESSION', time: 25 * 60 },
    { type: 'BREAK', time: 5 * 60 },
  ],
};

export function timerReducer(state = initialState, action: TimerActionTypes) {
  switch (action.type) {
    default:
      return state;
  }
}
