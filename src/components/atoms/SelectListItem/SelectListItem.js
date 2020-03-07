import React from 'react';
import PropTypes from 'prop-types';
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

SelectListItem.propTypes = {
  value: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  closeListFn: PropTypes.func.isRequired,
};

export default SelectListItem;
