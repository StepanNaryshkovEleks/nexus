import { createTheme } from "@mui/material/styles";

interface ISetTheme {
  isDarkMode: boolean;
}

function setTheme({ isDarkMode }: ISetTheme) {
  return createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
    },
  });
}

export default setTheme;
