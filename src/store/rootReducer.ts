import { combineReducers } from 'redux';
import { projectReducer } from './projects/reducers';
import { cycleReducer } from './cycle/reducers';
import { settingsReducer } from './settings/reducers';
import reports from 'reducers/reports';

export const rootReducer = combineReducers({
  projects: projectReducer,
  cycle: cycleReducer,
  settings: settingsReducer,
  reports,
});

export type RootState = ReturnType<typeof rootReducer>;
