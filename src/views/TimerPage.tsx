import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import TimerPanel from 'components/organisms/TimerPanel/TimerPanel';
import PageTitle from 'components/atoms/PageTitle/PageTitle';

function TimerView() {
  return (
    <PageTemplate>
      <PageTitle screenreaderOnly>Timer</PageTitle>
      <TimerPanel />
    </PageTemplate>
  );
}

export default TimerView;
