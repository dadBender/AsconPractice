import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
