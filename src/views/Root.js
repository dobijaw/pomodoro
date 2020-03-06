import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes/index';

import MainTemplate from 'templates/MainTemplate';
import TimerPage from 'views/TimerPage';
import CycleModal from 'views/CycleModal';
import SettingsPage from 'views/SettingsPage';
import HistoryPage from 'views/HistoryPage';
import ProjectsPage from 'views/ProjectsPage';

const Root = () => (
  <>
    <BrowserRouter>
      <MainTemplate>
        <>
          <Switch>
            <Route exact path={routes.timer} component={TimerPage} />
            <Route path={routes.settings} component={SettingsPage} />
            <Route path={routes.history} component={HistoryPage} />
            <Route path={routes.projects} component={ProjectsPage} />
          </Switch>
          {true && <CycleModal />}
        </>
      </MainTemplate>
    </BrowserRouter>
  </>
);

export default Root;
