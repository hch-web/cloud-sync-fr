import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

// COMPONENTS & UTILS
import theme from 'styles/mui/theme';
import GlobalLoader from 'containers/common/loaders/GlobalLoader';
import LayoutWrapper from 'containers/common/layout';

const Home = lazy(() => import('containers/home'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider preventDuplicate anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <Suspense fallback={<GlobalLoader />}>
          <LayoutWrapper>
            <Home />
          </LayoutWrapper>
        </Suspense>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
