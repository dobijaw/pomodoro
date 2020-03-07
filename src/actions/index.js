export const addProject = project => ({
  type: 'ADD_PROJECT',
  payload: project,
});

export const removeProject = title => ({
  type: 'REMOVE_PROJECT',
  payload: title,
});
