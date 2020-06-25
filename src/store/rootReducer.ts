import { combineReducers } from 'redux';
import { projectReducer } from './projects/reducers';
import { cycleReducer } from './cycle/reducers';
import { settingsReducer } from './settings/reducers';
import { reportReducer } from './reports/reducers';

export const rootReducer = combineReducers({
  projects: projectReducer,
  cycle: cycleReducer,
  settings: settingsReducer,
  reports: reportReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
