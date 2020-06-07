import { createContext } from 'react';
import { countdownQueueItem } from 'models/countdownQueueItem.model';

interface AppContextProps {
  onStartCountdow: () => void;
  onPauseCountdown: () => void;
  onStopCountdown: () => void;
  count: countdownQueueItem;
  nextCount: countdownQueueItem;
}

export const AppContext = createContext({} as AppContextProps);
