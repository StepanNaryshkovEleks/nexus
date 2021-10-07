import type {NextPage} from 'next';
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles';
import * as React from 'react';
import Box from '@mui/material/Box';

const Home: NextPage = () => {






                                              const theme = useTheme();


  return (
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
      {theme.palette.mode} mode
    </Box>
  );
};

export default Home;
