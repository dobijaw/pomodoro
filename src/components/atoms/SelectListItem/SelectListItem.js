import React from 'react';
import styled from 'styled-components';

const StyledBtnItem = styled.button`
  display: block;
  width: 100%;
  border: 0;
  padding: 20px 0;
  background: none;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.importantText};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-align: left;
`;

const SelectListItem = ({ value, project, closeListFn }) => (
  <StyledBtnItem data-name={value} onClick={closeListFn}>
    {project}
  </StyledBtnItem>
);

export default SelectListItem;
