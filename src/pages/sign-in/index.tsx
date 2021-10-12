import React, {FC} from 'react';
import {useTheme} from '@mui/material/styles';
import {Link} from 'react-router-dom';
import {Header} from './style';

export interface ISignIn {

}
export const SignIn: FC<ISignIn> = () => {
  const theme = useTheme();

  return (
    <>
      <Header mode={theme.palette.mode}>
        Logo
      </Header>
      Sign In


      <Link to="/dashboard">
        dashboard
      </Link>
    </>
  );
};

export default SignIn;
