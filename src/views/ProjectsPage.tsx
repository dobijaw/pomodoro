import React from 'react';
import { useSelector } from 'react-redux';
import { ProjectsState } from 'store/projects/types';
import PageTemplate from 'templates/PageTemplate';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import AddProject from 'components/molecules/AddProject/AddProject';
import ProjectList from 'components/molecules/ProjectList/ProjectList';

interface RootState {
  projects: ProjectsState;
}

function ProjectsPage() {
  const projects = useSelector(({ projects }: RootState) => projects);

  return (
    <PageTemplate isSubPage>
      <PageTitle>Projects</PageTitle>
      <AddProject />
      <ProjectList projects={projects} />
    </PageTemplate>
  );
}

export default ProjectsPage;
