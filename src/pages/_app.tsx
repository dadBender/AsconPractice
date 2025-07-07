import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
