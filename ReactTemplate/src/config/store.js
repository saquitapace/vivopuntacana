import reducers from '../reducers';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const config = () => {
  const store = configureStore({
    reducer: reducers,
    devTools: composeWithDevTools(),
  });

  return store;
};

export default config;
