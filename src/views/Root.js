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

const Root = ({ updateCountInComponent, isModalOpen, creatingCycle, isGoing }) => {
  const [cycle] = useState(creatingCycle);
  const [timer, setTimer] = useState(cycle[0].session);

  const countdown = curTime => {
    if (!isGoing) return;
    const interval = setInterval(() => {
      let [hours, minutes, seconds] = curTime.split(':');

      if (hours === '00' && minutes === '00' && seconds === '00') {
        updateCountInComponent(timer);
      } else if (hours !== '00' && minutes === '00' && seconds === '00') {
        hours -= 1;
        seconds = 59;
        minutes = 59;

        hours = hours < 10 ? `0${hours}` : hours;

        setTimer(`${hours}:${minutes}:${seconds}`);
        updateCountInComponent(timer);
      } else if (seconds === '00') {
        seconds = 59;
        minutes -= 1;
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        setTimer(`${hours}:${minutes}:${seconds}`);
        updateCountInComponent(timer);
      } else {
        seconds -= 1;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        setTimer(`${hours}:${minutes}:${seconds}`);
        updateCountInComponent(timer);
      }
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const interval = countdown(timer);

    return interval;
  });

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
    creatingCycle: state.creatingCycle,
    isGoing: state.isGoing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCountInComponent: count => dispatch(updateCount(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
