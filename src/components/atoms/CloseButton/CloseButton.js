import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  width: auto;
  height: 30px;
  border: 0;
  background: none;
`;

const ButtonItem = styled.span`
  display: block;
  width: 15px;
  height: 2px;
  background: ${({ theme }) => theme.colors.buttons};

  &:first-child {
    transform: translateY(1px) rotate(45deg);
  }

  &:last-child {
    transform: translateY(-1px) rotate(-45deg);
  }
`;

const CloseButton = ({ handleClick, ...props }) => (
  <Button type="button" onClick={handleClick} className={props.parentElementClass}>
    <ButtonItem />
    <ButtonItem />
  </Button>
);

export default CloseButton;
