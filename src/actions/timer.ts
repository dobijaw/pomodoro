import { countdownQueueItem } from 'models/countdownQueueItem.model';

export const UPDATE_COUNTDOWN_QUEUE = 'UPDATE_COUNTDOWN_QUEUE';
export const CLEAR_COUNTDOWN_QUEUE = 'CLEAR_COUNTDOWN_QUEUE';

interface IUpdateCountdownQueue {
  count: countdownQueueItem[];
}

export const updateCountdownQueue = (count: IUpdateCountdownQueue) => ({
  type: UPDATE_COUNTDOWN_QUEUE,
  payload: {
    count,
  },
});

export const clearCountdownQueue = () => ({
  type: CLEAR_COUNTDOWN_QUEUE,
});
