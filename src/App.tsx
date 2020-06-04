import React, { FC } from 'react';
import Root from './views/Root';
import { Provider } from 'react-redux';
import store from 'store';

const App: FC = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
