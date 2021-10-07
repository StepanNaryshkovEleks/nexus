import '../src/styles/globals.css';
import type {AppProps} from 'next/app';
import {StoreProvider, useStore} from '../src/store';
import {ThemeProvider} from '@mui/material/styles';
import React, {useMemo} from "react";

import createTheme from '../src/theme';

interface ITheme {
  children: JSX.Element,
}

function Theme({children}: ITheme) {
  const {app: {isDarkMode}} = useStore();

  const theme = useMemo(() => createTheme({
    isDarkMode,
  }), [isDarkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function MyApp({Component, pageProps}: AppProps) {
  return <StoreProvider><Theme>
    <Component {...pageProps} />
  </Theme></StoreProvider>;
}

export default MyApp;
