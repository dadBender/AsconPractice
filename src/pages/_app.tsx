import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import { AppProviders } from '@app/providers/AppProviders';
import MainLayout from '@app/layouts/MainLayout/MainLayout';
import { NextPage } from 'next';

// Добавляем типы для страниц с поддержкой layout
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Используем layout из страницы или fallback на MainLayout
  const getLayout =
    Component.getLayout ?? ((page: ReactElement) => <MainLayout>{page}</MainLayout>);

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
        <meta property="og:url" content="https://your-production-domain.com" />
        <meta property="og:image" content="/logo.png" />
      </Head>

      <AppProviders>{getLayout(<Component {...pageProps} />)}</AppProviders>
    </>
  );
}

export default appWithTranslation(App);
