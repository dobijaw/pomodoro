const initialState = {
  note: [
    {
      title: 'Hello',
      lang: 'en',
    },
    {
      title: 'Hola',
      lang: 'es',
    },
    {
      title: 'Cześć',
      lang: 'pl',
    },
  ],
};

// eslint-disable-next-line
const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
