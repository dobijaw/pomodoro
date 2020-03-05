import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Logo from './Logo';

storiesOf('Logo', module)
  .addDecorator(StoryRouter())
  .add('Logo', () => <Logo />);
