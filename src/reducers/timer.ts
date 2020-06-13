import { CLEAR_COUNTDOWN_QUEUE } from 'actions/timer';
import { countdownQueueItem } from 'models/countdownQueueItem.model';

const initialState: {
  countdownQueue: countdownQueueItem[];
  defaultCountdownQueue: countdownQueueItem[];
} = {
  countdownQueue: [
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

function timer(
  state = initialState,
  action: { type: string; payload: Object }
) {
  switch (action.type) {
    case CLEAR_COUNTDOWN_QUEUE:
      return { ...state, countdownQueue: [] };
    default:
      return state;
  }
}

export default timer;
