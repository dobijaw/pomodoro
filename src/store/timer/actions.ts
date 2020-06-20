import { countdownQueueItem, TimerTypes } from './types';

export const addToCountdownQueue = (newCountdownItem: countdownQueueItem) => ({
  type: TimerTypes.ADD_TO_COUNTDOWN_QUEUE,
  payload: newCountdownItem,
});

export const clearCountdownQueue = () => ({
  type: TimerTypes.CLEAR_COUNTDOWN_QUEUE,
});
