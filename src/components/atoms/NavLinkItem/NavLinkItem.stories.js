import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import NavLinkItem from './NavLinkItem';

storiesOf('NavLink Item', module)
  .addDecorator(StoryRouter())
  .add('Active Link', () => (
    <NavLinkItem activeClassName="active" to="/">
      Hello World
    </NavLinkItem>
  ));
