import React, { useMemo } from "react";
import Router from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import {useStore} from './store';
import createTheme from "../src/theme";

function App() {
  const {
    app: { isDarkMode },
  } = useStore();

  const theme = useMemo(
    () =>
      createTheme({
        isDarkMode,
      }),
    [isDarkMode]
  );

  // any logic to check if user is logged in
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
