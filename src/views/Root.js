import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes/index';
import TimerPage from './TimerPage';
import CycleModal from './CycleModal';
import SettingsPage from './SettingsPage';
import HistoryPage from './HistoryPage';
import ProjectsPage from './ProjectsPage';

const Root = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.timer} component={TimerPage} />
        <Route path={routes.settings} component={SettingsPage} />
        <Route path={routes.history} component={HistoryPage} />
        <Route path={routes.projects} component={ProjectsPage} />
      </Switch>
      {false && <CycleModal />}
    </BrowserRouter>
  </>
);

export default Root;
