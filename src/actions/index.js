export const addProject = project => ({
  type: 'ADD_PROJECT',
  payload: project,
});

export const removeProject = title => ({
  type: 'REMOVE_PROJECT',
  payload: title,
});

export const changeTheme = color => ({
  type: 'CHANGE_THEME',
  payload: color,
});

export const changeDefaultCycle = (type, time) => ({
  type: 'CHANGE_DEFAULT_CYCLE',
  payload: { type, time },
});

export const changeModalSettings = modalSettings => ({
  type: 'CHANGE_MODAL_SETTINGS',
  payload: modalSettings,
});

export const updateCount = count => ({
  type: 'UPDATE_COUNT',
  payload: count,
});

export const toggleModal = isModalOpen => ({
  type: 'TOGGLE_MODAL',
  payload: isModalOpen,
});

export const changeTimerStatus = isGoing => ({
  type: 'CHANGE_TIMER_STATUS',
  payload: isGoing,
});
