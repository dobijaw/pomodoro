import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes/index';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import TimerPage from 'views/TimerPage';
import CycleModal from 'views/CycleModal';
import SettingsPage from 'views/SettingsPage';
import HistoryPage from 'views/HistoryPage';
import ProjectsPage from 'views/ProjectsPage';

const Root = () => {
  // eslint-disable-next-line
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <>
            <Switch>
              <Route exact path={routes.timer} component={TimerPage} />
              <Route path={routes.settings} component={SettingsPage} />
              <Route path={routes.history} component={HistoryPage} />
              <Route path={routes.projects} component={ProjectsPage} />
            </Switch>
            {isModalVisible && <CycleModal />}
          </>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
