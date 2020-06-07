import React from 'react';
import Button from 'components/atoms/Button/Button';
import styled, { css } from 'styled-components';

const List = styled.ul<{ asMobile?: boolean; isVisible?: boolean }>`
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

const handleClick = () => {
  'click';
};

type NavListProps = {
  asMobile?: boolean;
  isVisible?: boolean;
};

const NavList = ({ asMobile, isVisible }: NavListProps) => (
  <List asMobile={asMobile} isVisible={isVisible}>
    <Button onClick={handleClick}>create cycle</Button>
  </List>
);

export default NavList;
