import { Project, ProjectsActionTypes, ProjectsTypes } from './types';

export const addProject = (newProject: Project): ProjectsActionTypes => ({
  type: ProjectsTypes.ADD_PROJECT,
  payload: newProject,
});

export const removeProject = (projectId: number): ProjectsActionTypes => ({
  type: ProjectsTypes.REMOVE_PROJECT,
  payload: {
    id: projectId,
  },
});

export const updateProject = (
  newProjectData: Project
): ProjectsActionTypes => ({
  type: ProjectsTypes.UPDATE_PROJECT,
  payload: newProjectData,
});
