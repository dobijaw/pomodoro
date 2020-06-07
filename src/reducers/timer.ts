// import { Timer } from 'actions/timer';
import { countdownQueueItem } from 'models/countdownQueueItem.model';

const initialState: {
  countdownQueue: countdownQueueItem[];
  defaultCountdownQueue: countdownQueueItem[];
} = {
  countdownQueue: [
    { type: 'SESSION', time: 25 * 60 },
    { type: 'BREAK', time: 5 * 60 },
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
    default:
      return state;
  }
}

export default timer;
