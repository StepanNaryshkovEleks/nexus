import React, {FC} from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

export interface ISignIn {

}
export const SignIn: FC<ISignIn> = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode}
        {' '}
        mode
      </Box>
      Sign In


      <Link to="/dashboard">
        dashboard
      </Link>
    </>
  );
};

export default SignIn;
