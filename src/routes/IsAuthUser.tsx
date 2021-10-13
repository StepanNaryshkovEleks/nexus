import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import CNST from '../constants/app';
import {useStore} from '../store';


interface Props {
  component: React.ComponentType<any>;
  exact?: boolean;
  path?: string;
}

const IsAuthUser = ({component: Component, ...rest}: Props) => {
  const {user} = useStore();
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={CNST.ROUTE.SIGN_IN} />
        )
      }
    />
  );
};

export default IsAuthUser;
