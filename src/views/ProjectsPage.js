import React from 'react';
import Title from 'components/atoms/Title/Title';
import UserTemplate from 'templates/UserTemplate';
import ProjectsTemplate from 'templates/ProjectsTemplate';

const ProjectsPage = () => (
  <UserTemplate>
    <Title onlyScreenreader>Projects</Title>
    <ProjectsTemplate />
  </UserTemplate>
);

export default ProjectsPage;
