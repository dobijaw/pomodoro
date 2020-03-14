import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes/index';
import MainTemplate from 'templates/MainTemplate';
import TimerPage from 'views/TimerPage';
import CycleModal from 'views/CycleModal';
import SettingsPage from 'views/SettingsPage';
import HistoryPage from 'views/HistoryPage';
import ProjectsPage from 'views/ProjectsPage';

const Root = () => {
  // eslint-disable-next-line
  const [isModalVisible, setModalVisible] = useState(false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(counter);
      setCounter(counter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter, setCounter]);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <BrowserRouter>
      <MainTemplate>
        <>
          <Switch>
            <Route exact path={routes.timer} component={TimerPage} />
            <Route path={routes.settings} component={SettingsPage} />
            <Route path={routes.history} component={HistoryPage} />
            <Route path={routes.projects} component={ProjectsPage} />
          </Switch>
          {isModalVisible && <CycleModal handleCloseModal={handleCloseModal} />}
        </>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
