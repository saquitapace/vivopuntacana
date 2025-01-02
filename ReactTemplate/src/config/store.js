import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '@/src/reducers/index';
const config = () => {
  const store = configureStore({
    reducer: reducers,
    devTools: composeWithDevTools(),
  });
  return { store };
};

export default config;
