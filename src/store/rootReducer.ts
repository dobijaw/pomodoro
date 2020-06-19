import { combineReducers } from 'redux';
import { projectReducer } from './projects/reducers';
import reports from 'reducers/reports';
import timer from 'reducers/timer';

export const rootReducer = combineReducers({
  projects: projectReducer,
  reports,
  timer,
});

export type RootState = ReturnType<typeof rootReducer>;
