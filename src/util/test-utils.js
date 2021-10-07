import React from 'react';
import {Router} from 'react-router-dom';
import {render, act} from '@testing-library/react';

import {createMemoryHistory} from 'history';
import {StoreProvider} from '../store';

// Patterns found on https://testing-library.com/docs/react-testing-library/setup
const history = createMemoryHistory();
const AllProviders = ({children}) => (
  <StoreProvider>
    <Router history={history}>
      {children}
    </Router>
  </StoreProvider>
);

const renderAll = (ui, options) => ({
  ...render(ui, {wrapper: AllProviders, ...options}),
  history,
});

// https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
// having an async function called without await in useEffect causes
// Jest to throw warnings in the console.
// `act` fixes this.
const asyncRenderAll = async (ui, options) => {
  let utils;
  await act(async () => {
    utils = {
      ...render(ui, {wrapper: AllProviders, ...options}),
      history,
    };
  });
  return utils;
};

// re-export everything
export * from '@testing-library/react';
export {renderAll, asyncRenderAll};
