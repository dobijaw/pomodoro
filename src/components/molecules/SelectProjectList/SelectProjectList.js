import React from 'react';
import styled from 'styled-components';
import SelectListItem from 'components/atoms/SelectListItem/SelectListItem';
import AddProject from 'components/molecules/AddProject/AddProject';
import { connect } from 'react-redux';

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

const SelectProjectList = ({ classProps, closeListFn, projects }) => {
  return (
    <StyledList className={classProps}>
      {projects.map(item => (
        <StyledItem key={item.title + Math.random()}>
          <SelectListItem
            value={item.title.toLowerCase()}
            project={item.title}
            closeListFn={closeListFn}
          />
        </StyledItem>
      ))}
      <AddProject />
    </StyledList>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(SelectProjectList);
