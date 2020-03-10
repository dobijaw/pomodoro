import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  z-index: 1000;
  padding: 10px 0;
  border: 0;
  margin: 0;
  background: none;
  transition: all 0.25s;

  ${({ isActive }) =>
    isActive &&
    css`
      > span {
        &:first-child {
          transform: translateY(1px) rotate(45deg);
        }

        &:last-child {
          transform: translateY(-1px) rotate(-45deg);
        }
      }
    `}
`;

const StyledItem = styled.span`
  display: block;
  background: ${({ theme }) => theme.colors.buttons};
  width: 30px;
  height: 2px;
  transition: all 0.25s;

  &:first-child {
    transform: translateY(-3px) rotate(0deg);
  }

  &:last-child {
    transform: translateY(3px) rotate(0deg);
  }
`;

const Burger = ({ isActive, handleOnClick }) => (
  <StyledButton type="button" isActive={isActive} onClick={handleOnClick}>
    <StyledItem />
    <StyledItem />
  </StyledButton>
);

export default Burger;
