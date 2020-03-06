import React from 'react';
import styled from 'styled-components';
import SelectListButton from 'components/atoms/SelectListButton/SelectListButton';
import Label from 'components/atoms/Label/Label';

const StyledWrapper = styled.div`
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.details};
`;

const StyledLabel = styled(Label)`
  padding: 0;
  margin: 0;
`;

const SelectProject = ({ selectedName, handleClickFn }) => (
  <StyledWrapper>
    <StyledLabel>Select project</StyledLabel>
    <SelectListButton selectedName={selectedName} handleClickFn={handleClickFn} />
  </StyledWrapper>
);

export default SelectProject;
