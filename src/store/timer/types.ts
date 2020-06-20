export interface countdownQueueItem {
  type: 'SESSION' | 'BREAK';
  time: number;
}

export interface TimerState {
  customCountdownQueue: countdownQueueItem[];
  defaultCountdownQueue: countdownQueueItem[];
}

export enum TimerTypes {
  ADD_TO_COUNTDOWN_QUEUE = 'ADD_TO_COUNTDOWN_QUEUE',
  CLEAR_COUNTDOWN_QUEUE = 'CLEAR_COUNTDOWN_QUEUE',
}

interface AddToCountdownQueue {
  type: typeof TimerTypes.ADD_TO_COUNTDOWN_QUEUE;
  payload: countdownQueueItem;
}

export type TimerActionTypes = AddToCountdownQueue;
