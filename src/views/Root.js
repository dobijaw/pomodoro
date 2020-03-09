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

  const handleToggleModalVisible = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <>
            <Switch>
              <Route
                exact
                path={routes.timer}
                component={() => <TimerPage handleModalButtonClick={handleToggleModalVisible} />}
              />
              <Route
                path={routes.settings}
                component={() => <SettingsPage handleModalButtonClick={handleToggleModalVisible} />}
              />
              <Route
                path={routes.history}
                component={() => <HistoryPage handleModalButtonClick={handleToggleModalVisible} />}
              />
              <Route
                path={routes.projects}
                component={() => <ProjectsPage handleModalButtonClick={handleToggleModalVisible} />}
              />
            </Switch>
            {isModalVisible && <CycleModal handleCloseModal={handleCloseModal} />}
          </>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
