import React from 'react';
import styled from 'styled-components';
import arrow from 'assets/arrow.svg';

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 0 20px;
  border: 0;
  margin: 0;
  background: none;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.importantText};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-transform: uppercase;
  letter-spacing: 0.12em;

  &:focus {
    outline: 0;
  }
`;

const StyledName = styled.span`
  display: block;
`;

const StyledImgContainer = styled.div`
  display: block;
  width: 12px;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
`;

const SelectList = ({ selectedName, handleClickFn }) => (
  <StyledButton onClick={handleClickFn}>
    <StyledName>{selectedName}</StyledName>
    <StyledImgContainer>
      <StyledImg src={arrow} alt="arrow" />
    </StyledImgContainer>
  </StyledButton>
);

export default SelectList;
