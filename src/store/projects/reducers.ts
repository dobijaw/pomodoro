import { ProjectsState, ProjectsActionTypes, ProjectsTypes } from './types';

const initialState: ProjectsState = {
  projectsList: [],
  projectSelected: {
    id: 'NOPROJECT',
    name: 'NO PROJECT SELECTED',
    sessionCount: 0,
  },
};

export function projectReducer(
  state = initialState,
  action: ProjectsActionTypes
): ProjectsState {
  switch (action.type) {
    case ProjectsTypes.ADD_PROJECT:
      return {
        ...state,
        projectsList: [...state.projectsList, action.payload],
      };
    case ProjectsTypes.REMOVE_PROJECT:
      return {
        ...state,
        projectsList: [
          ...state.projectsList.filter((p) => p.id !== action.payload.id),
        ],
      };
    case ProjectsTypes.UPDATE_PROJECT:
      return {
        ...state,
        projectsList: [
          ...state.projectsList.map((p) =>
            p.id === action.payload.id ? action.payload : p
          ),
        ],
      };
    default:
      return state;
  }
}
