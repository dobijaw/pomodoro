import { createContext } from 'react';
import { Session } from 'store/cycle/types';

interface AppContextProps {
  handleOpenModal: () => void;
  onStartCountdow: () => void;
  onPauseCountdown: () => void;
  onStopCountdown: () => void;
  session?: Session;
  nextSession?: Session;
}

export const AppContext = createContext({} as AppContextProps);
