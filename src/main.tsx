import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, pink } from '@mui/material/colors';

import { PageRouteProvider } from './router/provider';

import './index.css';

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: pink,
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <PageRouteProvider />
    </ThemeProvider>
  </StrictMode>,
);
