import React from 'react';
import styled, { css } from 'styled-components';

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  margin: 0;
  background: none;
  transform: rotate(0);
  transition: transform 0.25s ease-in-out;
  cursor: pointer;
`;

const BurgerBody = styled.span<{ isActive: boolean }>`
  display: block;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: transform 0.25s ease-in-out;
  }

  &::before {
    transform: translateY(-3px) rotate(0);
  }

  &::after {
    transform: translateY(3px) rotate(0);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(135deg);

      &::before {
        transform: translateY(1px) rotate(90deg);
      }

      &::after {
        transform: translateY(-1px) rotate(0);
      }
    `}
`;

type BurgerProps = {
  handleClick: Function;
  isVisible: boolean;
};

function Burger({ handleClick, isVisible }: BurgerProps) {
  return (
    <BurgerButton
      type="button"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
        handleClick(!isVisible)
      }
    >
      <BurgerBody isActive={isVisible} />
    </BurgerButton>
  );
}

export default Burger;
