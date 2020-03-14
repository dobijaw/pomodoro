import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Root from 'views/Root';

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
