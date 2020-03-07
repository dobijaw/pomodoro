import React from 'react';
import PropTypes from 'prop-types';
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

const StyledRightSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNum = styled.span`
  margin-right: 40px;
`;

const SelectList = ({ projectsNum, selectedName, handleClickFn }) => (
  <StyledButton onClick={handleClickFn}>
    <StyledName>{selectedName}</StyledName>
    <StyledRightSide>
      {projectsNum && <StyledNum>{projectsNum}</StyledNum>}
      <StyledImgContainer>
        <StyledImg src={arrow} alt="arrow" />
      </StyledImgContainer>
    </StyledRightSide>
  </StyledButton>
);

SelectList.propTypes = {
  selectedName: PropTypes.string.isRequired,
  handleClickFn: PropTypes.func.isRequired,
};

export default SelectList;
