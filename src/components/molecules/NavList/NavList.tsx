import React from 'react';
import styled, { css } from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';

import { Routes } from 'routes';
import { clearCycle } from 'store/cycle/actions';
import { CyclesState } from 'store/cycle/types';

import Button from 'components/atoms/Button/Button';
import NavLinkItem from 'components/atoms/NavLinkItem/NavLinkItem';

const Wrapper = styled.div<{ isVisible?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  transform: translateX(100%);
  background: ${({ theme }) => theme.colors.background};
  overflow-y: scroll;
  transition: transform 0.35s;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0);
    `}

  @media (orientation: portrait) {
    justify-content: center;
  }

  @media (orientation: landscape) and (min-height: 500px) {
    justify-content: center;
  }

  @media (min-width: 1200px) {
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
    overflow-y: unset;
    transform: translateX(0);
    height: auto;
  }
`;

const InnerWrapper = styled.div`
  display: block;
  padding: 60px 0;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media (min-width: 1200px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: cetner;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
  transition: transform 0.35s ease-in-out;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const ListItem = styled.li`
  padding: 0;
  margin: 0 20px;

  @media (min-width: 1200px) {
    margin: 0 10px;
  }
`;

const StyledButton = styled(Button)`
  padding-left: 30px;
  padding-right: 30px;

  @media (min-width: 420px) and (min-height: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1200px) {
    min-width: auto;
    margin-left: 12px;
  }

  &:disabled {
    opacity: 0.2;
  }
`;

const StyleButtonMargin = styled(StyledButton)`
  margin-right: 20px;
  margin-left: 20px;

  &:disabled {
    opacity: 0.2;

    &:hover {
      background: none;
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;

interface State {
  cycle: CyclesState;
}

const mapState = ({ cycle }: State) => ({
  isRunning: cycle.isRunning,
  sessionPosition: cycle.sessionPosition,
});

const mapDispatch = {
  clearCycle: () => clearCycle(),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  asMobile?: boolean;
  isVisible?: boolean;
  onOpenModal: () => void;
  handleClick: () => void;
};

function NavList({
  isVisible,
  isRunning,
  sessionPosition,
  onOpenModal,
  handleClick,
  clearCycle,
}: Props) {
  return (
    <Wrapper isVisible={isVisible}>
      <InnerWrapper>
        <List>
          <ListItem>
            <NavLinkItem to={Routes.projects}>Projects</NavLinkItem>
          </ListItem>
          <ListItem>
            <NavLinkItem to={Routes.history}>Pomodoro history</NavLinkItem>
          </ListItem>
          <ListItem>
            <NavLinkItem to={Routes.settings}>Settings</NavLinkItem>
          </ListItem>
        </List>
        <Buttons>
          <StyleButtonMargin
            asDelete
            type="button"
            onClick={() => {
              handleClick();
              clearCycle();
            }}
            disabled={isRunning || sessionPosition === 1}
          >
            clear cycle
          </StyleButtonMargin>
          <StyledButton
            type="button"
            onClick={() => {
              handleClick();
              onOpenModal();
            }}
            disabled={isRunning || sessionPosition === 1}
          >
            create cycle
          </StyledButton>
        </Buttons>
      </InnerWrapper>
    </Wrapper>
  );
}

export default connector(NavList);
