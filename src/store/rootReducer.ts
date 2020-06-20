import { combineReducers } from 'redux';
import { projectReducer } from './projects/reducers';
import { timerReducer } from './timer/reducers';
import reports from 'reducers/reports';

export const rootReducer = combineReducers({
  projects: projectReducer,
  timer: timerReducer,
  reports,
});

export type RootState = ReturnType<typeof rootReducer>;
