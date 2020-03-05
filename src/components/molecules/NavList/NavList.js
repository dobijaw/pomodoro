import React from 'react';
import styled from 'styled-components';
import { routes } from 'routes/index';
import NavLinkItem, { activeClassName } from 'components/atoms/NavLinkItem/NavLinkItem';

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 80px 0 0;
  list-style: none;
`;

const Item = styled.li`
  padding: 0;
  margin: 0 20px;
`;

const NavList = () => (
  <List>
    <Item>
      <NavLinkItem activeClassName={activeClassName} to={routes.projects}>
        Projects
      </NavLinkItem>
    </Item>
    <Item>
      <NavLinkItem activeClassName={activeClassName} to={routes.history}>
        History
      </NavLinkItem>
    </Item>
    <Item>
      <NavLinkItem activeClassName={activeClassName} to={routes.settings}>
        Settings
      </NavLinkItem>
    </Item>
  </List>
);

export default NavList;
