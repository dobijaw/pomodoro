const initialState = {
  projects: [],
};

// action = {type, payload}

// eslint-disable-next-line
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, payload],
      };
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: [...state.projects.filter(item => item.title !== payload.title)],
      };
    default:
      return state;
  }
};

export default rootReducer;
