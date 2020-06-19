import { ProjectsState, ProjectsActionTypes, ProjectsTypes } from './types';

const initialState: ProjectsState = [
  {
    id: 1,
    name: 'string',
    sessionCount: 2,
  },
  {
    id: 2,
    name: 'string',
    sessionCount: 12,
  },
  {
    id: 3,
    name: 'string',
    sessionCount: 123,
  },
];

export function projectReducer(
  state = initialState,
  action: ProjectsActionTypes
): ProjectsState {
  switch (action.type) {
    case ProjectsTypes.ADD_PROJECT:
      return [...state, action.payload];
    case ProjectsTypes.REMOVE_PROJECT:
      return [...state.filter((p) => p.id !== action.payload.id)];
    case ProjectsTypes.UPDATE_PROJECT:
      return [
        ...state.map((p) => (p.id === action.payload.id ? action.payload : p)),
      ];
    default:
      return state;
  }
}
