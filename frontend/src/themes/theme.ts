import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";
import * as Colors from "@mui/material/colors";

export const appTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    success: {
      main: '#000000',
    },
    warning: {
      main: Colors.yellow[700],
    },
    info: {
      main: '#6b2bcc',
    },
    error: {
      main: '#69cc2b',
    },
  },
  spacing: 1,
});


export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
  },
};
export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};
const lightColorScheme = {
  palette: {
    mode: 'light',
    primary: {
      default: '#3990FF',
      dark: '#02367D',
    },
    text: {
      default: '#111111',
    },
    // ... other colors
  },
};
const darkColorScheme = {
  palette: {
    mode: 'dark',
    primary: {
      default: '#265D97',
      dark: '#132F4C',
      main: '#5090D3',
    },
    text: {
      default: '#ffffff',
    },
    // ... other colors
  },
};


