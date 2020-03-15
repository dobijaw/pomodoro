import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes/index';
import MainTemplate from 'templates/MainTemplate';
import TimerPage from 'views/TimerPage';
import CycleModal from 'views/CycleModal';
import SettingsPage from 'views/SettingsPage';
import HistoryPage from 'views/HistoryPage';
import ProjectsPage from 'views/ProjectsPage';
import { connect } from 'react-redux';
import { updateCount } from 'actions';

const Root = ({ updateCountInComponent, isModalOpen }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line
      console.log(counter);
      setCounter(counter + 1);
      updateCountInComponent(counter);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter, setCounter, updateCountInComponent]);

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
          {isModalOpen && <CycleModal />}
        </>
      </MainTemplate>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    defaultSessionTime: state.defaultSessionTime,
    isModalOpen: state.isModalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCountInComponent: count => dispatch(updateCount(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
