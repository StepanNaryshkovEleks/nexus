import React from 'react';
import {render, screen} from '@testing-library/react';
import {ISignIn, SignIn} from './';
import {Router} from 'react-router-dom';
import history from '../../routes/history';

const buildComponent = (props: ISignIn) =>
  render(
      <Router history={history}>
        <SignIn {...props}/>
      </Router>,
  );

describe('SignIn page', () => {
  test('should render', () => {
    buildComponent({});
    expect(screen.getByText('Sign In')).toBeTruthy();
  });
});
