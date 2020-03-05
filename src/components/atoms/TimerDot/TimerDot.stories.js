import React from 'react';
import { storiesOf } from '@storybook/react';
import TimerDot from './TimerDot';

storiesOf('TimerDot', module)
  .add('Timer Dot Disabled', () => <TimerDot />)
  .add('Timer Dot Active', () => <TimerDot fillDot />);
