import React from 'react';
import { useSelector } from 'react-redux';
import { CyclesState } from 'store/cycle/types';
import PageTemplate from 'templates/PageTemplate';
import TimerPanel from 'components/organisms/TimerPanel/TimerPanel';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import ProjectsDropDown from 'components/molecules/ProjectsDropDown/ProjectsDropDown';

interface State {
  cycle: CyclesState;
}

function TimerView() {
  const sessionPosition = useSelector(
    ({ cycle }: State) => cycle.sessionPosition
  );
  return (
    <PageTemplate>
      <PageTitle screenreaderOnly>Timer</PageTitle>
      <TimerPanel />
      {sessionPosition === 0 && <ProjectsDropDown />}
    </PageTemplate>
  );
}

export default TimerView;
