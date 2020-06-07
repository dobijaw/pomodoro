import { countdownQueueItem } from 'models/countdownQueueItem.model';

export enum Timer {
  UPDATE_COUNTDOWN_QUEUE = 'UPDATE_COUNTDOWN_QUEUE',
}

export const updateCountdownQueue = (count: countdownQueueItem[]) => ({
  type: Timer.UPDATE_COUNTDOWN_QUEUE,
  payload: {
    count,
  },
});
