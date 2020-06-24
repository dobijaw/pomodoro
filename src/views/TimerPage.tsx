import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import TimerPanel from 'components/organisms/TimerPanel/TimerPanel';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import ProjectsDropDown from 'components/molecules/ProjectsDropDown/ProjectsDropDown';

function TimerView() {
  return (
    <PageTemplate>
      <PageTitle screenreaderOnly>Timer</PageTitle>
      <TimerPanel />
      <ProjectsDropDown />
    </PageTemplate>
  );
}

export default TimerView;
