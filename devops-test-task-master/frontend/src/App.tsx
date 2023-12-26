import React from 'react';
import WelcomePage from './components/WelcomePage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <WelcomePage />
    </ThemeProvider>
  );
};

export default App;
