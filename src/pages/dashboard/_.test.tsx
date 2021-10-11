import React from 'react';
import {render, screen} from '@testing-library/react';
import {IDashboard, Dashboard} from './';
import {Router} from 'react-router-dom';
import history from '../../routes/history';

const buildComponent = (props: IDashboard) =>
  render(
      <Router history={history}>
        <Dashboard {...props}/>
      </Router>,
  );

describe('Dashboard page', () => {
  test('should render', () => {
    buildComponent({});
    expect(screen.getByText('Dashboard')).toBeTruthy();
  });
});
