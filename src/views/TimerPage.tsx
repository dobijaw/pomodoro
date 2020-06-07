import React from 'react';
import TimerTemplate from 'templates/TimerTemplate';
import TimerPanel from 'components/organisms/TimerPanel/TimerPanel';

function TimerView() {
  return (
    <TimerTemplate title="Pomodoro timer">
      <TimerPanel />
    </TimerTemplate>
  );
}

export default TimerView;
