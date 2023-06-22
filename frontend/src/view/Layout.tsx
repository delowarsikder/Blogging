import React from 'react'
import Navbar from './navbar/Navbar'
import { ThemeProvider } from '@mui/styles';
import { appTheme } from '../themes/theme';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import Footer from './navbar/Footer';
import { StyledEngineProvider } from '@mui/material/styles';

function Layout({ children }: any) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        <Box>
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Layout;
