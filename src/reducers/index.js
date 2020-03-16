const initialState = {
  projects: [],
  colorTheme: 'dark',
  defaultSessionTime: '00:25:00',
  defaultBreakTime: '00:05:00',
  creatingCycle: [
    {
      session: '00:02:00',
      break: '00:05:00',
    },
    {
      session: '00:40:00',
      break: '00:105:00',
    },
    {
      session: '00:20:00',
      break: '00:10:00',
    },
    {
      session: '00:25:00',
      break: '00:10:00',
    },
  ],
  modalSettigs: 'same',
  counter: 0,
  isModalOpen: false,
  isGoing: false,
};

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
    case 'CHANGE_MODAL_SETTINGS': {
      return {
        ...state,
        modalSettigs: payload,
      };
    }
    case 'UPDATE_COUNT':
      return {
        ...state,
        counter: payload,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: payload,
      };
    case 'CHANGE_TIMER_STATUS':
      return {
        ...state,
        isGoing: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
