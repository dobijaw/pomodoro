export interface Project {
  id: string;
  name: string;
  sessionCount: number;
}

export type ProjectsState = Project[];

export enum ProjectsTypes {
  ADD_PROJECT = 'ADD_PROJECT',
  REMOVE_PROJECT = 'REMOVE_PROJECT',
  UPDATE_PROJECT = 'UPDATE_PROJECT',
}

export interface AddProjectAction {
  type: typeof ProjectsTypes.ADD_PROJECT;
  payload: Project;
}

export interface RemoveProjectAction {
  type: typeof ProjectsTypes.REMOVE_PROJECT;
  payload: {
    id: string;
  };
}

export interface UpdateProjectAction {
  type: typeof ProjectsTypes.UPDATE_PROJECT;
  payload: Project;
}

export type ProjectsActionTypes =
  | AddProjectAction
  | RemoveProjectAction
  | UpdateProjectAction;
