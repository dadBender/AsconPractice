import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from '@app/store';
import { theme } from '@app/config/theme';
import { EmotionCacheProvider } from '@app/providers/EmotionCacheProvider';

const queryClient = new QueryClient();

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <EmotionCacheProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </EmotionCacheProvider>
  );
};
