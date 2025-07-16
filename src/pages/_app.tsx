import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ASCON Thread</title>
        <meta
          name="description"
          content="Сайт по покупке и продаже приложения ASCON Thread – вспомогательного устройства для создания резьбы"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="ASCON Thread" />
        <meta
          property="og:description"
          content="ASCON Thread – устройство для создания резьбы. Продажа, покупка, поддержка."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://192.168.0.219:3000" />
        <meta property="og:image" content="http://192.168.0.219:3000/logo.png" />
      </Head>

      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default appWithTranslation(App);
