import React from 'react';
import styled from 'styled-components';
import Headline from 'components/atoms/Headline/Headline';
import AddProject from 'components/molecules/AddProject/AddProject';
import ProjectItem from 'components/organisms/ProjectItem/ProjectItem';
import { connect } from 'react-redux';

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledItemList = styled.li`
  margin-bottom: 14px;
  padding: 0;
`;

const ProjectsTemplate = ({ projects }) => {
  return (
    <div>
      <Headline>Your projects</Headline>
      <AddProject />
      <StyledList>
        {projects.map(item => (
          <StyledItemList key={item.title}>
            <ProjectItem name={item.title} sessionNum={item.sessions} />
          </StyledItemList>
        ))}
      </StyledList>
    </div>
  );
};

const mapStateToProps = state => {
  const { projects } = state;
  return { projects };
};

export default connect(mapStateToProps)(ProjectsTemplate);
