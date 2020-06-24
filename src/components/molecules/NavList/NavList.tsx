import React from 'react';
import styled, { css } from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';

import { Routes } from 'routes';
import { clearCycle } from 'store/cycle/actions';

import Button from 'components/atoms/Button/Button';
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

const StyledButton = styled(Button)`
  min-width: auto;
  padding-left: 30px;
  padding-right: 30px;
`;

const StyleButtonMargin = styled(StyledButton)`
  margin-right: 20px;
  margin-left: 20px;
`;

const mapDispatch = {
  clearCycle: () => clearCycle(),
};

const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  asMobile?: boolean;
  isVisible?: boolean;
  onOpenModal: () => void;
};

function NavList({ asMobile, isVisible, onOpenModal, clearCycle }: Props) {
  return (
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
      <StyleButtonMargin asDelete type="button" onClick={clearCycle}>
        clear cycle
      </StyleButtonMargin>
      <StyledButton type="button" onClick={onOpenModal}>
        create cycle
      </StyledButton>
    </List>
  );
}

export default connector(NavList);
