import React from 'react';
import { storiesOf } from '@storybook/react';
import Timer from './Timer';

storiesOf('Timer', module)
  .add('Next Timer', () => <Timer>05:00</Timer>)
  .add('Now Timer', () => <Timer active>05:00</Timer>);
