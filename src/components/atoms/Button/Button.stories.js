import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Border Button', () => <Button>Hello</Button>)
  .add('Fill Button', () => <Button fillButton>Hello</Button>);
