import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from 'routes/index';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Navbar from 'components/organisms/Navbar/Navbar';
import TimerPage from './TimerPage';
import CycleModal from './CycleModal';
import SettingsPage from './SettingsPage';
import HistoryPage from './HistoryPage';
import ProjectsPage from './ProjectsPage';

const Root = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path={routes.timer} component={TimerPage} />
          <Route path={routes.settings} component={SettingsPage} />
          <Route path={routes.history} component={HistoryPage} />
          <Route path={routes.projects} component={ProjectsPage} />
        </Switch>
        {true && <CycleModal />}
      </ThemeProvider>
    </BrowserRouter>
  </>
);

export default Root;
