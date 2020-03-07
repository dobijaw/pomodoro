import React from 'react';
import styled from 'styled-components';
import SelectListItem from 'components/atoms/SelectListItem/SelectListItem';

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.colors.background};
  list-style: none;
`;

const StyledItem = styled.li`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.details};
  }
`;

const SelectProjectList = ({ classProps, closeListFn }) => (
  <StyledList className={classProps}>
    <StyledItem>
      <SelectListItem value="avatar" project="Avatar" closeListFn={closeListFn} />
    </StyledItem>
    <StyledItem>
      <SelectListItem value="hello" project="Helllo" closeListFn={closeListFn} />
    </StyledItem>
    <StyledItem>
      <SelectListItem value="ziomeczku" project="Zioemckzu" closeListFn={closeListFn} />
    </StyledItem>
  </StyledList>
);

export default SelectProjectList;
