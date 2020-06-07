const initialState = [
  {
    id: '12',
    name: 'Pomodoro',
  },
  {
    id: '13',
    name: 'Pomodoro 2',
  },
];

function projects(
  state = initialState,
  action: { type: string; payload: Object }
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default projects;
