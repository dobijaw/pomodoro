import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';

storiesOf('Title', module)
  .add('Visible Title', () => <Title>Title here</Title>)
  .add('Only screenreader', () => <Title onlyScreenreader>Title here</Title>);
