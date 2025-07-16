// src/pages/index.tsx
import React from 'react';
import MainLayout from '@components/layout/MainLayout';
import { Benefits, CallToAction, FAQ, Hero } from '@components/sections';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Benefits />
      <FAQ />
      <CallToAction />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default HomePage;
