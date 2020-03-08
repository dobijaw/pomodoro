const initialState = {
  projects: [],
  colorTheme: 'dark',
  defaultSessionTime: '00:25:00',
  defaultBreakTime: '00:05:00',
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
    case 'CHANGE_THEME':
      return {
        ...state,
        colorTheme: payload,
      };
    case 'CHANGE_DEFAULT_CYCLE':
      return {
        ...state,
        [payload.type]: payload.time,
      };
    default:
      return state;
  }
};

export default rootReducer;
