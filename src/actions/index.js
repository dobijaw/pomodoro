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
