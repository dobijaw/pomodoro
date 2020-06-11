import React from 'react';
import { Routes } from 'routes';
import Button from 'components/atoms/Button/Button';
import styled, { css } from 'styled-components';
import NavLinkItem from 'components/atoms/NavLinkItem/NavLinkItem';

const List = styled.ul<{ asMobile?: boolean; isVisible?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
  transition: transform 0.35s ease-in-out;

  ${({ asMobile }) =>
    asMobile &&
    css`
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      transform: translateX(100%);
      background: red;
      transition: transform 0.35s ease-in-out;
    `}

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0);
    `}
`;

const ListItem = styled.li`
  padding: 0;
  margin: 0 20px;
`;

type NavListProps = {
  asMobile?: boolean;
  isVisible?: boolean;
  onOpenModal: () => void;
};

const NavList = ({ asMobile, isVisible, onOpenModal }: NavListProps) => (
  <List asMobile={asMobile} isVisible={isVisible}>
    <ListItem>
      <NavLinkItem to={Routes.projects}>Projects</NavLinkItem>
    </ListItem>
    <ListItem>
      <NavLinkItem to={Routes.history}>Pomodoro history</NavLinkItem>
    </ListItem>
    <ListItem>
      <NavLinkItem to={Routes.settings}>Settings</NavLinkItem>
    </ListItem>
    <Button onClick={onOpenModal}>create cycle</Button>
  </List>
);

export default NavList;
