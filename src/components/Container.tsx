import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const ComponentContainer: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default ComponentContainer;
